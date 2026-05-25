import { mkdir, readFile, writeFile } from "node:fs/promises";
import { basename, extname, join, resolve } from "node:path";

const root = resolve(".");
const inspectionPath = join(root, "docs", "research", "zerodrift.ai", "inspection.json");
const outDir = join(root, "public", "images", "zerodrift");
const seoDir = join(root, "public", "seo");
const cssDir = join(root, "public", "assets", "zerodrift");
const manifestPath = join(root, "docs", "research", "zerodrift.ai", "asset-manifest.json");

await mkdir(outDir, { recursive: true });
await mkdir(seoDir, { recursive: true });
await mkdir(cssDir, { recursive: true });

const inspection = JSON.parse(await readFile(inspectionPath, "utf8"));

function urlFromCssValue(value) {
  return [...String(value).matchAll(/url\(["']?([^"')]+)["']?\)/g)].map((match) => match[1]);
}

function safeName(url, index) {
  const parsed = new URL(url);
  const decodedPath = decodeURIComponent(parsed.pathname);
  const rawBase = basename(decodedPath).replace(/[^a-zA-Z0-9._-]/g, "-");
  const extension = extname(rawBase) || ".bin";
  const stem = rawBase.slice(0, rawBase.length - extension.length).slice(0, 80) || `asset-${index}`;
  return `${String(index).padStart(2, "0")}-${stem}${extension}`;
}

const urls = new Set();
for (const image of inspection.assets.images ?? []) if (image.src) urls.add(image.src);
for (const video of inspection.assets.videos ?? []) {
  if (video.src) urls.add(video.src);
  if (video.poster) urls.add(video.poster);
}
for (const item of inspection.assets.backgroundImages ?? []) {
  for (const url of urlFromCssValue(item.backgroundImage)) urls.add(url);
}
for (const favicon of inspection.assets.favicons ?? []) if (favicon.href) urls.add(favicon.href);

const stylesheets = inspection.assets.stylesheets ?? [];
let cssIndex = 1;
for (const stylesheet of stylesheets) {
  const response = await fetch(stylesheet);
  if (!response.ok) continue;
  const css = await response.text();
  await writeFile(join(cssDir, safeName(stylesheet, cssIndex)), css);
  cssIndex += 1;
  for (const url of urlFromCssValue(css)) {
    const absolute = new URL(url, stylesheet).href;
    if (/cdn\.prod\.website-files\.com|uploads-ssl\.webflow\.com/.test(absolute)) urls.add(absolute);
  }
}

const manifest = [];
let index = 1;
for (const url of [...urls]) {
  const isSeo = /fav|webclip|og\.png|apple/i.test(url);
  const destinationDir = isSeo ? seoDir : outDir;
  const fileName = safeName(url, index);
  const localPath = join(destinationDir, fileName);
  const publicPath = `/${isSeo ? "seo" : "images/zerodrift"}/${fileName}`;
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const bytes = Buffer.from(await response.arrayBuffer());
    await writeFile(localPath, bytes);
    manifest.push({ url, publicPath, bytes: bytes.length, ok: true });
  } catch (error) {
    manifest.push({ url, publicPath, ok: false, error: String(error?.message ?? error) });
  }
  index += 1;
}

await writeFile(manifestPath, JSON.stringify(manifest, null, 2));
console.log(`Downloaded ${manifest.filter((item) => item.ok).length}/${manifest.length} assets`);
