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
  Boxes,
} from "lucide-react";
import { ServiceRequestForm } from "@/components/services/service-request-form";

export const metadata = {
  title: "3D Design & Printing | FabVolt Technologies",
  description:
    "Professional 3D design and printing services for prototyping and production.",
};

const services = [
  {
    icon: CircuitBoard,
    title: "Custom 3D Design",
    description:
      "Professional 3D modeling services tailored to your unique requirements, from concept development to detailed product designs.",
    features: [
      "Custom Product Design",
      "Mechanical Components",
      "Electronic Enclosures",
      "CAD Modeling",
    ],
  },
  {
    icon: Zap,
    title: "Rapid Prototyping",
    description:
      "Quick and accurate prototype development to help validate concepts, test functionality, and accelerate product development.",
    features: [
      "Concept Prototypes",
      "Functional Testing Models",
      "Design Validation",
      "Iterative Development",
    ],
  },
  {
    icon: Layers,
    title: "3D Printing Services",
    description:
      "High-quality 3D printing solutions for prototypes, custom parts, and small-batch production using various materials and technologies.",
    features: [
      "FDM Printing",
      "Resin Printing",
      "Custom Parts",
      "Small Batch Production",
    ],
  },
  {
    icon: Cpu,
    title: "Product Development Support",
    description:
      "From initial sketches to final manufacturing-ready designs, we assist throughout the entire product development process.",
    features: [
      "Design Optimization",
      "Manufacturing Preparation",
      "Material Selection",
      "Technical Consultation",
    ],
  },
  {
    icon: Box,
    title: "Electronic Enclosure Design",
    description:
      "Custom-designed enclosures and housings for electronic projects, IoT devices, PCBs, and embedded systems.",
    features: [
      "3D CAD Design",
      "Assembly Optimization",
      "Ventilation & Thermal Considerations",
      "Prototype Validation",
    ],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Project Consultation",
    description:
      "Discuss your requirements, objectives, and product vision with our experts.",
  },
  {
    step: "02",
    title: "3D Design",
    description:
      "We create detailed CAD models optimized for functionality, aesthetics, and manufacturability.",
  },
  {
    step: "03",
    title: "Review",
    description:
      "Evaluate the design and prototype, then refine it based on your feedback.",
  },
  {
    step: "04",
    title: "Delivery",
    description:
      "Your final design is professionally printed, quality-tested, and prepared for delivery.",
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
                3D Design & Printing Services
              </span>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl font-[family-name:var(--font-heading)]">
                Bringing Your Concepts to Life
              </h1>
              <p className="mt-6 text-lg text-white/70 leading-relaxed">
                From concept sketches to fully printed prototypes, we provide
                professional 3D design and printing solutions for individuals,
                startups, and businesses. Whether you need product prototypes,
                custom enclosures, mechanical parts, or creative designs, our
                team delivers high-quality, accurate, and production-ready
                results.
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
                  <Link href="/products">View 3D Products</Link>
                </Button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="w-full aspect-square max-w-md mx-auto relative">
                <div className="absolute inset-0 bg-[#f0c21f]/10 rounded-2xl transform rotate-3" />
                <div className="absolute inset-0 bg-[#1a2a3a] rounded-2xl flex items-center justify-center">
                  <Boxes className="w-32 h-32 text-[#f0c21f]" />
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
              Comprehensive 3D Design & Printing Solutions
            </h2>
            <p className="mt-4 text-lg text-[#5a6a7a]">
              End-to-end 3D design, modeling, and printing services to transform
              your ideas into high-quality prototypes and production-ready
              products.
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
              A streamlined workflow that transforms your ideas into
              high-quality 3D models, prototypes, and finished products.
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
              Request a Custom 3D Design
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
