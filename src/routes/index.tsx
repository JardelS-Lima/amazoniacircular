import { useState } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import listings, { sellers } from '@/data/listings'
import type { Listing, PlasticType, Condition } from '@/data/listings'
import { SearchFilter } from '@/components/SearchFilter'
import { ListingCard } from '@/components/ListingCard'
import { ContactModal } from '@/components/ContactModal'

export const Route = createFileRoute('/')({
  component: MarketplaceHome,
})

const PLASTIC_TYPE_GROUPS: Record<string, PlasticType[]> = {
  Commodities: ['PET', 'PEAD', 'PP', 'PEBD'],
  'Técnicos': ['ABS', 'NYLON', 'ACRILICO'],
  'Outros': ['PVC', 'PS'],
}

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
      <section className="hero-section">
        <div className="hero-inner">
          <div className="hero-eyebrow">Polo Industrial de Manaus · Economia Circular</div>
          <h1 className="hero-title">
            Amazônia<br /><span className="hero-accent">Circular</span>
          </h1>
          <p className="hero-sub">
            Transformando resíduos industriais em oportunidade. Conectando indústrias geradoras e compradores de PET, PEAD, PP, ABS e outros polímeros pós-industriais no PIM.
          </p>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="stat-value">{listings.length}</span>
              <span className="stat-label">anúncios ativos</span>
            </div>
            <div className="hero-stat">
              <span className="stat-value">{sellers.length}</span>
              <span className="stat-label">vendedores</span>
            </div>
            <div className="hero-stat">
              <span className="stat-value">
                {(listings.reduce((s, l) => s + l.quantityKg, 0) / 1000).toFixed(0)}t
              </span>
              <span className="stat-label">toneladas disponíveis</span>
            </div>
          </div>
          <div className="hero-actions">
            <Link to="/anuncie" className="btn-primary btn-large">Publicar Anúncio</Link>
            <Link to="/cadastro" className="btn-secondary btn-large">Cadastre-se</Link>
          </div>
        </div>
        <div className="hero-badge-grid">
          {Object.entries(PLASTIC_TYPE_GROUPS).map(([group, types]) => (
            <div key={group} className="hero-badge-group">
              <span className="hero-badge-group-label">{group}</span>
              {types.map((t) => (
                <button
                  key={t}
                  className="hero-type-badge"
                  onClick={() => {
                    setActiveTab('listings')
                    setSelectedTypes([t])
                  }}
                >
                  {t}
                </button>
              ))}
            </div>
          ))}
        </div>
      </section>

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
      )}

      <ContactModal
        isOpen={!!contactListing}
        onClose={() => setContactListing(null)}
        listingTitle={contactListing?.title ?? ''}
        listingId={contactListing?.id ?? 0}
        sellerName={contactListing?.seller.name ?? ''}
        sellerCompany={contactListing?.seller.company ?? ''}
      />

      {/* CTA Section */}
      <section className="home-cta-section">
        <div className="home-cta-inner">
          <div className="home-cta-card">
            <div className="home-cta-icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M16 4v24M4 16h24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </div>
            <h3>Tem material para vender?</h3>
            <p>Publique seu anúncio gratuitamente e alcance compradores do Polo Industrial.</p>
            <Link to="/anuncie" className="btn-primary">Publicar Anúncio</Link>
          </div>
          <div className="home-cta-card">
            <div className="home-cta-icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M22 21v-2a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="16" cy="9" r="4" stroke="currentColor" strokeWidth="2"/>
                <path d="M28 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M21 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3>Cadastre-se na plataforma</h3>
            <p>Vendedores e compradores: faça seu cadastro e acesse todas as funcionalidades.</p>
            <Link to="/cadastro" className="btn-primary">Criar Conta</Link>
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="home-about-teaser">
        <div className="home-about-inner">
          <img src="/amazonia-brand.png" alt="Amazônia Circular" className="about-teaser-img" />
          <div className="about-teaser-text">
            <span className="about-teaser-label">Sobre nós</span>
            <h3>Transformando resíduos industriais em oportunidade</h3>
            <p>
              A Amazônia Circular é uma plataforma que conecta indústrias geradoras de aparas plásticas
              a empresas recicladoras e transformadoras, promovendo a economia circular no Polo Industrial de Manaus.
            </p>
            <Link to="/sobre" className="about-teaser-link">
              Conheça o projeto
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
