import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Filter } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { products, productCategories } from "@/lib/data/products"

export const metadata = {
  title: "PCB Products | FabVolt Technologies",
  description: "Browse our catalog of pre-designed PCB products including development boards, IoT modules, motor drivers, and more.",
}

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a1724] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-[#f0c21f] uppercase tracking-wider">
              Product Catalog
            </span>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl font-[family-name:var(--font-heading)]">
              PCB Products & Modules
            </h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              Explore our range of ready-made PCB solutions designed for various applications. 
              All products are tested and ready for immediate deployment in your projects.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 lg:py-24 bg-[#f4f6f8]">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          {/* Categories */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="w-5 h-5 text-[#5a6a7a]" />
              <span className="text-sm font-medium text-[#5a6a7a]">Categories</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                className="px-4 py-2 text-sm font-medium rounded-full bg-[#0a1724] text-white"
              >
                All Products
              </button>
              {productCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className="px-4 py-2 text-sm font-medium rounded-full bg-white text-[#0a1724] border border-[#e2e8f0] hover:border-[#f0c21f] hover:text-[#f0c21f] transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
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
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-[#0a1724]/60 flex items-center justify-center">
                        <span className="px-3 py-1 text-sm font-medium bg-white text-[#0a1724] rounded">
                          Out of Stock
                        </span>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-5">
                    <span className="text-xs font-medium text-[#5a6a7a] uppercase tracking-wider">
                      {product.category}
                    </span>
                    <h3 className="mt-2 text-lg font-semibold text-[#0a1724] group-hover:text-[#f0c21f] transition-colors">
                      {product.name}
                    </h3>
                    <p className="mt-2 text-sm text-[#5a6a7a] line-clamp-2">
                      {product.shortDescription}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-xl font-bold text-[#0a1724]">
                        ${product.price.toFixed(2)}
                      </span>
                      <span className="text-sm font-medium text-[#f0c21f] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        View Details
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Info Box */}
          <div className="mt-16 bg-white rounded-xl p-8 border border-[#e2e8f0]">
            <h2 className="text-xl font-semibold text-[#0a1724]">
              How to Order
            </h2>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-[#f0c21f] text-[#0a1724] flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-medium text-[#0a1724]">Browse Products</h3>
                  <p className="mt-1 text-sm text-[#5a6a7a]">
                    Explore our catalog and find the product that fits your needs.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-[#f0c21f] text-[#0a1724] flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-medium text-[#0a1724]">Fill Order Form</h3>
                  <p className="mt-1 text-sm text-[#5a6a7a]">
                    Click &quot;Buy This Item&quot; and complete the order request form.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-[#f0c21f] text-[#0a1724] flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-medium text-[#0a1724]">Confirm via WhatsApp</h3>
                  <p className="mt-1 text-sm text-[#5a6a7a]">
                    Send the pre-filled message to finalize your order directly with us.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
