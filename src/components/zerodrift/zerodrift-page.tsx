import { PageShell } from "./page-shell";
import { ApiInfrastructure } from "./sections/api-infrastructure";
import { Channels } from "./sections/channels";
import { ComplianceLooks } from "./sections/compliance-looks";
import { EnforcementLayer } from "./sections/enforcement-layer";
import { Footer } from "./sections/footer";
import { Header } from "./sections/header";
import { Hero } from "./sections/hero";
import { SeeItWork } from "./sections/see-it-work";
import { TrustAndCta } from "./sections/trust-and-cta";
import { TrustedLogos } from "./sections/trusted-logos";

export function ZeroDriftPage() {
  return (
    <PageShell>
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
    </PageShell>
  );
}
