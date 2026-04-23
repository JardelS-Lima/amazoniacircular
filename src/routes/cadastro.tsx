import { useState } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/cadastro')({
  component: CadastroPage,
})

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
    .join('&')
}

type UserType = 'vendedor' | 'comprador'

function CadastroPage() {
  const [userType, setUserType] = useState<UserType | null>(null)
  const [fields, setFields] = useState({
    empresa: '',
    cnpj: '',
    responsavel: '',
    email: '',
    telefone: '',
    whatsapp: '',
    endereco: '',
    bairro: '',
    tipos_interesse: '',
    descricao: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFields({ ...fields, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'cadastro',
          tipo_usuario: userType || '',
          ...fields,
        }),
      })
      setSubmitted(true)
    } catch {
      setSubmitted(true)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <main className="page-main">
      <div className="page-container">
        <div className="page-hero-banner">
          <img src="/amazonia-hero-bg.jpg" alt="Amazônia Circular" className="page-hero-img" />
          <div className="page-hero-overlay">
            <h1 className="page-hero-title">Faça parte da Amazônia Circular</h1>
            <p className="page-hero-sub">
              Cadastre-se como vendedor ou comprador e conecte-se ao maior marketplace de aparas plásticas do PIM
            </p>
          </div>
        </div>

        {submitted ? (
          <div className="form-success-box">
            <div className="success-icon-lg">
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                <circle cx="28" cy="28" r="26" stroke="#1a6b2a" strokeWidth="2.5" />
                <path d="M16 28l8 8 16-18" stroke="#1a6b2a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2>Cadastro realizado com sucesso!</h2>
            <p>
              Sua solicitação foi recebida. Nossa equipe entrará em contato em até 48h para validar
              seu cadastro e liberar o acesso completo à plataforma.
            </p>
            <div className="form-success-actions">
              <Link to="/" className="btn-primary">Voltar ao Marketplace</Link>
            </div>
          </div>
        ) : !userType ? (
          <div className="cadastro-type-select">
            <h2 className="section-heading">Como deseja participar?</h2>
            <p className="section-sub">Selecione seu perfil para iniciar o cadastro</p>
            <div className="type-cards">
              <button className="type-card" onClick={() => setUserType('vendedor')}>
                <div className="type-card-icon">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <rect x="4" y="12" width="32" height="22" rx="3" stroke="currentColor" strokeWidth="2" />
                    <path d="M4 18h32" stroke="currentColor" strokeWidth="2" />
                    <path d="M14 6h12l4 6H10l4-6z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                    <path d="M16 24h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <h3>Vendedor</h3>
                <p>Sou indústria ou empresa geradora de aparas e resíduos plásticos e desejo vender meus materiais.</p>
                <span className="type-card-cta">Cadastrar como vendedor</span>
              </button>

              <button className="type-card" onClick={() => setUserType('comprador')}>
                <div className="type-card-icon">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <circle cx="14" cy="28" r="3" stroke="currentColor" strokeWidth="2" />
                    <circle cx="28" cy="28" r="3" stroke="currentColor" strokeWidth="2" />
                    <path d="M6 8h4l4 16h16l3-10H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3>Comprador</h3>
                <p>Sou reciclador, transformador ou comerciante e desejo comprar aparas e materiais plásticos.</p>
                <span className="type-card-cta">Cadastrar como comprador</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="form-page-layout">
            <div className="form-sidebar-info">
              <div className="info-card">
                <div className="info-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </div>
                <h3>Benefícios do cadastro</h3>
                <ul className="info-tips">
                  {userType === 'vendedor' ? (
                    <>
                      <li>Alcance compradores de todo o Polo Industrial</li>
                      <li>Publique anúncios ilimitados</li>
                      <li>Receba propostas diretamente</li>
                      <li>Selo de vendedor verificado</li>
                    </>
                  ) : (
                    <>
                      <li>Acesso a todas as ofertas do marketplace</li>
                      <li>Alertas de novos materiais de interesse</li>
                      <li>Negocie diretamente com fornecedores</li>
                      <li>Histórico de negociações</li>
                    </>
                  )}
                </ul>
              </div>
              <button className="btn-secondary btn-full" onClick={() => setUserType(null)}>
                Voltar à seleção de perfil
              </button>
              <img src="/amazonia-banner.jpg" alt="Amazônia Circular" className="form-sidebar-img" />
            </div>

            <form onSubmit={handleSubmit} className="page-form" name="cadastro" method="POST" data-netlify="true" netlify-honeypot="bot-field">
              <input type="hidden" name="form-name" value="cadastro" />
              <input type="hidden" name="tipo_usuario" value={userType} />
              <p style={{ display: 'none' }}>
                <label>Não preencha: <input id="cadastro-bot-field" name="bot-field" /></label>
              </p>

              <div className="form-type-badge">
                Cadastro de {userType === 'vendedor' ? 'Vendedor' : 'Comprador'}
              </div>

              <div className="form-section-title">Dados da Empresa</div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="c-empresa">Razão social / Nome fantasia *</label>
                  <input id="c-empresa" type="text" name="empresa" value={fields.empresa} onChange={handleChange} required placeholder="Nome da empresa" />
                </div>
                <div className="form-group">
                  <label htmlFor="c-cnpj">CNPJ *</label>
                  <input id="c-cnpj" type="text" name="cnpj" value={fields.cnpj} onChange={handleChange} required placeholder="XX.XXX.XXX/XXXX-XX" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="c-responsavel">Nome do responsável *</label>
                <input id="c-responsavel" type="text" name="responsavel" value={fields.responsavel} onChange={handleChange} required placeholder="Nome completo" />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="c-email">E-mail corporativo *</label>
                  <input id="c-email" type="email" name="email" value={fields.email} onChange={handleChange} required placeholder="empresa@email.com.br" />
                </div>
                <div className="form-group">
                  <label htmlFor="c-telefone">Telefone *</label>
                  <input id="c-telefone" type="tel" name="telefone" value={fields.telefone} onChange={handleChange} required placeholder="(92) 3xxx-xxxx" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="c-whatsapp">WhatsApp</label>
                <input id="c-whatsapp" type="tel" name="whatsapp" value={fields.whatsapp} onChange={handleChange} placeholder="(92) 9xxxx-xxxx" />
              </div>

              <div className="form-divider" />

              <div className="form-section-title">Localização</div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="c-endereco">Endereço *</label>
                  <input id="c-endereco" type="text" name="endereco" value={fields.endereco} onChange={handleChange} required placeholder="Rua, número" />
                </div>
                <div className="form-group">
                  <label htmlFor="c-bairro">Bairro / Distrito *</label>
                  <input id="c-bairro" type="text" name="bairro" value={fields.bairro} onChange={handleChange} required placeholder="Ex: Distrito Industrial I" />
                </div>
              </div>

              <div className="form-divider" />

              <div className="form-section-title">Informações Adicionais</div>
              <div className="form-group">
                <label htmlFor="c-tipos">
                  Tipos de plástico de interesse
                </label>
                <input id="c-tipos" type="text" name="tipos_interesse" value={fields.tipos_interesse} onChange={handleChange} placeholder="Ex: PET, PP, PEAD, ABS" />
              </div>

              <div className="form-group">
                <label htmlFor="c-descricao">
                  {userType === 'vendedor'
                    ? 'Descreva sua operação (materiais gerados, volumes, etc.)'
                    : 'Descreva sua necessidade (materiais procurados, volumes, etc.)'}
                </label>
                <textarea id="c-descricao" name="descricao" value={fields.descricao} onChange={handleChange} rows={4} placeholder={userType === 'vendedor' ? 'Descreva os tipos de materiais que sua empresa gera, volumes mensais, processos...' : 'Descreva os materiais que procura, volumes desejados, aplicação...'} />
              </div>

              <button type="submit" className="btn-primary btn-full btn-large" disabled={submitting}>
                {submitting ? 'Enviando...' : 'Finalizar Cadastro'}
              </button>
            </form>
          </div>
        )}
      </div>
    </main>
  )
}
