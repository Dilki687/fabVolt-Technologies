import { Suspense } from "react"
import { OrderForm } from "@/components/order/order-form"

export const metadata = {
  title: "Order Request | FabVolt Technologies",
  description: "Submit your order request for FabVolt PCB products. We will process your order via WhatsApp.",
}

export default function OrderPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a1724] py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold text-[#f0c21f] uppercase tracking-wider">
              Order Request
            </span>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl font-[family-name:var(--font-heading)]">
              Complete Your Order
            </h1>
            <p className="mt-4 text-lg text-white/70 leading-relaxed">
              Fill out the form below to submit your order request. You will be redirected to WhatsApp to finalize your order.
            </p>
          </div>
        </div>
      </section>

      {/* Order Form */}
      <section className="py-12 lg:py-20 bg-[#f4f6f8]">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <Suspense fallback={<div className="animate-pulse bg-white rounded-xl h-[600px]" />}>
            <OrderForm />
          </Suspense>
        </div>
      </section>
    </>
  )
}
