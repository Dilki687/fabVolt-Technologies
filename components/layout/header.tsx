"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "#",
    children: [
      { name: "PCB Design Services", href: "/services/pcb-design" },
      { name: "Web & Software", href: "/services/web-software" },
      { name: "IoT Solutions", href: "/services/iot" },
    ],
  },
  { name: "Products", href: "/products" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true
    if (href !== "/" && pathname.startsWith(href)) return true
    return false
  }

  return (
    <header className="sticky top-0 z-50 bg-[#0a1724] border-b border-[#1a2a3a]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <Image
              src="/images/whatsapp-20image-202025-10-18-20at-2020.jpg"
              alt="FabVolt Technologies"
              width={200}
              height={60}
              className="h-14 w-auto"
              priority
            />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) =>
            item.children ? (
              <DropdownMenu key={item.name}>
                <DropdownMenuTrigger className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                  isActive(item.href) ? "text-[#f0c21f]" : "text-white/80 hover:text-[#f0c21f]"
                }`}>
                  {item.name}
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-[#0a1724] border-[#1a2a3a]">
                  {item.children.map((child) => (
                    <DropdownMenuItem key={child.name} asChild>
                      <Link
                        href={child.href}
                        className={`cursor-pointer transition-colors ${
                          isActive(child.href)
                            ? "text-[#f0c21f] bg-[#1a2a3a]"
                            : "text-white/80 hover:text-[#f0c21f] hover:bg-[#1a2a3a]"
                        }`}
                      >
                        {child.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.href) ? "text-[#f0c21f]" : "text-white/80 hover:text-[#f0c21f]"
                }`}
              >
                {item.name}
              </Link>
            )
          )}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button
            asChild
            className="bg-[#f0c21f] text-[#0a1724] hover:bg-[#f0c21f]/90 font-semibold"
          >
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a1724] border-t border-[#1a2a3a]">
          <div className="space-y-1 px-4 pb-4 pt-2">
            {navigation.map((item) =>
              item.children ? (
                <div key={item.name} className="space-y-1">
                  <div className="text-sm font-medium text-white/60 py-2">
                    {item.name}
                  </div>
                  {item.children.map((child) => (
                    <Link
                      key={child.name}
                      href={child.href}
                      className="block pl-4 py-2 text-sm text-white/80 hover:text-[#f0c21f]"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block py-2 text-sm font-medium transition-colors ${
                    isActive(item.href) ? "text-[#f0c21f]" : "text-white/80 hover:text-[#f0c21f]"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            )}
            <div className="pt-4">
              <Button
                asChild
                className="w-full bg-[#f0c21f] text-[#0a1724] hover:bg-[#f0c21f]/90 font-semibold"
              >
                <Link href="/contact">Get a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
