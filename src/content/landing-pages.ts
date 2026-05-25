export type LandingPageBlock = {
  title: string;
  body?: string[];
  items?: string[];
};

export type LandingPage = {
  slug: string;
  title: string;
  eyebrow: string;
  intro: string;
  description: string;
  cta?: {
    label: string;
    href: string;
  };
  blocks: LandingPageBlock[];
  nextStep?: {
    label: string;
    href: string;
  };
};

export const landingPages: LandingPage[] = [
  {
    slug: "problema",
    title: "Formar pessoas não chega. É preciso provar o caminho até ao emprego.",
    eyebrow: "Problema",
    intro:
      "Muitas instituições sociais fazem um trabalho real de capacitação, mas ainda gerem partes críticas da operação com planilhas, formulários, mensagens e documentos soltos.",
    description:
      "A dor central é simples: o impacto existe, mas nem sempre aparece com clareza para quem coordena, financia ou contrata.",
    cta: { label: "Ver a solução", href: "/solucao" },
    blocks: [
      {
        title: "Onde a dor aparece",
        items: [
          "Coordenadores gastam tempo demais com triagem, atualização de listas e relatórios.",
          "Dados importantes perdem-se entre recrutamento, formação e acompanhamento.",
          "Empresas continuam a avaliar formandos por CVs estáticos.",
          "Financiadores pedem evidências, mas a prova ainda depende de trabalho manual.",
          "Pessoas com potencial ficam invisíveis por falta de histórico verificável.",
        ],
      },
      {
        title: "O custo de manter tudo como está",
        body: [
          "Quando a informação não acompanha o formando, a instituição perde capacidade de tomar boas decisões.",
          "Fica mais difícil saber quem precisa de apoio, quem evoluiu, quem concluiu com bom desempenho e quem está pronto para uma oportunidade.",
          "Para empresas, a falta de contexto aumenta o risco da contratação. Para financiadores, reduz a confiança no impacto reportado.",
        ],
      },
      {
        title: "Consequências práticas",
        items: [
          "Mais horas administrativas para a equipa.",
          "Menos confiança nos dados do programa.",
          "Mais dificuldade em demonstrar ROI social.",
          "Menos visibilidade profissional para os formandos.",
          "Menos segurança para empresas recrutadoras.",
        ],
      },
      {
        title: "Frase central",
        body: ["O problema não é falta de talento. É falta de evidência organizada."],
      },
    ],
    nextStep: { label: "Ver como o Impact Flow resolve essa lacuna", href: "/solucao" },
  },
  {
    slug: "solucao",
    title: "Uma plataforma para ligar formação social, dados e empregabilidade.",
    eyebrow: "Solução",
    intro:
      "O Impact Flow centraliza o ciclo da formação social numa infraestrutura digital: candidaturas, triagem, acompanhamento pedagógico, evidências de competência e ligação com empresas.",
    description:
      "Cada participante passa a ter um histórico verificável de progresso, desempenho e validações.",
    cta: { label: "Ver módulos", href: "/produto" },
    blocks: [
      {
        title: "Promessa central",
        body: ["Aumentar a empregabilidade através de evidências reais de competência."],
      },
      {
        title: "O que muda na prática",
        items: [
          "A equipa trabalha com dados centralizados.",
          "O progresso do formando fica mais claro.",
          "A prestação de contas ganha evidências.",
          "As empresas avaliam perfis com mais contexto.",
          "A formação aproxima-se de oportunidades reais.",
        ],
      },
      {
        title: "Para instituições",
        body: [
          "Menos tempo gasto em tarefas operacionais, melhor organização dos programas e mais capacidade para demonstrar impacto.",
        ],
      },
      {
        title: "Para participantes",
        body: [
          "Histórico digital de competências, maior visibilidade perante parceiros e melhor transição entre formação e oportunidade.",
        ],
      },
      {
        title: "Para empresas",
        body: [
          "Acesso a talento com contexto, processo de seleção mais informado e maior alinhamento com metas de diversidade e responsabilidade social.",
        ],
      },
    ],
    nextStep: { label: "Ver os módulos do produto", href: "/produto" },
  },
  {
    slug: "produto",
    title: "Os módulos centrais do Impact Flow",
    eyebrow: "Produto",
    intro:
      "O produto foi pensado como uma infraestrutura modular. A primeira versão foca no que prova valor mais rápido: organizar candidaturas e criar evidências verificáveis de competências.",
    description:
      "A plataforma combina ATS Social, Passaporte de Competências, Gestão Pedagógica e Portal de Talentos B2B.",
    cta: { label: "Entender o fluxo", href: "/como-funciona" },
    blocks: [
      {
        title: "ATS Social",
        body: [
          "Um funil de candidatura pensado para programas de impacto social.",
          "Permite gerir candidaturas, critérios de elegibilidade, documentação e estado de cada candidato num só lugar.",
        ],
        items: [
          "Menos tempo gasto em triagem manual.",
          "Menos candidatos perdidos por falta de seguimento.",
          "Mais controlo sobre critérios sociais e documentação.",
        ],
      },
      {
        title: "Passaporte de Competências",
        body: [
          "Um perfil digital que mostra o valor real do formando.",
          "Regista progresso, competências, avaliações, desafios práticos e validações.",
        ],
        items: [
          "Histórico verificável de competências.",
          "Mais visibilidade perante parceiros e empregadores.",
          "Melhor transição entre formação e oportunidade.",
        ],
      },
      {
        title: "Gestão Pedagógica",
        body: [
          "Uma camada de acompanhamento para formadores e mentores.",
          "Ajuda a acompanhar presença, participação, evolução técnica e sinais de risco ao longo do programa.",
        ],
        items: [
          "Acompanhamento mais próximo da turma.",
          "Dados pedagógicos menos dispersos.",
          "Base mais clara para relatórios e melhorias do programa.",
        ],
      },
      {
        title: "Portal de Talentos B2B",
        body: ["Um canal para empresas encontrarem talento validado."],
        items: [
          "Recrutamento com mais contexto.",
          "Perfis avaliados em ambiente de formação.",
          "Apoio a metas de diversidade, inclusão e ESG.",
        ],
      },
      {
        title: "Recursos transversais",
        items: [
          "Segurança e conformidade com RGPD.",
          "Histórico e rastreabilidade de ações.",
          "Dashboards de impacto para acompanhamento.",
          "Possibilidade futura de integração com sistemas de RH.",
          "Relatórios agregados e anonimizados em fases futuras.",
        ],
      },
    ],
    nextStep: { label: "Entender como o fluxo funciona", href: "/como-funciona" },
  },
  {
    slug: "como-funciona",
    title: "Um fluxo simples, da candidatura à oportunidade.",
    eyebrow: "Como funciona",
    intro:
      "O Impact Flow organiza a informação para que ela acompanhe o formando durante todo o processo.",
    description:
      "A candidatura, a formação, o passaporte de competências e a ligação ao mercado deixam de viver em silos separados.",
    cta: { label: "Ver públicos", href: "/publicos" },
    blocks: [
      {
        title: "1. Recrutamento Social",
        body: [
          "As instituições gerem candidaturas, critérios de elegibilidade e documentação num funil organizado.",
          "O objetivo é reduzir perdas de candidatos, acelerar a triagem e manter os dados importantes acessíveis desde o primeiro contacto.",
        ],
      },
      {
        title: "2. Acompanhamento Pedagógico",
        body: [
          "Formadores registam presença, progresso, desafios práticos e avaliações.",
          "A equipa deixa de depender de registos soltos para perceber a evolução da turma.",
        ],
      },
      {
        title: "3. Passaporte de Competências",
        body: [
          "Cada formando constrói um perfil digital com evidências técnicas e comportamentais, validado por dados, mentores e atividades reais.",
        ],
      },
      {
        title: "4. Ligação ao Mercado",
        body: [
          "Empresas acedem a perfis mais claros, com contexto e histórico de desempenho.",
          "A contratação deixa de depender apenas de CVs e passa a considerar evidências concretas.",
        ],
      },
      {
        title: "Frase de reforço",
        body: ["O dado certo, no momento certo, ajuda a decidir melhor."],
      },
    ],
    nextStep: { label: "Ver quem usa o Impact Flow", href: "/publicos" },
  },
  {
    slug: "publicos",
    title: "Feito para equipas que precisam provar impacto e gerar oportunidades.",
    eyebrow: "Para quem é",
    intro:
      "O Impact Flow conecta perfis diferentes dentro da mesma operação: quem financia, quem coordena, quem forma, quem aprende e quem contrata.",
    description:
      "Cada público ganha uma visão mais clara do percurso entre formação e oportunidade.",
    cta: { label: "Ver impacto esperado", href: "/impacto" },
    blocks: [
      {
        title: "Fundações, ONGs e instituições de formação social",
        body: [
          "Para equipas que gerem programas de capacitação, prestam contas a financiadores e querem aproximar formação e emprego.",
        ],
        items: [
          "Menos trabalho manual.",
          "Mais clareza sobre o desempenho dos participantes.",
          "Relatórios de impacto mais consistentes.",
          "Melhor relação com empresas parceiras.",
        ],
      },
      {
        title: "Coordenadores e equipas de impacto",
        body: ["Para quem precisa acompanhar turmas, consolidar dados e demonstrar resultados de forma objetiva."],
        items: [
          "Visão centralizada do programa.",
          "Indicadores mais fáceis de acompanhar.",
          "Menos dependência de planilhas e mensagens soltas.",
        ],
      },
      {
        title: "Formadores e mentores",
        body: ["Para quem acompanha o progresso dos participantes no dia a dia."],
        items: [
          "Registo simples de evolução.",
          "Feedback mais estruturado.",
          "Melhor leitura dos riscos de abandono ou baixa performance.",
        ],
      },
      {
        title: "Formandos",
        body: ["Para jovens e adultos em requalificação que precisam mostrar competências reais ao mercado."],
        items: [
          "Perfil digital com evidências.",
          "Mais visibilidade profissional.",
          "Reconhecimento do progresso feito durante a formação.",
        ],
      },
      {
        title: "Empresas e equipas de RH",
        body: ["Para organizações que procuram talento validado e querem recrutar com mais contexto."],
        items: [
          "Acesso a perfis pré-validados.",
          "Menos dependência de CVs estáticos.",
          "Mais segurança na seleção de candidatos.",
        ],
      },
    ],
    nextStep: { label: "Ver o impacto esperado", href: "/impacto" },
  },
  {
    slug: "impacto",
    title: "Mais transparência para as instituições. Mais oportunidades para os formandos.",
    eyebrow: "Impacto",
    intro:
      "O Impact Flow foi desenhado para gerar impacto em duas frentes: melhorar a operação das instituições e aumentar a empregabilidade dos participantes.",
    description:
      "Quando os dados estão organizados, fica mais fácil acompanhar resultados, provar valor a financiadores e criar pontes reais com empresas.",
    cta: { label: "Ver plano de piloto", href: "/piloto" },
    blocks: [
      {
        title: "Resultados esperados",
        items: [
          "Redução do tempo administrativo das equipas de coordenação.",
          "Mais conversão entre formação e emprego.",
          "Melhor qualidade da informação usada em decisões de recrutamento.",
          "Maior capacidade de demonstrar impacto social.",
          "Rede mais forte entre instituições, formandos e empresas.",
        ],
      },
      {
        title: "Indicadores que a plataforma pode acompanhar",
        items: [
          "Tempo administrativo poupado.",
          "Taxa de conclusão.",
          "Progresso por competências.",
          "Perfis com evidências validadas.",
          "Empresas parceiras ativas.",
          "Oportunidades geradas.",
          "Contratação pós-formação.",
        ],
      },
      {
        title: "Alinhamento ODS",
        items: [
          "ODS 4: educação de qualidade.",
          "ODS 8: trabalho digno e crescimento económico.",
          "ODS 10: redução das desigualdades.",
          "ODS 17: parcerias para a implementação.",
        ],
      },
    ],
    nextStep: { label: "Ver plano de piloto", href: "/piloto" },
  },
  {
    slug: "piloto",
    title: "Começamos pelo núcleo que prova valor mais rápido.",
    eyebrow: "Piloto",
    intro:
      "O MVP inicial concentra-se em dois módulos: ATS Social e Passaporte de Competências.",
    description:
      "Este recorte reduz complexidade e permite validar a operação em contexto real antes de expandir para módulos mais avançados.",
    cta: { label: "Falar sobre piloto", href: "/contato" },
    blocks: [
      {
        title: "Escopo inicial",
        items: [
          "ATS Social para triagem, elegibilidade e gestão do funil de candidaturas.",
          "Passaporte de Competências para registo estruturado de progresso, evidências e validações.",
        ],
      },
      {
        title: "Janela de validação",
        body: ["6 a 8 semanas para um piloto funcional controlado."],
      },
      {
        title: "KPI principal",
        body: ["Redução do tempo administrativo da coordenação."],
      },
      {
        title: "O que queremos validar",
        items: [
          "Se a instituição ganha tempo na operação.",
          "Se os dados ficam mais completos e confiáveis.",
          "Se os formandos conseguem construir perfis mais claros.",
          "Se as empresas percebem valor em perfis validados por evidências.",
        ],
      },
      {
        title: "Redução de risco",
        body: [
          "O piloto começa pequeno, com foco em uma turma, uma equipa e métricas simples de acompanhamento.",
          "Não é necessário mudar toda a operação de uma vez.",
        ],
      },
    ],
    nextStep: { label: "Falar sobre um piloto", href: "/contato" },
  },
  {
    slug: "mercado",
    title: "O setor social precisa de ferramentas próprias para provar resultado.",
    eyebrow: "Mercado",
    intro:
      "Portugal tem um contexto favorável para soluções que ligam capacitação, dados e empregabilidade.",
    description:
      "Programas como PRR, Portugal 2030 e FSE+ aumentam a exigência por impacto mensurável, transparência e prestação de contas.",
    cta: { label: "Ver modelo de negócio", href: "/modelo-negocio" },
    blocks: [
      {
        title: "Onde o Impact Flow se posiciona",
        body: [
          "O Impact Flow ajuda instituições a gerir melhor os seus programas e ajuda empresas a encontrar talento com evidências reais de competência.",
          "Quanto maior a exigência por impacto mensurável, maior a necessidade de dados confiáveis desde o primeiro contacto com o formando.",
        ],
      },
      {
        title: "Por que agora",
        items: [
          "Instituições sociais precisam prestar contas com mais rigor.",
          "Empresas precisam mostrar compromissos de diversidade e inclusão com dados.",
          "Programas públicos e europeus reforçam a importância de capacitação, empregabilidade e reporte.",
          "Ferramentas genéricas ainda não resolvem bem a ligação entre formação social e contratação.",
        ],
      },
    ],
    nextStep: { label: "Ver modelo de negócio", href: "/modelo-negocio" },
  },
  {
    slug: "modelo-negocio",
    title: "Um modelo SaaS B2B pensado para crescer com instituições e empresas.",
    eyebrow: "Modelo de negócio",
    intro:
      "O Impact Flow combina receita recorrente por subscrição, serviços de implementação e acesso pago para empresas recrutadoras.",
    description:
      "No início, o foco está em validação com instituições parceiras. Com o produto validado, a rede pode crescer para planos institucionais, serviços premium e acesso empresarial.",
    cta: { label: "Ver FAQ", href: "/faq" },
    blocks: [
      {
        title: "Fontes de receita previstas",
        items: [
          "Subscrição SaaS para instituições.",
          "Setup e implementação inicial.",
          "Serviços de formação e suporte premium.",
          "Licenças para empresas recrutadoras.",
          "Relatórios agregados e anonimizados em fases futuras.",
        ],
      },
      {
        title: "Starter Impact",
        body: [
          "Para instituições locais que precisam gerir um programa formativo, recrutamento social e presença dos participantes.",
        ],
      },
      {
        title: "Growth Flow",
        body: [
          "Para fundações médias com vários programas, necessidade de dashboards de impacto e histórico de alunos.",
        ],
      },
      {
        title: "Enterprise",
        body: [
          "Para grandes fundações e redes, com integração, API, suporte dedicado e ativação do Portal de Talentos B2B.",
        ],
      },
      {
        title: "Sustentabilidade a validar",
        items: [
          "Se empresas pagam por dados de desempenho validados como alternativa ao recrutamento tradicional.",
          "Se fundações conseguem converter a poupança de tempo operacional em orçamento para software.",
          "Se o Passaporte de Competências se torna uma referência útil para seleção baseada em mérito.",
        ],
      },
      {
        title: "Leitura financeira",
        body: [
          "O primeiro ano deve ser tratado como fase de construção de base: validar produto, provar valor com pilotos, recolher métricas reais e criar condições para crescimento sustentável.",
        ],
      },
    ],
    nextStep: { label: "Ver perguntas frequentes", href: "/faq" },
  },
  {
    slug: "faq",
    title: "Perguntas frequentes",
    eyebrow: "FAQ",
    intro:
      "As principais dúvidas sobre fase atual, piloto, primeiro produto e papel das empresas.",
    description:
      "Use esta página para alinhar expectativas antes de iniciar uma conversa sobre piloto.",
    cta: { label: "Conversar sobre piloto", href: "/contato" },
    blocks: [
      {
        title: "O Impact Flow já está desenvolvido?",
        body: [
          "O projeto está em fase de ideação avançada. O framework de negócio, a proposta de valor e o escopo inicial do MVP já estão definidos.",
        ],
      },
      {
        title: "Qual é o primeiro produto a validar?",
        body: [
          "O MVP começa com ATS Social e Passaporte de Competências, porque estes dois módulos atacam a dor operacional e criam a primeira base de evidências dos formandos.",
        ],
      },
      {
        title: "Quem deve usar primeiro?",
        body: [
          "Fundações, ONGs e instituições com programas de empregabilidade, capacitação digital ou requalificação profissional.",
        ],
      },
      {
        title: "O Impact Flow substitui um LMS?",
        body: [
          "Não necessariamente. A proposta inicial é cobrir o que muitos LMS não resolvem bem: recrutamento social, prova de competências, dados de impacto e ligação ao mercado.",
        ],
      },
      {
        title: "A instituição precisa mudar todo o processo para testar?",
        body: [
          "Não. O piloto deve começar com um recorte controlado, como uma turma, um programa ou uma fase do processo.",
        ],
      },
      {
        title: "Como as empresas entram na plataforma?",
        body: [
          "Numa segunda fase, empresas parceiras podem aceder ao Portal de Talentos para encontrar perfis validados com base em evidências de desempenho.",
        ],
      },
      {
        title: "Que tipo de impacto a plataforma pretende medir?",
        body: [
          "Tempo administrativo poupado, progresso dos formandos, competências validadas, taxa de conclusão, ligação a oportunidades e contratação pós-formação.",
        ],
      },
      {
        title: "Como o piloto reduz risco?",
        body: [
          "O piloto começa pequeno, com uma turma ou uma fase do processo. A instituição valida valor antes de assumir uma mudança maior.",
        ],
      },
    ],
    nextStep: { label: "Conversar sobre piloto", href: "/contato" },
  },
  {
    slug: "contato",
    title: "Vamos validar o Impact Flow com uma instituição real?",
    eyebrow: "Contato",
    intro:
      "Estamos em fase de ideação avançada e preparados para validar o MVP com parceiros institucionais.",
    description:
      "Procuramos fundações, ONGs, entidades de formação social e empresas parceiras que queiram testar uma forma mais clara de ligar formação, dados e empregabilidade.",
    cta: { label: "Quero conversar sobre um piloto", href: "/contato" },
    blocks: [
      {
        title: "Dados a incluir no formulário",
        items: [
          "Nome.",
          "Instituição.",
          "Cargo.",
          "Email.",
          "Tipo de organização.",
          "Número aproximado de formandos por ano.",
          "Principal dor atual.",
          "Interesse: piloto, parceria institucional, empresa recrutadora ou apoio ao projeto.",
        ],
      },
      {
        title: "Mensagem curta para formulário",
        body: [
          "Conte um pouco sobre o programa que quer validar. A ideia é perceber se o Impact Flow pode ajudar numa turma, numa fase do processo ou num piloto mais completo.",
        ],
      },
      {
        title: "Bloco de contato",
        items: [
          "Email: [inserir email]",
          "LinkedIn: [inserir perfil]",
          "Apresentação: [inserir link]",
          "Formulário: [inserir link]",
        ],
      },
    ],
  },
  {
    slug: "mapa-do-site",
    title: "Mapa do site e footer",
    eyebrow: "Mapa do site",
    intro:
      "Este mapa organiza as páginas criadas a partir dos documentos Markdown do Impact Flow.",
    description:
      "Use-o como referência rápida para navegar entre produto, institucional e apoio.",
    blocks: [
      {
        title: "Produto",
        items: [
          "Solução: visão geral da plataforma e da promessa central.",
          "Produto: módulos, benefícios e recursos.",
          "Como funciona: fluxo da candidatura à oportunidade.",
          "Piloto: escopo inicial, validação e próximos passos.",
        ],
      },
      {
        title: "Institucional",
        items: [
          "Home: entrada principal do site.",
          "Problema: dor, contexto e custo da informação dispersa.",
          "Para quem é: públicos, perfis e ganhos por utilizador.",
          "Impacto: resultados esperados, indicadores e ODS.",
          "Mercado: oportunidade, contexto e posicionamento.",
          "Modelo de negócio: receita, planos e sustentabilidade.",
        ],
      },
      {
        title: "Apoio",
        items: [
          "FAQ: dúvidas frequentes e objeções principais.",
          "Contato: CTA para piloto, formulário e canais.",
        ],
      },
      {
        title: "Footer curto sugerido",
        body: [
          "Impact Flow liga formação social, dados de competência e empregabilidade real.",
        ],
      },
    ],
  },
];

export const landingPageMap = new Map(landingPages.map((page) => [page.slug, page]));

export const siteNavLinks = [
  { label: "Problema", href: "/problema" },
  { label: "Solução", href: "/solucao" },
  { label: "Produto", href: "/produto" },
  { label: "Como funciona", href: "/como-funciona" },
  { label: "Para quem é", href: "/publicos" },
  { label: "Impacto", href: "/impacto" },
  { label: "FAQ", href: "/faq" },
];

export const siteFooterColumns = [
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
    title: "Apoio",
    links: [
      { label: "Modelo de negócio", href: "/modelo-negocio" },
      { label: "FAQ", href: "/faq" },
      { label: "Contato", href: "/contato" },
      { label: "Mapa do site", href: "/mapa-do-site" },
    ],
  },
];
