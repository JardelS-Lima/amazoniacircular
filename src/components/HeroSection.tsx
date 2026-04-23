import { Link } from '@tanstack/react-router'
import listings, { sellers } from '@/data/listings'
import type { PlasticType } from '@/data/listings'


interface HeroSectionProps {
  onTypeSelect: (type: PlasticType) => void
}

export function HeroSection({ }: HeroSectionProps) {
  return (
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
    </section>
  )
}