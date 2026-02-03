import { HeroSection } from "@/components/home/hero-section"
import { ServicesSection } from "@/components/home/services-section"
import { FeaturedProducts } from "@/components/home/featured-products"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { WhyChooseUs } from "@/components/home/why-choose-us"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <FeaturedProducts />
      <TestimonialsSection />
      <WhyChooseUs />
      <CTASection />
    </>
  )
}
