import { memo } from 'react'
import { Link } from '@tanstack/react-router'
import type { Listing } from '@/data/listings'
import { conditionLabels } from '@/data/listings'

interface ListingCardProps {
  listing: Listing
  onContact: (listing: Listing) => void
}

export const ListingCard = memo(function ListingCard({ listing, onContact }: ListingCardProps) {
  return (
    <article className="listing-card">
      <Link
        to="/products/$productId"
        params={{ productId: listing.id.toString() }}
        className="listing-card-link"
      >
        <div className="listing-card-image">
          <div className="listing-type-badge">{listing.plasticType}</div>
          <img src={listing.image} alt={listing.title} />
        </div>
        <div className="listing-card-body">
          <div className="listing-card-meta">
            <span className={`condition-tag condition-${listing.condition}`}>
              {conditionLabels[listing.condition]}
            </span>
            <span className="listing-date">
              {new Date(listing.postedAt).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' })}
            </span>
          </div>
          <h3 className="listing-card-title">{listing.title}</h3>
          <p className="listing-card-desc">{listing.shortDescription}</p>
          <div className="listing-card-tags">
            {listing.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="listing-tag">#{tag}</span>
            ))}
          </div>
        </div>
      </Link>

      <div className="listing-card-footer">
        <div className="listing-card-info">
          <div className="listing-price">
            <span className="price-value">R$ {listing.pricePerKg.toFixed(2)}</span>
            <span className="price-unit">/kg</span>
          </div>
          <div className="listing-qty">
            {listing.quantityKg.toLocaleString('pt-BR')} kg disponíveis
          </div>
        </div>
        <div className="listing-card-seller">
          <span className="seller-name">{listing.seller.company}</span>
          <div className="seller-location">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M6 1a3.5 3.5 0 0 1 3.5 3.5C9.5 7.5 6 11 6 11S2.5 7.5 2.5 4.5A3.5 3.5 0 0 1 6 1z" stroke="currentColor" strokeWidth="1.2"/>
              <circle cx="6" cy="4.5" r="1.2" stroke="currentColor" strokeWidth="1.2"/>
            </svg>
            {listing.seller.neighborhood}
          </div>
        </div>
        <button
          className="btn-contact"
          onClick={(e) => {
            e.preventDefault()
            onContact(listing)
          }}
        >
          Negociar
        </button>
      </div>
    </article>
  )
})
