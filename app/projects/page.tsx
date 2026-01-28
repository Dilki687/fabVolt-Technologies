import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, ExternalLink } from "lucide-react"

export const metadata = {
  title: "Our Projects | FabVolt Technologies",
  description: "Explore our portfolio of completed projects including PCB designs, web applications, mobile apps, and IoT solutions.",
}

const projects = [
  {
    id: 1,
    title: "Smart Agriculture Monitoring System",
    category: "IoT Solutions",
    description: "Complete IoT solution for monitoring soil conditions, weather, and irrigation control for a large-scale agricultural operation.",
    image: "/placeholder.svg?height=400&width=600&text=Smart+Agriculture",
    tags: ["IoT", "PCB Design", "Cloud Dashboard", "Mobile App"],
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "Full-featured e-commerce platform with inventory management, payment processing, and analytics dashboard.",
    image: "/placeholder.svg?height=400&width=600&text=E-Commerce+Platform",
    tags: ["Next.js", "React", "PostgreSQL", "Stripe"],
  },
  {
    id: 3,
    title: "Industrial Motor Controller",
    category: "PCB Design",
    description: "High-performance motor controller PCB with CAN bus communication for industrial automation applications.",
    image: "/placeholder.svg?height=400&width=600&text=Motor+Controller",
    tags: ["PCB Design", "Firmware", "Industrial", "CAN Bus"],
  },
  {
    id: 4,
    title: "Fleet Management App",
    category: "Mobile Development",
    description: "Cross-platform mobile application for real-time fleet tracking, driver management, and route optimization.",
    image: "/placeholder.svg?height=400&width=600&text=Fleet+Management",
    tags: ["React Native", "GPS", "Real-time", "API"],
  },
  {
    id: 5,
    title: "LoRa Weather Station Network",
    category: "IoT Solutions",
    description: "Network of solar-powered weather stations with LoRa connectivity for remote environmental monitoring.",
    image: "/placeholder.svg?height=400&width=600&text=Weather+Station",
    tags: ["IoT", "LoRa", "Solar Power", "PCB"],
  },
  {
    id: 6,
    title: "Restaurant Management System",
    category: "Web Development",
    description: "Comprehensive restaurant management solution with POS, inventory tracking, and customer loyalty features.",
    image: "/placeholder.svg?height=400&width=600&text=Restaurant+System",
    tags: ["React", "Node.js", "MongoDB", "PWA"],
  },
]

const categories = [
  "All Projects",
  "PCB Design",
  "Web Development",
  "Mobile Development",
  "IoT Solutions",
]

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a1724] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-[#f0c21f] uppercase tracking-wider">
              Our Portfolio
            </span>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl font-[family-name:var(--font-heading)]">
              Featured Projects
            </h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              Explore our portfolio of successful projects across PCB design, web development, 
              mobile apps, and IoT solutions. Each project represents our commitment to quality 
              and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 lg:py-24 bg-[#f4f6f8]">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          {/* Categories */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <button
                  key={category}
                  type="button"
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                    index === 0
                      ? "bg-[#0a1724] text-white"
                      : "bg-white text-[#0a1724] border border-[#e2e8f0] hover:border-[#f0c21f] hover:text-[#f0c21f]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card key={project.id} className="bg-white border-0 overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="aspect-video relative bg-[#e2e8f0] overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1724]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <CardContent className="p-6">
                  <span className="text-xs font-semibold text-[#f0c21f] uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="mt-2 text-xl font-semibold text-[#0a1724] group-hover:text-[#f0c21f] transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-[#5a6a7a] text-sm line-clamp-2">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs font-medium bg-[#f4f6f8] text-[#5a6a7a] rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-[#0a1724] sm:text-3xl font-[family-name:var(--font-heading)]">
            Have a Similar Project in Mind?
          </h2>
          <p className="mt-4 text-[#5a6a7a]">
            Let us help you bring your ideas to life. Get in touch for a free consultation.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[#f0c21f] text-[#0a1724] hover:bg-[#f0c21f]/90 font-semibold"
            >
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-[#0a1724] text-[#0a1724] hover:bg-[#0a1724] hover:text-white bg-transparent"
            >
              <Link href="/services/pcb-design">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
