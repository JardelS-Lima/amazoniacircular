import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { R as Route, l as listings, c as conditionLabels, p as plasticTypeLabels } from "./router-BbJrEQoA.js";
import { C as ContactModal } from "./ContactModal-Bx-mmTO4.js";
function ListingDetail() {
  const listing = Route.useLoaderData();
  const [contactOpen, setContactOpen] = useState(false);
  const related = listings.filter((l) => l.plasticType === listing.plasticType && l.id !== listing.id).slice(0, 3);
  return /* @__PURE__ */ jsxs("main", { className: "detail-main", children: [
    /* @__PURE__ */ jsxs("div", { className: "detail-container", children: [
      /* @__PURE__ */ jsxs(Link, { to: "/", className: "back-link", children: [
        /* @__PURE__ */ jsx("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", children: /* @__PURE__ */ jsx("path", { d: "M10 3L5 8l5 5", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }) }),
        "Voltar aos anúncios"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "detail-grid", children: [
        /* @__PURE__ */ jsxs("div", { className: "detail-image-col", children: [
          /* @__PURE__ */ jsxs("div", { className: "detail-image-wrap", children: [
            /* @__PURE__ */ jsx("div", { className: "detail-type-badge", children: listing.plasticType }),
            /* @__PURE__ */ jsx("img", { src: listing.image, alt: listing.title, className: "detail-image" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "detail-tags-wrap", children: listing.tags.map((tag) => /* @__PURE__ */ jsxs("span", { className: "listing-tag", children: [
            "#",
            tag
          ] }, tag)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "detail-info-col", children: [
          /* @__PURE__ */ jsxs("div", { className: "detail-meta-row", children: [
            /* @__PURE__ */ jsx("span", { className: `condition-tag condition-${listing.condition}`, children: conditionLabels[listing.condition] }),
            /* @__PURE__ */ jsxs("span", { className: "detail-date", children: [
              "Publicado em ",
              new Date(listing.postedAt).toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "long",
                year: "numeric"
              })
            ] })
          ] }),
          /* @__PURE__ */ jsx("h1", { className: "detail-title", children: listing.title }),
          /* @__PURE__ */ jsx("p", { className: "detail-plastic-type", children: plasticTypeLabels[listing.plasticType] }),
          /* @__PURE__ */ jsxs("div", { className: "detail-price-box", children: [
            /* @__PURE__ */ jsxs("div", { className: "detail-price", children: [
              /* @__PURE__ */ jsxs("span", { className: "detail-price-value", children: [
                "R$ ",
                listing.pricePerKg.toFixed(2)
              ] }),
              /* @__PURE__ */ jsx("span", { className: "detail-price-unit", children: "/kg" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "detail-qty-box", children: [
              /* @__PURE__ */ jsxs("span", { className: "detail-qty-value", children: [
                listing.quantityKg.toLocaleString("pt-BR"),
                " kg"
              ] }),
              /* @__PURE__ */ jsx("span", { className: "detail-qty-label", children: "disponíveis" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "detail-total-est", children: [
              "Total estimado: ",
              /* @__PURE__ */ jsxs("strong", { children: [
                "R$ ",
                (listing.pricePerKg * listing.quantityKg).toLocaleString("pt-BR", {
                  minimumFractionDigits: 2
                })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "detail-description", children: listing.description }),
          /* @__PURE__ */ jsx("button", { className: "btn-primary btn-large", onClick: () => setContactOpen(true), children: "Entrar em contato / Negociar" }),
          /* @__PURE__ */ jsxs("div", { className: "seller-panel", children: [
            /* @__PURE__ */ jsx("div", { className: "seller-panel-header", children: "Vendedor" }),
            /* @__PURE__ */ jsxs("div", { className: "seller-panel-body", children: [
              /* @__PURE__ */ jsx("div", { className: "seller-panel-avatar", children: listing.seller.company.charAt(0) }),
              /* @__PURE__ */ jsxs("div", { className: "seller-panel-info", children: [
                /* @__PURE__ */ jsxs("div", { className: "seller-panel-company", children: [
                  listing.seller.company,
                  listing.seller.verified && /* @__PURE__ */ jsxs("span", { className: "verified-badge", children: [
                    /* @__PURE__ */ jsx("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", children: /* @__PURE__ */ jsx("path", { d: "M7 1l1.4 2.8 3.1.5-2.25 2.2.53 3.1L7 8.15 4.22 9.6l.53-3.1L2.5 4.3l3.1-.5z", fill: "#1a6b2a" }) }),
                    "Verificado"
                  ] })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "seller-panel-name", children: listing.seller.name }),
                /* @__PURE__ */ jsxs("div", { className: "seller-panel-location", children: [
                  /* @__PURE__ */ jsxs("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: [
                    /* @__PURE__ */ jsx("path", { d: "M6 1a3.5 3.5 0 0 1 3.5 3.5C9.5 7.5 6 11 6 11S2.5 7.5 2.5 4.5A3.5 3.5 0 0 1 6 1z", stroke: "currentColor", strokeWidth: "1.2" }),
                    /* @__PURE__ */ jsx("circle", { cx: "6", cy: "4.5", r: "1.2", stroke: "currentColor", strokeWidth: "1.2" })
                  ] }),
                  listing.seller.location
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "seller-panel-stats", children: [
              /* @__PURE__ */ jsxs("div", { className: "sp-stat", children: [
                /* @__PURE__ */ jsxs("span", { className: "sp-val", children: [
                  listing.seller.rating,
                  "/5"
                ] }),
                /* @__PURE__ */ jsx("span", { className: "sp-lbl", children: "avaliação" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "sp-stat", children: [
                /* @__PURE__ */ jsx("span", { className: "sp-val", children: listing.seller.totalListings }),
                /* @__PURE__ */ jsx("span", { className: "sp-lbl", children: "anúncios" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "sp-stat", children: [
                /* @__PURE__ */ jsx("span", { className: "sp-val", children: listing.seller.totalSales }),
                /* @__PURE__ */ jsx("span", { className: "sp-lbl", children: "negociadas" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "seller-panel-contacts", children: [
              /* @__PURE__ */ jsxs("div", { className: "sp-contact-item", children: [
                /* @__PURE__ */ jsxs("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", children: [
                  /* @__PURE__ */ jsx("path", { d: "M2 2h10v10H2z", stroke: "currentColor", strokeWidth: "1.2", rx: "1" }),
                  /* @__PURE__ */ jsx("path", { d: "M2 4l5 4 5-4", stroke: "currentColor", strokeWidth: "1.2" })
                ] }),
                listing.seller.phone
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "sp-contact-item whatsapp", children: [
                /* @__PURE__ */ jsxs("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", children: [
                  /* @__PURE__ */ jsx("circle", { cx: "7", cy: "7", r: "6", stroke: "currentColor", strokeWidth: "1.2" }),
                  /* @__PURE__ */ jsx("path", { d: "M4.5 5.5c.2-.5.7-1 1.2-.9.4 0 .6.3.8.6l.4.9c.1.3 0 .6-.2.8l-.3.3c.4.7 1 1.3 1.7 1.7l.3-.3c.2-.2.5-.3.8-.2l.9.4c.3.2.6.4.6.8 0 .5-.4 1-.9 1.2-1.8.7-4.2-1.7-4.2-4-.2-.5.5-1.1.9-1.3z", stroke: "currentColor", strokeWidth: "1.2" })
                ] }),
                "WhatsApp: ",
                listing.seller.whatsapp
              ] })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "seller-panel-bio", children: listing.seller.bio }),
            /* @__PURE__ */ jsxs("p", { className: "seller-panel-since", children: [
              "Ativo no mercado desde ",
              listing.seller.since,
              " · CNPJ: ",
              listing.seller.cnpj
            ] })
          ] })
        ] })
      ] }),
      related.length > 0 && /* @__PURE__ */ jsxs("section", { className: "related-section", children: [
        /* @__PURE__ */ jsxs("h2", { className: "related-title", children: [
          "Outros anúncios de ",
          listing.plasticType
        ] }),
        /* @__PURE__ */ jsx("div", { className: "related-grid", children: related.map((rel) => /* @__PURE__ */ jsxs(Link, { to: "/products/$productId", params: {
          productId: rel.id.toString()
        }, className: "related-card", children: [
          /* @__PURE__ */ jsx("img", { src: rel.image, alt: rel.title, className: "related-card-img" }),
          /* @__PURE__ */ jsxs("div", { className: "related-card-info", children: [
            /* @__PURE__ */ jsx("span", { className: "related-card-title", children: rel.title }),
            /* @__PURE__ */ jsxs("span", { className: "related-card-price", children: [
              "R$ ",
              rel.pricePerKg.toFixed(2),
              "/kg"
            ] })
          ] })
        ] }, rel.id)) })
      ] })
    ] }),
    /* @__PURE__ */ jsx(ContactModal, { isOpen: contactOpen, onClose: () => setContactOpen(false), listingTitle: listing.title, listingId: listing.id, sellerCompany: listing.seller.company })
  ] });
}
export {
  ListingDetail as component
};
