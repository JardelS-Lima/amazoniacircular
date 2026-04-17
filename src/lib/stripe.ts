import { createServerFn } from '@tanstack/react-start'
import listings from '@/data/listings'

export const getStripeEnabled = createServerFn({ method: 'GET' }).handler(
  () => !!process.env.STRIPE_SECRET_KEY
)

export const createCheckoutSession = createServerFn({
  method: 'POST',
})
  .inputValidator((listingId: number) => listingId)
  .handler(async ({ data: listingId }) => {
    if (!process.env.STRIPE_SECRET_KEY) {
      throw new Error('Stripe is not configured')
    }
    const { default: Stripe } = await import('stripe')
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

    const listing = listings.find((l) => l.id === listingId)
    if (!listing) {
      throw new Error('Listing not found')
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'brl',
            product_data: {
              name: listing.title,
              description: listing.shortDescription,
              images: [listing.image],
            },
            unit_amount: Math.round(listing.pricePerKg * 100), // Convert to cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.SITE_URL ?? 'http://localhost:3000'}/checkout/success`,
      cancel_url: `${process.env.SITE_URL ?? 'http://localhost:3000'}/checkout/cancel`,
    })

    return session.url
  })
