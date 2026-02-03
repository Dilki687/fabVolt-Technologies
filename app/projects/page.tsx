import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { ProjectsFilter } from "@/components/projects/projects-filter"

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
          <ProjectsFilter 
            projects={projects} 
            categories={categories.filter(cat => cat !== 'All Projects')}
          />
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
