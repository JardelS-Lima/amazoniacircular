import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
function encode(data) {
  return Object.entries(data).map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`).join("&");
}
function ContactModal({
  isOpen,
  onClose,
  listingTitle,
  listingId,
  sellerCompany
}) {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    phone: "",
    quantity: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const overlayRef = useRef(null);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);
  useEffect(() => {
    if (!isOpen) {
      setSubmitted(false);
      setFields({ name: "", email: "", phone: "", quantity: "", message: "" });
    }
  }, [isOpen]);
  if (!isOpen) return null;
  const handleChange = (e) => setFields({ ...fields, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "negociacao",
          listing_id: listingId.toString(),
          listing_title: listingTitle,
          seller_company: sellerCompany,
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
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref: overlayRef,
      className: "modal-overlay",
      onClick: (e) => {
        if (e.target === overlayRef.current) onClose();
      },
      children: /* @__PURE__ */ jsxs("div", { className: "modal-panel", children: [
        /* @__PURE__ */ jsx("button", { className: "modal-close", onClick: onClose, "aria-label": "Fechar", children: /* @__PURE__ */ jsx("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", children: /* @__PURE__ */ jsx("path", { d: "M15 5L5 15M5 5l10 10", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }) }) }),
        submitted ? /* @__PURE__ */ jsxs("div", { className: "modal-success", children: [
          /* @__PURE__ */ jsx("div", { className: "success-icon", children: /* @__PURE__ */ jsxs("svg", { width: "40", height: "40", viewBox: "0 0 40 40", fill: "none", children: [
            /* @__PURE__ */ jsx("circle", { cx: "20", cy: "20", r: "19", stroke: "#3a8a4a", strokeWidth: "2" }),
            /* @__PURE__ */ jsx("path", { d: "M12 20l6 6 10-12", stroke: "#3a8a4a", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round" })
          ] }) }),
          /* @__PURE__ */ jsx("h3", { children: "Proposta enviada!" }),
          /* @__PURE__ */ jsxs("p", { children: [
            "Sua mensagem foi encaminhada para ",
            /* @__PURE__ */ jsx("strong", { children: sellerCompany }),
            ". Aguarde o contato do vendedor."
          ] }),
          /* @__PURE__ */ jsx("button", { className: "btn-primary", onClick: onClose, children: "Fechar" })
        ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsxs("div", { className: "modal-header", children: [
            /* @__PURE__ */ jsx("span", { className: "modal-tag", children: "Negociação" }),
            /* @__PURE__ */ jsx("h2", { className: "modal-title", children: listingTitle }),
            /* @__PURE__ */ jsxs("p", { className: "modal-seller", children: [
              "Vendedor: ",
              /* @__PURE__ */ jsx("strong", { children: sellerCompany })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "modal-form", children: [
            /* @__PURE__ */ jsx("input", { type: "hidden", name: "form-name", value: "negociacao" }),
            /* @__PURE__ */ jsx("input", { type: "hidden", name: "listing_id", value: listingId }),
            /* @__PURE__ */ jsx("input", { type: "hidden", name: "listing_title", value: listingTitle }),
            /* @__PURE__ */ jsx("input", { type: "hidden", name: "seller_company", value: sellerCompany }),
            /* @__PURE__ */ jsx("input", { id: "bot-field", type: "text", name: "bot-field", style: { display: "none" } }),
            /* @__PURE__ */ jsxs("div", { className: "form-row", children: [
              /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
                /* @__PURE__ */ jsx("label", { htmlFor: "contact-name", children: "Seu nome *" }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    id: "contact-name",
                    type: "text",
                    name: "name",
                    value: fields.name,
                    onChange: handleChange,
                    required: true,
                    placeholder: "Nome completo"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
                /* @__PURE__ */ jsx("label", { htmlFor: "contact-phone", children: "Telefone / WhatsApp" }),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    id: "contact-phone",
                    type: "tel",
                    name: "phone",
                    value: fields.phone,
                    onChange: handleChange,
                    placeholder: "(92) 9xxxx-xxxx"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "contact-email", children: "E-mail *" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  id: "contact-email",
                  type: "email",
                  name: "email",
                  value: fields.email,
                  onChange: handleChange,
                  required: true,
                  placeholder: "empresa@email.com.br"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "contact-quantity", children: "Quantidade de interesse (kg)" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  id: "contact-quantity",
                  type: "text",
                  name: "quantity",
                  value: fields.quantity,
                  onChange: handleChange,
                  placeholder: "Ex: 2.000 kg"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "contact-message", children: "Mensagem / Proposta *" }),
              /* @__PURE__ */ jsx(
                "textarea",
                {
                  id: "contact-message",
                  name: "message",
                  value: fields.message,
                  onChange: handleChange,
                  required: true,
                  rows: 4,
                  placeholder: `Olá, tenho interesse no lote de ${listingTitle}. Gostaria de...`
                }
              )
            ] }),
            /* @__PURE__ */ jsx("button", { type: "submit", className: "btn-primary btn-full", disabled: submitting, children: submitting ? "Enviando..." : "Enviar proposta" })
          ] })
        ] })
      ] })
    }
  );
}
export {
  ContactModal as C
};
