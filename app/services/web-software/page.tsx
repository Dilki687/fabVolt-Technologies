import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Globe, 
  Smartphone, 
  ShoppingCart, 
  Server, 
  ArrowRight,
  Check,
  MessageCircle
} from "lucide-react"
import { ServiceRequestForm } from "@/components/services/service-request-form"

export const metadata = {
  title: "Web & Software Development | FabVolt Technologies",
  description: "Professional web development, mobile app development, e-commerce solutions, and custom software development services.",
}

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Modern, responsive websites built with the latest technologies for optimal performance and user experience.",
    features: ["React & Next.js", "Responsive Design", "SEO Optimization", "CMS Integration"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Cross-platform mobile applications for iOS and Android with native-like performance.",
    features: ["iOS & Android", "React Native", "Flutter", "Native Apps"],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Complete e-commerce platforms with payment integration, inventory management, and analytics.",
    features: ["Shopify", "WooCommerce", "Custom Solutions", "Payment Gateway"],
  },
  {
    icon: Server,
    title: "Custom Software",
    description: "Tailored software solutions designed to streamline your business operations and workflows.",
    features: ["Business Apps", "API Development", "Cloud Solutions", "Database Design"],
  },
]

const technologies = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "AWS", category: "Cloud" },
  { name: "React Native", category: "Mobile" },
  { name: "Flutter", category: "Mobile" },
  { name: "Docker", category: "DevOps" },
  { name: "Git", category: "Version Control" },
]

export default function WebSoftwarePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a1724] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold text-[#f0c21f] uppercase tracking-wider">
                Web & Software Development
              </span>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl font-[family-name:var(--font-heading)]">
                Build Your Digital Presence
              </h1>
              <p className="mt-6 text-lg text-white/70 leading-relaxed">
                From stunning websites to powerful mobile apps and custom software, 
                we build digital solutions that drive business growth and enhance user experience.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#f0c21f] text-[#0a1724] hover:bg-[#f0c21f]/90 font-semibold"
                >
                  <a href="#request-form">
                    Start a Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                >
                  <Link href="/projects">View Our Work</Link>
                </Button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="w-full aspect-square max-w-md mx-auto relative">
                <div className="absolute inset-0 bg-[#f0c21f]/10 rounded-2xl transform rotate-3" />
                <div className="absolute inset-0 bg-[#1a2a3a] rounded-2xl flex items-center justify-center">
                  <Globe className="w-32 h-32 text-[#f0c21f]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-sm font-semibold text-[#f0c21f] uppercase tracking-wider">
              Our Services
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0a1724] sm:text-4xl font-[family-name:var(--font-heading)]">
              Software Solutions for Every Need
            </h2>
            <p className="mt-4 text-lg text-[#5a6a7a]">
              Comprehensive development services to help you succeed in the digital world.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <Card key={service.title} className="bg-white border border-[#e2e8f0] hover:border-[#f0c21f] transition-colors">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-[#0a1724] flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-[#f0c21f]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#0a1724]">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-[#5a6a7a]">
                    {service.description}
                  </p>
                  <ul className="mt-4 grid grid-cols-2 gap-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-[#5a6a7a]">
                        <Check className="w-4 h-4 text-[#f0c21f]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 lg:py-24 bg-[#f4f6f8]">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-sm font-semibold text-[#f0c21f] uppercase tracking-wider">
              Tech Stack
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0a1724] sm:text-4xl font-[family-name:var(--font-heading)]">
              Technologies We Use
            </h2>
            <p className="mt-4 text-lg text-[#5a6a7a]">
              We work with modern, industry-standard technologies to build reliable solutions.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="px-4 py-2 rounded-full bg-white border border-[#e2e8f0] hover:border-[#f0c21f] transition-colors"
              >
                <span className="text-sm font-medium text-[#0a1724]">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Form */}
      <section id="request-form" className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#f0c21f] uppercase tracking-wider">
              Get Started
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0a1724] sm:text-4xl font-[family-name:var(--font-heading)]">
              Start Your Project
            </h2>
            <p className="mt-4 text-lg text-[#5a6a7a]">
              Tell us about your project and we will get back to you via WhatsApp.
            </p>
          </div>

          <ServiceRequestForm serviceType="Web/Software Development" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-[#0a1724]">
        <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
          <MessageCircle className="w-12 h-12 text-[#f0c21f] mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Ready to Discuss Your Project?
          </h2>
          <p className="mt-4 text-white/70">
            Get in touch with our team for a free consultation.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold"
          >
            <a href="https://wa.me/94710475008" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat on WhatsApp
            </a>
          </Button>
        </div>
      </section>
    </>
  )
}
