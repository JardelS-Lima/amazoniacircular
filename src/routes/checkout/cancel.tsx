import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/checkout/cancel')({
  component: CheckoutCancel,
})

function CheckoutCancel() {
  return (
    <div className="min-h-screen flex items-center justify-center p-5">
      <div className="rounded-2xl p-12 border text-center max-w-lg">
        <div className="text-6xl mb-6">&#10005;</div>
        <h1 className="text-3xl font-bold mb-4">Pagamento Cancelado</h1>
        <p className="mb-8">
          O pagamento foi cancelado. Nenhum valor foi cobrado.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 rounded-lg border"
        >
          Voltar ao Marketplace
        </Link>
      </div>
    </div>
  )
}
