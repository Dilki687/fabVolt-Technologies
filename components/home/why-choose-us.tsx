import { Shield, Clock, Users, Award, Headphones, Zap } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Quality Assured",
    description: "Every project undergoes rigorous quality checks to ensure the highest standards.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Quick delivery without compromising on quality. We value your time.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Skilled engineers and developers with years of industry experience.",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description: "500+ successful projects delivered to clients worldwide.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Direct communication via WhatsApp for quick responses and updates.",
  },
  {
    icon: Zap,
    title: "End-to-End Solutions",
    description: "From concept to production, we handle every step of your project.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-[#f4f6f8]">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-sm font-semibold text-[#f0c21f] uppercase tracking-wider">
            Why FabVolt
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0a1724] sm:text-4xl font-[family-name:var(--font-heading)]">
            Why Choose FabVolt Technologies?
          </h2>
          <p className="mt-4 text-lg text-[#5a6a7a] leading-relaxed">
            We combine technical expertise with a customer-first approach to deliver 
            solutions that exceed expectations.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="flex gap-4">
              <div className="shrink-0">
                <div className="w-12 h-12 rounded-lg bg-[#0a1724] flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-[#f0c21f]" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#0a1724]">
                  {feature.title}
                </h3>
                <p className="mt-1 text-[#5a6a7a] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
