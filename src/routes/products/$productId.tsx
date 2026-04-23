import { useState } from 'react'
import { Link, createFileRoute } from '@tanstack/react-router'
import listings, { plasticTypeLabels, conditionLabels } from '@/data/listings'
import { ContactModal } from '@/components/ContactModal'

export const Route = createFileRoute('/products/$productId')({
  component: ListingDetail,
  loader: async ({ params }) => {
    const listing = listings.find((l) => l.id === +params.productId)
    if (!listing) throw new Error('Anúncio não encontrado')
    return listing
  },
})

function ListingDetail() {
  const listing = Route.useLoaderData()
  const [contactOpen, setContactOpen] = useState(false)
  const related = listings
    .filter((l) => l.plasticType === listing.plasticType && l.id !== listing.id)
    .slice(0, 3)

  return (
    <main className="detail-main">
      <div className="detail-container">
        <Link to="/" className="back-link">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Voltar aos anúncios
        </Link>

        <div className="detail-grid">
          <div className="detail-image-col">
            <div className="detail-image-wrap">
              <div className="detail-type-badge">{listing.plasticType}</div>
              <img src={listing.image} alt={listing.title} className="detail-image" />
            </div>
            <div className="detail-tags-wrap">
              {listing.tags.map((tag) => (
                <span key={tag} className="listing-tag">#{tag}</span>
              ))}
            </div>
          </div>

          <div className="detail-info-col">
            <div className="detail-meta-row">
              <span className={`condition-tag condition-${listing.condition}`}>
                {conditionLabels[listing.condition]}
              </span>
              <span className="detail-date">
                Publicado em {new Date(listing.postedAt).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
              </span>
            </div>

            <h1 className="detail-title">{listing.title}</h1>
            <p className="detail-plastic-type">{plasticTypeLabels[listing.plasticType]}</p>

            <div className="detail-price-box">
              <div className="detail-price">
                <span className="detail-price-value">R$ {listing.pricePerKg.toFixed(2)}</span>
                <span className="detail-price-unit">/kg</span>
              </div>
              <div className="detail-qty-box">
                <span className="detail-qty-value">{listing.quantityKg.toLocaleString('pt-BR')} kg</span>
                <span className="detail-qty-label">disponíveis</span>
              </div>
              <div className="detail-total-est">
                Total estimado: <strong>R$ {(listing.pricePerKg * listing.quantityKg).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong>
              </div>
            </div>

            <p className="detail-description">{listing.description}</p>

            <button className="btn-primary btn-large" onClick={() => setContactOpen(true)}>
              Entrar em contato / Negociar
            </button>

            <div className="seller-panel">
              <div className="seller-panel-header">Vendedor</div>
              <div className="seller-panel-body">
                <div className="seller-panel-avatar">{listing.seller.company.charAt(0)}</div>
                <div className="seller-panel-info">
                  <div className="seller-panel-company">
                    {listing.seller.company}
                    {listing.seller.verified && (
                      <span className="verified-badge">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M7 1l1.4 2.8 3.1.5-2.25 2.2.53 3.1L7 8.15 4.22 9.6l.53-3.1L2.5 4.3l3.1-.5z" fill="#1a6b2a"/>
                        </svg>
                        Verificado
                      </span>
                    )}
                  </div>
                  <div className="seller-panel-name">{listing.seller.name}</div>
                  <div className="seller-panel-location">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M6 1a3.5 3.5 0 0 1 3.5 3.5C9.5 7.5 6 11 6 11S2.5 7.5 2.5 4.5A3.5 3.5 0 0 1 6 1z" stroke="currentColor" strokeWidth="1.2"/>
                      <circle cx="6" cy="4.5" r="1.2" stroke="currentColor" strokeWidth="1.2"/>
                    </svg>
                    {listing.seller.location}
                  </div>
                </div>
              </div>
              <div className="seller-panel-stats">
                <div className="sp-stat">
                  <span className="sp-val">{listing.seller.rating}/5</span>
                  <span className="sp-lbl">avaliação</span>
                </div>
                <div className="sp-stat">
                  <span className="sp-val">{listing.seller.totalListings}</span>
                  <span className="sp-lbl">anúncios</span>
                </div>
                <div className="sp-stat">
                  <span className="sp-val">{listing.seller.totalSales}</span>
                  <span className="sp-lbl">negociadas</span>
                </div>
              </div>
              <div className="seller-panel-contacts">
                <div className="sp-contact-item">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 2h10v10H2z" stroke="currentColor" strokeWidth="1.2" rx="1"/>
                    <path d="M2 4l5 4 5-4" stroke="currentColor" strokeWidth="1.2"/>
                  </svg>
                  {listing.seller.phone}
                </div>
                <div className="sp-contact-item whatsapp">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2"/>
                    <path d="M4.5 5.5c.2-.5.7-1 1.2-.9.4 0 .6.3.8.6l.4.9c.1.3 0 .6-.2.8l-.3.3c.4.7 1 1.3 1.7 1.7l.3-.3c.2-.2.5-.3.8-.2l.9.4c.3.2.6.4.6.8 0 .5-.4 1-.9 1.2-1.8.7-4.2-1.7-4.2-4-.2-.5.5-1.1.9-1.3z" stroke="currentColor" strokeWidth="1.2"/>
                  </svg>
                  WhatsApp: {listing.seller.whatsapp}
                </div>
              </div>
              <p className="seller-panel-bio">{listing.seller.bio}</p>
              <p className="seller-panel-since">Ativo no mercado desde {listing.seller.since} · CNPJ: {listing.seller.cnpj}</p>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <section className="related-section">
            <h2 className="related-title">Outros anúncios de {listing.plasticType}</h2>
            <div className="related-grid">
              {related.map((rel) => (
                <Link
                  key={rel.id}
                  to="/products/$productId"
                  params={{ productId: rel.id.toString() }}
                  className="related-card"
                >
                  <img src={rel.image} alt={rel.title} className="related-card-img" />
                  <div className="related-card-info">
                    <span className="related-card-title">{rel.title}</span>
                    <span className="related-card-price">R$ {rel.pricePerKg.toFixed(2)}/kg</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>

      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
        listingTitle={listing.title}
        listingId={listing.id}
        sellerCompany={listing.seller.company}
      />
    </main>
  )
}
