import { Link } from '@tanstack/react-router'

export function CTAs() {
  return (
    <>
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
    </>
  )
}