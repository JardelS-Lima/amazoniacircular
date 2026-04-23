import { useState, useRef, useEffect } from 'react'

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
    .join('&')
}

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
  listingTitle: string
  listingId: number
  sellerCompany: string
}

export function ContactModal({
  isOpen,
  onClose,
  listingTitle,
  listingId,
  sellerCompany,
}: ContactModalProps) {
  const [fields, setFields] = useState({
    name: '',
    email: '',
    phone: '',
    quantity: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) {
      setSubmitted(false)
      setFields({ name: '', email: '', phone: '', quantity: '', message: '' })
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFields({ ...fields, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'negociacao',
          listing_id: listingId.toString(),
          listing_title: listingTitle,
          seller_company: sellerCompany,
          ...fields,
        }),
      })
      setSubmitted(true)
    } catch {
      setSubmitted(true)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div
      ref={overlayRef}
      className="modal-overlay"
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose()
      }}
    >
      <div className="modal-panel">
        <button className="modal-close" onClick={onClose} aria-label="Fechar">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        {submitted ? (
          <div className="modal-success">
            <div className="success-icon">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="19" stroke="#3a8a4a" strokeWidth="2"/>
                <path d="M12 20l6 6 10-12" stroke="#3a8a4a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Proposta enviada!</h3>
            <p>Sua mensagem foi encaminhada para <strong>{sellerCompany}</strong>. Aguarde o contato do vendedor.</p>
            <button className="btn-primary" onClick={onClose}>Fechar</button>
          </div>
        ) : (
          <>
            <div className="modal-header">
              <span className="modal-tag">Negociação</span>
              <h2 className="modal-title">{listingTitle}</h2>
              <p className="modal-seller">Vendedor: <strong>{sellerCompany}</strong></p>
            </div>

            <form onSubmit={handleSubmit} className="modal-form">
              <input type="hidden" name="form-name" value="negociacao" />
              <input type="hidden" name="listing_id" value={listingId} />
              <input type="hidden" name="listing_title" value={listingTitle} />
              <input type="hidden" name="seller_company" value={sellerCompany} />
              {/* Honeypot */}
              <input id="bot-field" type="text" name="bot-field" style={{ display: 'none' }} />

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-name">Seu nome *</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={fields.name}
                    onChange={handleChange}
                    required
                    placeholder="Nome completo"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-phone">Telefone / WhatsApp</label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    value={fields.phone}
                    onChange={handleChange}
                    placeholder="(92) 9xxxx-xxxx"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="contact-email">E-mail *</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={fields.email}
                  onChange={handleChange}
                  required
                  placeholder="empresa@email.com.br"
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-quantity">Quantidade de interesse (kg)</label>
                <input
                  id="contact-quantity"
                  type="text"
                  name="quantity"
                  value={fields.quantity}
                  onChange={handleChange}
                  placeholder="Ex: 2.000 kg"
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message">Mensagem / Proposta *</label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={fields.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder={`Olá, tenho interesse no lote de ${listingTitle}. Gostaria de...`}
                />
              </div>

              <button type="submit" className="btn-primary btn-full" disabled={submitting}>
                {submitting ? 'Enviando...' : 'Enviar proposta'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
