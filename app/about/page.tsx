import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  Users, 
  Target, 
  Award, 
  Lightbulb,
  ArrowRight,
  Check,
  ChevronDown
} from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata = {
  title: "About Us | FabVolt Technologies",
  description: "Learn about FabVolt Technologies - your trusted partner for PCB design, web development, and IoT solutions.",
}

const values = [
  {
    icon: Target,
    title: "Quality First",
    description: "We never compromise on quality. Every project undergoes rigorous testing and review.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Your success is our priority. We work closely with you to understand and meet your needs.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We stay at the forefront of technology to deliver cutting-edge solutions.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in everything we do, from design to delivery.",
  },
]

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "150+", label: "Happy Clients" },
  { value: "10+", label: "Years Experience" },
  { value: "50+", label: "Team Members" },
]

const faqs = [
  {
    question: "How do I place an order for PCB products?",
    answer: "Browse our product catalog, select the product you want, click 'Buy This Item', fill out the order form, and submit. You'll be redirected to WhatsApp to complete your order directly with our team.",
  },
  {
    question: "Do you offer custom PCB design services?",
    answer: "Yes! We offer complete custom PCB design services from schematic design to production-ready files. Contact us via our PCB Design Services page to discuss your requirements.",
  },
  {
    question: "What is the typical turnaround time for a project?",
    answer: "Turnaround time varies depending on project complexity. Simple projects can be completed in 1-2 weeks, while complex projects may take 1-3 months. We'll provide an accurate estimate after reviewing your requirements.",
  },
  {
    question: "Do you provide support after project delivery?",
    answer: "Yes, we provide post-delivery support for all our services. This includes bug fixes, minor modifications, and technical assistance to ensure your project runs smoothly.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "All pricing, payment, and shipping details are handled directly via WhatsApp. We can accommodate various payment methods based on your location and preferences.",
  },
  {
    question: "Can you work with international clients?",
    answer: "We work with clients worldwide. Our WhatsApp-based communication system makes it easy to collaborate across time zones and deliver products globally.",
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a1724] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-[#f0c21f] uppercase tracking-wider">
              About FabVolt
            </span>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl font-[family-name:var(--font-heading)]">
              Engineering Innovation, Delivering Excellence
            </h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              FabVolt Technologies is a leading technology company specializing in PCB design, 
              web development, and IoT solutions. We combine technical expertise with a 
              customer-first approach to deliver solutions that exceed expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#f0c21f] py-12">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-[#0a1724]">{stat.value}</div>
                <div className="mt-1 text-sm font-medium text-[#0a1724]/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold text-[#f0c21f] uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0a1724] sm:text-4xl font-[family-name:var(--font-heading)]">
                Building the Future of Technology
              </h2>
              <p className="mt-6 text-[#5a6a7a] leading-relaxed">
                Founded with a vision to bridge the gap between ideas and implementation, 
                FabVolt Technologies has grown into a trusted technology partner for businesses 
                worldwide. Our journey began with PCB design services and has expanded to 
                encompass web development, mobile apps, and IoT solutions.
              </p>
              <p className="mt-4 text-[#5a6a7a] leading-relaxed">
                Today, we are proud to have helped hundreds of clients bring their projects 
                to life. From startups to established enterprises, we work with organizations 
                of all sizes to deliver technology solutions that drive growth and innovation.
              </p>
              <div className="mt-8">
                <Button
                  asChild
                  className="bg-[#0a1724] text-white hover:bg-[#0a1724]/90 font-semibold"
                >
                  <Link href="/contact">
                    Work With Us
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-[#f4f6f8] flex items-center justify-center">
                <div className="w-3/4 h-3/4 rounded-xl bg-[#0a1724] flex items-center justify-center">
                  <span className="text-6xl font-bold text-[#f0c21f] font-[family-name:var(--font-heading)]">FV</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-[#f4f6f8]">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-sm font-semibold text-[#f0c21f] uppercase tracking-wider">
              Our Values
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0a1724] sm:text-4xl font-[family-name:var(--font-heading)]">
              What Drives Us
            </h2>
            <p className="mt-4 text-lg text-[#5a6a7a]">
              Our core values guide everything we do, from how we work to how we serve our clients.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#0a1724] mb-4">
                  <value.icon className="w-8 h-8 text-[#f0c21f]" />
                </div>
                <h3 className="text-lg font-semibold text-[#0a1724]">
                  {value.title}
                </h3>
                <p className="mt-2 text-[#5a6a7a] text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#f0c21f] uppercase tracking-wider">
              FAQ
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0a1724] sm:text-4xl font-[family-name:var(--font-heading)]">
              Frequently Asked Questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-[#e2e8f0]">
                <AccordionTrigger className="text-left text-[#0a1724] hover:text-[#f0c21f] font-medium py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#5a6a7a] pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-[#0a1724]">
        <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Ready to Start Your Project?
          </h2>
          <p className="mt-4 text-white/70">
            Get in touch with our team to discuss your requirements and get a free quote.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[#f0c21f] text-[#0a1724] hover:bg-[#f0c21f]/90 font-semibold"
            >
              <Link href="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 font-semibold bg-transparent"
            >
              <Link href="/services/pcb-design">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
