import { useCallback, useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import listings from '@/data/listings'
import type { Listing, PlasticType } from '@/data/listings'
import { SearchFilter } from '@/components/SearchFilter'
import { ListingCard } from '@/components/ListingCard'
import { ContactModal } from '@/components/ContactModal'
import { HeroSection } from '@/components/HeroSection'
import { SellersGrid } from '@/components/SellersGrid'
import { CTAs } from '@/components/CTAs'
import { useFilters } from '@/hooks/useFilters'

export const Route = createFileRoute('/')({
  component: MarketplaceHome,
})

function MarketplaceHome() {
  const filters = useFilters(listings)
  const [contactListing, setContactListing] = useState<Listing | null>(null)
  const [activeTab, setActiveTab] = useState<'listings' | 'sellers'>('listings')

  const handleContact = useCallback((l: Listing) => setContactListing(l), [])
  const closeContact = useCallback(() => setContactListing(null), [])

  const handleHeroTypeSelect = useCallback(
    (type: PlasticType) => {
      setActiveTab('listings')
      filters.setSelectedTypes([type])
    },
    [filters],
  )

  return (
    <main className="marketplace-main">
      <HeroSection onTypeSelect={handleHeroTypeSelect} />

      <div className="marketplace-tabs">
        <button
          className={`tab-btn ${activeTab === 'listings' ? 'active' : ''}`}
          onClick={() => setActiveTab('listings')}
        >
          Anúncios
        </button>
        <button
          className={`tab-btn ${activeTab === 'sellers' ? 'active' : ''}`}
          onClick={() => setActiveTab('sellers')}
        >
          Vendedores
        </button>
      </div>

      {activeTab === 'listings' ? (
        <div className="marketplace-layout">
          <SearchFilter
            search={filters.search}
            onSearchChange={filters.setSearch}
            selectedTypes={filters.selectedTypes}
            onTypeToggle={filters.toggleType}
            selectedConditions={filters.selectedConditions}
            onConditionToggle={filters.toggleCondition}
            minQty={filters.minQty}
            onMinQtyChange={filters.setMinQty}
            maxPrice={filters.maxPrice}
            onMaxPriceChange={filters.setMaxPrice}
            onClear={filters.clear}
            totalResults={filters.filtered.length}
          />

          <div className="listings-grid">
            {filters.filtered.length === 0 ? (
              <div className="empty-state">
                <div className="empty-icon">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <rect x="8" y="14" width="32" height="26" rx="3" stroke="currentColor" strokeWidth="2"/>
                    <path d="M16 14V10a8 8 0 0 1 16 0v4" stroke="currentColor" strokeWidth="2"/>
                    <path d="M20 26h8M24 22v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3>Nenhum anúncio encontrado</h3>
                <p>Tente ajustar os filtros ou <button onClick={filters.clear} className="link-btn">limpar todos</button>.</p>
              </div>
            ) : (
              filters.filtered.map((listing) => (
                <ListingCard
                  key={listing.id}
                  listing={listing}
                  onContact={handleContact}
                />
              ))
            )}
          </div>
        </div>
      ) : (
        <SellersGrid />
      )}

      <ContactModal
        isOpen={!!contactListing}
        onClose={closeContact}
        listingTitle={contactListing?.title ?? ''}
        listingId={contactListing?.id ?? 0}
        sellerName={contactListing?.seller.name ?? ''}
        sellerCompany={contactListing?.seller.company ?? ''}
      />

      <CTAs />
    </main>
  )
}
