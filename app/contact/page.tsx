import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle,
  Clock
} from "lucide-react"
import { ContactForm } from "@/components/contact/contact-form"

export const metadata = {
  title: "Contact Us | FabVolt Technologies",
  description: "Get in touch with FabVolt Technologies for PCB design, web development, and IoT solutions. We respond quickly via WhatsApp.",
}

const contactInfo = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+1 (234) 567-890",
    description: "Our preferred communication channel",
    href: "https://wa.me/94784292775",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@fabvolt.com",
    description: "For detailed inquiries",
    href: "mailto:info@fabvolt.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+1 (234) 567-890",
    description: "Mon-Fri, 9am-6pm",
    href: "tel:+94784292775",
  },
  {
    icon: MapPin,
    title: "Address",
    value: "Tech Hub, Innovation Street",
    description: "Visit our office",
    href: "#",
  },
]

const services = [
  { name: "PCB Design", href: "/services/pcb-design" },
  { name: "Web Development", href: "/services/web-software" },
  { name: "Mobile Apps", href: "/services/web-software" },
  { name: "IoT Solutions", href: "/services/iot" },
  { name: "PCB Products", href: "/products" },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a1724] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-[#f0c21f] uppercase tracking-wider">
              Contact Us
            </span>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl font-[family-name:var(--font-heading)]">
              Let&apos;s Build Something Great Together
            </h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              Have a project in mind or just want to say hello? We&apos;d love to hear from you. 
              Reach out through WhatsApp for the fastest response or fill out the form below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-[#f4f6f8]">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map((info) => (
              <a
                key={info.title}
                href={info.href}
                target={info.href.startsWith("http") ? "_blank" : undefined}
                rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="block"
              >
                <Card className="h-full bg-white border-0 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-10 h-10 rounded-lg bg-[#0a1724] flex items-center justify-center mb-4">
                      <info.icon className="w-5 h-5 text-[#f0c21f]" />
                    </div>
                    <h3 className="font-semibold text-[#0a1724]">{info.title}</h3>
                    <p className="mt-1 text-[#0a1724] font-medium">{info.value}</p>
                    <p className="mt-1 text-sm text-[#5a6a7a]">{info.description}</p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-[#0a1724] font-[family-name:var(--font-heading)]">
                Send Us a Message
              </h2>
              <p className="mt-2 text-[#5a6a7a]">
                Fill out the form and we will get back to you via WhatsApp.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:pl-12">
              <div className="bg-[#f4f6f8] rounded-xl p-8">
                <h3 className="text-lg font-semibold text-[#0a1724]">
                  Quick Response via WhatsApp
                </h3>
                <p className="mt-2 text-[#5a6a7a] text-sm">
                  For the fastest response, reach out to us directly on WhatsApp. 
                  We typically respond within a few hours during business hours.
                </p>
                <a
                  href="https://wa.me/94784292775"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#25D366] text-white font-semibold hover:bg-[#128C7E] transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>

                <div className="mt-8 pt-8 border-t border-[#e2e8f0]">
                  <div className="flex items-center gap-3 text-sm text-[#5a6a7a]">
                    <Clock className="w-5 h-5 text-[#f0c21f]" />
                    <span>Business Hours: Mon-Fri, 9am - 6pm</span>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-[#e2e8f0]">
                  <h4 className="text-sm font-semibold text-[#0a1724] uppercase tracking-wider mb-4">
                    Our Services
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="px-3 py-1 text-sm rounded-full bg-white border border-[#e2e8f0] text-[#0a1724] hover:border-[#f0c21f] hover:text-[#f0c21f] transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
