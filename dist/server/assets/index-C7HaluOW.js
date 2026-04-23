import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { memo, useState } from "react";
import { c as conditionLabels, l as listings, s as sellers } from "./router-BbJrEQoA.js";
import { Link } from "@tanstack/react-router";
import { C as ContactModal } from "./ContactModal-Bx-mmTO4.js";
const ALL_TYPES = ["PET", "PEAD", "PP", "PEBD", "PVC", "PS", "ABS", "NYLON", "ACRILICO"];
const ALL_CONDITIONS = ["limpo", "misto", "contaminado"];
const conditionLabel = {
  limpo: "Limpo",
  misto: "Misto",
  contaminado: "Contaminado"
};
const plasticDescriptions = {
  PET: "Polietileno tereftalato",
  PEAD: "Polietileno de alta densidade",
  PP: "Polipropileno",
  PEBD: "Polietileno de baixa densidade",
  PVC: "Policloreto de Vinila",
  PS: "Poliestireno",
  ABS: "Acrilonitrila Butadieno Estireno",
  NYLON: "Poliamida",
  ACRILICO: "Polimetilmetacrilato"
};
function SearchFilter({
  search,
  onSearchChange,
  selectedTypes,
  onTypeToggle,
  selectedConditions,
  onConditionToggle,
  minQty,
  onMinQtyChange,
  maxPrice,
  onMaxPriceChange,
  onClear,
  totalResults
}) {
  const hasFilters = search || selectedTypes.length || selectedConditions.length || minQty || maxPrice;
  return /* @__PURE__ */ jsxs("aside", { className: "filter-sidebar", children: [
    /* @__PURE__ */ jsxs("div", { className: "filter-header", children: [
      /* @__PURE__ */ jsx("span", { className: "filter-title", children: "Filtros" }),
      hasFilters && /* @__PURE__ */ jsx("button", { className: "filter-clear", onClick: onClear, children: "Limpar" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "filter-results-count", children: [
      totalResults,
      " anúncio",
      totalResults !== 1 ? "s" : ""
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "filter-search", children: [
      /* @__PURE__ */ jsxs("svg", { className: "search-icon", width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", children: [
        /* @__PURE__ */ jsx("circle", { cx: "7", cy: "7", r: "5.5", stroke: "currentColor", strokeWidth: "1.5" }),
        /* @__PURE__ */ jsx("path", { d: "M11.5 11.5l3 3", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" })
      ] }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "search",
          placeholder: "Buscar por tipo, descrição...",
          value: search,
          onChange: (e) => onSearchChange(e.target.value),
          className: "search-input"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "filter-section", children: [
      /* @__PURE__ */ jsx("div", { className: "filter-section-title", children: "Tipo de plástico" }),
      /* @__PURE__ */ jsx("div", { className: "filter-chips", children: ALL_TYPES.map((type) => /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => onTypeToggle(type),
          className: `filter-chip ${selectedTypes.includes(type) ? "active" : ""}`,
          title: plasticDescriptions[type],
          children: type
        },
        type
      )) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "filter-section", children: [
      /* @__PURE__ */ jsx("div", { className: "filter-section-title", children: "Condição" }),
      /* @__PURE__ */ jsx("div", { className: "filter-conditions", children: ALL_CONDITIONS.map((cond) => /* @__PURE__ */ jsxs("label", { className: "condition-check", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "checkbox",
            checked: selectedConditions.includes(cond),
            onChange: () => onConditionToggle(cond)
          }
        ),
        /* @__PURE__ */ jsx("span", { className: `condition-dot condition-${cond}` }),
        /* @__PURE__ */ jsx("span", { children: conditionLabel[cond] })
      ] }, cond)) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "filter-section", children: [
      /* @__PURE__ */ jsx("div", { className: "filter-section-title", children: "Quantidade mínima (kg)" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "number",
          placeholder: "Ex: 1000",
          value: minQty,
          onChange: (e) => onMinQtyChange(e.target.value),
          className: "filter-number-input",
          min: "0"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "filter-section", children: [
      /* @__PURE__ */ jsx("div", { className: "filter-section-title", children: "Preço máximo (R$/kg)" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "number",
          placeholder: "Ex: 2.00",
          value: maxPrice,
          onChange: (e) => onMaxPriceChange(e.target.value),
          className: "filter-number-input",
          min: "0",
          step: "0.05"
        }
      )
    ] })
  ] });
}
const ListingCard = memo(function ListingCard2({ listing, onContact }) {
  return /* @__PURE__ */ jsxs("article", { className: "listing-card", children: [
    /* @__PURE__ */ jsxs(
      Link,
      {
        to: "/products/$productId",
        params: { productId: listing.id.toString() },
        className: "listing-card-link",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "listing-card-image", children: [
            /* @__PURE__ */ jsx("div", { className: "listing-type-badge", children: listing.plasticType }),
            /* @__PURE__ */ jsx("img", { src: listing.image, alt: listing.title })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "listing-card-body", children: [
            /* @__PURE__ */ jsxs("div", { className: "listing-card-meta", children: [
              /* @__PURE__ */ jsx("span", { className: `condition-tag condition-${listing.condition}`, children: conditionLabels[listing.condition] }),
              /* @__PURE__ */ jsx("span", { className: "listing-date", children: new Date(listing.postedAt).toLocaleDateString("pt-BR", { day: "2-digit", month: "short" }) })
            ] }),
            /* @__PURE__ */ jsx("h3", { className: "listing-card-title", children: listing.title }),
            /* @__PURE__ */ jsx("p", { className: "listing-card-desc", children: listing.shortDescription }),
            /* @__PURE__ */ jsx("div", { className: "listing-card-tags", children: listing.tags.slice(0, 3).map((tag) => /* @__PURE__ */ jsxs("span", { className: "listing-tag", children: [
              "#",
              tag
            ] }, tag)) })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "listing-card-footer", children: [
      /* @__PURE__ */ jsxs("div", { className: "listing-card-info", children: [
        /* @__PURE__ */ jsxs("div", { className: "listing-price", children: [
          /* @__PURE__ */ jsxs("span", { className: "price-value", children: [
            "R$ ",
            listing.pricePerKg.toFixed(2)
          ] }),
          /* @__PURE__ */ jsx("span", { className: "price-unit", children: "/kg" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "listing-qty", children: [
          listing.quantityKg.toLocaleString("pt-BR"),
          " kg disponíveis"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "listing-card-seller", children: [
        /* @__PURE__ */ jsx("span", { className: "seller-name", children: listing.seller.company }),
        /* @__PURE__ */ jsxs("div", { className: "seller-location", children: [
          /* @__PURE__ */ jsxs("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: [
            /* @__PURE__ */ jsx("path", { d: "M6 1a3.5 3.5 0 0 1 3.5 3.5C9.5 7.5 6 11 6 11S2.5 7.5 2.5 4.5A3.5 3.5 0 0 1 6 1z", stroke: "currentColor", strokeWidth: "1.2" }),
            /* @__PURE__ */ jsx("circle", { cx: "6", cy: "4.5", r: "1.2", stroke: "currentColor", strokeWidth: "1.2" })
          ] }),
          listing.seller.neighborhood
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "btn-contact",
          onClick: (e) => {
            e.preventDefault();
            onContact(listing);
          },
          children: "Negociar"
        }
      )
    ] })
  ] });
});
function HeroSection({}) {
  return /* @__PURE__ */ jsx("section", { className: "hero-section", children: /* @__PURE__ */ jsxs("div", { className: "hero-inner", children: [
    /* @__PURE__ */ jsx("div", { className: "hero-eyebrow", children: "Polo Industrial de Manaus · Economia Circular" }),
    /* @__PURE__ */ jsxs("h1", { className: "hero-title", children: [
      "Amazônia",
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("span", { className: "hero-accent", children: "Circular" })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "hero-sub", children: "Transformando resíduos industriais em oportunidade. Conectando indústrias geradoras e compradores de PET, PEAD, PP, ABS e outros polímeros pós-industriais no PIM." }),
    /* @__PURE__ */ jsxs("div", { className: "hero-stats", children: [
      /* @__PURE__ */ jsxs("div", { className: "hero-stat", children: [
        /* @__PURE__ */ jsx("span", { className: "stat-value", children: listings.length }),
        /* @__PURE__ */ jsx("span", { className: "stat-label", children: "anúncios ativos" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "hero-stat", children: [
        /* @__PURE__ */ jsx("span", { className: "stat-value", children: sellers.length }),
        /* @__PURE__ */ jsx("span", { className: "stat-label", children: "vendedores" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "hero-stat", children: [
        /* @__PURE__ */ jsxs("span", { className: "stat-value", children: [
          (listings.reduce((s, l) => s + l.quantityKg, 0) / 1e3).toFixed(0),
          "t"
        ] }),
        /* @__PURE__ */ jsx("span", { className: "stat-label", children: "toneladas disponíveis" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "hero-actions", children: [
      /* @__PURE__ */ jsx(Link, { to: "/anuncie", className: "btn-primary btn-large", children: "Publicar Anúncio" }),
      /* @__PURE__ */ jsx(Link, { to: "/cadastro", className: "btn-secondary btn-large", children: "Cadastre-se" })
    ] })
  ] }) });
}
function SellersGrid() {
  return /* @__PURE__ */ jsx("div", { className: "sellers-grid", children: sellers.map((seller) => /* @__PURE__ */ jsxs("article", { className: "seller-card", children: [
    /* @__PURE__ */ jsxs("div", { className: "seller-card-header", children: [
      /* @__PURE__ */ jsx("div", { className: "seller-avatar", children: seller.company.charAt(0) }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "seller-company-name", children: [
          seller.company,
          seller.verified && /* @__PURE__ */ jsxs("span", { className: "verified-badge", title: "Vendedor verificado", children: [
            /* @__PURE__ */ jsx("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", children: /* @__PURE__ */ jsx("path", { d: "M7 1l1.4 2.8 3.1.5-2.25 2.2.53 3.1L7 8.15 4.22 9.6l.53-3.1L2.5 4.3l3.1-.5z", fill: "#1a6b2a" }) }),
            "Verificado"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "seller-location-line", children: [
          /* @__PURE__ */ jsxs("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: [
            /* @__PURE__ */ jsx("path", { d: "M6 1a3.5 3.5 0 0 1 3.5 3.5C9.5 7.5 6 11 6 11S2.5 7.5 2.5 4.5A3.5 3.5 0 0 1 6 1z", stroke: "currentColor", strokeWidth: "1.2" }),
            /* @__PURE__ */ jsx("circle", { cx: "6", cy: "4.5", r: "1.2", stroke: "currentColor", strokeWidth: "1.2" })
          ] }),
          seller.neighborhood,
          " · Desde ",
          seller.since
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "seller-bio", children: seller.bio }),
    /* @__PURE__ */ jsxs("div", { className: "seller-stats", children: [
      /* @__PURE__ */ jsxs("div", { className: "seller-stat", children: [
        /* @__PURE__ */ jsx("span", { className: "sstat-val", children: seller.rating }),
        /* @__PURE__ */ jsx("span", { className: "sstat-label", children: "avaliação" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "seller-stat", children: [
        /* @__PURE__ */ jsx("span", { className: "sstat-val", children: seller.totalListings }),
        /* @__PURE__ */ jsx("span", { className: "sstat-label", children: "anúncios" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "seller-stat", children: [
        /* @__PURE__ */ jsx("span", { className: "sstat-val", children: seller.totalSales }),
        /* @__PURE__ */ jsx("span", { className: "sstat-label", children: "negociadas" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "seller-contact-info", children: [
      /* @__PURE__ */ jsx("span", { children: seller.phone }),
      /* @__PURE__ */ jsxs("span", { className: "whatsapp-tag", children: [
        "WhatsApp: ",
        seller.whatsapp
      ] })
    ] })
  ] }, seller.id)) });
}
function CTAs() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("section", { className: "home-cta-section", children: /* @__PURE__ */ jsxs("div", { className: "home-cta-inner", children: [
      /* @__PURE__ */ jsxs("div", { className: "home-cta-card", children: [
        /* @__PURE__ */ jsx("div", { className: "home-cta-icon", children: /* @__PURE__ */ jsx("svg", { width: "32", height: "32", viewBox: "0 0 32 32", fill: "none", children: /* @__PURE__ */ jsx("path", { d: "M16 4v24M4 16h24", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round" }) }) }),
        /* @__PURE__ */ jsx("h3", { children: "Tem material para vender?" }),
        /* @__PURE__ */ jsx("p", { children: "Publique seu anúncio gratuitamente e alcance compradores do Polo Industrial." }),
        /* @__PURE__ */ jsx(Link, { to: "/anuncie", className: "btn-primary", children: "Publicar Anúncio" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "home-cta-card", children: [
        /* @__PURE__ */ jsx("div", { className: "home-cta-icon", children: /* @__PURE__ */ jsxs("svg", { width: "32", height: "32", viewBox: "0 0 32 32", fill: "none", children: [
          /* @__PURE__ */ jsx("path", { d: "M22 21v-2a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v2", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }),
          /* @__PURE__ */ jsx("circle", { cx: "16", cy: "9", r: "4", stroke: "currentColor", strokeWidth: "2" })
        ] }) }),
        /* @__PURE__ */ jsx("h3", { children: "Cadastre-se na plataforma" }),
        /* @__PURE__ */ jsx("p", { children: "Vendedores e compradores: faça seu cadastro e acesse todas as funcionalidades." }),
        /* @__PURE__ */ jsx(Link, { to: "/cadastro", className: "btn-primary", children: "Criar Conta" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "home-about-teaser", children: /* @__PURE__ */ jsxs("div", { className: "home-about-inner", children: [
      /* @__PURE__ */ jsx("img", { src: "/amazonia-brand.png", alt: "Amazônia Circular", className: "about-teaser-img" }),
      /* @__PURE__ */ jsxs("div", { className: "about-teaser-text", children: [
        /* @__PURE__ */ jsx("span", { className: "about-teaser-label", children: "Sobre nós" }),
        /* @__PURE__ */ jsx("h3", { children: "Transformando resíduos industriais em oportunidade" }),
        /* @__PURE__ */ jsx("p", { children: "A Amazônia Circular é uma plataforma que conecta indústrias geradoras de aparas plásticas a empresas recicladoras e transformadoras, promovendo a economia circular no Polo Industrial de Manaus." }),
        /* @__PURE__ */ jsxs(Link, { to: "/sobre", className: "about-teaser-link", children: [
          "Conheça o projeto",
          /* @__PURE__ */ jsx("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", children: /* @__PURE__ */ jsx("path", { d: "M3 8h10M9 4l4 4-4 4", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) })
        ] })
      ] })
    ] }) })
  ] });
}
function MarketplaceHome() {
  const [search, setSearch] = useState("");
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedConditions, setSelectedConditions] = useState([]);
  const [minQty, setMinQty] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [contactListing, setContactListing] = useState(null);
  const [activeTab, setActiveTab] = useState("listings");
  const toggleType = (t) => setSelectedTypes((prev) => prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]);
  const toggleCondition = (c) => setSelectedConditions((prev) => prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]);
  const clearFilters = () => {
    setSearch("");
    setSelectedTypes([]);
    setSelectedConditions([]);
    setMinQty("");
    setMaxPrice("");
  };
  const filtered = listings.filter((l) => {
    if (search && !l.title.toLowerCase().includes(search.toLowerCase()) && !l.plasticType.toLowerCase().includes(search.toLowerCase()) && !l.shortDescription.toLowerCase().includes(search.toLowerCase()) && !l.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()))) return false;
    if (selectedTypes.length && !selectedTypes.includes(l.plasticType)) return false;
    if (selectedConditions.length && !selectedConditions.includes(l.condition)) return false;
    if (minQty && l.quantityKg < parseInt(minQty)) return false;
    if (maxPrice && l.pricePerKg > parseFloat(maxPrice)) return false;
    return true;
  });
  return /* @__PURE__ */ jsxs("main", { className: "marketplace-main", children: [
    /* @__PURE__ */ jsx(HeroSection, { onTypeSelect: (type) => {
      setActiveTab("listings");
      setSelectedTypes([type]);
    } }),
    /* @__PURE__ */ jsxs("div", { className: "marketplace-tabs", children: [
      /* @__PURE__ */ jsx("button", { className: `tab-btn ${activeTab === "listings" ? "active" : ""}`, onClick: () => setActiveTab("listings"), children: "Anúncios" }),
      /* @__PURE__ */ jsx("button", { className: `tab-btn ${activeTab === "sellers" ? "active" : ""}`, onClick: () => setActiveTab("sellers"), children: "Vendedores" })
    ] }),
    activeTab === "listings" ? /* @__PURE__ */ jsxs("div", { className: "marketplace-layout", children: [
      /* @__PURE__ */ jsx(SearchFilter, { search, onSearchChange: setSearch, selectedTypes, onTypeToggle: toggleType, selectedConditions, onConditionToggle: toggleCondition, minQty, onMinQtyChange: setMinQty, maxPrice, onMaxPriceChange: setMaxPrice, onClear: clearFilters, totalResults: filtered.length }),
      /* @__PURE__ */ jsx("div", { className: "listings-grid", children: filtered.length === 0 ? /* @__PURE__ */ jsxs("div", { className: "empty-state", children: [
        /* @__PURE__ */ jsx("div", { className: "empty-icon", children: /* @__PURE__ */ jsxs("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", children: [
          /* @__PURE__ */ jsx("rect", { x: "8", y: "14", width: "32", height: "26", rx: "3", stroke: "currentColor", strokeWidth: "2" }),
          /* @__PURE__ */ jsx("path", { d: "M16 14V10a8 8 0 0 1 16 0v4", stroke: "currentColor", strokeWidth: "2" }),
          /* @__PURE__ */ jsx("path", { d: "M20 26h8M24 22v8", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" })
        ] }) }),
        /* @__PURE__ */ jsx("h3", { children: "Nenhum anúncio encontrado" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Tente ajustar os filtros ou ",
          /* @__PURE__ */ jsx("button", { onClick: clearFilters, className: "link-btn", children: "limpar todos" }),
          "."
        ] })
      ] }) : filtered.map((listing) => /* @__PURE__ */ jsx(ListingCard, { listing, onContact: setContactListing }, listing.id)) })
    ] }) : /* @__PURE__ */ jsx(SellersGrid, {}),
    /* @__PURE__ */ jsx(ContactModal, { isOpen: !!contactListing, onClose: () => setContactListing(null), listingTitle: contactListing?.title ?? "", listingId: contactListing?.id ?? 0, sellerCompany: contactListing?.seller.company ?? "" }),
    /* @__PURE__ */ jsx(CTAs, {})
  ] });
}
export {
  MarketplaceHome as component
};
