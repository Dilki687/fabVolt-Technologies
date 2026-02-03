'use client'

import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Ahmed Hassan",
    company: "TechStart Solutions",
    role: "CEO",
    content: "FabVolt Technologies delivered an outstanding PCB design for our IoT project. Their attention to detail and quick turnaround time exceeded our expectations. Highly recommended!",
    rating: 5,
    image: "AH"
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    company: "Digital Innovations Ltd",
    role: "Product Manager",
    content: "The web development team at FabVolt built us a stunning e-commerce platform. The site is lightning fast, SEO-optimized, and has significantly increased our online sales.",
    rating: 5,
    image: "SM"
  },
  {
    id: 3,
    name: "Rajesh Kumar",
    company: "SmartFarm Systems",
    role: "Founder",
    content: "Outstanding IoT solution for our agricultural monitoring system. The team handled both hardware and software seamlessly. Their support post-launch has been excellent.",
    rating: 5,
    image: "RK"
  },
  {
    id: 4,
    name: "Maria Garcia",
    company: "FinTech Startup",
    role: "CTO",
    content: "Professional team with deep technical expertise. They built a robust API and cloud infrastructure that handles our growing user base without any issues.",
    rating: 5,
    image: "MG"
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-[#f0c21f] uppercase tracking-wider">
            Trusted by Clients
          </span>
          <h2 className="mt-3 text-3xl font-bold text-[#0a1724] sm:text-4xl font-[family-name:var(--font-heading)]">
            What Our Clients Say
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-[#5a6a7a] leading-relaxed">
            Real feedback from satisfied clients who have experienced FabVolt's expertise and dedication to delivering exceptional results.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="p-8 border border-[#e2e8f0] hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#f0c21f] text-[#f0c21f]"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-[#5a6a7a] leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#f0c21f] flex items-center justify-center">
                  <span className="font-bold text-[#0a1724] text-sm">
                    {testimonial.image}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-[#0a1724]">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-[#5a6a7a]">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
