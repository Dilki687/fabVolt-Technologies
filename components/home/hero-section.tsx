import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, CircuitBoard, Code } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#0a1724] py-20 lg:py-32">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23f0c21f' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      {/* Gradient overlays */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#f0c21f]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#f0c21f]/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f0c21f]/10 border border-[#f0c21f]/20 mb-6">
              <Zap className="h-4 w-4 text-[#f0c21f]" />
              <span className="text-sm font-medium text-[#f0c21f]">Powering Innovation</span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl font-[family-name:var(--font-heading)]">
              <span className="text-balance">Engineering the Future of</span>{" "}
              <span className="text-[#f0c21f]">Technology</span>
            </h1>
            
            <p className="mt-6 text-lg leading-relaxed text-white/70 max-w-xl mx-auto lg:mx-0">
              From custom PCB design to cutting-edge software solutions, FabVolt Technologies delivers 
              end-to-end tech services that transform your ideas into reality.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-[#f0c21f] text-[#0a1724] hover:bg-[#f0c21f]/90 font-semibold text-base px-8"
              >
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 font-semibold text-base px-8 bg-transparent"
              >
                <Link href="/products">View Products</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8 border-t border-[#1a2a3a] pt-8">
              <div>
                <div className="text-3xl font-bold text-[#f0c21f]">500+</div>
                <div className="text-sm text-white/60">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#f0c21f]">150+</div>
                <div className="text-sm text-white/60">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#f0c21f]">10+</div>
                <div className="text-sm text-white/60">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Circuit board visual */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-80 h-80">
                  {/* Center icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-2xl bg-[#f0c21f]/20 border border-[#f0c21f]/30 flex items-center justify-center">
                      <CircuitBoard className="w-16 h-16 text-[#f0c21f]" />
                    </div>
                  </div>
                  
                  {/* Orbiting icons */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4">
                    <div className="w-16 h-16 rounded-xl bg-[#1a2a3a] border border-[#f0c21f]/20 flex items-center justify-center animate-pulse">
                      <Code className="w-8 h-8 text-[#f0c21f]" />
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4">
                    <div className="w-16 h-16 rounded-xl bg-[#1a2a3a] border border-[#f0c21f]/20 flex items-center justify-center animate-pulse" style={{ animationDelay: '0.5s' }}>
                      <Zap className="w-8 h-8 text-[#f0c21f]" />
                    </div>
                  </div>
                  
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4">
                    <div className="w-16 h-16 rounded-xl bg-[#1a2a3a] border border-[#f0c21f]/20 flex items-center justify-center animate-pulse" style={{ animationDelay: '1s' }}>
                      <svg className="w-8 h-8 text-[#f0c21f]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                  </div>
                  
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4">
                    <div className="w-16 h-16 rounded-xl bg-[#1a2a3a] border border-[#f0c21f]/20 flex items-center justify-center animate-pulse" style={{ animationDelay: '1.5s' }}>
                      <svg className="w-8 h-8 text-[#f0c21f]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17 16l-4-4V8.82C14.16 8.4 15 7.3 15 6c0-1.66-1.34-3-3-3S9 4.34 9 6c0 1.3.84 2.4 2 2.82V12l-4 4H3v5h5v-3.05l4-4.2 4 4.2V21h5v-5h-4z"/>
                      </svg>
                    </div>
                  </div>

                  {/* Connection lines */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 320">
                    <line x1="160" y1="80" x2="160" y2="120" stroke="#f0c21f" strokeWidth="2" strokeOpacity="0.3" strokeDasharray="4 4" />
                    <line x1="160" y1="200" x2="160" y2="240" stroke="#f0c21f" strokeWidth="2" strokeOpacity="0.3" strokeDasharray="4 4" />
                    <line x1="80" y1="160" x2="120" y2="160" stroke="#f0c21f" strokeWidth="2" strokeOpacity="0.3" strokeDasharray="4 4" />
                    <line x1="200" y1="160" x2="240" y2="160" stroke="#f0c21f" strokeWidth="2" strokeOpacity="0.3" strokeDasharray="4 4" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
