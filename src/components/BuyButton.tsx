import { useEffect, useState } from 'react'
import { createCheckoutSession, getStripeEnabled } from '@/lib/stripe'

export function BuyButton({
  listingId,
  className = '',
}: {
  listingId: number
  className?: string
}) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [stripeEnabled, setStripeEnabled] = useState<boolean | null>(null)

  useEffect(() => {
    getStripeEnabled().then(setStripeEnabled)
  }, [])

  const handleClick = async () => {
    setLoading(true)
    setError(null)
    try {
      const url = await createCheckoutSession({ data: listingId })
      if (url) {
        window.location.href = url
      }
    } catch (err) {
      console.error('Checkout error:', err)
      setError('Erro ao iniciar checkout. Tente novamente.')
      setLoading(false)
    }
  }

  if (stripeEnabled === false) {
    return (
      <button
        disabled
        className={`px-6 py-2 rounded-lg border ${className}`}
        title="Checkout is not available"
      >
        Checkout Indisponível
      </button>
    )
  }

  return (
    <div>
      <button
        onClick={handleClick}
        disabled={loading || stripeEnabled === null}
        className={`px-6 py-2 rounded-lg border disabled:cursor-wait ${className}`}
      >
        {loading ? 'Processando...' : 'Comprar Agora'}
      </button>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  )
}
