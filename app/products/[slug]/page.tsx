import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { products, getProductBySlug } from "@/lib/data/products"
import { ProductImageGallery } from "@/components/products/product-image-gallery"
import { RelatedProducts } from "@/components/products/related-products"

interface ProductPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params
  const product = getProductBySlug(slug)
  
  if (!product) {
    return {
      title: "Product Not Found | FabVolt Technologies",
    }
  }

  return {
    title: `${product.name} | FabVolt Technologies`,
    description: product.shortDescription,
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  return (
    <>
      {/* Breadcrumb */}
      <section className="bg-[#f4f6f8] py-4 border-b border-[#e2e8f0]">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm text-[#5a6a7a] hover:text-[#f0c21f] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <ProductImageGallery images={product.images} productName={product.name} />

            {/* Product Info */}
            <div>
              <span className="text-sm font-medium text-[#f0c21f] uppercase tracking-wider">
                {product.category}
              </span>
              
              <h1 className="mt-2 text-3xl font-bold text-[#0a1724] sm:text-4xl font-[family-name:var(--font-heading)]">
                {product.name}
              </h1>

              <div className="mt-4 flex items-center gap-4">
                <span className="text-3xl font-bold text-[#0a1724]">
                  ${product.price.toFixed(2)}
                </span>
                {product.inStock ? (
                  <span className="inline-flex items-center gap-1 px-3 py-1 text-sm font-medium text-green-700 bg-green-100 rounded-full">
                    <Check className="w-4 h-4" />
                    In Stock
                  </span>
                ) : (
                  <span className="px-3 py-1 text-sm font-medium text-red-700 bg-red-100 rounded-full">
                    Out of Stock
                  </span>
                )}
              </div>

              <p className="mt-6 text-[#5a6a7a] leading-relaxed">
                {product.description}
              </p>

              {/* Buy Button */}
              <div className="mt-8">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto bg-[#f0c21f] text-[#0a1724] hover:bg-[#f0c21f]/90 font-semibold text-base px-12"
                  disabled={!product.inStock}
                >
                  <Link href={`/order?product=${encodeURIComponent(product.name)}&price=${product.price}`}>
                    Buy This Item
                  </Link>
                </Button>
                <p className="mt-3 text-sm text-[#5a6a7a]">
                  Clicking will take you to the order request form.
                </p>
              </div>

              {/* Specifications */}
              <div className="mt-10">
                <h2 className="text-lg font-semibold text-[#0a1724] mb-4">
                  Specifications
                </h2>
                <div className="border border-[#e2e8f0] rounded-lg overflow-hidden">
                  <table className="w-full">
                    <tbody>
                      {product.specifications.map((spec, index) => (
                        <tr
                          key={spec.label}
                          className={index % 2 === 0 ? "bg-[#f4f6f8]" : "bg-white"}
                        >
                          <td className="px-4 py-3 text-sm font-medium text-[#0a1724]">
                            {spec.label}
                          </td>
                          <td className="px-4 py-3 text-sm text-[#5a6a7a]">
                            {spec.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* WhatsApp Info */}
              <div className="mt-8 p-4 bg-[#0a1724]/5 rounded-lg">
                <p className="text-sm text-[#5a6a7a]">
                  <strong className="text-[#0a1724]">Note:</strong> After submitting the order form, 
                  you will be redirected to WhatsApp to complete your order. All pricing, payment, 
                  and shipping details will be handled directly via WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <RelatedProducts currentProductId={product.id} category={product.category} />
    </>
  )
}
