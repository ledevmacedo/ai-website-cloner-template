import type {
  ChannelCard,
  ComplianceCard,
  FooterColumn,
  LayerFeature,
  LayerStep,
  TrustedLogo,
} from "@/types/zerodrift";

import { ZERODRIFT_ASSET_PATH } from "./constants";

export const trustedLogos: TrustedLogo[] = [
  { alt: "Microsoft" },
  { alt: "Raymond James" },
  { alt: "Goldman Sachs" },
  { alt: "IBM" },
  { alt: "Google" },
];

export const layerSteps: LayerStep[] = [
  {
    title: "Compose",
    body: "Define your rules",
  },
  {
    title: "Guard",
    body: "Enforce at send",
  },
  {
    title: "Command",
    body: "Control and verify",
  },
];

export const layerFeatures: LayerFeature[] = [
  {
    eyebrow: "Compose",
    title: "Configure Once. Enforce Everywhere.",
    body: "Upload your firm policies on top of SEC rules and FINRA guidance. ZeroDrift turns them into live rules that run on every message, every channel, automatically. You set the standard. The system enforces it.",
    image: `${ZERODRIFT_ASSET_PATH}13-698a9a9489b318db90f91ecd_6035bd616bfc9ad3f193814dee198ccb_home-illu-1.svg`,
    imageAlt: "Policy coverage interface",
  },
  {
    eyebrow: "Guard",
    title: "Fix It Before It's a Problem",
    body: "Every outbound message is checked before it leaves. If there's an issue, your team sees it instantly and fixes it on the spot. Clean messages fly through. Problems never leave the building.",
    image: `${ZERODRIFT_ASSET_PATH}14-698a9a94735f622e057384f9_home-illu-2.png`,
    imageAlt: "Email compliance guard",
    reverse: true,
  },
  {
    eyebrow: "Command",
    title: "Compliance Sees What Matters",
    body: "Your compliance team sees real risks, patterns, and audit trails. Not noise. Issues get resolved at the source so compliance can focus on what actually needs attention.",
    image: `${ZERODRIFT_ASSET_PATH}15-698a9a945f1f7b62177ac90c_home-illu-3.png`,
    imageAlt: "Compliance dashboard",
  },
];

export const complianceCards: ComplianceCard[] = [
  {
    title: "Checked Before Send",
    body: "Your team sends thousands of messages every week. With ZeroDrift, every one is checked before it reaches clients. Not reviewed days later. Every message. In real-time.",
    image: `${ZERODRIFT_ASSET_PATH}18-69852a8bcf31ec098f29802a_image-440.avif`,
  },
  {
    title: "Policies That Enforce Themselves",
    body: "Your compliance policies live right where your people write. SEC, FINRA, and firm policy. All active in Outlook, LinkedIn, and everywhere else. No gap between rules and reality.",
    image: `${ZERODRIFT_ASSET_PATH}19-69852a8b979e8f951aec56c2_image-441.avif`,
  },
  {
    title: "AI With Guardrails Built In",
    body: "Teams draft with ChatGPT and Copilot. ZeroDrift checks every AI-generated message before it goes out. The AI writes fast. ZeroDrift keeps it compliant.",
    image: `${ZERODRIFT_ASSET_PATH}20-69852a8b01ae940fccc07121_image-442.avif`,
  },
];

export const channels: ChannelCard[] = [
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

export const footerColumns: FooterColumn[] = [
  { title: "Platform", links: ["Compose", "Guard", "Command"] },
  { title: "Solutions", links: ["Workflow", "Team", "Industry"] },
  { title: "Company", links: ["About", "Security", "Careers", "Contact"] },
  { title: "Legal", links: ["Privacy", "DPA", "GDPR", "Cookies"] },
];
