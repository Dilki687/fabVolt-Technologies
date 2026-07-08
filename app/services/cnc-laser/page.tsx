import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CircuitBoard,
  Zap,
  Layers,
  Box,
  Cpu,
  ArrowRight,
  Check,
  MessageCircle,
  Cog,
} from "lucide-react";
import { ServiceRequestForm } from "@/components/services/service-request-form";

export const metadata = {
  title: "CNC & Laser Cutting | FabVolt Technologies",
  description:
    "Precision cutting and engraving for a variety of materials including wood, acrylic, metal, and more. Ideal for prototypes, custom parts, and creative projects.",
};

const services = [
  {
    icon: CircuitBoard,
    title: "CNC Machining",
    description:
      "Precision CNC machining services for custom parts, mechanical components, and engineering projects with exceptional accuracy and consistency.",
    features: [
      "Precision Machining",
      "Custom Components",
      "Mechanical Parts",
      "Production-Ready Manufacturing",
    ],
  },
  {
    icon: Zap,
    title: "Laser Cutting Services",
    description:
      "High-precision laser cutting for metals, acrylic, wood, plastics, and other materials, delivering clean edges and intricate designs.",
    features: [
      "Metal Cutting",
      "Acrylic & Wood Cutting",
      "Custom Engraving",
      "Precision Finishing",
    ],
  },
  {
    icon: Layers,
    title: "Rapid Prototyping",
    description:
      "Quick turnaround manufacturing for prototype development, functional testing, and product validation before full-scale production.",
    features: [
      "Prototype Fabrication",
      "Functional Testing",
      "Design Validation",
      "Small Batch Production",
    ],
  },
  {
    icon: Cpu,
    title: "Custom Fabrication",
    description:
      "Tailored fabrication solutions for industrial, commercial, and personal projects, built to meet your exact specifications.",
    features: [
      "Custom Fabrication",
      "Assembly Components",
      "Product Manufacturing",
      "Design Optimization",
    ],
  },
  {
    icon: Box,
    title: "Engineering & Manufacturing Support",
    description:
      "End-to-end support from design consultation to finished products, ensuring manufacturability, precision, and quality throughout every stage.",
    features: [
      "CAD File Preparation",
      "Material Selection",
      "Manufacturing Consultation",
      "Quality Assurance",
    ],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Consultation & Requirements",
    description:
      "Discuss your project specifications, materials, tolerances, and production requirements with our experts.",
  },
  {
    step: "02",
    title: "Design Review & Production Planning",
    description:
      "We verify your CAD files or prepare manufacturing-ready designs optimized for precision machining and laser cutting.",
  },
  {
    step: "03",
    title: "CNC Machining & Laser Cutting",
    description:
      "Your components are manufactured using advanced equipment, delivering clean finishes, tight tolerances, and reliable quality.",
  },
  {
    step: "04",
    title: "Quality Assurance & Delivery",
    description:
      "Each part is carefully inspected, finished, and prepared for safe delivery to ensure it meets your expectations.",
  },
];

export default function PCBServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a1724] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold text-[#f0c21f] uppercase tracking-wider">
                CNC & Laser Cutting Services
              </span>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl font-[family-name:var(--font-heading)]">
                Precision Manufacturing for Every Project
              </h1>
              <p className="mt-6 text-lg text-white/70 leading-relaxed">
                Bring your ideas to life with our precision CNC machining and
                laser cutting solutions. From one-off prototypes to production
                batches, we manufacture high-quality components with exceptional
                accuracy, clean finishes, and reliable performance for
                engineering, industrial, and creative applications.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#f0c21f] text-[#0a1724] hover:bg-[#f0c21f]/90 font-semibold"
                >
                  <a href="#request-form">
                    Request a Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                >
                  <Link href="/products">View Products</Link>
                </Button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="w-full aspect-square max-w-md mx-auto relative">
                <div className="absolute inset-0 bg-[#f0c21f]/10 rounded-2xl transform rotate-3" />
                <div className="absolute inset-0 bg-[#1a2a3a] rounded-2xl flex items-center justify-center">
                  <Cog className="w-32 h-32 text-[#f0c21f]" />
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
              What We Offer
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0a1724] sm:text-4xl font-[family-name:var(--font-heading)]">
              Comprehensive CNC & Laser Cutting Solutions
            </h2>
            <p className="mt-4 text-lg text-[#5a6a7a]">
              End-to-end support from design consultation to finished products,
              ensuring manufacturability, precision, and quality throughout
              every stage.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card
                key={service.title}
                className="bg-white border border-[#e2e8f0] hover:border-[#f0c21f] transition-colors"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-[#0a1724] flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-[#f0c21f]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#0a1724]">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-[#5a6a7a] text-sm">
                    {service.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-[#5a6a7a]"
                      >
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

      {/* Process */}
      <section className="py-16 lg:py-24 bg-[#f4f6f8]">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-sm font-semibold text-[#f0c21f] uppercase tracking-wider">
              Our Process
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0a1724] sm:text-4xl font-[family-name:var(--font-heading)]">
              How We Work
            </h2>
            <p className="mt-4 text-lg text-[#5a6a7a]">
              A streamlined manufacturing process that transforms your designs
              and ideas into precision-engineered components with exceptional
              quality and accuracy.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.step} className="relative">
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-[#e2e8f0]" />
                )}
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#0a1724] text-[#f0c21f] text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-[#0a1724]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[#5a6a7a] text-sm">
                    {step.description}
                  </p>
                </div>
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
              Request a Custom Design
            </h2>
            <p className="mt-4 text-lg text-[#5a6a7a]">
              Fill out the form below and we will get back to you via WhatsApp.
            </p>
          </div>

          <ServiceRequestForm serviceType="3D Design" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-[#0a1724]">
        <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
          <MessageCircle className="w-12 h-12 text-[#f0c21f] mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Have Questions?
          </h2>
          <p className="mt-4 text-white/70">
            Our team is here to help. Reach out via WhatsApp for quick
            responses.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold"
          >
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat on WhatsApp
            </a>
          </Button>
        </div>
      </section>
    </>
  );
}
