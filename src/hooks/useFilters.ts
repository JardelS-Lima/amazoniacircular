import { useMemo, useState } from 'react'
import type { Listing, PlasticType, Condition } from '@/data/listings'

export function useFilters(source: Listing[]) {
  const [search, setSearch] = useState('')
  const [selectedTypes, setSelectedTypes] = useState<PlasticType[]>([])
  const [selectedConditions, setSelectedConditions] = useState<Condition[]>([])
  const [minQty, setMinQty] = useState('')
  const [maxPrice, setMaxPrice] = useState('')

  const toggleType = (t: PlasticType) =>
    setSelectedTypes((prev) =>
      prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t],
    )

  const toggleCondition = (c: Condition) =>
    setSelectedConditions((prev) =>
      prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c],
    )

  const clear = () => {
    setSearch('')
    setSelectedTypes([])
    setSelectedConditions([])
    setMinQty('')
    setMaxPrice('')
  }

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    const min = minQty ? parseInt(minQty, 10) : null
    const max = maxPrice ? parseFloat(maxPrice) : null

    return source.filter((l) => {
      if (q) {
        const haystack = `${l.title} ${l.plasticType} ${l.shortDescription} ${l.tags.join(' ')}`.toLowerCase()
        if (!haystack.includes(q)) return false
      }
      if (selectedTypes.length && !selectedTypes.includes(l.plasticType)) return false
      if (selectedConditions.length && !selectedConditions.includes(l.condition)) return false
      if (min !== null && !Number.isNaN(min) && l.quantityKg < min) return false
      if (max !== null && !Number.isNaN(max) && l.pricePerKg > max) return false
      return true
    })
  }, [source, search, selectedTypes, selectedConditions, minQty, maxPrice])

  const hasFilters = Boolean(
    search || selectedTypes.length || selectedConditions.length || minQty || maxPrice,
  )

  return {
    search,
    setSearch,
    selectedTypes,
    setSelectedTypes,
    selectedConditions,
    toggleType,
    toggleCondition,
    minQty,
    setMinQty,
    maxPrice,
    setMaxPrice,
    clear,
    filtered,
    hasFilters,
  }
}
