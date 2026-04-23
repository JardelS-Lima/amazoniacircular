import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import listings from '@/data/listings'
import type { Listing, PlasticType, Condition } from '@/data/listings'
import { SearchFilter } from '@/components/SearchFilter'
import { ListingCard } from '@/components/ListingCard'
import { ContactModal } from '@/components/ContactModal'
import { HeroSection } from '@/components/HeroSection'
import { SellersGrid } from '@/components/SellersGrid'
import { CTAs } from '@/components/CTAs'

export const Route = createFileRoute('/')({
  component: MarketplaceHome,
})

function MarketplaceHome() {
  const [search, setSearch] = useState('')
  const [selectedTypes, setSelectedTypes] = useState<PlasticType[]>([])
  const [selectedConditions, setSelectedConditions] = useState<Condition[]>([])
  const [minQty, setMinQty] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  const [contactListing, setContactListing] = useState<Listing | null>(null)
  const [activeTab, setActiveTab] = useState<'listings' | 'sellers'>('listings')

  const toggleType = (t: PlasticType) =>
    setSelectedTypes((prev) =>
      prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]
    )

  const toggleCondition = (c: Condition) =>
    setSelectedConditions((prev) =>
      prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]
    )

  const clearFilters = () => {
    setSearch('')
    setSelectedTypes([])
    setSelectedConditions([])
    setMinQty('')
    setMaxPrice('')
  }

  const filtered = listings.filter((l) => {
    if (
      search &&
      !l.title.toLowerCase().includes(search.toLowerCase()) &&
      !l.plasticType.toLowerCase().includes(search.toLowerCase()) &&
      !l.shortDescription.toLowerCase().includes(search.toLowerCase()) &&
      !l.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()))
    )
      return false
    if (selectedTypes.length && !selectedTypes.includes(l.plasticType)) return false
    if (selectedConditions.length && !selectedConditions.includes(l.condition)) return false
    if (minQty && l.quantityKg < parseInt(minQty)) return false
    if (maxPrice && l.pricePerKg > parseFloat(maxPrice)) return false
    return true
  })

  return (
    <main className="marketplace-main">
      <HeroSection onTypeSelect={(type) => {
        setActiveTab('listings')
        setSelectedTypes([type])
      }} />

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
            search={search}
            onSearchChange={setSearch}
            selectedTypes={selectedTypes}
            onTypeToggle={toggleType}
            selectedConditions={selectedConditions}
            onConditionToggle={toggleCondition}
            minQty={minQty}
            onMinQtyChange={setMinQty}
            maxPrice={maxPrice}
            onMaxPriceChange={setMaxPrice}
            onClear={clearFilters}
            totalResults={filtered.length}
          />

          <div className="listings-grid">
            {filtered.length === 0 ? (
              <div className="empty-state">
                <div className="empty-icon">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <rect x="8" y="14" width="32" height="26" rx="3" stroke="currentColor" strokeWidth="2"/>
                    <path d="M16 14V10a8 8 0 0 1 16 0v4" stroke="currentColor" strokeWidth="2"/>
                    <path d="M20 26h8M24 22v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3>Nenhum anúncio encontrado</h3>
                <p>Tente ajustar os filtros ou <button onClick={clearFilters} className="link-btn">limpar todos</button>.</p>
              </div>
            ) : (
              filtered.map((listing) => (
                <ListingCard
                  key={listing.id}
                  listing={listing}
                  onContact={setContactListing}
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
        onClose={() => setContactListing(null)}
        listingTitle={contactListing?.title ?? ''}
        listingId={contactListing?.id ?? 0}
        sellerCompany={contactListing?.seller.company ?? ''}
      />

      <CTAs />
    </main>
  )
}
