import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
function encode(data) {
  return Object.entries(data).map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`).join("&");
}
function CadastroPage() {
  const [userType, setUserType] = useState(null);
  const [fields, setFields] = useState({
    empresa: "",
    cnpj: "",
    responsavel: "",
    email: "",
    telefone: "",
    whatsapp: "",
    endereco: "",
    bairro: "",
    tipos_interesse: "",
    descricao: ""
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
          "form-name": "cadastro",
          tipo_usuario: userType || "",
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
      /* @__PURE__ */ jsx("img", { src: "/amazonia-hero-bg.jpg", alt: "Amazônia Circular", className: "page-hero-img" }),
      /* @__PURE__ */ jsxs("div", { className: "page-hero-overlay", children: [
        /* @__PURE__ */ jsx("h1", { className: "page-hero-title", children: "Faça parte da Amazônia Circular" }),
        /* @__PURE__ */ jsx("p", { className: "page-hero-sub", children: "Cadastre-se como vendedor ou comprador e conecte-se ao maior marketplace de aparas plásticas do PIM" })
      ] })
    ] }),
    submitted ? /* @__PURE__ */ jsxs("div", { className: "form-success-box", children: [
      /* @__PURE__ */ jsx("div", { className: "success-icon-lg", children: /* @__PURE__ */ jsxs("svg", { width: "56", height: "56", viewBox: "0 0 56 56", fill: "none", children: [
        /* @__PURE__ */ jsx("circle", { cx: "28", cy: "28", r: "26", stroke: "#1a6b2a", strokeWidth: "2.5" }),
        /* @__PURE__ */ jsx("path", { d: "M16 28l8 8 16-18", stroke: "#1a6b2a", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round" })
      ] }) }),
      /* @__PURE__ */ jsx("h2", { children: "Cadastro realizado com sucesso!" }),
      /* @__PURE__ */ jsx("p", { children: "Sua solicitação foi recebida. Nossa equipe entrará em contato em até 48h para validar seu cadastro e liberar o acesso completo à plataforma." }),
      /* @__PURE__ */ jsx("div", { className: "form-success-actions", children: /* @__PURE__ */ jsx(Link, { to: "/", className: "btn-primary", children: "Voltar ao Marketplace" }) })
    ] }) : !userType ? /* @__PURE__ */ jsxs("div", { className: "cadastro-type-select", children: [
      /* @__PURE__ */ jsx("h2", { className: "section-heading", children: "Como deseja participar?" }),
      /* @__PURE__ */ jsx("p", { className: "section-sub", children: "Selecione seu perfil para iniciar o cadastro" }),
      /* @__PURE__ */ jsxs("div", { className: "type-cards", children: [
        /* @__PURE__ */ jsxs("button", { className: "type-card", onClick: () => setUserType("vendedor"), children: [
          /* @__PURE__ */ jsx("div", { className: "type-card-icon", children: /* @__PURE__ */ jsxs("svg", { width: "40", height: "40", viewBox: "0 0 40 40", fill: "none", children: [
            /* @__PURE__ */ jsx("rect", { x: "4", y: "12", width: "32", height: "22", rx: "3", stroke: "currentColor", strokeWidth: "2" }),
            /* @__PURE__ */ jsx("path", { d: "M4 18h32", stroke: "currentColor", strokeWidth: "2" }),
            /* @__PURE__ */ jsx("path", { d: "M14 6h12l4 6H10l4-6z", stroke: "currentColor", strokeWidth: "2", strokeLinejoin: "round" }),
            /* @__PURE__ */ jsx("path", { d: "M16 24h8", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" })
          ] }) }),
          /* @__PURE__ */ jsx("h3", { children: "Vendedor" }),
          /* @__PURE__ */ jsx("p", { children: "Sou indústria ou empresa geradora de aparas e resíduos plásticos e desejo vender meus materiais." }),
          /* @__PURE__ */ jsx("span", { className: "type-card-cta", children: "Cadastrar como vendedor" })
        ] }),
        /* @__PURE__ */ jsxs("button", { className: "type-card", onClick: () => setUserType("comprador"), children: [
          /* @__PURE__ */ jsx("div", { className: "type-card-icon", children: /* @__PURE__ */ jsxs("svg", { width: "40", height: "40", viewBox: "0 0 40 40", fill: "none", children: [
            /* @__PURE__ */ jsx("circle", { cx: "14", cy: "28", r: "3", stroke: "currentColor", strokeWidth: "2" }),
            /* @__PURE__ */ jsx("circle", { cx: "28", cy: "28", r: "3", stroke: "currentColor", strokeWidth: "2" }),
            /* @__PURE__ */ jsx("path", { d: "M6 8h4l4 16h16l3-10H14", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })
          ] }) }),
          /* @__PURE__ */ jsx("h3", { children: "Comprador" }),
          /* @__PURE__ */ jsx("p", { children: "Sou reciclador, transformador ou comerciante e desejo comprar aparas e materiais plásticos." }),
          /* @__PURE__ */ jsx("span", { className: "type-card-cta", children: "Cadastrar como comprador" })
        ] })
      ] })
    ] }) : /* @__PURE__ */ jsxs("div", { className: "form-page-layout", children: [
      /* @__PURE__ */ jsxs("div", { className: "form-sidebar-info", children: [
        /* @__PURE__ */ jsxs("div", { className: "info-card", children: [
          /* @__PURE__ */ jsx("div", { className: "info-card-icon", children: /* @__PURE__ */ jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", children: [
            /* @__PURE__ */ jsx("path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round" }),
            /* @__PURE__ */ jsx("circle", { cx: "9", cy: "7", r: "4", stroke: "currentColor", strokeWidth: "1.8" }),
            /* @__PURE__ */ jsx("path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round" }),
            /* @__PURE__ */ jsx("path", { d: "M16 3.13a4 4 0 0 1 0 7.75", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round" })
          ] }) }),
          /* @__PURE__ */ jsx("h3", { children: "Benefícios do cadastro" }),
          /* @__PURE__ */ jsx("ul", { className: "info-tips", children: userType === "vendedor" ? /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("li", { children: "Alcance compradores de todo o Polo Industrial" }),
            /* @__PURE__ */ jsx("li", { children: "Publique anúncios ilimitados" }),
            /* @__PURE__ */ jsx("li", { children: "Receba propostas diretamente" }),
            /* @__PURE__ */ jsx("li", { children: "Selo de vendedor verificado" })
          ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("li", { children: "Acesso a todas as ofertas do marketplace" }),
            /* @__PURE__ */ jsx("li", { children: "Alertas de novos materiais de interesse" }),
            /* @__PURE__ */ jsx("li", { children: "Negocie diretamente com fornecedores" }),
            /* @__PURE__ */ jsx("li", { children: "Histórico de negociações" })
          ] }) })
        ] }),
        /* @__PURE__ */ jsx("button", { className: "btn-secondary btn-full", onClick: () => setUserType(null), children: "Voltar à seleção de perfil" }),
        /* @__PURE__ */ jsx("img", { src: "/amazonia-banner.jpg", alt: "Amazônia Circular", className: "form-sidebar-img" })
      ] }),
      /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "page-form", name: "cadastro", method: "POST", "data-netlify": "true", "netlify-honeypot": "bot-field", children: [
        /* @__PURE__ */ jsx("input", { type: "hidden", name: "form-name", value: "cadastro" }),
        /* @__PURE__ */ jsx("input", { type: "hidden", name: "tipo_usuario", value: userType }),
        /* @__PURE__ */ jsx("p", { style: {
          display: "none"
        }, children: /* @__PURE__ */ jsxs("label", { children: [
          "Não preencha: ",
          /* @__PURE__ */ jsx("input", { id: "cadastro-bot-field", name: "bot-field" })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "form-type-badge", children: [
          "Cadastro de ",
          userType === "vendedor" ? "Vendedor" : "Comprador"
        ] }),
        /* @__PURE__ */ jsx("div", { className: "form-section-title", children: "Dados da Empresa" }),
        /* @__PURE__ */ jsxs("div", { className: "form-row", children: [
          /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "c-empresa", children: "Razão social / Nome fantasia *" }),
            /* @__PURE__ */ jsx("input", { id: "c-empresa", type: "text", name: "empresa", value: fields.empresa, onChange: handleChange, required: true, placeholder: "Nome da empresa" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "c-cnpj", children: "CNPJ *" }),
            /* @__PURE__ */ jsx("input", { id: "c-cnpj", type: "text", name: "cnpj", value: fields.cnpj, onChange: handleChange, required: true, placeholder: "XX.XXX.XXX/XXXX-XX" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "c-responsavel", children: "Nome do responsável *" }),
          /* @__PURE__ */ jsx("input", { id: "c-responsavel", type: "text", name: "responsavel", value: fields.responsavel, onChange: handleChange, required: true, placeholder: "Nome completo" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "form-row", children: [
          /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "c-email", children: "E-mail corporativo *" }),
            /* @__PURE__ */ jsx("input", { id: "c-email", type: "email", name: "email", value: fields.email, onChange: handleChange, required: true, placeholder: "empresa@email.com.br" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "c-telefone", children: "Telefone *" }),
            /* @__PURE__ */ jsx("input", { id: "c-telefone", type: "tel", name: "telefone", value: fields.telefone, onChange: handleChange, required: true, placeholder: "(92) 3xxx-xxxx" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "c-whatsapp", children: "WhatsApp" }),
          /* @__PURE__ */ jsx("input", { id: "c-whatsapp", type: "tel", name: "whatsapp", value: fields.whatsapp, onChange: handleChange, placeholder: "(92) 9xxxx-xxxx" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "form-divider" }),
        /* @__PURE__ */ jsx("div", { className: "form-section-title", children: "Localização" }),
        /* @__PURE__ */ jsxs("div", { className: "form-row", children: [
          /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "c-endereco", children: "Endereço *" }),
            /* @__PURE__ */ jsx("input", { id: "c-endereco", type: "text", name: "endereco", value: fields.endereco, onChange: handleChange, required: true, placeholder: "Rua, número" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "c-bairro", children: "Bairro / Distrito *" }),
            /* @__PURE__ */ jsx("input", { id: "c-bairro", type: "text", name: "bairro", value: fields.bairro, onChange: handleChange, required: true, placeholder: "Ex: Distrito Industrial I" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "form-divider" }),
        /* @__PURE__ */ jsx("div", { className: "form-section-title", children: "Informações Adicionais" }),
        /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "c-tipos", children: "Tipos de plástico de interesse" }),
          /* @__PURE__ */ jsx("input", { id: "c-tipos", type: "text", name: "tipos_interesse", value: fields.tipos_interesse, onChange: handleChange, placeholder: "Ex: PET, PP, PEAD, ABS" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "c-descricao", children: userType === "vendedor" ? "Descreva sua operação (materiais gerados, volumes, etc.)" : "Descreva sua necessidade (materiais procurados, volumes, etc.)" }),
          /* @__PURE__ */ jsx("textarea", { id: "c-descricao", name: "descricao", value: fields.descricao, onChange: handleChange, rows: 4, placeholder: userType === "vendedor" ? "Descreva os tipos de materiais que sua empresa gera, volumes mensais, processos..." : "Descreva os materiais que procura, volumes desejados, aplicação..." })
        ] }),
        /* @__PURE__ */ jsx("button", { type: "submit", className: "btn-primary btn-full btn-large", disabled: submitting, children: submitting ? "Enviando..." : "Finalizar Cadastro" })
      ] })
    ] })
  ] }) });
}
export {
  CadastroPage as component
};
