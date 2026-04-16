import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/sobre')({
  component: SobrePage,
})

function SobrePage() {
  return (
    <main className="page-main">
      <div className="page-container">
        <div className="page-hero-banner sobre-hero">
          <img src="/amazonia-hero-bg.jpg" alt="Amazônia Circular" className="page-hero-img" />
          <div className="page-hero-overlay">
            <h1 className="page-hero-title">Sobre o Projeto</h1>
            <p className="page-hero-sub">
              Conectando o Polo Industrial de Manaus à Economia Circular
            </p>
          </div>
        </div>

        <div className="sobre-content">
          <section className="sobre-section">
            <div className="sobre-text-block">
              <h2>Amazônia Circular</h2>
              <p>
                O projeto <strong>Amazônia Circular</strong> nasce da necessidade de criar uma solução
                eficiente para a gestão e valorização das aparas plásticas geradas pelo Polo Industrial
                de Manaus (PIM). Com mais de 600 indústrias em operação, o PIM gera um volume significativo
                de resíduos plásticos pós-industriais que representam tanto um desafio ambiental quanto
                uma oportunidade econômica.
              </p>
              <p>
                Nossa plataforma funciona como um <strong>marketplace especializado</strong> que conecta
                indústrias geradoras de aparas e resíduos plásticos a empresas recicladoras,
                transformadoras e comerciantes do setor — promovendo a economia circular e a
                sustentabilidade no coração da Amazônia.
              </p>
            </div>
            <div className="sobre-img-block">
              <img src="/amazonia-brand.png" alt="Amazônia Circular — Transformando resíduos em oportunidade" />
            </div>
          </section>

          <section className="sobre-pillars">
            <h2 className="section-heading">Nossos Pilares</h2>
            <div className="pillars-grid">
              <div className="pillar-card">
                <div className="pillar-icon">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2z" stroke="currentColor" strokeWidth="2" />
                    <path d="M10 16l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3>Sustentabilidade</h3>
                <p>
                  Reduzir o envio de resíduos plásticos para aterros, reintroduzindo-os na cadeia
                  produtiva como matéria-prima secundária, diminuindo a pegada ambiental do PIM.
                </p>
              </div>
              <div className="pillar-card">
                <div className="pillar-icon">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M4 16c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M28 16c0 6.627-5.373 12-12 12S4 22.627 4 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M20 12l-4-4-4 4M12 20l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3>Economia Circular</h3>
                <p>
                  Transformar resíduos industriais em recursos valiosos, criando um ciclo fechado de
                  materiais que gera valor econômico e ambiental para toda a cadeia.
                </p>
              </div>
              <div className="pillar-card">
                <div className="pillar-icon">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M22 21v-2a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="16" cy="9" r="4" stroke="currentColor" strokeWidth="2" />
                    <path d="M28 21v-2a4 4 0 0 0-3-3.87M4 21v-2a4 4 0 0 1 3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="24" cy="9" r="3" stroke="currentColor" strokeWidth="2" />
                    <circle cx="8" cy="9" r="3" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
                <h3>Conexão</h3>
                <p>
                  Conectar geradores e compradores de resíduos plásticos em uma plataforma centralizada,
                  eliminando intermediários e facilitando negociações transparentes.
                </p>
              </div>
              <div className="pillar-card">
                <div className="pillar-icon">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M6 26V10l10-6 10 6v16l-10 2-10-2z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                    <path d="M16 4v24M6 10l10 4 10-4" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3>Rastreabilidade</h3>
                <p>
                  Promover transparência na cadeia de resíduos com informações detalhadas sobre origem,
                  tipo, condição e certificações dos materiais comercializados.
                </p>
              </div>
            </div>
          </section>

          <section className="sobre-numbers">
            <h2 className="section-heading">O Polo Industrial de Manaus em números</h2>
            <div className="numbers-grid">
              <div className="number-card">
                <span className="number-value">600+</span>
                <span className="number-label">Indústrias em operação</span>
              </div>
              <div className="number-card">
                <span className="number-value">500+</span>
                <span className="number-label">Mil toneladas/ano de plástico processado</span>
              </div>
              <div className="number-card">
                <span className="number-value">9</span>
                <span className="number-label">Tipos de polímeros comercializados</span>
              </div>
              <div className="number-card">
                <span className="number-value">R$ 2bi+</span>
                <span className="number-label">Potencial do mercado de reciclagem</span>
              </div>
            </div>
          </section>

          <section className="sobre-banner-section">
            <img src="/amazonia-banner.jpg" alt="Amazônia Circular — Transformando resíduos em oportunidades" className="sobre-banner-img" />
          </section>

          <section className="sobre-doc-section">
            <div className="doc-card">
              <div className="doc-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M8 4h10l8 8v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="2" />
                  <path d="M18 4v8h8" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M10 18h12M10 22h12M10 26h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <h3>Documentação do Projeto</h3>
                <p>Conheça o estudo completo sobre a gestão e valorização de aparas plásticas no Polo Industrial de Manaus.</p>
              </div>
              <a href="/documentacao-amazonia-circular.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Baixar PDF
              </a>
            </div>
          </section>

          <section className="sobre-cta">
            <h2>Faça parte dessa transformação</h2>
            <p>
              Junte-se a empresas que já estão transformando resíduos em oportunidades no Polo Industrial de Manaus.
            </p>
            <div className="sobre-cta-btns">
              <Link to="/cadastro" className="btn-primary btn-large">Cadastre-se agora</Link>
              <Link to="/anuncie" className="btn-secondary btn-large">Publique um anúncio</Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
