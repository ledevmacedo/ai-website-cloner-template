import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import type { LandingPage, LandingPageBlock } from "@/content/landing-pages";
import { ButtonLink } from "@/components/zerodrift/button-link";
import { PageShell } from "@/components/zerodrift/page-shell";
import { Footer } from "@/components/zerodrift/sections/footer";
import { Header } from "@/components/zerodrift/sections/header";

type LandingContentPageProps = Readonly<{
  page: LandingPage;
}>;

export function LandingContentPage({ page }: LandingContentPageProps) {
  const isFaq = page.slug === "faq";
  const isContact = page.slug === "contato";

  return (
    <PageShell>
      <Header />
      <main>
        <section className="mx-auto w-full max-w-[1360px] px-3 md:px-0">
          <div className="rounded-[7px] bg-white px-8 py-14 md:px-12 md:py-20">
            <Badge variant="secondary">{page.eyebrow}</Badge>
            <h1 className="mt-8 max-w-[920px] text-[44px] font-light leading-[1] text-[#171719] md:text-[68px]">
              {page.title}
            </h1>
            <p className="mt-8 max-w-[680px] text-[18px] font-medium leading-[1.45] text-[#53565f]">
              {page.intro}
            </p>
            <p className="mt-4 max-w-[640px] text-[15px] leading-[1.5] text-[#747780]">
              {page.description}
            </p>
            {page.cta ? (
              <div className="mt-9">
                <ButtonLink href={page.cta.href}>{page.cta.label}</ButtonLink>
              </div>
            ) : null}
          </div>
        </section>

        <section className="mx-auto mt-8 w-full max-w-[1360px] px-3 md:px-0">
          {isFaq ? (
            <FaqContent blocks={page.blocks} />
          ) : isContact ? (
            <ContactContent page={page} />
          ) : (
            <StandardContent blocks={page.blocks} />
          )}
        </section>

        {page.nextStep ? (
          <section className="mx-auto mt-8 w-full max-w-[1360px] px-3 md:px-0">
            <div className="rounded-[7px] bg-[#171719] px-8 py-10 text-white md:px-12">
              <p className="text-[11px] font-bold uppercase text-white/70">
                Próximo passo
              </p>
              <div className="mt-4 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <h2 className="max-w-[720px] text-[34px] font-light leading-[1.08]">
                  {page.nextStep.label}
                </h2>
                <ButtonLink
                  className="bg-white text-[#171719] hover:bg-white/90"
                  href={page.nextStep.href}
                  variant="secondary"
                >
                  Continuar
                </ButtonLink>
              </div>
            </div>
          </section>
        ) : null}
      </main>
      <Footer />
    </PageShell>
  );
}

function StandardContent({ blocks }: Readonly<{ blocks: LandingPageBlock[] }>) {
  return (
    <div className="rounded-[7px] bg-white px-8 py-10 md:px-12">
      <div className="grid gap-5 md:grid-cols-2">
        {blocks.map((block) => (
          <ContentCard block={block} key={block.title} />
        ))}
      </div>
    </div>
  );
}

function ContentCard({ block }: Readonly<{ block: LandingPageBlock }>) {
  return (
    <Card className="rounded-[8px]">
      <CardHeader>
        <CardTitle>{block.title}</CardTitle>
        {block.body?.[0] ? (
          <CardDescription>{block.body[0]}</CardDescription>
        ) : null}
      </CardHeader>
      {(block.body && block.body.length > 1) || block.items ? (
        <CardContent>
          {block.body && block.body.length > 1 ? (
            <div className="flex flex-col gap-3 text-[14px] leading-[1.5] text-muted-foreground">
              {block.body.slice(1).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          ) : null}
          {block.items ? (
            <ul className="mt-4 flex flex-col gap-2 text-[14px] leading-[1.45] text-muted-foreground">
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
        </CardContent>
      ) : null}
    </Card>
  );
}

function FaqContent({ blocks }: Readonly<{ blocks: LandingPageBlock[] }>) {
  return (
    <div className="rounded-[7px] bg-white px-8 py-10 md:px-12">
      <Accordion className="mx-auto max-w-[880px]">
        {blocks.map((block, index) => (
          <AccordionItem key={block.title} value={`faq-${index}`}>
            <AccordionTrigger>{block.title}</AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col gap-3 text-muted-foreground">
                {block.body?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

function ContactContent({ page }: Readonly<{ page: LandingPage }>) {
  return (
    <div className="grid gap-8 rounded-[7px] bg-white px-8 py-10 md:grid-cols-[0.9fr_1.1fr] md:px-12">
      <div>
        <StandardContent blocks={page.blocks} />
      </div>
      <Card className="rounded-[8px]">
        <CardHeader>
          <CardTitle>Pedido de conversa</CardTitle>
          <CardDescription>
            Formulário visual para recolher os dados indicados no briefing.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-5">
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="name">Nome</FieldLabel>
                <Input id="name" placeholder="Nome completo" />
              </Field>
              <Field>
                <FieldLabel htmlFor="institution">Instituição</FieldLabel>
                <Input id="institution" placeholder="Nome da organização" />
              </Field>
              <Field>
                <FieldLabel htmlFor="role">Cargo</FieldLabel>
                <Input id="role" placeholder="Cargo ou função" />
              </Field>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input id="email" placeholder="email@instituicao.pt" type="email" />
              </Field>
              <Field>
                <FieldLabel htmlFor="organization-type">
                  Tipo de organização
                </FieldLabel>
                <Input id="organization-type" placeholder="Fundação, ONG, empresa..." />
              </Field>
              <Field>
                <FieldLabel htmlFor="students">
                  Número aproximado de formandos por ano
                </FieldLabel>
                <Input id="students" placeholder="Ex.: 120" />
              </Field>
              <Field>
                <FieldLabel htmlFor="pain">Principal dor atual</FieldLabel>
                <Textarea
                  id="pain"
                  placeholder="Conte um pouco sobre o programa que quer validar."
                />
                <FieldDescription>
                  A validação pode começar por uma turma, uma fase do processo ou
                  um piloto mais completo.
                </FieldDescription>
              </Field>
            </FieldGroup>
            <Separator />
            <ButtonLink href="/contato">Quero conversar sobre um piloto</ButtonLink>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
