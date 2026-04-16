import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Amazônia Circular — Conectando o Polo Industrial à Economia Circular' },
      { name: 'description', content: 'Transformando resíduos industriais em oportunidade. Conecte indústrias geradoras e compradores de aparas e retalhos plásticos no Polo Industrial de Manaus.' },
    ],
    links: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap' },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
        <Scripts />
      </body>
    </html>
  )
}

function SiteHeader() {
  return (
    <header className="site-header">
      <a href="/" className="site-logo">
        <img src="/amazonia-circular-logo.png" alt="Amazônia Circular" className="logo-img" />
        <span className="logo-text">Amazônia Circular</span>
      </a>
      <nav className="site-nav">
        <a href="/" className="nav-link">Marketplace</a>
        <a href="/anuncie" className="nav-link nav-link-highlight">Anuncie</a>
        <a href="/cadastro" className="nav-link">Cadastre-se</a>
        <a href="/sobre" className="nav-link">Sobre nós</a>
      </nav>
      <div className="header-cta">
        <a href="/anuncie" className="btn-header-cta">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 3v8M3 7h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
          Publicar Anúncio
        </a>
        <span className="header-location">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1a4 4 0 0 1 4 4c0 3.5-4 8-4 8S3 8.5 3 5a4 4 0 0 1 4-4z" stroke="currentColor" strokeWidth="1.4"/>
            <circle cx="7" cy="5" r="1.5" stroke="currentColor" strokeWidth="1.4"/>
          </svg>
          Manaus — PIM
        </span>
      </div>
    </header>
  )
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand-col">
            <div className="footer-brand">
              <img src="/amazonia-circular-logo.png" alt="Amazônia Circular" className="footer-logo-img" />
              <span className="footer-name">Amazônia Circular</span>
            </div>
            <p className="footer-desc">
              Transformando resíduos industriais em oportunidade. Conectando o Polo Industrial de Manaus à Economia Circular.
            </p>
          </div>
          <div className="footer-links-col">
            <h4 className="footer-col-title">Plataforma</h4>
            <a href="/" className="footer-link">Marketplace</a>
            <a href="/anuncie" className="footer-link">Publicar Anúncio</a>
            <a href="/cadastro" className="footer-link">Cadastre-se</a>
          </div>
          <div className="footer-links-col">
            <h4 className="footer-col-title">Institucional</h4>
            <a href="/sobre" className="footer-link">Sobre nós</a>
            <a href="/documentacao-amazonia-circular.pdf" target="_blank" rel="noopener noreferrer" className="footer-link">Documentação</a>
          </div>
          <div className="footer-links-col">
            <h4 className="footer-col-title">Localização</h4>
            <p className="footer-info-text">Manaus — Amazonas</p>
            <p className="footer-info-text">Polo Industrial de Manaus</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">&copy; 2026 Amazônia Circular. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
