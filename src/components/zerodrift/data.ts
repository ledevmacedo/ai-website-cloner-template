import type {
  ChannelCard,
  ComplianceCard,
  FooterColumn,
  LayerFeature,
  LayerStep,
  NavLink,
} from "@/types/zerodrift";

import { PLACEHOLDER_IMAGE } from "./constants";

export const navLinks: NavLink[] = [
  { label: "Problema", href: "/problema" },
  { label: "Solução", href: "/solucao" },
  { label: "Produto", href: "/produto" },
  { label: "Como funciona", href: "/como-funciona" },
  { label: "Para quem é", href: "/publicos" },
  { label: "Impacto", href: "/impacto" },
  { label: "FAQ", href: "/faq" },
];

export const layerSteps: LayerStep[] = [
  {
    title: "Candidaturas",
    body: "Triagem, elegibilidade e documentação num funil organizado.",
  },
  {
    title: "Competências",
    body: "Evidências, progresso e validações acompanham cada formando.",
  },
  {
    title: "Empregabilidade",
    body: "Perfis com contexto chegam a empresas parceiras.",
  },
];

export const layerFeatures: LayerFeature[] = [
  {
    eyebrow: "Problema",
    title: "O impacto acontece, mas nem sempre fica visível.",
    body: "Instituições sociais investem tempo, equipa e financiamento em programas de capacitação, mas muita informação importante fica espalhada entre formulários, planilhas, mensagens e PDFs.",
    image: PLACEHOLDER_IMAGE,
    imageAlt: "Dados de programa social organizados em interface",
  },
  {
    eyebrow: "Solução",
    title: "Uma plataforma para ligar formação social, dados e empregabilidade.",
    body: "O Impact Flow centraliza candidaturas, triagem, acompanhamento pedagógico, evidências de competência e ligação com empresas numa infraestrutura digital.",
    image: PLACEHOLDER_IMAGE,
    imageAlt: "Fluxo de acompanhamento de formandos",
    reverse: true,
  },
  {
    eyebrow: "Promessa",
    title: "Aumentar a empregabilidade através de evidências reais de competência.",
    body: "Cada participante passa a ter um histórico verificável de progresso, desempenho e validações. A instituição ganha controlo e as empresas avaliam talento com mais segurança.",
    image: PLACEHOLDER_IMAGE,
    imageAlt: "Dashboard de impacto e competências",
  },
];

export const complianceCards: ComplianceCard[] = [
  {
    title: "ATS Social",
    body: "Um funil de candidatura pensado para programas de impacto social, com critérios de elegibilidade, documentação e estado de cada candidato num só lugar.",
    image: PLACEHOLDER_IMAGE,
  },
  {
    title: "Passaporte de Competências",
    body: "Um perfil digital que regista progresso, competências, avaliações, desafios práticos e validações para mostrar o valor real do formando.",
    image: PLACEHOLDER_IMAGE,
  },
  {
    title: "Gestão Pedagógica",
    body: "Uma camada para formadores e mentores acompanharem presença, participação, evolução técnica e sinais de risco ao longo do programa.",
    image: PLACEHOLDER_IMAGE,
  },
];

export const channels: ChannelCard[] = [
  {
    title: "Fundações e ONGs",
    body: "Menos trabalho manual, relatórios de impacto mais consistentes e melhor relação com empresas parceiras.",
    icons: ["FO", "NG"],
  },
  {
    title: "Coordenadores de impacto",
    body: "Visão centralizada do programa, indicadores mais fáceis de acompanhar e menos dependência de planilhas.",
    icons: ["CI"],
  },
  {
    title: "Formadores e mentores",
    body: "Registo simples de evolução, feedback mais estruturado e melhor leitura dos riscos de abandono.",
    icons: ["FM"],
  },
  {
    title: "Formandos",
    body: "Perfil digital com evidências, mais visibilidade profissional e reconhecimento do progresso feito.",
    icons: ["PF"],
  },
  {
    title: "Empresas e RH",
    body: "Acesso a perfis pré-validados, menos dependência de CVs estáticos e mais segurança na seleção.",
    icons: ["RH"],
  },
];

export const footerColumns: FooterColumn[] = [
  {
    title: "Produto",
    links: [
      { label: "Solução", href: "/solucao" },
      { label: "Produto", href: "/produto" },
      { label: "Como funciona", href: "/como-funciona" },
      { label: "Piloto", href: "/piloto" },
    ],
  },
  {
    title: "Institucional",
    links: [
      { label: "Problema", href: "/problema" },
      { label: "Para quem é", href: "/publicos" },
      { label: "Impacto", href: "/impacto" },
      { label: "Mercado", href: "/mercado" },
    ],
  },
  {
    title: "Modelo",
    links: [
      { label: "Modelo de negócio", href: "/modelo-negocio" },
      { label: "FAQ", href: "/faq" },
      { label: "Contato", href: "/contato" },
      { label: "Mapa do site", href: "/mapa-do-site" },
    ],
  },
  {
    title: "Piloto",
    links: [
      { label: "ATS Social", href: "/produto" },
      { label: "Passaporte", href: "/produto" },
      { label: "Validação", href: "/piloto" },
    ],
  },
];
