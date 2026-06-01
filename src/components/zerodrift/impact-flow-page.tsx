import { QrDialog } from "./qr-dialog";
import { PageShell } from "./page-shell";
import { ApiInfrastructure } from "./sections/api-infrastructure";
import { Channels } from "./sections/channels";
import { ComplianceLooks } from "./sections/compliance-looks";
import { EnforcementLayer } from "./sections/enforcement-layer";
import { Footer } from "./sections/footer";
import { Header } from "./sections/header";
import { Hero } from "./sections/hero";
import { HubVision } from "./sections/hub-vision";
import { SeeItWork } from "./sections/see-it-work";
import { TrustAndCta } from "./sections/trust-and-cta";
import { WhoWeAre } from "./sections/who-we-are";

export function ImpactFlowPage() {
  return (
    <PageShell>
      <QrDialog />
      <Header />
      <Hero />
      <EnforcementLayer />
      <ComplianceLooks />
      <SeeItWork />
      <HubVision />
      <Channels />
      <ApiInfrastructure />
      <WhoWeAre />
      <TrustAndCta />
      <Footer />
    </PageShell>
  );
}
