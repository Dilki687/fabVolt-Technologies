import { products, productCategories } from "@/lib/data/products"
import { ProductsFilter } from "@/components/products/products-filter"

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
          <ProductsFilter products={products} categories={productCategories} />

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
