import Image from "next/image";
import { ChevronDown, Menu, Play } from "lucide-react";

import type {
  ChannelCard,
  ComplianceCard,
  FooterColumn,
  LayerFeature,
} from "@/types/zerodrift";

const asset = "/images/zerodrift/";

const logos = [
  {
    src: "",
    alt: "Microsoft",
  },
  {
    src: "",
    alt: "Raymond James",
  },
  {
    src: "",
    alt: "Goldman Sachs",
  },
  { src: "", alt: "IBM" },
  {
    src: "",
    alt: "Google",
  },
];

const layerFeatures: LayerFeature[] = [
  {
    eyebrow: "Compose",
    title: "Configure Once. Enforce Everywhere.",
    body: "Upload your firm policies on top of SEC rules and FINRA guidance. ZeroDrift turns them into live rules that run on every message, every channel, automatically. You set the standard. The system enforces it.",
    image: `${asset}13-698a9a9489b318db90f91ecd_6035bd616bfc9ad3f193814dee198ccb_home-illu-1.svg`,
    imageAlt: "Policy coverage interface",
  },
  {
    eyebrow: "Guard",
    title: "Fix It Before It's a Problem",
    body: "Every outbound message is checked before it leaves. If there's an issue, your team sees it instantly and fixes it on the spot. Clean messages fly through. Problems never leave the building.",
    image: `${asset}14-698a9a94735f622e057384f9_home-illu-2.png`,
    imageAlt: "Email compliance guard",
    reverse: true,
  },
  {
    eyebrow: "Command",
    title: "Compliance Sees What Matters",
    body: "Your compliance team sees real risks, patterns, and audit trails. Not noise. Issues get resolved at the source so compliance can focus on what actually needs attention.",
    image: `${asset}15-698a9a945f1f7b62177ac90c_home-illu-3.png`,
    imageAlt: "Compliance dashboard",
  },
];

const complianceCards: ComplianceCard[] = [
  {
    title: "Checked Before Send",
    body: "Your team sends thousands of messages every week. With ZeroDrift, every one is checked before it reaches clients. Not reviewed days later. Every message. In real-time.",
    image: `${asset}18-69852a8bcf31ec098f29802a_image-440.avif`,
  },
  {
    title: "Policies That Enforce Themselves",
    body: "Your compliance policies live right where your people write. SEC, FINRA, and firm policy. All active in Outlook, LinkedIn, and everywhere else. No gap between rules and reality.",
    image: `${asset}19-69852a8b979e8f951aec56c2_image-441.avif`,
  },
  {
    title: "AI With Guardrails Built In",
    body: "Teams draft with ChatGPT and Copilot. ZeroDrift checks every AI-generated message before it goes out. The AI writes fast. ZeroDrift keeps it compliant.",
    image: `${asset}20-69852a8b01ae940fccc07121_image-442.avif`,
  },
];

const channels: ChannelCard[] = [
  {
    title: "Email",
    body: "Catch violations at draft time, not in supervision queues weeks later",
    icons: ["G", "O"],
  },
  {
    title: "Social",
    body: "Check LinkedIn posts before publish",
    icons: ["in"],
  },
  {
    title: "Web",
    body: "Check fund pages and campaign content in the browser",
    icons: ["M", "C"],
  },
  {
    title: "Documents",
    body: "Review decks, letters, and fact sheets",
    icons: ["D", "P"],
  },
  {
    title: "AI contents",
    body: "Apply your rules to ChatGPT and Copilot output before it reaches clients",
    icons: ["AI", "C"],
  },
];

const footerColumns: FooterColumn[] = [
  { title: "Platform", links: ["Compose", "Guard", "Command"] },
  { title: "Solutions", links: ["Workflow", "Team", "Industry"] },
  { title: "Company", links: ["About", "Security", "Careers", "Contact"] },
  { title: "Legal", links: ["Privacy", "DPA", "GDPR", "Cookies"] },
];

function ButtonLink({
  children,
  dark = false,
}: Readonly<{ children: React.ReactNode; dark?: boolean }>) {
  return (
    <a
      className={
        dark
          ? "inline-flex h-11 items-center justify-center rounded-[8px] bg-[#171719] px-7 text-[12px] font-bold uppercase tracking-normal text-white transition hover:bg-[#2b2b2e]"
          : "inline-flex h-11 items-center justify-center rounded-[8px] bg-white px-7 text-[12px] font-bold uppercase tracking-normal text-[#171719] transition hover:bg-white/90"
      }
      href="#demo"
    >
      {children}
    </a>
  );
}

function Header() {
  return (
    <header className="mx-auto flex h-[86px] w-full max-w-[1360px] items-center justify-between px-5 md:px-0">
      <Image
        src={`${asset}03-698272edf18ab399e2728f23_logo-black.svg`}
        alt="ZeroDrift"
        width={184}
        height={31}
        priority
      />
      <nav className="hidden items-center gap-10 text-[16px] font-normal text-[#0b1020] md:flex">
        {["Platform", "Solutions"].map((item) => (
          <a className="flex items-center gap-2 hover:text-[#f15b37]" href="#" key={item}>
            {item}
            <ChevronDown aria-hidden className="size-4" />
          </a>
        ))}
        {["Developers", "Security", "Company"].map((item) => (
          <a className="hover:text-[#f15b37]" href="#" key={item}>
            {item}
          </a>
        ))}
      </nav>
      <a
        className="hidden h-12 items-center justify-center rounded-[8px] bg-[#171719] px-7 text-[12px] font-bold uppercase text-white md:inline-flex"
        href="#demo"
      >
        Get Demo
      </a>
      <button
        aria-label="Open menu"
        className="inline-flex size-10 items-center justify-center rounded-[8px] md:hidden"
        type="button"
      >
        <Menu className="size-5" />
      </button>
    </header>
  );
}

function Hero() {
  return (
    <section className="mx-auto w-full max-w-[1360px] px-3 md:px-0">
      <div className="relative min-h-[812px] overflow-hidden rounded-[7px] bg-[#f65b35] p-8 text-white md:p-12">
        <video
          aria-hidden
          autoPlay
          className="absolute inset-0 size-full object-cover"
          loop
          muted
          playsInline
          poster={`${asset}26-6983902256e7c4da0df2ff82_orange-gradient_poster.0000000.jpg`}
        >
          <source src={`${asset}21-6983902256e7c4da0df2ff82_orange-gradient_mp4.mp4`} type="video/mp4" />
        </video>
        <div className="relative z-10 flex min-h-[746px] flex-col justify-between">
          <div>
            <div className="mb-8 flex items-center gap-3 text-[15px] font-bold uppercase">
              <span>Backed by</span>
              <span className="text-[22px] font-bold leading-none">a16z</span>
              <span className="h-7 w-px rotate-[18deg] bg-white" />
              <span className="text-[26px] font-bold italic leading-none">speedrun</span>
            </div>
            <h1 className="max-w-[820px] text-[54px] font-light leading-[0.96] tracking-normal md:text-[92px]">
              The AI Compliance Firewall
            </h1>
            <div className="mt-12">
              <ButtonLink>Get Demo</ButtonLink>
            </div>
          </div>
          <div className="grid items-end gap-8 md:grid-cols-[1fr_360px]">
            <div>
              <p className="max-w-full text-[17px] font-medium leading-[1.42] md:max-w-[570px] md:text-[20px]">
                ZeroDrift enforces SEC, FINRA, and firm policies on every message in real-time. Your team gets instant feedback. Issues get fixed at the source. Everyone moves faster.
              </p>
              <div className="mt-8 flex items-center gap-5 text-[13px] text-white/90">
                <span className="zd-seal">AICPA</span>
                <span className="zd-seal">ISO 27001</span>
                <span className="zd-stars">GDPR</span>
              </div>
            </div>
            <div className="relative h-[176px] overflow-hidden rounded-[10px] bg-black/30 shadow-2xl">
              <video autoPlay className="size-full object-cover opacity-80" loop muted playsInline>
                <source src={`${asset}22-1080--51892-zerodrift-hero-90s-16x9-10976572661-v3_2_v10--1080p-.mp4`} type="video/mp4" />
              </video>
              <span className="absolute left-1/2 top-1/2 inline-flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#111]">
                <Play className="ml-1 size-6 fill-current" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustedLogos() {
  return (
    <section className="py-24">
      <p className="mb-10 text-center font-mono text-[18px] text-[#101014]">
        Built by AI leaders from
      </p>
      <div className="mx-auto flex max-w-[1360px] gap-5 overflow-hidden px-5">
        {[...logos, ...logos].map((logo, index) => (
          <div
            className="flex h-[94px] min-w-[236px] items-center justify-center rounded-[8px] bg-white"
            key={`${logo.alt}-${index}`}
          >
            <span className="text-center text-[28px] font-bold leading-none text-[#171719]">
              {logo.alt}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

function EnforcementLayer() {
  return (
    <section className="mx-auto w-full max-w-[1360px] px-3 md:px-0">
      <div className="zd-grid rounded-[7px] bg-white px-8 py-16 md:px-12">
        <h2 className="mb-12 text-[40px] font-light leading-none md:text-[56px]">
          Real-Time Enforcement Layer
        </h2>
        <div className="mb-16 grid border-t border-[#d9d9d9] md:grid-cols-3">
          {["Compose|Define your rules", "Guard|Enforce at send", "Command|Control and verify"].map((item) => {
            const [title, body] = item.split("|");
            return (
              <div className="border-r border-[#e3e3e3] py-6 last:border-r-0" key={title}>
                <h3 className="text-[22px] font-light text-[#64666d]">{title}</h3>
                <p className="mt-2 text-[16px] text-[#64666d]">{body}</p>
              </div>
            );
          })}
        </div>
        <div className="space-y-16">
          {layerFeatures.map((feature) => (
            <article
              className="grid items-center gap-10 md:grid-cols-2"
              key={feature.title}
            >
              <div className={feature.reverse ? "md:order-2" : ""}>
                <h3 className="max-w-[360px] text-[26px] font-light leading-[1.05] text-[#171719]">
                  {feature.title}
                </h3>
                <p className="mt-4 max-w-[480px] text-[16px] leading-[1.45] text-[#6c7078]">
                  {feature.body}
                </p>
                <a className="mt-6 inline-flex h-9 items-center rounded-[6px] bg-[#171719] px-5 text-[10px] font-bold uppercase text-white" href="#">
                  Learn More
                </a>
              </div>
              <div className={feature.reverse ? "md:order-1" : ""}>
                <Image
                  className="mx-auto h-auto w-full max-w-[500px]"
                  src={feature.image}
                  alt={feature.imageAlt}
                  width={550}
                  height={420}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComplianceLooks() {
  return (
    <section className="mx-auto mt-8 w-full max-w-[1360px] px-3 md:px-0">
      <div className="rounded-[7px] bg-white px-8 py-14">
        <h2 className="mb-10 text-center text-[34px] font-light leading-none">
          What Fast and Compliant Looks Like
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {complianceCards.map((card) => (
            <article key={card.title}>
              <div className="mb-6 aspect-[1.1] overflow-hidden rounded-[4px] bg-[#f8f4f7]">
                <Image
                  className="size-full object-cover"
                  src={card.image}
                  alt=""
                  width={380}
                  height={340}
                />
              </div>
              <h3 className="text-[16px] font-medium text-[#171719]">{card.title}</h3>
              <p className="mt-2 text-[13px] leading-[1.45] text-[#747780]">{card.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SeeItWork() {
  return (
    <section className="mx-auto mt-8 w-full max-w-[1360px] px-3 md:px-0">
      <div className="zd-grid rounded-[7px] bg-white px-8 py-12 text-center">
        <h2 className="text-[38px] font-light leading-none">See It Work</h2>
        <p className="mx-auto mt-3 max-w-[460px] text-[13px] leading-[1.4] text-[#777b82]">
          Watch ZeroDrift catch a violation before it goes out. The sender fixes it instantly. Compliance never has to chase it down. This is how it should work.
        </p>
        <div className="relative mx-auto mt-10 aspect-video w-full max-w-[640px] rounded-[4px] border border-[#e6e6e6] bg-white shadow-[0_10px_30px_rgba(20,20,20,0.12)]" />
        <button className="mt-8 inline-flex h-9 items-center rounded-[6px] border border-[#171719] px-5 text-[10px] font-bold uppercase" type="button">
          Pause
        </button>
      </div>
    </section>
  );
}

function Channels() {
  return (
    <section className="mx-auto mt-8 w-full max-w-[1360px] px-3 md:px-0">
      <div className="zd-grid rounded-[7px] bg-white px-8 py-12">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.3fr]">
          <div className="flex flex-col justify-center">
            <h2 className="max-w-[380px] text-[38px] font-light leading-[1.05]">
              Every Channel. Every Person. Enforced.
            </h2>
            <p className="mt-5 max-w-[440px] text-[15px] leading-[1.45] text-[#747780]">
              Your whole firm communicates with confidence. Issues get fixed at the source. Compliance focuses on what matters.
            </p>
            <div className="mt-7 flex gap-3">
              {["Workflow", "Team", "Industry"].map((tab) => (
                <button className="h-9 rounded-[6px] border border-[#d9d9d9] px-4 text-[10px] font-bold uppercase" key={tab} type="button">
                  {tab}
                </button>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {channels.map((channel) => (
              <article className="min-h-[132px] rounded-[8px] bg-[#f5f5f5] p-5" key={channel.title}>
                <div className="mb-5 flex gap-2">
                  {channel.icons.map((icon) => (
                    <span className="inline-flex size-6 items-center justify-center rounded-[4px] bg-white text-[10px] font-bold text-[#2774ee]" key={icon}>
                      {icon}
                    </span>
                  ))}
                </div>
                <h3 className="text-[16px] font-medium">{channel.title}</h3>
                <p className="mt-2 text-[13px] leading-[1.35] text-[#747780]">{channel.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ApiInfrastructure() {
  return (
    <section className="mx-auto mt-8 w-full max-w-[1360px] px-3 md:px-0">
      <div className="zd-grid rounded-[7px] bg-white px-8 py-12">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h2 className="max-w-[380px] text-[38px] font-light leading-[1.05]">
              Build on ZeroDrift Infrastructure
            </h2>
            <p className="mt-5 max-w-[440px] text-[15px] leading-[1.45] text-[#747780]">
              Add compliance checks to any AI agent, copilot, or internal tool with one API. Every piece of content validated against regulations and firm policies before it reaches users.
            </p>
            <a className="mt-7 inline-flex h-9 w-fit items-center rounded-[6px] bg-[#171719] px-5 text-[10px] font-bold uppercase text-white" href="#">
              Learn More
            </a>
          </div>
          <div className="space-y-5">
            <CodePanel title="Request">
              {`curl -X POST "api.zerodrift.ai/v1/validate" \\
  -H "Authorization: Bearer zd_key_..." \\
  -d '{
    "text": "Our fund will outperform the market.",
    "document_type": "investor_letter",
    "audience": "retail_US",
    "rules": ["sec","finra"]
  }'`}
            </CodePanel>
            <CodePanel title="Response">
              {`{
  "status": "warning",
  "evidence_id": "ev_8f3k2j",
  "checks": { "passed": 12, "failed": 1 },
  "violations": [{
    "rule": "no_performance_projection",
    "ref": "FINRA 2210(d)(1)(F)",
    "severity": "high"
  }]
}`}
            </CodePanel>
          </div>
        </div>
      </div>
    </section>
  );
}

function CodePanel({ title, children }: Readonly<{ title: string; children: string }>) {
  return (
    <div>
      <p className="mb-2 text-[13px] text-[#6c7078]">{title}</p>
      <pre className="overflow-x-auto rounded-[8px] bg-[#181a1e] p-6 font-mono text-[13px] leading-[1.5] text-[#78e08f]">
        {children}
      </pre>
    </div>
  );
}

function TrustAndCta() {
  return (
    <>
      <section className="mx-auto mt-8 w-full max-w-[1360px] px-3 md:px-0">
        <div className="zd-grid flex min-h-[658px] flex-col items-center justify-center rounded-[7px] bg-white px-8 py-20 text-center">
          <h2 className="max-w-[430px] text-[40px] font-light leading-[1.05]">
            Engineered For Regulated Institutions
          </h2>
          <p className="mt-40 max-w-[440px] text-[14px] leading-[1.5] text-[#747780]">
            Built for firms where the stakes are high. SOC 2 certified. SEC and FINRA rules encoded. Ready for whatever comes next.
          </p>
          <a className="mt-7 inline-flex h-9 items-center rounded-[6px] bg-[#171719] px-5 text-[10px] font-bold uppercase text-white" href="#">
            View Trust Center
          </a>
        </div>
      </section>
      <section className="mx-auto mt-8 w-full max-w-[1360px] px-3 md:px-0" id="demo">
        <div className="relative overflow-hidden rounded-[7px] bg-[#1343d8] px-8 py-12 text-white md:px-10">
          <video
            aria-hidden
            autoPlay
            className="absolute inset-0 size-full object-cover"
            loop
            muted
            playsInline
            poster={`${asset}30-69839085edb11a12b2ad6a95_blocker-gradient_poster.0000000.jpg`}
          >
            <source src={`${asset}25-69839085edb11a12b2ad6a95_blocker-gradient_mp4.mp4`} type="video/mp4" />
          </video>
          <div className="relative grid gap-8 md:grid-cols-[1fr_430px]">
            <div>
              <p className="text-[11px] font-bold uppercase">30 minutes. Your content. Live results.</p>
              <h2 className="mt-5 max-w-[470px] text-[42px] font-light leading-[1.05]">
                See ZeroDrift On Your Communications
              </h2>
              <p className="mt-5 max-w-[530px] text-[15px] font-medium leading-[1.45]">
                Run your real communications through ZeroDrift. Watch issues get caught and fixed at the source. See your team finally unblocked.
              </p>
              <div className="mt-8 flex max-w-[470px] flex-col gap-3 sm:flex-row">
                <input
                  aria-label="Work email"
                  className="h-11 flex-1 rounded-[6px] bg-white px-4 text-[13px] text-[#171719] outline-none"
                  placeholder="Work email"
                />
                <button className="h-11 rounded-[6px] bg-white px-6 text-[11px] font-bold uppercase text-[#171719]" type="button">
                  Book Demo
                </button>
              </div>
              <p className="mt-5 text-[10px] font-bold uppercase">
                30 min - no prep - your data never stored - response in 2 hours
              </p>
            </div>
            <blockquote className="self-center rounded-[8px] bg-white p-8 text-[#171719]">
              <p className="text-[20px] font-light leading-[1.35]">
                {`"Our team moves faster because they know exactly what's compliant. And our compliance team finally focuses on real work, not chasing down emails."`}
              </p>
              <footer className="mt-8 text-[11px] font-bold uppercase text-[#555]">
                Head of Compliance
                <br />
                Large Broker-Dealer
              </footer>
            </blockquote>
          </div>
        </div>
      </section>
    </>
  );
}

function Footer() {
  return (
    <footer className="mx-auto my-8 w-full max-w-[1360px] px-3 md:px-0">
      <div className="rounded-[7px] bg-white px-8 py-10 md:px-12">
        <div className="grid gap-10 md:grid-cols-[1.4fr_2fr]">
          <div>
            <Image
              src={`${asset}03-698272edf18ab399e2728f23_logo-black.svg`}
              alt="ZeroDrift"
              width={170}
              height={28}
            />
            <div className="mt-8 text-[14px] leading-[1.5] text-[#555]">
              <p className="font-medium text-[#171719]">Headquarters</p>
              <p className="mt-2">4 World Trade Center</p>
              <p>150 Greenwich Street, New York, NY 10007</p>
              <p className="mt-7 font-medium text-[#171719]">Get in Touch</p>
              <p className="mt-2">hello@zerodrift.ai</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="mb-4 text-[13px] font-medium text-[#171719]">{column.title}</h3>
                <ul className="space-y-3 text-[13px] text-[#747780]">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a className="hover:text-[#171719]" href="#">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 grid gap-8 border-t border-[#ececec] pt-8 text-[13px] text-[#747780] md:grid-cols-[1fr_1fr]">
          <p>
            Your data never stored. <a className="underline" href="#">View Trust Center.</a>
          </p>
          <div className="grid gap-2 md:grid-cols-3">
            <p>Investors<br />investors@zerodrift.ai</p>
            <p>General<br />info@zerodrift.ai</p>
            <p>Press<br />press@zerodrift.ai</p>
          </div>
        </div>
        <p className="mt-9 text-[12px] text-[#9a9da4]">(c) 2026 ZeroDrift, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}

export function ZeroDriftPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#eeeeee] font-sans text-[#171719]">
      <Header />
      <Hero />
      <TrustedLogos />
      <EnforcementLayer />
      <ComplianceLooks />
      <SeeItWork />
      <Channels />
      <ApiInfrastructure />
      <TrustAndCta />
      <Footer />
    </main>
  );
}
