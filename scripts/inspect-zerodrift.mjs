import { spawn } from "node:child_process";
import { mkdir, rm, writeFile } from "node:fs/promises";
import { join, resolve } from "node:path";

const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const root = resolve(".");
const outRoot = join(root, "docs", "research", "zerodrift.ai");
const refRoot = join(root, "docs", "design-references", "zerodrift.ai");
const profileDir = join(root, ".tmp", `chrome-zerodrift-${Date.now()}`);
const targetUrl = "https://www.zerodrift.ai";

await mkdir(outRoot, { recursive: true });
await mkdir(refRoot, { recursive: true });
await mkdir(profileDir, { recursive: true });

const port = 9222 + Math.floor(Math.random() * 500);
const chrome = spawn(chromePath, [
  "--headless=new",
  "--disable-gpu",
  "--no-sandbox",
  "--hide-scrollbars",
  `--remote-debugging-port=${port}`,
  `--user-data-dir=${profileDir}`,
  "about:blank",
], {
  stdio: ["ignore", "pipe", "pipe"],
});

let closed = false;
chrome.on("exit", () => {
  closed = true;
});

const sleep = (ms) => new Promise((resolveSleep) => setTimeout(resolveSleep, ms));

async function getJson(path) {
  for (let i = 0; i < 50; i += 1) {
    try {
      const response = await fetch(`http://127.0.0.1:${port}${path}`);
      if (response.ok) return response.json();
    } catch {
      await sleep(150);
    }
  }
  throw new Error(`Chrome CDP endpoint did not become available: ${path}`);
}

function createCdpClient(wsUrl) {
  const ws = new WebSocket(wsUrl);
  let id = 0;
  const pending = new Map();
  const events = new Map();

  ws.addEventListener("message", (event) => {
    const message = JSON.parse(event.data);
    if (message.id && pending.has(message.id)) {
      const { resolve: resolvePending, reject } = pending.get(message.id);
      pending.delete(message.id);
      if (message.error) reject(new Error(message.error.message));
      else resolvePending(message.result ?? {});
      return;
    }
    if (message.method && events.has(message.method)) {
      for (const listener of events.get(message.method)) listener(message.params ?? {});
    }
  });

  return {
    async open() {
      if (ws.readyState === WebSocket.OPEN) return;
      await new Promise((resolveOpen, rejectOpen) => {
        ws.addEventListener("open", resolveOpen, { once: true });
        ws.addEventListener("error", rejectOpen, { once: true });
      });
    },
    send(method, params = {}) {
      id += 1;
      ws.send(JSON.stringify({ id, method, params }));
      return new Promise((resolveSend, rejectSend) => {
        pending.set(id, { resolve: resolveSend, reject: rejectSend });
      });
    },
    on(method, listener) {
      if (!events.has(method)) events.set(method, new Set());
      events.get(method).add(listener);
    },
    close() {
      ws.close();
    },
  };
}

async function captureViewport(page, name, width, height, scale = 1) {
  await page.send("Emulation.setDeviceMetricsOverride", {
    width,
    height,
    deviceScaleFactor: scale,
    mobile: width < 700,
  });
  await page.send("Page.navigate", { url: targetUrl });
  await sleep(5000);
  await page.send("Runtime.evaluate", {
    expression: `
      (() => {
        const buttons = [...document.querySelectorAll('button, a')];
        const reject = buttons.find((el) => /reject all/i.test(el.textContent || ''));
        const accept = buttons.find((el) => /accept all/i.test(el.textContent || ''));
        (reject || accept)?.click();
        document.querySelectorAll('[id*="cookie"], [class*="cookie"], [class*="cky"], [id*="cky"]').forEach((el) => {
          const cs = getComputedStyle(el);
          if (cs.position === 'fixed') el.style.display = 'none';
        });
      })();
    `,
  });
  await sleep(1000);
  const metrics = await page.send("Page.getLayoutMetrics");
  const contentSize = metrics.cssContentSize ?? metrics.contentSize;
  const screenshot = await page.send("Page.captureScreenshot", {
    format: "png",
    fromSurface: true,
    captureBeyondViewport: true,
    clip: {
      x: 0,
      y: 0,
      width: Math.ceil(contentSize.width),
      height: Math.ceil(contentSize.height),
      scale: 1,
    },
  });
  await writeFile(join(refRoot, `${name}.png`), Buffer.from(screenshot.data, "base64"));
}

async function inspectDesktop(page) {
  await page.send("Emulation.setDeviceMetricsOverride", {
    width: 1440,
    height: 1200,
    deviceScaleFactor: 1,
    mobile: false,
  });
  await page.send("Page.navigate", { url: targetUrl });
  await sleep(5000);
  await page.send("Runtime.evaluate", {
    expression: `
      (() => {
        const reject = [...document.querySelectorAll('button, a')].find((el) => /reject all/i.test(el.textContent || ''));
        reject?.click();
      })();
    `,
  });
  await sleep(1000);
  const result = await page.send("Runtime.evaluate", {
    returnByValue: true,
    expression: `
      (() => {
        const styleProps = [
          'fontSize','fontWeight','fontFamily','lineHeight','letterSpacing','color',
          'backgroundColor','background','padding','margin','width','height','maxWidth',
          'display','flexDirection','justifyContent','alignItems','gap','gridTemplateColumns',
          'borderRadius','border','boxShadow','overflow','position','top','right','bottom',
          'left','zIndex','opacity','transform','transition','objectFit','backdropFilter'
        ];
        function styles(el) {
          const cs = getComputedStyle(el);
          return Object.fromEntries(styleProps.map((prop) => [prop, cs[prop]]).filter(([, value]) => value && value !== 'normal' && value !== 'none' && value !== '0px' && value !== 'rgba(0, 0, 0, 0)'));
        }
        function summary(el) {
          const rect = el.getBoundingClientRect();
          return {
            tag: el.tagName.toLowerCase(),
            className: String(el.className || ''),
            id: el.id || '',
            text: (el.innerText || '').replace(/\\s+/g, ' ').trim().slice(0, 1200),
            rect: { x: Math.round(rect.x), y: Math.round(rect.y + scrollY), width: Math.round(rect.width), height: Math.round(rect.height) },
            styles: styles(el),
            images: [...el.querySelectorAll('img')].map((img) => ({ src: img.currentSrc || img.src, alt: img.alt, width: img.naturalWidth, height: img.naturalHeight })),
            links: [...el.querySelectorAll('a')].map((a) => ({ text: (a.innerText || '').trim(), href: a.href })).filter((a) => a.text || a.href).slice(0, 20),
          };
        }
        const sections = [...document.body.children].flatMap((el) => {
          if (el.tagName === 'MAIN') return [...el.children];
          return [el];
        }).filter((el) => {
          const rect = el.getBoundingClientRect();
          return rect.width > 200 && rect.height > 20;
        }).map(summary);
        const allElements = [...document.querySelectorAll('body, h1, h2, h3, p, a, button, section, header, footer, nav, [class*="section"], [class*="card"], [class*="hero"]')].slice(0, 350);
        const colors = [...new Set(allElements.flatMap((el) => {
          const cs = getComputedStyle(el);
          return [cs.color, cs.backgroundColor, cs.borderColor].filter(Boolean);
        }))].filter((value) => value !== 'rgba(0, 0, 0, 0)').slice(0, 120);
        const fonts = [...new Set(allElements.map((el) => getComputedStyle(el).fontFamily))].slice(0, 30);
        const typography = allElements.filter((el) => /^(H1|H2|H3|P|A|BUTTON)$/.test(el.tagName)).slice(0, 160).map((el) => ({
          tag: el.tagName.toLowerCase(),
          className: String(el.className || '').slice(0, 120),
          text: (el.innerText || '').replace(/\\s+/g, ' ').trim().slice(0, 160),
          styles: styles(el),
        }));
        const assets = {
          images: [...document.querySelectorAll('img')].map((img) => ({ src: img.currentSrc || img.src, alt: img.alt, width: img.naturalWidth, height: img.naturalHeight })),
          videos: [...document.querySelectorAll('video')].map((video) => ({ src: video.currentSrc || video.src || video.querySelector('source')?.src || '', poster: video.poster, autoplay: video.autoplay, loop: video.loop, muted: video.muted })),
          backgroundImages: [...document.querySelectorAll('*')].map((el) => ({ el: el.tagName.toLowerCase(), className: String(el.className || '').slice(0, 120), backgroundImage: getComputedStyle(el).backgroundImage })).filter((item) => item.backgroundImage && item.backgroundImage !== 'none'),
          favicons: [...document.querySelectorAll('link[rel*="icon"], link[rel*="apple"]')].map((link) => ({ rel: link.rel, href: link.href, sizes: link.sizes?.toString() || '' })),
          stylesheets: [...document.querySelectorAll('link[rel="stylesheet"]')].map((link) => link.href),
          inlineSvgCount: document.querySelectorAll('svg').length,
        };
        return {
          title: document.title,
          description: document.querySelector('meta[name="description"]')?.content || '',
          bodyText: document.body.innerText.replace(/\\n{3,}/g, '\\n\\n').trim(),
          documentHeight: document.documentElement.scrollHeight,
          sections,
          colors,
          fonts,
          typography,
          assets,
          webflow: {
            domain: document.documentElement.getAttribute('data-wf-domain'),
            page: document.documentElement.getAttribute('data-wf-page'),
            site: document.documentElement.getAttribute('data-wf-site'),
          },
          semanticSections: [...document.querySelectorAll('section, [class*="section"], [class*="footer"], [class*="nav"], [class*="hero"]')]
            .filter((el) => {
              const rect = el.getBoundingClientRect();
              const className = String(el.className || '');
              return rect.width > 300 && rect.height > 80 && !/cookie|cky/i.test(className);
            })
            .slice(0, 80)
            .map(summary),
        };
      })();
    `,
  });
  await writeFile(join(outRoot, "inspection.json"), JSON.stringify(result.result.value, null, 2));
}

try {
  const targets = await getJson("/json/list");
  const target = targets.find((item) => item.type === "page") ?? targets[0];
  const client = createCdpClient(target.webSocketDebuggerUrl);
  await client.open();
  await client.send("Page.enable");
  await client.send("Runtime.enable");
  await inspectDesktop(client);
  await captureViewport(client, "desktop-full", 1440, 1200);
  await captureViewport(client, "tablet-full", 768, 1100);
  await captureViewport(client, "mobile-full", 390, 900);
  client.close();
} finally {
  if (!closed) chrome.kill();
  await sleep(500);
  await rm(profileDir, { recursive: true, force: true }).catch(() => {});
}
