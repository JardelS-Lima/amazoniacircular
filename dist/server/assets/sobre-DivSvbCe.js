import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
function SobrePage() {
  return /* @__PURE__ */ jsx("main", { className: "page-main", children: /* @__PURE__ */ jsxs("div", { className: "page-container", children: [
    /* @__PURE__ */ jsxs("div", { className: "page-hero-banner sobre-hero", children: [
      /* @__PURE__ */ jsx("img", { src: "/amazonia-hero-bg.jpg", alt: "Amazônia Circular", className: "page-hero-img" }),
      /* @__PURE__ */ jsxs("div", { className: "page-hero-overlay", children: [
        /* @__PURE__ */ jsx("h1", { className: "page-hero-title", children: "Sobre o Projeto" }),
        /* @__PURE__ */ jsx("p", { className: "page-hero-sub", children: "Conectando o Polo Industrial de Manaus à Economia Circular" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "sobre-content", children: [
      /* @__PURE__ */ jsxs("section", { className: "sobre-section", children: [
        /* @__PURE__ */ jsxs("div", { className: "sobre-text-block", children: [
          /* @__PURE__ */ jsx("h2", { children: "Amazônia Circular" }),
          /* @__PURE__ */ jsxs("p", { children: [
            "O projeto ",
            /* @__PURE__ */ jsx("strong", { children: "Amazônia Circular" }),
            " nasce da necessidade de criar uma solução eficiente para a gestão e valorização das aparas plásticas geradas pelo Polo Industrial de Manaus (PIM). Com mais de 600 indústrias em operação, o PIM gera um volume significativo de resíduos plásticos pós-industriais que representam tanto um desafio ambiental quanto uma oportunidade econômica."
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            "Nossa plataforma funciona como um ",
            /* @__PURE__ */ jsx("strong", { children: "marketplace especializado" }),
            " que conecta indústrias geradoras de aparas e resíduos plásticos a empresas recicladoras, transformadoras e comerciantes do setor — promovendo a economia circular e a sustentabilidade no coração da Amazônia."
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "sobre-img-block", children: /* @__PURE__ */ jsx("img", { src: "/amazonia-brand.png", alt: "Amazônia Circular — Transformando resíduos em oportunidade" }) })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "sobre-pillars", children: [
        /* @__PURE__ */ jsx("h2", { className: "section-heading", children: "Nossos Pilares" }),
        /* @__PURE__ */ jsxs("div", { className: "pillars-grid", children: [
          /* @__PURE__ */ jsxs("div", { className: "pillar-card", children: [
            /* @__PURE__ */ jsx("div", { className: "pillar-icon", children: /* @__PURE__ */ jsxs("svg", { width: "32", height: "32", viewBox: "0 0 32 32", fill: "none", children: [
              /* @__PURE__ */ jsx("path", { d: "M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2z", stroke: "currentColor", strokeWidth: "2" }),
              /* @__PURE__ */ jsx("path", { d: "M10 16l4 4 8-8", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })
            ] }) }),
            /* @__PURE__ */ jsx("h3", { children: "Sustentabilidade" }),
            /* @__PURE__ */ jsx("p", { children: "Reduzir o envio de resíduos plásticos para aterros, reintroduzindo-os na cadeia produtiva como matéria-prima secundária, diminuindo a pegada ambiental do PIM." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "pillar-card", children: [
            /* @__PURE__ */ jsx("div", { className: "pillar-icon", children: /* @__PURE__ */ jsxs("svg", { width: "32", height: "32", viewBox: "0 0 32 32", fill: "none", children: [
              /* @__PURE__ */ jsx("path", { d: "M4 16c0-6.627 5.373-12 12-12s12 5.373 12 12", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }),
              /* @__PURE__ */ jsx("path", { d: "M28 16c0 6.627-5.373 12-12 12S4 22.627 4 16", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }),
              /* @__PURE__ */ jsx("path", { d: "M20 12l-4-4-4 4M12 20l4 4 4-4", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })
            ] }) }),
            /* @__PURE__ */ jsx("h3", { children: "Economia Circular" }),
            /* @__PURE__ */ jsx("p", { children: "Transformar resíduos industriais em recursos valiosos, criando um ciclo fechado de materiais que gera valor econômico e ambiental para toda a cadeia." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "pillar-card", children: [
            /* @__PURE__ */ jsx("div", { className: "pillar-icon", children: /* @__PURE__ */ jsxs("svg", { width: "32", height: "32", viewBox: "0 0 32 32", fill: "none", children: [
              /* @__PURE__ */ jsx("path", { d: "M22 21v-2a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v2", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }),
              /* @__PURE__ */ jsx("circle", { cx: "16", cy: "9", r: "4", stroke: "currentColor", strokeWidth: "2" }),
              /* @__PURE__ */ jsx("path", { d: "M28 21v-2a4 4 0 0 0-3-3.87M4 21v-2a4 4 0 0 1 3-3.87", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }),
              /* @__PURE__ */ jsx("circle", { cx: "24", cy: "9", r: "3", stroke: "currentColor", strokeWidth: "2" }),
              /* @__PURE__ */ jsx("circle", { cx: "8", cy: "9", r: "3", stroke: "currentColor", strokeWidth: "2" })
            ] }) }),
            /* @__PURE__ */ jsx("h3", { children: "Conexão" }),
            /* @__PURE__ */ jsx("p", { children: "Conectar geradores e compradores de resíduos plásticos em uma plataforma centralizada, eliminando intermediários e facilitando negociações transparentes." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "pillar-card", children: [
            /* @__PURE__ */ jsx("div", { className: "pillar-icon", children: /* @__PURE__ */ jsxs("svg", { width: "32", height: "32", viewBox: "0 0 32 32", fill: "none", children: [
              /* @__PURE__ */ jsx("path", { d: "M6 26V10l10-6 10 6v16l-10 2-10-2z", stroke: "currentColor", strokeWidth: "2", strokeLinejoin: "round" }),
              /* @__PURE__ */ jsx("path", { d: "M16 4v24M6 10l10 4 10-4", stroke: "currentColor", strokeWidth: "2", strokeLinejoin: "round" })
            ] }) }),
            /* @__PURE__ */ jsx("h3", { children: "Rastreabilidade" }),
            /* @__PURE__ */ jsx("p", { children: "Promover transparência na cadeia de resíduos com informações detalhadas sobre origem, tipo, condição e certificações dos materiais comercializados." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "sobre-numbers", children: [
        /* @__PURE__ */ jsx("h2", { className: "section-heading", children: "O Polo Industrial de Manaus em números" }),
        /* @__PURE__ */ jsxs("div", { className: "numbers-grid", children: [
          /* @__PURE__ */ jsxs("div", { className: "number-card", children: [
            /* @__PURE__ */ jsx("span", { className: "number-value", children: "600+" }),
            /* @__PURE__ */ jsx("span", { className: "number-label", children: "Indústrias em operação" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "number-card", children: [
            /* @__PURE__ */ jsx("span", { className: "number-value", children: "500+" }),
            /* @__PURE__ */ jsx("span", { className: "number-label", children: "Mil toneladas/ano de plástico processado" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "number-card", children: [
            /* @__PURE__ */ jsx("span", { className: "number-value", children: "9" }),
            /* @__PURE__ */ jsx("span", { className: "number-label", children: "Tipos de polímeros comercializados" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "number-card", children: [
            /* @__PURE__ */ jsx("span", { className: "number-value", children: "R$ 2bi+" }),
            /* @__PURE__ */ jsx("span", { className: "number-label", children: "Potencial do mercado de reciclagem" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "sobre-banner-section", children: /* @__PURE__ */ jsx("img", { src: "/amazonia-banner.jpg", alt: "Amazônia Circular — Transformando resíduos em oportunidades", className: "sobre-banner-img" }) }),
      /* @__PURE__ */ jsx("section", { className: "sobre-doc-section", children: /* @__PURE__ */ jsxs("div", { className: "doc-card", children: [
        /* @__PURE__ */ jsx("div", { className: "doc-icon", children: /* @__PURE__ */ jsxs("svg", { width: "32", height: "32", viewBox: "0 0 32 32", fill: "none", children: [
          /* @__PURE__ */ jsx("path", { d: "M8 4h10l8 8v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z", stroke: "currentColor", strokeWidth: "2" }),
          /* @__PURE__ */ jsx("path", { d: "M18 4v8h8", stroke: "currentColor", strokeWidth: "2", strokeLinejoin: "round" }),
          /* @__PURE__ */ jsx("path", { d: "M10 18h12M10 22h12M10 26h8", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { children: "Documentação do Projeto" }),
          /* @__PURE__ */ jsx("p", { children: "Conheça o estudo completo sobre a gestão e valorização de aparas plásticas no Polo Industrial de Manaus." })
        ] }),
        /* @__PURE__ */ jsx("a", { href: "/documentacao-amazonia-circular.pdf", target: "_blank", rel: "noopener noreferrer", className: "btn-primary", children: "Baixar PDF" })
      ] }) }),
      /* @__PURE__ */ jsxs("section", { className: "sobre-cta", children: [
        /* @__PURE__ */ jsx("h2", { children: "Faça parte dessa transformação" }),
        /* @__PURE__ */ jsx("p", { children: "Junte-se a empresas que já estão transformando resíduos em oportunidades no Polo Industrial de Manaus." }),
        /* @__PURE__ */ jsxs("div", { className: "sobre-cta-btns", children: [
          /* @__PURE__ */ jsx(Link, { to: "/cadastro", className: "btn-primary btn-large", children: "Cadastre-se agora" }),
          /* @__PURE__ */ jsx(Link, { to: "/anuncie", className: "btn-secondary btn-large", children: "Publique um anúncio" })
        ] })
      ] })
    ] })
  ] }) });
}
export {
  SobrePage as component
};
