import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"

const footerLinks = {
  services: [
    { name: "PCB Design", href: "/services/pcb-design" },
    { name: "Web Development", href: "/services/web-software" },
    { name: "IoT Solutions", href: "/services/iot" },
    { name: "Mobile Apps", href: "/services/web-software" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Projects", href: "/projects" },
    { name: "Products", href: "/products" },
    { name: "Contact", href: "/contact" },
  ],
  support: [
    { name: "Request Quote", href: "/contact" },
    { name: "Order PCB", href: "/products" },
    { name: "FAQs", href: "/about#faq" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[#0a1724] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src="/images/whatsapp-20image-202025-10-18-20at-2020.jpg"
                alt="FabVolt Technologies"
                width={140}
                height={44}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              Your trusted partner for PCB design, electronics, web development, and IoT solutions.
            </p>
            <div className="mt-6 space-y-3">
              <a
                href="mailto:info@fabvolt.com"
                className="flex items-center gap-2 text-sm text-white/70 hover:text-[#f0c21f] transition-colors"
              >
                <Mail className="h-4 w-4 text-[#f0c21f]" />
                info@fabvolt.com
              </a>
              <a
                href="tel:+94784292775"
                className="flex items-center gap-2 text-sm text-white/70 hover:text-[#f0c21f] transition-colors"
              >
                <Phone className="h-4 w-4 text-[#f0c21f]" />
                +1 (234) 567-890
              </a>
              <div className="flex items-start gap-2 text-sm text-white/70">
                <MapPin className="h-4 w-4 text-[#f0c21f] mt-0.5" />
                <span>Tech Hub, Innovation Street</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-[#f0c21f] uppercase tracking-wider">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-[#f0c21f] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-[#f0c21f] uppercase tracking-wider">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-[#f0c21f] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-[#f0c21f] uppercase tracking-wider">
              Support
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-[#f0c21f] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-[#1a2a3a] pt-8">
          <p className="text-center text-sm text-white/50">
            &copy; {new Date().getFullYear()} FabVolt Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
