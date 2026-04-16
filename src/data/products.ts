// Legacy product interface kept for Stripe server utility compatibility.
// The active marketplace data lives in src/data/listings.ts.

export interface Product {
  id: number
  name: string
  image: string
  description: string
  shortDescription: string
  price: number
}

const products: Array<Product> = []

export default products
