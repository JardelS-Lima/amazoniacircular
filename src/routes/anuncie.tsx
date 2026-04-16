import { useState } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/anuncie')({
  component: AnunciePage,
})

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
    .join('&')
}

const PLASTIC_TYPES = ['PET', 'PEAD', 'PP', 'PEBD', 'PVC', 'PS', 'ABS', 'NYLON', 'ACRILICO']
const CONDITIONS = ['limpo', 'misto', 'contaminado']

function AnunciePage() {
  const [fields, setFields] = useState({
    empresa: '',
    responsavel: '',
    email: '',
    telefone: '',
    whatsapp: '',
    titulo: '',
    tipo_plastico: '',
    condicao: '',
    quantidade_kg: '',
    preco_por_kg: '',
    descricao: '',
    localizacao: '',
    tags: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setFields({ ...fields, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'novo-anuncio',
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
          <img src="/amazonia-banner.jpg" alt="Amazônia Circular" className="page-hero-img" />
          <div className="page-hero-overlay">
            <h1 className="page-hero-title">Publique seu Anúncio</h1>
            <p className="page-hero-sub">
              Conecte-se com compradores de todo o Polo Industrial de Manaus
            </p>
          </div>
        </div>

        {submitted ? (
          <div className="form-success-box">
            <div className="success-icon-lg">
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                <circle cx="28" cy="28" r="26" stroke="#1a6b2a" strokeWidth="2.5" />
                <path
                  d="M16 28l8 8 16-18"
                  stroke="#1a6b2a"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h2>Anúncio enviado com sucesso!</h2>
            <p>
              Sua oferta de material foi recebida e será analisada pela nossa equipe. Você receberá
              uma confirmação por e-mail em breve.
            </p>
            <div className="form-success-actions">
              <Link to="/" className="btn-primary">
                Voltar ao Marketplace
              </Link>
              <button className="btn-secondary" onClick={() => { setSubmitted(false); setFields({ empresa: '', responsavel: '', email: '', telefone: '', whatsapp: '', titulo: '', tipo_plastico: '', condicao: '', quantidade_kg: '', preco_por_kg: '', descricao: '', localizacao: '', tags: '' }) }}>
                Criar outro anúncio
              </button>
            </div>
          </div>
        ) : (
          <div className="form-page-layout">
            <div className="form-sidebar-info">
              <div className="info-card">
                <div className="info-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.8" />
                  </svg>
                </div>
                <h3>Como funciona</h3>
                <ol className="info-steps">
                  <li>Preencha os dados do material disponível</li>
                  <li>Nossa equipe analisa e aprova o anúncio</li>
                  <li>Compradores entram em contato diretamente</li>
                  <li>Negocie e feche o melhor acordo</li>
                </ol>
              </div>
              <div className="info-card">
                <div className="info-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </div>
                <h3>Dicas para um bom anúncio</h3>
                <ul className="info-tips">
                  <li>Seja detalhado na descrição do material</li>
                  <li>Informe condição real (limpo, misto, contaminado)</li>
                  <li>Inclua dados de quantidade e preço realistas</li>
                  <li>Mencione certificações ou laudos disponíveis</li>
                </ul>
              </div>
              <img src="/amazonia-hero-bg.jpg" alt="Economia Circular" className="form-sidebar-img" />
            </div>

            <form onSubmit={handleSubmit} className="page-form" name="novo-anuncio" method="POST" data-netlify="true" netlify-honeypot="bot-field">
              <input type="hidden" name="form-name" value="novo-anuncio" />
              <p style={{ display: 'none' }}>
                <label>Não preencha: <input name="bot-field" /></label>
              </p>

              <div className="form-section-title">Dados da Empresa</div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="a-empresa">Nome da empresa *</label>
                  <input id="a-empresa" type="text" name="empresa" value={fields.empresa} onChange={handleChange} required placeholder="Razão social ou nome fantasia" />
                </div>
                <div className="form-group">
                  <label htmlFor="a-responsavel">Responsável *</label>
                  <input id="a-responsavel" type="text" name="responsavel" value={fields.responsavel} onChange={handleChange} required placeholder="Nome completo" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="a-email">E-mail *</label>
                  <input id="a-email" type="email" name="email" value={fields.email} onChange={handleChange} required placeholder="empresa@email.com.br" />
                </div>
                <div className="form-group">
                  <label htmlFor="a-telefone">Telefone</label>
                  <input id="a-telefone" type="tel" name="telefone" value={fields.telefone} onChange={handleChange} placeholder="(92) 3xxx-xxxx" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="a-whatsapp">WhatsApp</label>
                <input id="a-whatsapp" type="tel" name="whatsapp" value={fields.whatsapp} onChange={handleChange} placeholder="(92) 9xxxx-xxxx" />
              </div>

              <div className="form-divider" />

              <div className="form-section-title">Dados do Material</div>
              <div className="form-group">
                <label htmlFor="a-titulo">Título do anúncio *</label>
                <input id="a-titulo" type="text" name="titulo" value={fields.titulo} onChange={handleChange} required placeholder="Ex: Aparas de PET Transparente Pós-Industrial" />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="a-tipo">Tipo de plástico *</label>
                  <select id="a-tipo" name="tipo_plastico" value={fields.tipo_plastico} onChange={handleChange} required className="form-select">
                    <option value="">Selecione...</option>
                    {PLASTIC_TYPES.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="a-condicao">Condição *</label>
                  <select id="a-condicao" name="condicao" value={fields.condicao} onChange={handleChange} required className="form-select">
                    <option value="">Selecione...</option>
                    {CONDITIONS.map((c) => (
                      <option key={c} value={c}>{c.charAt(0).toUpperCase() + c.slice(1)}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="a-qtd">Quantidade disponível (kg) *</label>
                  <input id="a-qtd" type="number" name="quantidade_kg" value={fields.quantidade_kg} onChange={handleChange} required placeholder="Ex: 5000" min="1" />
                </div>
                <div className="form-group">
                  <label htmlFor="a-preco">Preço por kg (R$) *</label>
                  <input id="a-preco" type="number" name="preco_por_kg" value={fields.preco_por_kg} onChange={handleChange} required placeholder="Ex: 1.20" min="0" step="0.01" />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="a-local">Localização *</label>
                <input id="a-local" type="text" name="localizacao" value={fields.localizacao} onChange={handleChange} required placeholder="Ex: Distrito Industrial de Manaus" />
              </div>

              <div className="form-group">
                <label htmlFor="a-desc">Descrição detalhada *</label>
                <textarea id="a-desc" name="descricao" value={fields.descricao} onChange={handleChange} required rows={5} placeholder="Descreva o material: origem, processo, pureza, formato (fardo/granel/moído), frequência de geração, certificações disponíveis..." />
              </div>

              <div className="form-group">
                <label htmlFor="a-tags">Tags (separadas por vírgula)</label>
                <input id="a-tags" type="text" name="tags" value={fields.tags} onChange={handleChange} placeholder="Ex: termoformagem, cristal, sem-contaminação" />
              </div>

              <button type="submit" className="btn-primary btn-full btn-large" disabled={submitting}>
                {submitting ? 'Enviando...' : 'Publicar Anúncio'}
              </button>
            </form>
          </div>
        )}
      </div>
    </main>
  )
}
