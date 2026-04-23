import { createRootRoute, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsxs, jsx } from "react/jsx-runtime";
const Route$7 = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Amazônia Circular — Conectando o Polo Industrial à Economia Circular" },
      { name: "description", content: "Transformando resíduos industriais em oportunidade. Conecte indústrias geradoras e compradores de aparas e retalhos plásticos no Polo Industrial de Manaus." }
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap" }
    ]
  }),
  shellComponent: RootDocument
});
function RootDocument({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "pt-BR", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      /* @__PURE__ */ jsx(SiteHeader, {}),
      children,
      /* @__PURE__ */ jsx(SiteFooter, {}),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function SiteHeader() {
  return /* @__PURE__ */ jsxs("header", { className: "site-header", children: [
    /* @__PURE__ */ jsxs("a", { href: "/", className: "site-logo", children: [
      /* @__PURE__ */ jsx("img", { src: "/amazonia-circular-logo.png", alt: "Amazônia Circular", className: "logo-img" }),
      /* @__PURE__ */ jsx("span", { className: "logo-text", children: "Amazônia Circular" })
    ] }),
    /* @__PURE__ */ jsxs("nav", { className: "site-nav", children: [
      /* @__PURE__ */ jsx("a", { href: "/", className: "nav-link", children: "Marketplace" }),
      /* @__PURE__ */ jsx("a", { href: "/anuncie", className: "nav-link nav-link-highlight", children: "Anuncie" }),
      /* @__PURE__ */ jsx("a", { href: "/cadastro", className: "nav-link", children: "Cadastre-se" }),
      /* @__PURE__ */ jsx("a", { href: "/sobre", className: "nav-link", children: "Sobre nós" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "header-cta", children: [
      /* @__PURE__ */ jsxs("a", { href: "/anuncie", className: "btn-header-cta", children: [
        /* @__PURE__ */ jsx("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", children: /* @__PURE__ */ jsx("path", { d: "M7 3v8M3 7h8", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round" }) }),
        "Publicar Anúncio"
      ] }),
      /* @__PURE__ */ jsxs("span", { className: "header-location", children: [
        /* @__PURE__ */ jsxs("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", children: [
          /* @__PURE__ */ jsx("path", { d: "M7 1a4 4 0 0 1 4 4c0 3.5-4 8-4 8S3 8.5 3 5a4 4 0 0 1 4-4z", stroke: "currentColor", strokeWidth: "1.4" }),
          /* @__PURE__ */ jsx("circle", { cx: "7", cy: "5", r: "1.5", stroke: "currentColor", strokeWidth: "1.4" })
        ] }),
        "Manaus — PIM"
      ] })
    ] })
  ] });
}
function SiteFooter() {
  return /* @__PURE__ */ jsx("footer", { className: "site-footer", children: /* @__PURE__ */ jsxs("div", { className: "footer-inner", children: [
    /* @__PURE__ */ jsxs("div", { className: "footer-top", children: [
      /* @__PURE__ */ jsxs("div", { className: "footer-brand-col", children: [
        /* @__PURE__ */ jsxs("div", { className: "footer-brand", children: [
          /* @__PURE__ */ jsx("img", { src: "/amazonia-circular-logo.png", alt: "Amazônia Circular", className: "footer-logo-img" }),
          /* @__PURE__ */ jsx("span", { className: "footer-name", children: "Amazônia Circular" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "footer-desc", children: "Transformando resíduos industriais em oportunidade. Conectando o Polo Industrial de Manaus à Economia Circular." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "footer-links-col", children: [
        /* @__PURE__ */ jsx("h4", { className: "footer-col-title", children: "Plataforma" }),
        /* @__PURE__ */ jsx("a", { href: "/", className: "footer-link", children: "Marketplace" }),
        /* @__PURE__ */ jsx("a", { href: "/anuncie", className: "footer-link", children: "Publicar Anúncio" }),
        /* @__PURE__ */ jsx("a", { href: "/cadastro", className: "footer-link", children: "Cadastre-se" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "footer-links-col", children: [
        /* @__PURE__ */ jsx("h4", { className: "footer-col-title", children: "Institucional" }),
        /* @__PURE__ */ jsx("a", { href: "/sobre", className: "footer-link", children: "Sobre nós" }),
        /* @__PURE__ */ jsx("a", { href: "/documentacao-amazonia-circular.pdf", target: "_blank", rel: "noopener noreferrer", className: "footer-link", children: "Documentação" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "footer-links-col", children: [
        /* @__PURE__ */ jsx("h4", { className: "footer-col-title", children: "Localização" }),
        /* @__PURE__ */ jsx("p", { className: "footer-info-text", children: "Manaus — Amazonas" }),
        /* @__PURE__ */ jsx("p", { className: "footer-info-text", children: "Polo Industrial de Manaus" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "footer-bottom", children: /* @__PURE__ */ jsx("p", { className: "footer-copy", children: "© 2026 Amazônia Circular. Todos os direitos reservados." }) })
  ] }) });
}
const $$splitComponentImporter$6 = () => import("./sobre-DivSvbCe.js");
const Route$6 = createFileRoute("/sobre")({
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./cadastro-D08pvzmL.js");
const Route$5 = createFileRoute("/cadastro")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./anuncie-0jJ4HE5T.js");
const Route$4 = createFileRoute("/anuncie")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./index-C7HaluOW.js");
const Route$3 = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const sellers = [
  {
    id: 1,
    name: "Carlos Mendes",
    company: "Recicla AM Ltda",
    cnpj: "12.345.678/0001-90",
    phone: "(92) 3232-4400",
    whatsapp: "(92) 98111-4400",
    location: "Distrito Industrial de Manaus",
    neighborhood: "Distrito Industrial I",
    since: 2011,
    rating: 4.8,
    totalListings: 34,
    totalSales: "4.200 ton",
    verified: true,
    bio: "Empresa especializada em coleta e beneficiamento de aparas plásticas industriais no Polo Industrial de Manaus desde 2011. Trabalhamos com PET, PP e PEAD de origem industrial com rastreabilidade."
  },
  {
    id: 2,
    name: "Ana Figueiredo",
    company: "Plásticos Manaus Comércio",
    cnpj: "23.456.789/0001-11",
    phone: "(92) 3344-5500",
    whatsapp: "(92) 98222-5500",
    location: "Zona Leste, Manaus",
    neighborhood: "Coroado",
    since: 2016,
    rating: 4.5,
    totalListings: 21,
    totalSales: "1.800 ton",
    verified: true,
    bio: "Compra e venda de retalhos plásticos de indústrias da ZFM. Especialidade em PP colorido e PEBD de filmes industriais. Atendimento a grandes volumes."
  },
  {
    id: 3,
    name: "Roberto Tavares",
    company: "IndusRecicle Amazônia S/A",
    cnpj: "34.567.890/0001-22",
    phone: "(92) 3455-6611",
    whatsapp: "(92) 98333-6611",
    location: "Distrito Industrial de Manaus",
    neighborhood: "Distrito Industrial II",
    since: 2008,
    rating: 4.9,
    totalListings: 58,
    totalSales: "11.500 ton",
    verified: true,
    bio: "Maior operador de aparas plásticas do PIM. Infraestrutura completa de triagem, moagem e enfardamento. Certificação ISO 14001. Exportamos para o Sudeste e exterior."
  },
  {
    id: 4,
    name: "Márcia Costa",
    company: "Verde Indústria Reciclagem",
    cnpj: "45.678.901/0001-33",
    phone: "(92) 3566-7722",
    whatsapp: "(92) 98444-7722",
    location: "Zona Norte, Manaus",
    neighborhood: "Flores",
    since: 2019,
    rating: 4.3,
    totalListings: 12,
    totalSales: "620 ton",
    verified: false,
    bio: "Pequena empresa focada em reciclagem de filmes PEBD e sacarias industriais. Coleta em fábricas da Zona Franca com logística própria."
  },
  {
    id: 5,
    name: "Eduardo Souza",
    company: "TechPlast AM Indústria",
    cnpj: "56.789.012/0001-44",
    phone: "(92) 3677-8833",
    whatsapp: "(92) 98555-8833",
    location: "Distrito Industrial de Manaus",
    neighborhood: "Distrito Industrial III",
    since: 2014,
    rating: 4.7,
    totalListings: 29,
    totalSales: "3.100 ton",
    verified: true,
    bio: "Especialistas em ABS, Nylon e polímeros técnicos de segunda linha da indústria eletrônica e de duas rodas. Materiais com análise laboratorial disponível."
  },
  {
    id: 6,
    name: "Sandra Lima",
    company: "PoliMercado Comércio Ltda",
    cnpj: "67.890.123/0001-55",
    phone: "(92) 3788-9944",
    whatsapp: "(92) 98666-9944",
    location: "Zona Sul, Manaus",
    neighborhood: "Praça 14 de Janeiro",
    since: 2013,
    rating: 4.6,
    totalListings: 18,
    totalSales: "2.300 ton",
    verified: true,
    bio: "Comercialização de PVC rígido e flexível proveniente de indústrias de calçados e cabos elétricos. Trabalhamos com moagem e enfardamento por encomenda."
  }
];
const listings = [
  {
    id: 1,
    title: "Aparas de PET Transparente Pós-Industrial",
    plasticType: "PET",
    condition: "limpo",
    quantityKg: 5200,
    pricePerKg: 1.2,
    image: "/img-pet.jpeg",
    shortDescription: "PET cristal limpo, aparas de termoformagem. Sem contaminação. Adequado para extrusão de filamentos e embalagens.",
    description: "Aparas de PET transparente (cristal) provenientes de linha de termoformagem de indústria alimentícia no Polo Industrial de Manaus. Material 100% livre de PVC e outros contaminantes. Disponível a granel ou enfardado (fardos de ~500 kg). Análise de viscosidade disponível sob solicitação. Retirada no galpão ou entrega mediante frete acordado. Produção contínua de ~1.200 kg/semana.",
    seller: sellers[0],
    postedAt: "2026-04-08",
    tags: ["termoformagem", "cristal", "sem-contaminação", "alimentício"]
  },
  {
    id: 2,
    title: "Retalhos de PP Colorido — Mix Industrial",
    plasticType: "PP",
    condition: "misto",
    quantityKg: 8300,
    pricePerKg: 0.85,
    image: "/img-pp.jpeg",
    shortDescription: "Retalhos de PP injetado colorido (mix de cores), origem na indústria de duas rodas e eletroeletrônica da ZFM.",
    description: "Retalhos e canais de injeção de Polipropileno colorido provenientes de diversas fábricas do Polo Industrial. Mix de cores (predominância de preto, cinza e branco). Material não lavado mas sem contaminantes orgânicos. Adequado para moagem e repelotização com masterbach de cobertura. Disponível a granel. Volume médio disponível: 2 toneladas/mês.",
    seller: sellers[1],
    postedAt: "2026-04-09",
    tags: ["injeção", "duas-rodas", "mix-cores", "canais"]
  },
  {
    id: 3,
    title: "Aparas de PEAD Natural — Tambores e Galões",
    plasticType: "PEAD",
    condition: "limpo",
    quantityKg: 3400,
    pricePerKg: 1.45,
    image: "/img-pead.jpeg",
    shortDescription: "PEAD natural (leitoso) de sopro, aparas de fabricação de galões e tambores industriais. Alta pureza.",
    description: "Aparas de PEAD de alta densidade natural provenientes de processo de sopro de galões de 5L e tambores de 20L em indústria química do PIM. Material limpo, separado na fonte, sem mistura de outros plásticos. Excelente para reciclagem direta ou mistura com PEAD virgem. Fardos de 400–600 kg. Frequência de geração: semanal. Disponibilidade de nota fiscal e MTRR.",
    seller: sellers[2],
    postedAt: "2026-04-07",
    tags: ["sopro", "galões", "tambores", "natural", "monomaterial"]
  },
  {
    id: 4,
    title: "Filme PEBD Misto — Sacarias e Embalagens",
    plasticType: "PEBD",
    condition: "misto",
    quantityKg: 12800,
    pricePerKg: 0.65,
    image: "/materiais-pebd.jpeg",
    shortDescription: "Filme de polietileno de baixa densidade misto (stretch, sacaria, bag), geração industrial. Grande volume disponível.",
    description: "Filmes de PEBD provenientes de embalagens secundárias de indústrias eletrônicas e alimentícias da ZFM. Mix de stretch wrap transparente, sacaria BOPP e filmes impressos. Material prensado em fardos de ~300 kg. Teor de umidade controlado. Grande estoque disponível para compra imediata. Possibilidade de fornecimento contínuo (±3 ton/semana). Preço negociável para volumes acima de 10 toneladas.",
    seller: sellers[3],
    postedAt: "2026-04-10",
    tags: ["filme", "stretch", "sacaria", "grande-volume"]
  },
  {
    id: 5,
    title: "Aparas de ABS Preto — Carcaças Eletrônicas",
    plasticType: "ABS",
    condition: "limpo",
    quantityKg: 1600,
    pricePerKg: 2.1,
    image: "/img-abs.jpeg",
    shortDescription: "ABS preto de alta qualidade proveniente de rejeitos de carcaças de TVs e eletrodomésticos. Material técnico selecionado.",
    description: "Aparas e rejeitos de ABS preto provenientes de linha de injeção de carcaças de televisores e eletrodomésticos de grande fabricante da ZFM. Material selecionado, sem mistura de PS ou HIPS. Analisado por infravermelho (FTIR) com laudo disponível. Adequado para reciclagem técnica e reprocessamento. Disponível triturado (granulometria ~10mm) ou em aparas grandes. Volume mensal: ~400 kg.",
    seller: sellers[4],
    postedAt: "2026-04-06",
    tags: ["técnico", "eletrônicos", "FTIR", "carcaças", "injeção"]
  },
  {
    id: 6,
    title: "Retalhos de PVC Rígido — Solado e Perfis",
    plasticType: "PVC",
    condition: "misto",
    quantityKg: 6900,
    pricePerKg: 0.75,
    image: "/img-pvc.jpeg",
    shortDescription: "PVC rígido de aparas de solado calçadista e perfis de janelas. Coloração mista (preto e cinza).",
    description: "Retalhos de PVC rígido oriundos de indústria calçadista e fabricação de esquadrias. Mix de PVC composto e não-plastificado. Cores predominantes: preto e cinza. Material não contaminado com PVC flexível. Adequado para moagem e re-extrusão para perfis. Disponível a granel em bags de 1000 kg (Big Bag). Geração contínua. Nota fiscal disponível com CFOP 5928.",
    seller: sellers[5],
    postedAt: "2026-04-11",
    tags: ["calçadista", "perfis", "rígido", "big-bag"]
  },
  {
    id: 7,
    title: "Aparas de PS Cristal — Copos e Descartáveis",
    plasticType: "PS",
    condition: "limpo",
    quantityKg: 2500,
    pricePerKg: 1.05,
    image: "/img-ps.jpeg",
    shortDescription: "PS cristal (poliestireno) limpo de aparas de termoformagem de descartáveis. Sem HIPS. Transparente.",
    description: "Aparas de poliestireno cristal (GPPS) provenientes de linha de termoformagem de copos e bandejas descartáveis. Material transparente, limpo, sem mistura com HIPS ou EPS. Enfardado em fardos de 200 kg. Alta fluidez, adequado para extrusão de filmes ou injeção de peças transparentes. Volume disponível: 2.500 kg. Geração quinzenal de ~600 kg.",
    seller: sellers[0],
    postedAt: "2026-04-05",
    tags: ["cristal", "descartáveis", "termoformagem", "transparente"]
  },
  {
    id: 8,
    title: "Nylon 6 Moído — Peças Automotivas",
    plasticType: "NYLON",
    condition: "limpo",
    quantityKg: 840,
    pricePerKg: 3.2,
    image: "/img-nylon.jpeg",
    shortDescription: "PA6 (Nylon 6) moído de rejeitos de peças automotivas e de duas rodas. Material técnico com alto valor agregado.",
    description: "Nylon 6 (Poliamida 6) proveniente de rejeitos de injeção de peças de motocicletas e componentes automotivos de fábricas do Polo Industrial. Material moído em granulometria de 6–8 mm. Umidade controlada (<0.3%). Laudo de identificação por FTIR disponível. Adequado para reprocessamento e mistura com PA6 virgem ou carga de fibra de vidro. Volume limitado: lote único de 840 kg. Consultar sobre próximos lotes.",
    seller: sellers[4],
    postedAt: "2026-04-03",
    tags: ["técnico", "automotivo", "duas-rodas", "PA6", "alto-valor"]
  },
  {
    id: 9,
    title: "PP Copolímero Injetado — Mix de Peças",
    plasticType: "PP",
    condition: "misto",
    quantityKg: 4600,
    pricePerKg: 0.9,
    image: "/img-pp.jpeg",
    shortDescription: "Copolímero PP de canais e rejeitos de injeção de linha eletroeletrônica. Mix de peças diversas.",
    description: "Polipropileno copolímero (PPc) proveniente de canais de injeção e rejeitos de start-up de produção da indústria eletroeletrônica. Material não separado por cor (mix cinza, preto, bege). Sem mistura com PE ou ABS. Testado por flotação. Disponível a granel para retirada imediata. Volume médio: 1.000 kg/mês. Aceita-se proposta para contrato de fornecimento mensal.",
    seller: sellers[2],
    postedAt: "2026-04-12",
    tags: ["copolímero", "eletroeletrônico", "canais", "contrato"]
  },
  {
    id: 10,
    title: "PET Verde Pré-Lavado — Lote Premium",
    plasticType: "PET",
    condition: "limpo",
    quantityKg: 3100,
    pricePerKg: 1.35,
    image: "/img-pet.jpeg",
    shortDescription: "PET verde de aparas de frascos cosméticos, pré-lavado e selecionado. Lote premium com rastreabilidade.",
    description: "Aparas de PET verde provenientes exclusivamente de linha de produção de frascos cosméticos. Material pré-lavado com água quente, livre de rótulos e adesivos. Viscosidade intrínseca: ~0.72 dL/g (laudo disponível). Cor uniforme verde esmeralda. Embalado em fardos de 400 kg com identificação de lote. Adequado para extrusão de filamentos de alta qualidade ou garrafas recicladas. Lote único com rastreabilidade completa.",
    seller: sellers[3],
    postedAt: "2026-04-04",
    tags: ["cosmético", "premium", "pré-lavado", "rastreabilidade", "verde"]
  },
  {
    id: 11,
    title: "Aparas de Acrílico PMMA — Sinalização",
    plasticType: "ACRILICO",
    condition: "limpo",
    quantityKg: 720,
    pricePerKg: 2.8,
    image: "/img-acrilico.jpeg",
    shortDescription: "Acrílico (PMMA) transparente de aparas de corte CNC de indústria de sinalização. Espessuras variadas.",
    description: "Aparas e recortes de PMMA (polimetilmetacrilato) transparente provenientes de indústria de sinalização e displays comerciais. Mix de espessuras (3, 5 e 8 mm). Sem mistura com policarbonato. Material limpo, sem películas protetoras. Adequado para moagem e reprocessamento em extrusora. Volume disponível: 720 kg. Geração irregular (lotes avulsos).",
    seller: sellers[5],
    postedAt: "2026-04-01",
    tags: ["PMMA", "sinalização", "transparente", "corte-CNC"]
  },
  {
    id: 12,
    title: "PEAD Colorido — Bombonas e Embalagens",
    plasticType: "PEAD",
    condition: "contaminado",
    quantityKg: 5800,
    pricePerKg: 0.7,
    image: "/img-pead.jpeg",
    shortDescription: "PEAD colorido de sopro (amarelo, azul, preto) com resíduos internos de produtos químicos. Para lavagem.",
    description: "Aparas e carcaças de PEAD colorido (bombonas, galões e embalagens) provenientes de fabricante de produtos de limpeza e solventes. Material com contaminação interna de resíduos do produto original (requer lavagem industrial). Cores: amarelo (60%), azul (25%), preto (15%). Preço baixo compensa investimento em lavagem. Volume elevado com disponibilidade imediata. Não indicado para alimentício após reciclagem.",
    seller: sellers[2],
    postedAt: "2026-04-13",
    tags: ["sopro", "bombonas", "colorido", "lavagem-necessária", "volume"]
  }
];
const plasticTypeLabels = {
  PET: "PET — Polietileno Tereftalato",
  PEAD: "PEAD — Polietileno Alta Densidade",
  PP: "PP — Polipropileno",
  PEBD: "PEBD — Polietileno Baixa Densidade",
  PVC: "PVC — Policloreto de Vinila",
  PS: "PS — Poliestireno",
  ABS: "ABS — Acrilonitrila Butadieno",
  NYLON: "Nylon — Poliamida",
  ACRILICO: "Acrílico — PMMA"
};
const conditionLabels = {
  limpo: "Limpo",
  contaminado: "Contaminado",
  misto: "Misto"
};
const $$splitComponentImporter$2 = () => import("./_productId-CVykVAib.js");
const Route$2 = createFileRoute("/products/$productId")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component"),
  loader: async ({
    params
  }) => {
    const listing = listings.find((l) => l.id === +params.productId);
    if (!listing) throw new Error("Anúncio não encontrado");
    return listing;
  }
});
const $$splitComponentImporter$1 = () => import("./success-BIa7ErY0.js");
const Route$1 = createFileRoute("/checkout/success")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./cancel-Dp8ynbO9.js");
const Route = createFileRoute("/checkout/cancel")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const SobreRoute = Route$6.update({
  id: "/sobre",
  path: "/sobre",
  getParentRoute: () => Route$7
});
const CadastroRoute = Route$5.update({
  id: "/cadastro",
  path: "/cadastro",
  getParentRoute: () => Route$7
});
const AnuncieRoute = Route$4.update({
  id: "/anuncie",
  path: "/anuncie",
  getParentRoute: () => Route$7
});
const IndexRoute = Route$3.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$7
});
const ProductsProductIdRoute = Route$2.update({
  id: "/products/$productId",
  path: "/products/$productId",
  getParentRoute: () => Route$7
});
const CheckoutSuccessRoute = Route$1.update({
  id: "/checkout/success",
  path: "/checkout/success",
  getParentRoute: () => Route$7
});
const CheckoutCancelRoute = Route.update({
  id: "/checkout/cancel",
  path: "/checkout/cancel",
  getParentRoute: () => Route$7
});
const rootRouteChildren = {
  IndexRoute,
  AnuncieRoute,
  CadastroRoute,
  SobreRoute,
  CheckoutCancelRoute,
  CheckoutSuccessRoute,
  ProductsProductIdRoute
};
const routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const router2 = createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route$2 as R,
  conditionLabels as c,
  listings as l,
  plasticTypeLabels as p,
  router as r,
  sellers as s
};
