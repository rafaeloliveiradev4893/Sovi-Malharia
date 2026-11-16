/**
 * Dados da Sovi Malharia.
 * WhatsApp, endereço, preços, produtos e textos de negócio ficam aqui.
 */

export type GalleryItem = {
  src: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  /** Trecho usado na mensagem do WhatsApp, com concordância pronta. */
  orderName: string;
};

const phone = {
  country: "55",
  area: "75",
  local: "92420483",
  display: "(75) 9242-0483",
};

export const business = {
  name: "Sovi Malharia",
  foundingYear: 2007,
  copyrightYear: 2026,
  title: "Camisetas Personalizadas na Chapada Diamantina | Sovi Malharia",
  description:
    "Malharia e estamparia desde 2007 em Boninal (BA). Camisetas, regatas, moletons e uniformes personalizados com serigrafia e sublimação. Atendemos toda a Chapada Diamantina.",
  /**
   * Domínio público com https, sem barra no final.
   * Defina NEXT_PUBLIC_SITE_URL quando o domínio existir.
   * Enquanto estiver vazio, a página funciona e não publica canonical nem sitemap com URL errada.
   */
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "") ?? "",
  phone,
  whatsappE164: `${phone.country}${phone.area}${phone.local}`,
  messages: {
    default:
      "Olá! Vi o site da Sovi Malharia e gostaria de fazer um orçamento de camisetas personalizadas. Pode me ajudar?",
  },
  instagram: "https://www.instagram.com/sovi_malharia/",
  instagramHandle: "@sovi_malharia",
  maps: "https://maps.app.goo.gl/67g1zvdj9944JYUM9",
  address: {
    street: "R. Aurélio José de Souza",
    city: "Boninal",
    region: "BA",
    postalCode: "46740-000",
    country: "BR",
    line: "R. Aurélio José de Souza - Boninal, BA, 46740-000",
  },
  hours: {
    summary: "Segunda a sexta, 8h às 18h. Sábado, 8h às 12h.",
    short: "Segunda a sábado",
    blocks: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        days: ["Saturday"],
        opens: "08:00",
        closes: "12:00",
      },
    ],
  },
  price: {
    from: 36,
    to: 46,
    minimumPieces: 10,
    leadTimeDays: 14,
    depositPercent: 50,
  },
  payments: [
    "Pix",
    "Cartão de crédito à vista",
    "Cartão de débito à vista",
    "Dinheiro",
  ],
  logo: {
    src: "/images/logo/logo.svg",
    alt: "Logotipo da Sovi Malharia",
    width: 440,
    height: 96,
  },
  nav: [
    { href: "#produtos", label: "Produtos" },
    { href: "#como-funciona", label: "Como funciona" },
    { href: "#galeria", label: "Galeria" },
    { href: "#contato", label: "Contato" },
  ],
  seals: ["Desde 2007", "Mínimo de 10 peças", "Entrega para toda a região"],
  trust: [
    "Desde 2007",
    "Serigrafia e sublimação",
    "Mínimo 10 peças",
    "Prazo médio de 14 dias",
    "Atendimento de segunda a sábado",
  ],
  products: [
    {
      id: "camisetas",
      name: "Camisetas",
      description:
        "Peças para eventos, equipes, escolas e empresas, com a arte em serigrafia ou sublimação total.",
      orderName: "camisetas personalizadas",
    },
    {
      id: "regatas",
      name: "Regatas",
      description:
        "Modelo leve para grupos, esportes e ações em que a peça precisa ser simples e identificada.",
      orderName: "regatas personalizadas",
    },
    {
      id: "moletons",
      name: "Moletons",
      description:
        "Opção para uniforme de equipe e para o clima mais ameno da região, com personalização na frente e nas costas.",
      orderName: "moletons personalizados",
    },
    {
      id: "uniformes",
      name: "Uniformes",
      description:
        "Padronização de arte e tamanhos para empresas, escolas e equipes.",
      orderName: "uniformes personalizados",
    },
    {
      id: "sacolas",
      name: "Sacolas",
      description:
        "Sacolas em malha para eventos, lojas e ações institucionais.",
      orderName: "sacolas personalizadas",
    },
  ] satisfies Product[],
  techniques: [
    {
      id: "serigrafia",
      name: "Serigrafia",
      text: "A tinta é aplicada por tela, cor a cor. A técnica é indicada para quantidades maiores e para artes com cores sólidas. Atende malhas como PV, poliéster e outras.",
    },
    {
      id: "sublimacao",
      name: "Sublimação total",
      text: "A estampa pode cobrir a peça inteira, com cores contínuas e sem limite prático de área. A sublimação total é feita em malha de poliéster e serve para artes com muitos detalhes.",
    },
  ],
  steps: [
    "Você envia sua arte ou pede ajuda para criar o design.",
    "Confirmamos quantidade, tamanho e técnica.",
    "Você paga 50% para iniciar a produção.",
    "Produzimos em cerca de 14 dias.",
    "Entregamos, e você paga os 50% restantes.",
  ],
  audience: [
    {
      title: "Empresas",
      text: "Uniformes e peças para a equipe, com a mesma arte em todos os tamanhos.",
    },
    {
      title: "Escolas",
      text: "Camisetas de turma, formaturas e eventos escolares.",
    },
    {
      title: "Eventos",
      text: "Peças com a data e a arte do encontro.",
    },
    {
      title: "Grupos",
      text: "Identificação para equipes, viagens e ações coletivas.",
    },
    {
      title: "Pousadas",
      text: "Peças para a equipe e para o hóspede reconhecer a casa.",
    },
    {
      title: "Festas",
      text: "Camisetas e outras peças para comemorações.",
    },
    {
      title: "Outros",
      text: "Pedidos de malha personalizada, a partir de 10 peças, podem ser consultados.",
    },
  ],
  region: {
    name: "Chapada Diamantina",
    cities: [
      "Mucugê",
      "Ibicoara",
      "Palmeiras",
      "Lençóis",
      "Andaraí",
      "Seabra",
      "Piatã",
    ],
  },
  faq: [
    {
      question: "Qual a quantidade mínima de peças?",
      answer: "O pedido mínimo é de 10 peças.",
    },
    {
      question: "Quanto tempo leva a produção?",
      answer:
        "O prazo médio de produção é de 14 dias, contados depois da confirmação do pedido e do pagamento da entrada.",
    },
    {
      question: "Vocês fazem o design da arte?",
      answer: "Sim. Fazemos a arte do pedido.",
    },
    {
      question: "Posso enviar a arte pronta?",
      answer: "Sim. O arquivo pode ser enviado em PDF.",
    },
    {
      question: "Quais formas de pagamento vocês aceitam?",
      answer:
        "Pix, cartão de crédito, cartão de débito e dinheiro. No cartão, o pagamento é à vista.",
    },
    {
      question: "Como funciona o pagamento de 50% antes e 50% depois?",
      answer:
        "Metade do valor é paga antes, para iniciar a produção. A outra metade é paga após a entrega.",
    },
    {
      question: "Vocês fazem entrega para outras cidades da região?",
      answer:
        "Sim. A entrega é feita para Boninal e para as outras cidades da Chapada Diamantina. No orçamento, confirmamos a entrega para a sua cidade.",
    },
    {
      question: "Vocês trabalham com boné?",
      answer:
        "Não. Trabalhamos com camisetas, regatas, moletons, uniformes e sacolas.",
    },
    {
      question: "Qual a diferença entre serigrafia e sublimação?",
      answer:
        "A serigrafia, também chamada de silk, aplica a tinta por telas e funciona bem em quantidades maiores e em cores sólidas. A sublimação total transfere a arte para a malha de poliéster e pode estampar a peça inteira, com cores contínuas e sem limite prático de área.",
    },
  ],
  /**
   * Fotos reais em /public/images/galeria.
   * Inclua um item só quando o arquivo existir.
   *
   * {
   *   src: "/images/galeria/camisa-resenha.webp",
   *   alt: "Camisa de time preta e amarela com o número 3, produzida em Boninal",
   *   caption: "Camisa de time",
   *   width: 1200,
   *   height: 1500,
   * }
   */
  gallery: [] as GalleryItem[],
};

export function publicSiteUrl(): string | undefined {
  const url = business.siteUrl;
  if (!url.startsWith("https://")) return undefined;
  return url;
}

export function formatMoney(value: number): string {
  return `R$ ${value}`;
}

export function joinList(items: readonly string[]): string {
  if (items.length <= 1) return items[0] ?? "";
  return `${items.slice(0, -1).join(", ")} e ${items[items.length - 1]}`;
}
