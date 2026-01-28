import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { products } from "@/lib/data/products"

interface RelatedProductsProps {
  currentProductId: string
  category: string
}

export function RelatedProducts({ currentProductId, category }: RelatedProductsProps) {
  // Get products from the same category, excluding the current product
  const relatedProducts = products
    .filter((p) => p.category === category && p.id !== currentProductId)
    .slice(0, 3)

  // If not enough products in the same category, fill with other products
  if (relatedProducts.length < 3) {
    const otherProducts = products
      .filter((p) => p.id !== currentProductId && !relatedProducts.includes(p))
      .slice(0, 3 - relatedProducts.length)
    relatedProducts.push(...otherProducts)
  }

  if (relatedProducts.length === 0) return null

  return (
    <section className="py-16 lg:py-20 bg-[#f4f6f8]">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-2xl font-bold text-[#0a1724] font-[family-name:var(--font-heading)]">
          Related Products
        </h2>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedProducts.map((product) => (
            <Link key={product.id} href={`/products/${product.slug}`} className="group">
              <Card className="h-full bg-white border border-[#e2e8f0] overflow-hidden hover:shadow-lg transition-all duration-300 group-hover:border-[#f0c21f]">
                <div className="aspect-square relative bg-[#f4f6f8] overflow-hidden">
                  <Image
                    src={product.images[0] || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.badge && (
                    <span className="absolute top-3 left-3 px-2 py-1 text-xs font-semibold bg-[#f0c21f] text-[#0a1724] rounded">
                      {product.badge}
                    </span>
                  )}
                </div>
                <CardContent className="p-4">
                  <span className="text-xs font-medium text-[#5a6a7a] uppercase tracking-wider">
                    {product.category}
                  </span>
                  <h3 className="mt-1 text-lg font-semibold text-[#0a1724] group-hover:text-[#f0c21f] transition-colors line-clamp-1">
                    {product.name}
                  </h3>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-lg font-bold text-[#0a1724]">
                      ${product.price.toFixed(2)}
                    </span>
                    <span className="text-sm font-medium text-[#f0c21f] opacity-0 group-hover:opacity-100 transition-opacity flex items-center">
                      View
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
