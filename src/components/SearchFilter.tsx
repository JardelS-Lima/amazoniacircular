import type { PlasticType, Condition } from '@/data/listings'

interface SearchFilterProps {
  search: string
  onSearchChange: (v: string) => void
  selectedTypes: PlasticType[]
  onTypeToggle: (t: PlasticType) => void
  selectedConditions: Condition[]
  onConditionToggle: (c: Condition) => void
  minQty: string
  onMinQtyChange: (v: string) => void
  maxPrice: string
  onMaxPriceChange: (v: string) => void
  onClear: () => void
  totalResults: number
}

const ALL_TYPES: PlasticType[] = ['PET', 'PEAD', 'PP', 'PEBD', 'PVC', 'PS', 'ABS', 'NYLON', 'ACRILICO']
const ALL_CONDITIONS: Condition[] = ['limpo', 'misto', 'contaminado']

const conditionLabel: Record<Condition, string> = {
  limpo: 'Limpo',
  misto: 'Misto',
  contaminado: 'Contaminado',
}

export function SearchFilter({
  search,
  onSearchChange,
  selectedTypes,
  onTypeToggle,
  selectedConditions,
  onConditionToggle,
  minQty,
  onMinQtyChange,
  maxPrice,
  onMaxPriceChange,
  onClear,
  totalResults,
}: SearchFilterProps) {
  const hasFilters =
    search || selectedTypes.length || selectedConditions.length || minQty || maxPrice

  return (
    <aside className="filter-sidebar">
      <div className="filter-header">
        <span className="filter-title">Filtros</span>
        {hasFilters && (
          <button className="filter-clear" onClick={onClear}>
            Limpar
          </button>
        )}
      </div>

      <div className="filter-results-count">{totalResults} anúncio{totalResults !== 1 ? 's' : ''}</div>

      <div className="filter-search">
        <svg className="search-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M11.5 11.5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
        <input
          type="search"
          placeholder="Buscar por tipo, descrição..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="filter-section">
        <div className="filter-section-title">Tipo de plástico</div>
        <div className="filter-chips">
          {ALL_TYPES.map((type) => (
            <button
              key={type}
              onClick={() => onTypeToggle(type)}
              className={`filter-chip ${selectedTypes.includes(type) ? 'active' : ''}`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <div className="filter-section-title">Condição</div>
        <div className="filter-conditions">
          {ALL_CONDITIONS.map((cond) => (
            <label key={cond} className="condition-check">
              <input
                type="checkbox"
                checked={selectedConditions.includes(cond)}
                onChange={() => onConditionToggle(cond)}
              />
              <span className={`condition-dot condition-${cond}`} />
              <span>{conditionLabel[cond]}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <div className="filter-section-title">Quantidade mínima (kg)</div>
        <input
          type="number"
          placeholder="Ex: 1000"
          value={minQty}
          onChange={(e) => onMinQtyChange(e.target.value)}
          className="filter-number-input"
          min="0"
        />
      </div>

      <div className="filter-section">
        <div className="filter-section-title">Preço máximo (R$/kg)</div>
        <input
          type="number"
          placeholder="Ex: 2.00"
          value={maxPrice}
          onChange={(e) => onMaxPriceChange(e.target.value)}
          className="filter-number-input"
          min="0"
          step="0.05"
        />
      </div>
    </aside>
  )
}
