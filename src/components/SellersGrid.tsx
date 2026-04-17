import { sellers } from '@/data/listings'

export function SellersGrid() {
  return (
    <div className="sellers-grid">
      {sellers.map((seller) => (
        <article key={seller.id} className="seller-card">
          <div className="seller-card-header">
            <div className="seller-avatar">
              {seller.company.charAt(0)}
            </div>
            <div>
              <div className="seller-company-name">
                {seller.company}
                {seller.verified && (
                  <span className="verified-badge" title="Vendedor verificado">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M7 1l1.4 2.8 3.1.5-2.25 2.2.53 3.1L7 8.15 4.22 9.6l.53-3.1L2.5 4.3l3.1-.5z" fill="#1a6b2a"/>
                    </svg>
                    Verificado
                  </span>
                )}
              </div>
              <div className="seller-location-line">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M6 1a3.5 3.5 0 0 1 3.5 3.5C9.5 7.5 6 11 6 11S2.5 7.5 2.5 4.5A3.5 3.5 0 0 1 6 1z" stroke="currentColor" strokeWidth="1.2"/>
                  <circle cx="6" cy="4.5" r="1.2" stroke="currentColor" strokeWidth="1.2"/>
                </svg>
                {seller.neighborhood} · Desde {seller.since}
              </div>
            </div>
          </div>
          <p className="seller-bio">{seller.bio}</p>
          <div className="seller-stats">
            <div className="seller-stat">
              <span className="sstat-val">{seller.rating}</span>
              <span className="sstat-label">avaliação</span>
            </div>
            <div className="seller-stat">
              <span className="sstat-val">{seller.totalListings}</span>
              <span className="sstat-label">anúncios</span>
            </div>
            <div className="seller-stat">
              <span className="sstat-val">{seller.totalSales}</span>
              <span className="sstat-label">negociadas</span>
            </div>
          </div>
          <div className="seller-contact-info">
            <span>{seller.phone}</span>
            <span className="whatsapp-tag">WhatsApp: {seller.whatsapp}</span>
          </div>
        </article>
      ))}
    </div>
  )
}