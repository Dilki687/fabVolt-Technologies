import Link from "next/link"
import { ArrowRight, CircuitBoard, Globe, Cpu, Smartphone, Server, Wifi } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: CircuitBoard,
    title: "Custom PCB Design",
    description: "Professional PCB design services from schematic to production-ready files with DFM optimization.",
    href: "/services/pcb-design",
    features: ["Multi-layer PCB", "High-Speed Design", "EMC Compliance"],
  },
  {
    icon: Cpu,
    title: "Firmware Development",
    description: "Embedded firmware solutions for microcontrollers and custom hardware applications.",
    href: "/services/pcb-design",
    features: ["ARM & AVR", "RTOS", "Bootloaders"],
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Modern, responsive websites and web applications built with cutting-edge technologies.",
    href: "/services/web-software",
    features: ["React & Next.js", "E-commerce", "CMS Solutions"],
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Cross-platform mobile applications for iOS and Android with native performance.",
    href: "/services/web-software",
    features: ["iOS & Android", "React Native", "Flutter"],
  },
  {
    icon: Server,
    title: "Custom Software",
    description: "Tailored software solutions designed to streamline your business operations.",
    href: "/services/web-software",
    features: ["Business Apps", "API Development", "Cloud Solutions"],
  },
  {
    icon: Wifi,
    title: "IoT Solutions",
    description: "End-to-end IoT development from hardware design to cloud connectivity and dashboards.",
    href: "/services/iot",
    features: ["Sensors & Devices", "Cloud Integration", "Real-time Data"],
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#f4f6f8]">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-semibold text-[#f0c21f] uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0a1724] sm:text-4xl font-[family-name:var(--font-heading)]">
            Complete Tech Solutions Under One Roof
          </h2>
          <p className="mt-4 text-lg text-[#5a6a7a] leading-relaxed">
            From hardware to software, we provide comprehensive technology services 
            to bring your projects from concept to completion.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link key={service.title} href={service.href} className="group">
              <Card className="h-full bg-white border-0 shadow-sm hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-[#0a1724] flex items-center justify-center mb-4 group-hover:bg-[#f0c21f] transition-colors">
                    <service.icon className="w-6 h-6 text-[#f0c21f] group-hover:text-[#0a1724] transition-colors" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-[#0a1724] group-hover:text-[#f0c21f] transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="mt-2 text-[#5a6a7a] text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#0a1724]/5 text-[#0a1724]"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <div className="mt-4 flex items-center text-sm font-medium text-[#f0c21f] opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
