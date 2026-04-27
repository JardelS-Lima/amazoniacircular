import { useCallback, useEffect, useRef, useState } from 'react'
import { useNetlifyForm } from '@/hooks/useNetlifyForm'
import { FormSuccess } from '@/components/ui/FormSuccess'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
  listingTitle: string
  listingId: number
  sellerName: string
  sellerCompany: string
}

const INITIAL_FIELDS = { name: '', email: '', phone: '', quantity: '', message: '' }

export function ContactModal({
  isOpen,
  onClose,
  listingTitle,
  listingId,
  sellerName,
  sellerCompany,
}: ContactModalProps) {
  const [fields, setFields] = useState(INITIAL_FIELDS)
  const overlayRef = useRef<HTMLDivElement>(null)
  const { isSubmitting, isSuccess, isError, error, submit, reset } = useNetlifyForm('negociacao')

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
      setFields(INITIAL_FIELDS)
      reset()
    }
  }, [isOpen, reset])

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setFields((prev) => ({ ...prev, [e.target.name]: e.target.value })),
    [],
  )

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()
      await submit({
        listing_id: String(listingId),
        listing_title: listingTitle,
        seller_name: sellerName,
        seller_company: sellerCompany,
        ...fields,
      })
    },
    [submit, listingId, listingTitle, sellerName, sellerCompany, fields],
  )

  if (!isOpen) return null

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
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        {isSuccess ? (
          <FormSuccess
            size="modal"
            title="Proposta enviada!"
            message={
              <>Sua mensagem foi encaminhada para <strong>{sellerCompany}</strong>. Aguarde o contato do vendedor.</>
            }
            actions={<button className="btn-primary" onClick={onClose}>Fechar</button>}
          />
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
              <input type="text" name="bot-field" style={{ display: 'none' }} aria-hidden="true" tabIndex={-1} />

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

              {isError && (
                <div className="form-error" role="alert">
                  Não foi possível enviar sua proposta: {error}
                </div>
              )}

              <button type="submit" className="btn-primary btn-full" disabled={isSubmitting}>
                {isSubmitting ? 'Enviando...' : 'Enviar proposta'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
