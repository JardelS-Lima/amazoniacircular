import { useCallback, useState } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { CONDITIONS, PLASTIC_TYPES } from '@/data/listings'
import { useNetlifyForm } from '@/hooks/useNetlifyForm'
import { FormSuccess } from '@/components/ui/FormSuccess'

export const Route = createFileRoute('/anuncie')({
  component: AnunciePage,
})

const INITIAL_FIELDS = {
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
}

function AnunciePage() {
  const [fields, setFields] = useState(INITIAL_FIELDS)
  const { isSubmitting, isSuccess, isError, error, submit, reset } = useNetlifyForm('novo-anuncio')

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setFields((prev) => ({ ...prev, [e.target.name]: e.target.value })),
    [],
  )

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()
      await submit(fields)
    },
    [submit, fields],
  )

  const startOver = useCallback(() => {
    setFields(INITIAL_FIELDS)
    reset()
  }, [reset])

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

        {isSuccess ? (
          <FormSuccess
            title="Anúncio enviado com sucesso!"
            message="Sua oferta de material foi recebida e será analisada pela nossa equipe. Você receberá uma confirmação por e-mail em breve."
            actions={
              <>
                <Link to="/" className="btn-primary">
                  Voltar ao Marketplace
                </Link>
                <button className="btn-secondary" onClick={startOver}>
                  Criar outro anúncio
                </button>
              </>
            }
          />
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

              {isError && (
                <div className="form-error" role="alert">
                  Não foi possível publicar o anúncio: {error}
                </div>
              )}

              <button type="submit" className="btn-primary btn-full btn-large" disabled={isSubmitting}>
                {isSubmitting ? 'Enviando...' : 'Publicar Anúncio'}
              </button>
            </form>
          </div>
        )}
      </div>
    </main>
  )
}
