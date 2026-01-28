import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-[#0a1724] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#f0c21f]/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 lg:px-8 text-center">
        <MessageCircle className="w-16 h-16 text-[#f0c21f] mx-auto mb-6" />
        
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl font-[family-name:var(--font-heading)]">
          Ready to Start Your Project?
        </h2>
        
        <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
          Whether you need a custom PCB design, a web application, or an IoT solution, 
          our team is ready to help bring your vision to life. Get in touch today!
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-[#f0c21f] text-[#0a1724] hover:bg-[#f0c21f]/90 font-semibold text-base px-8"
          >
            <Link href="/contact">
              Request a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10 font-semibold text-base px-8 bg-transparent"
          >
            <Link href="/services/pcb-design">Explore PCB Services</Link>
          </Button>
        </div>

        <p className="mt-8 text-sm text-white/50">
          All inquiries are handled via WhatsApp for quick and direct communication.
        </p>
      </div>
    </section>
  )
}
