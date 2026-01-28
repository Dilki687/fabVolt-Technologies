import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { products } from "@/lib/data/products"

export function FeaturedProducts() {
  const featuredProducts = products.slice(0, 4)

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <span className="text-sm font-semibold text-[#f0c21f] uppercase tracking-wider">
              PCB Products
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0a1724] sm:text-4xl font-[family-name:var(--font-heading)]">
              Ready-Made PCB Solutions
            </h2>
            <p className="mt-4 text-lg text-[#5a6a7a] max-w-2xl">
              Browse our catalog of pre-designed PCB products ready for immediate ordering.
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            className="border-[#0a1724] text-[#0a1724] hover:bg-[#0a1724] hover:text-white shrink-0 bg-transparent"
          >
            <Link href="/products">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
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
                  <p className="mt-1 text-sm text-[#5a6a7a] line-clamp-2">
                    {product.shortDescription}
                  </p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-lg font-bold text-[#0a1724]">
                      ${product.price.toFixed(2)}
                    </span>
                    <span className="text-sm font-medium text-[#f0c21f] opacity-0 group-hover:opacity-100 transition-opacity flex items-center">
                      View Details
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
