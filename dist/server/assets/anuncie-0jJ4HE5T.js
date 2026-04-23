import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
function encode(data) {
  return Object.entries(data).map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`).join("&");
}
const PLASTIC_TYPES = ["PET", "PEAD", "PP", "PEBD", "PVC", "PS", "ABS", "NYLON", "ACRILICO"];
const CONDITIONS = ["limpo", "misto", "contaminado"];
function AnunciePage() {
  const [fields, setFields] = useState({
    empresa: "",
    responsavel: "",
    email: "",
    telefone: "",
    whatsapp: "",
    titulo: "",
    tipo_plastico: "",
    condicao: "",
    quantidade_kg: "",
    preco_por_kg: "",
    descricao: "",
    localizacao: "",
    tags: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const handleChange = (e) => setFields({
    ...fields,
    [e.target.name]: e.target.value
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch("/__forms.html", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: encode({
          "form-name": "novo-anuncio",
          ...fields
        })
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };
  return /* @__PURE__ */ jsx("main", { className: "page-main", children: /* @__PURE__ */ jsxs("div", { className: "page-container", children: [
    /* @__PURE__ */ jsxs("div", { className: "page-hero-banner", children: [
      /* @__PURE__ */ jsx("img", { src: "/amazonia-banner.jpg", alt: "Amazônia Circular", className: "page-hero-img" }),
      /* @__PURE__ */ jsxs("div", { className: "page-hero-overlay", children: [
        /* @__PURE__ */ jsx("h1", { className: "page-hero-title", children: "Publique seu Anúncio" }),
        /* @__PURE__ */ jsx("p", { className: "page-hero-sub", children: "Conecte-se com compradores de todo o Polo Industrial de Manaus" })
      ] })
    ] }),
    submitted ? /* @__PURE__ */ jsxs("div", { className: "form-success-box", children: [
      /* @__PURE__ */ jsx("div", { className: "success-icon-lg", children: /* @__PURE__ */ jsxs("svg", { width: "56", height: "56", viewBox: "0 0 56 56", fill: "none", children: [
        /* @__PURE__ */ jsx("circle", { cx: "28", cy: "28", r: "26", stroke: "#1a6b2a", strokeWidth: "2.5" }),
        /* @__PURE__ */ jsx("path", { d: "M16 28l8 8 16-18", stroke: "#1a6b2a", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round" })
      ] }) }),
      /* @__PURE__ */ jsx("h2", { children: "Anúncio enviado com sucesso!" }),
      /* @__PURE__ */ jsx("p", { children: "Sua oferta de material foi recebida e será analisada pela nossa equipe. Você receberá uma confirmação por e-mail em breve." }),
      /* @__PURE__ */ jsxs("div", { className: "form-success-actions", children: [
        /* @__PURE__ */ jsx(Link, { to: "/", className: "btn-primary", children: "Voltar ao Marketplace" }),
        /* @__PURE__ */ jsx("button", { className: "btn-secondary", onClick: () => {
          setSubmitted(false);
          setFields({
            empresa: "",
            responsavel: "",
            email: "",
            telefone: "",
            whatsapp: "",
            titulo: "",
            tipo_plastico: "",
            condicao: "",
            quantidade_kg: "",
            preco_por_kg: "",
            descricao: "",
            localizacao: "",
            tags: ""
          });
        }, children: "Criar outro anúncio" })
      ] })
    ] }) : /* @__PURE__ */ jsxs("div", { className: "form-page-layout", children: [
      /* @__PURE__ */ jsxs("div", { className: "form-sidebar-info", children: [
        /* @__PURE__ */ jsxs("div", { className: "info-card", children: [
          /* @__PURE__ */ jsx("div", { className: "info-card-icon", children: /* @__PURE__ */ jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", children: [
            /* @__PURE__ */ jsx("path", { d: "M12 2L2 7l10 5 10-5-10-5z", stroke: "currentColor", strokeWidth: "1.8" }),
            /* @__PURE__ */ jsx("path", { d: "M2 17l10 5 10-5", stroke: "currentColor", strokeWidth: "1.8" }),
            /* @__PURE__ */ jsx("path", { d: "M2 12l10 5 10-5", stroke: "currentColor", strokeWidth: "1.8" })
          ] }) }),
          /* @__PURE__ */ jsx("h3", { children: "Como funciona" }),
          /* @__PURE__ */ jsxs("ol", { className: "info-steps", children: [
            /* @__PURE__ */ jsx("li", { children: "Preencha os dados do material disponível" }),
            /* @__PURE__ */ jsx("li", { children: "Nossa equipe analisa e aprova o anúncio" }),
            /* @__PURE__ */ jsx("li", { children: "Compradores entram em contato diretamente" }),
            /* @__PURE__ */ jsx("li", { children: "Negocie e feche o melhor acordo" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "info-card", children: [
          /* @__PURE__ */ jsx("div", { className: "info-card-icon", children: /* @__PURE__ */ jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", children: [
            /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "1.8" }),
            /* @__PURE__ */ jsx("path", { d: "M12 8v4l3 3", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round" })
          ] }) }),
          /* @__PURE__ */ jsx("h3", { children: "Dicas para um bom anúncio" }),
          /* @__PURE__ */ jsxs("ul", { className: "info-tips", children: [
            /* @__PURE__ */ jsx("li", { children: "Seja detalhado na descrição do material" }),
            /* @__PURE__ */ jsx("li", { children: "Informe condição real (limpo, misto, contaminado)" }),
            /* @__PURE__ */ jsx("li", { children: "Inclua dados de quantidade e preço realistas" }),
            /* @__PURE__ */ jsx("li", { children: "Mencione certificações ou laudos disponíveis" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("img", { src: "/amazonia-hero-bg.jpg", alt: "Economia Circular", className: "form-sidebar-img" })
      ] }),
      /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "page-form", name: "novo-anuncio", method: "POST", "data-netlify": "true", "netlify-honeypot": "bot-field", children: [
        /* @__PURE__ */ jsx("input", { type: "hidden", name: "form-name", value: "novo-anuncio" }),
        /* @__PURE__ */ jsx("p", { style: {
          display: "none"
        }, children: /* @__PURE__ */ jsxs("label", { children: [
          "Não preencha: ",
          /* @__PURE__ */ jsx("input", { id: "anuncie-bot-field", name: "bot-field" })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "form-section-title", children: "Dados da Empresa" }),
        /* @__PURE__ */ jsxs("div", { className: "form-row", children: [
          /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "a-empresa", children: "Nome da empresa *" }),
            /* @__PURE__ */ jsx("input", { id: "a-empresa", type: "text", name: "empresa", value: fields.empresa, onChange: handleChange, required: true, placeholder: "Razão social ou nome fantasia" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "a-responsavel", children: "Responsável *" }),
            /* @__PURE__ */ jsx("input", { id: "a-responsavel", type: "text", name: "responsavel", value: fields.responsavel, onChange: handleChange, required: true, placeholder: "Nome completo" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "form-row", children: [
          /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "a-email", children: "E-mail *" }),
            /* @__PURE__ */ jsx("input", { id: "a-email", type: "email", name: "email", value: fields.email, onChange: handleChange, required: true, placeholder: "empresa@email.com.br" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "a-telefone", children: "Telefone" }),
            /* @__PURE__ */ jsx("input", { id: "a-telefone", type: "tel", name: "telefone", value: fields.telefone, onChange: handleChange, placeholder: "(92) 3xxx-xxxx" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "a-whatsapp", children: "WhatsApp" }),
          /* @__PURE__ */ jsx("input", { id: "a-whatsapp", type: "tel", name: "whatsapp", value: fields.whatsapp, onChange: handleChange, placeholder: "(92) 9xxxx-xxxx" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "form-divider" }),
        /* @__PURE__ */ jsx("div", { className: "form-section-title", children: "Dados do Material" }),
        /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "a-titulo", children: "Título do anúncio *" }),
          /* @__PURE__ */ jsx("input", { id: "a-titulo", type: "text", name: "titulo", value: fields.titulo, onChange: handleChange, required: true, placeholder: "Ex: Aparas de PET Transparente Pós-Industrial" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "form-row", children: [
          /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "a-tipo", children: "Tipo de plástico *" }),
            /* @__PURE__ */ jsxs("select", { id: "a-tipo", name: "tipo_plastico", value: fields.tipo_plastico, onChange: handleChange, required: true, className: "form-select", children: [
              /* @__PURE__ */ jsx("option", { value: "", children: "Selecione..." }),
              PLASTIC_TYPES.map((t) => /* @__PURE__ */ jsx("option", { value: t, children: t }, t))
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "a-condicao", children: "Condição *" }),
            /* @__PURE__ */ jsxs("select", { id: "a-condicao", name: "condicao", value: fields.condicao, onChange: handleChange, required: true, className: "form-select", children: [
              /* @__PURE__ */ jsx("option", { value: "", children: "Selecione..." }),
              CONDITIONS.map((c) => /* @__PURE__ */ jsx("option", { value: c, children: c.charAt(0).toUpperCase() + c.slice(1) }, c))
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "form-row", children: [
          /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "a-qtd", children: "Quantidade disponível (kg) *" }),
            /* @__PURE__ */ jsx("input", { id: "a-qtd", type: "number", name: "quantidade_kg", value: fields.quantidade_kg, onChange: handleChange, required: true, placeholder: "Ex: 5000", min: "1" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "a-preco", children: "Preço por kg (R$) *" }),
            /* @__PURE__ */ jsx("input", { id: "a-preco", type: "number", name: "preco_por_kg", value: fields.preco_por_kg, onChange: handleChange, required: true, placeholder: "Ex: 1.20", min: "0", step: "0.01" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "a-local", children: "Localização *" }),
          /* @__PURE__ */ jsx("input", { id: "a-local", type: "text", name: "localizacao", value: fields.localizacao, onChange: handleChange, required: true, placeholder: "Ex: Distrito Industrial de Manaus" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "a-desc", children: "Descrição detalhada *" }),
          /* @__PURE__ */ jsx("textarea", { id: "a-desc", name: "descricao", value: fields.descricao, onChange: handleChange, required: true, rows: 5, placeholder: "Descreva o material: origem, processo, pureza, formato (fardo/granel/moído), frequência de geração, certificações disponíveis..." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "a-tags", children: "Tags (separadas por vírgula)" }),
          /* @__PURE__ */ jsx("input", { id: "a-tags", type: "text", name: "tags", value: fields.tags, onChange: handleChange, placeholder: "Ex: termoformagem, cristal, sem-contaminação" })
        ] }),
        /* @__PURE__ */ jsx("button", { type: "submit", className: "btn-primary btn-full btn-large", disabled: submitting, children: submitting ? "Enviando..." : "Publicar Anúncio" })
      ] })
    ] })
  ] }) });
}
export {
  AnunciePage as component
};
