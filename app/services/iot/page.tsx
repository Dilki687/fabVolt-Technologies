import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Wifi, 
  Cloud, 
  BarChart3, 
  Shield, 
  Cpu,
  ArrowRight,
  Check,
  MessageCircle
} from "lucide-react"
import { ServiceRequestForm } from "@/components/services/service-request-form"

export const metadata = {
  title: "IoT Solutions | FabVolt Technologies",
  description: "End-to-end IoT development services including hardware design, firmware, cloud connectivity, and data analytics dashboards.",
}

const services = [
  {
    icon: Cpu,
    title: "IoT Hardware Design",
    description: "Custom IoT device design from sensors to gateways, optimized for connectivity and power efficiency.",
    features: ["Sensor Integration", "Low Power Design", "Wireless Modules", "Custom PCB"],
  },
  {
    icon: Cloud,
    title: "Cloud Connectivity",
    description: "Seamless integration with major cloud platforms for data storage, processing, and device management.",
    features: ["AWS IoT", "Azure IoT", "Google Cloud", "MQTT Protocol"],
  },
  {
    icon: BarChart3,
    title: "Data Analytics & Dashboards",
    description: "Real-time monitoring dashboards and analytics tools to visualize and act on your IoT data.",
    features: ["Real-time Data", "Custom Dashboards", "Alerts & Notifications", "Historical Analysis"],
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Robust security measures to protect your IoT ecosystem from threats and ensure data privacy.",
    features: ["End-to-End Encryption", "Secure Boot", "OTA Updates", "Compliance"],
  },
]

const useCases = [
  {
    title: "Smart Agriculture",
    description: "Monitor soil conditions, weather, and crop health for optimized farming.",
  },
  {
    title: "Industrial Monitoring",
    description: "Track equipment performance, predict maintenance, and reduce downtime.",
  },
  {
    title: "Smart Buildings",
    description: "Automate lighting, HVAC, and security for energy efficiency and comfort.",
  },
  {
    title: "Asset Tracking",
    description: "Real-time location tracking and condition monitoring for valuable assets.",
  },
  {
    title: "Healthcare Devices",
    description: "Remote patient monitoring and medical device connectivity.",
  },
  {
    title: "Energy Management",
    description: "Smart metering and energy consumption optimization.",
  },
]

export default function IoTServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a1724] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold text-[#f0c21f] uppercase tracking-wider">
                IoT Solutions
              </span>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl font-[family-name:var(--font-heading)]">
                Connect Everything with IoT
              </h1>
              <p className="mt-6 text-lg text-white/70 leading-relaxed">
                Build intelligent, connected systems with our end-to-end IoT solutions. 
                From hardware design to cloud integration and analytics, we help you 
                harness the power of the Internet of Things.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#f0c21f] text-[#0a1724] hover:bg-[#f0c21f]/90 font-semibold"
                >
                  <a href="#request-form">
                    Discuss Your IoT Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                >
                  <Link href="/products">View IoT Products</Link>
                </Button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="w-full aspect-square max-w-md mx-auto relative">
                <div className="absolute inset-0 bg-[#f0c21f]/10 rounded-2xl transform rotate-3" />
                <div className="absolute inset-0 bg-[#1a2a3a] rounded-2xl flex items-center justify-center">
                  <Wifi className="w-32 h-32 text-[#f0c21f]" />
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
              Our Capabilities
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0a1724] sm:text-4xl font-[family-name:var(--font-heading)]">
              Full-Stack IoT Development
            </h2>
            <p className="mt-4 text-lg text-[#5a6a7a]">
              Complete IoT solutions from device to cloud and everything in between.
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

      {/* Use Cases */}
      <section className="py-16 lg:py-24 bg-[#f4f6f8]">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-sm font-semibold text-[#f0c21f] uppercase tracking-wider">
              Applications
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0a1724] sm:text-4xl font-[family-name:var(--font-heading)]">
              IoT Use Cases
            </h2>
            <p className="mt-4 text-lg text-[#5a6a7a]">
              IoT solutions for various industries and applications.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase) => (
              <div
                key={useCase.title}
                className="p-6 bg-white rounded-xl border border-[#e2e8f0] hover:border-[#f0c21f] transition-colors"
              >
                <h3 className="text-lg font-semibold text-[#0a1724]">
                  {useCase.title}
                </h3>
                <p className="mt-2 text-sm text-[#5a6a7a]">
                  {useCase.description}
                </p>
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
              Start Your IoT Project
            </h2>
            <p className="mt-4 text-lg text-[#5a6a7a]">
              Share your IoT requirements and we will get back to you via WhatsApp.
            </p>
          </div>

          <ServiceRequestForm serviceType="IoT Solutions" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-[#0a1724]">
        <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
          <MessageCircle className="w-12 h-12 text-[#f0c21f] mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Have an IoT Project in Mind?
          </h2>
          <p className="mt-4 text-white/70">
            Let&apos;s discuss how we can help you build connected solutions.
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
