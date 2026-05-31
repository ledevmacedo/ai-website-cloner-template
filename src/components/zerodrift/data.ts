import type {
  ChannelCard,
  ComplianceCard,
  FooterColumn,
  LayerFeature,
  LayerStep,
  NavLink,
} from "@/types/zerodrift";

import { ZERODRIFT_ASSET_PATH } from "./constants";

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
    body: "Instituições sociais investem tempo, equipa e financiamento em programas de capacitação. Só que muita informação importante fica espalhada entre formulários, planilhas, mensagens e PDFs. A equipa perde horas a consolidar dados. Os financiadores recebem uma visão incompleta do resultado. E os formandos chegam ao mercado sem provas claras do que aprenderam.",
    image: `${ZERODRIFT_ASSET_PATH}dados-sociais.jpg`,
    imageAlt: "Dados de programa social organizados em interface",
  },
  {
    eyebrow: "Solução",
    title: "Uma plataforma para ligar formação social, dados e empregabilidade.",
    body: "O Impact Flow centraliza candidaturas, triagem, acompanhamento pedagógico, evidências de competência e ligação com empresas numa infraestrutura digital.",
    image: `${ZERODRIFT_ASSET_PATH}fluxo-acompanhamento.jpg`,
    imageAlt: "Fluxo de acompanhamento de formandos",
    reverse: true,
  },
  {
    eyebrow: "Promessa",
    title: "Aumentar a empregabilidade através de evidências reais de competência.",
    body: "Cada participante passa a ter um histórico verificável de progresso, desempenho e validações. A instituição ganha mais controlo sobre a operação. As empresas recebem perfis com mais contexto para avaliar talento com segurança.",
    image: `${ZERODRIFT_ASSET_PATH}dashboard-impacto.jpg`,
    imageAlt: "Dashboard de impacto e competências",
  },
];

export const complianceCards: ComplianceCard[] = [
  {
    title: "ATS Social",
    body: "Um funil de candidatura pensado para programas de impacto social. Permite gerir candidaturas, critérios de elegibilidade, documentação e estado de cada candidato num só lugar.",
    image: `${ZERODRIFT_ASSET_PATH}candidaturas-ats.jpg`,
  },
  {
    title: "Perfil de Competências",
    body: "Um perfil digital que mostra o valor real do formando. Regista progresso, competências, avaliações, desafios práticos e validações. O formando deixa de depender apenas de um CV tradicional para mostrar o que sabe fazer.",
    image: `${ZERODRIFT_ASSET_PATH}perfil-competencias.jpg`,
  },
  {
    title: "Gestão Pedagógica",
    body: "Uma camada de acompanhamento para formadores e mentores. Ajuda a acompanhar presença, participação, evolução técnica e sinais de risco ao longo do programa. Abrange também oportunidades de focar em softskills e feedbacks especificos.",
    image: `${ZERODRIFT_ASSET_PATH}gestao-pedagogica.jpg`,
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
    body: "Visão centralizada do programa, indicadores mais fáceis de acompanhar, avaliações e feedbacks em histórico e menos dependência de planilhas e mensagens soltas.",
    icons: ["CI"],
  },
  {
    title: "Formadores e mentores",
    body: "Registo simples de evolução, feedback mais estruturado e melhor leitura dos riscos de abandono ou baixa performance.",
    icons: ["FM"],
  },
  {
    title: "Formandos",
    body: "Perfil digital com evidências, mais visibilidade profissional, centralidade das necessidades durante o fluxo e reconhecimento do progresso feito durante a formação.",
    icons: ["PF"],
  },
  {
    title: "Empresas e RH",
    body: "Acesso a perfis pré-validados, menos dependência de CVs estáticos e mais segurança na seleção de candidatos.",
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
      { label: "Modelo de negócio", href: "/modelo-negocio" },
    ],
  },
  {
    title: "Apoio",
    links: [
      { label: "FAQ", href: "/faq" },
      { label: "Contato", href: "/contato" },
      { label: "Mapa do site", href: "/mapa-do-site" },
    ],
  },
];
