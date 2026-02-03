'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Filter, ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Product } from '@/lib/data/products'

interface ProductsFilterProps {
  products: Product[]
  categories: string[]
}

export function ProductsFilter({ products, categories }: ProductsFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState('All Products')

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'All Products') {
      return products
    }
    return products.filter(product => product.category === selectedCategory)
  }, [selectedCategory, products])

  return (
    <>
      {/* Categories */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <Filter className="w-5 h-5 text-[#5a6a7a]" />
          <span className="text-sm font-medium text-[#5a6a7a]">Categories</span>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setSelectedCategory('All Products')}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
              selectedCategory === 'All Products'
                ? 'bg-[#0a1724] text-white'
                : 'bg-white text-[#0a1724] border border-[#e2e8f0] hover:border-[#f0c21f] hover:text-[#f0c21f]'
            }`}
          >
            All Products
          </button>
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                selectedCategory === category
                  ? 'bg-[#0a1724] text-white'
                  : 'bg-white text-[#0a1724] border border-[#e2e8f0] hover:border-[#f0c21f] hover:text-[#f0c21f]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
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
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-lg text-[#5a6a7a]">No products found in this category.</p>
          </div>
        )}
      </div>

      {/* Results Count */}
      <div className="mt-8 text-center">
        <p className="text-sm text-[#5a6a7a]">
          Showing <strong>{filteredProducts.length}</strong> of <strong>{products.length}</strong> products
        </p>
      </div>
    </>
  )
}
