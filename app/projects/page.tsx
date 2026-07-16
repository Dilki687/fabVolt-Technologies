import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ProjectsFilter } from "@/components/projects/projects-filter";

export const metadata = {
  title: "Our Projects | FabVolt Technologies",
  description:
    "Explore our portfolio of completed projects including PCB designs, web applications, mobile apps, and IoT solutions.",
};

const projects = [
  {
    id: 1,
    title: "Smart Agriculture Monitoring System",
    category: "IoT Solutions",
    description:
      "Complete IoT solution for monitoring soil conditions, weather, and irrigation control for a large-scale agricultural operation.",
    image: "/placeholder.svg?height=400&width=600&text=Smart+Agriculture",
    tags: ["IoT", "PCB Design", "Cloud Dashboard", "Mobile App"],
  },
  {
    id: 2,
    title: "Eazy-Eats - Online Food Ordering System",
    category: "Web Development",
    description:
      "Full-featured food ordering platform with secure payments, real-time order management, and an admin dashboard for restaurant operations.",
    image: "/Eazy-Eats.png?height=400&width=600",
    tags: ["Spring Boot", "React", "MySQL", "Stripe"],
  },
  {
    id: 3,
    title: "BrainBoost - Cognitive Training Mobile Application",
    category: "Mobile Development",
    description:
      "Mobile application featuring cognitive games and assessments to help users improve and evaluate memory skills.",
    image: "/brainboost.png?height=400&width=600",
    tags: [
      "React Native",
      "JavaScript",
      "UI/UX Design",
      "Mobile Accessibility",
    ],
  },
  {
    id: 4,
    title: "LoRa Weather Station Network",
    category: "IoT Solutions",
    description:
      "Network of solar-powered weather stations with LoRa connectivity for remote environmental monitoring.",
    image: "/placeholder.svg?height=400&width=600&text=Weather+Station",
    tags: ["IoT", "LoRa", "Solar Power", "PCB"],
  },
  {
    id: 5,
    title: "CampZip - Online Camp Location Booking System",
    category: "Web Development",
    description:
      "MERN-stack platform for booking camp locations with advanced search, filtering, and secure payment integration.",
    image: "/campzip.png?height=400&width=600",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
  },
  {
    id: 6,
    title: "Shion Green - Online Spices Selling Website",
    category: "Web Development",
    description:
      "MERN-based e-commerce platform for selling Sri Lankan spices in Japan with multilingual support and global deployment.",
    image: "/shiongreen.png?height=400&width=600",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 7,
    title: "Antisocial – Embedded Wireless Penetration Testing Toolkit",
    category: "PCB Design",
    description:
      "A portable penetration testing platform for evaluating Wi-Fi and BLE network security, performing vulnerability assessments, BadUSB testing, and operating a custom 3-channel nRF24L01 wireless communication system.",
    image: "/pcb-pic1.png?height=400&width=600",
    tags: ["Pentest ", "Wireless ", "BLE", "Security"],
  },
  {
    id: 8,
    title: "RP2040 24-Channel High-Speed Logic Analyzer",
    category: "PCB Design",
    description:
      "A compact 24-channel logic analyzer powered by the RP2040, delivering high-speed digital signal capture and real-time protocol debugging for embedded system development.",
    image: "/pcb-pic2.png?height=400&width=600",
    tags: ["RP2040", "Debug", "Logic", "Embedded"],
  },
  {
    id: 9,
    title: "STM32H7 16-Channel MEMS Microphone Array",
    category: "PCB Design",
    description:
      "A high-performance acoustic sensing platform powered by the STM32H7, integrating a 16-channel MEMS microphone array with real-time audio processing, beamforming, DSP optimization, and USB audio streaming for advanced sound localization and AI applications.",
    image: "/pcb-pic3.png?height=400&width=600",
    tags: ["STM32H7", "Audio", "MEMS", "DSP"],
  },
  {
    id: 10,
    title: "STM32H7 Jetson Orin Nano Expansion HAT",
    category: "PCB Design",
    description:
      "A feature-rich expansion HAT for the Jetson Orin Nano, powered by an STM32H7 MCU and integrating high-speed CAN communication, precision sensors, intelligent power management, and real-time peripheral control for robotics and edge AI systems.",
    image: "/pcb-pic4.png?height=400&width=600",
    tags: ["STM32H7", "Jetson", "Robotics", "Embedded"],
  },
  {
    id: 11,
    title: "STM32H7 Jetson Orin Nano Expansion HAT V2",
    category: "PCB Design",
    description:
      "A second-generation Jetson Orin Nano expansion HAT featuring an optimized power architecture, integrated RS-485 connectivity, onboard ESP32 for wireless OTA updates, and enhanced real-time control for robotics and edge AI applications.",
    image: "/pcb-pic5.png?height=400&width=600",
    tags: ["STM32H7", "Jetson", "ESP32", "Robotics"],
  },
  {
    id: 12,
    title: "Nemesis V3 – STM32 Autonomous Micromouse Robot",
    category: "PCB Design",
    description:
      "A high-performance Micromouse platform integrating STM32 and ESP32 with OTA firmware updates, DMA-based sensor processing, an optimized power architecture, and a vacuum-assisted traction system for competitive autonomous maze navigation.",
    image: "/pcb-pic6.png?height=400&width=600",
    tags: ["STM32", "Robotics", "Autonomous", "Micromouse"],
  },
  {
    id: 13,
    title: "nRF52840 Compact Motion Data Logger",
    category: "PCB Design",
    description:
      "A compact key tag–sized embedded device featuring an nRF52840, precision IMU, and onboard flash memory for wireless motion tracking, sensor logging, and portable data acquisition.",
    image: "/pcb-pic7.png?height=400&width=600",
    tags: ["nRF52840", "Wearable", "IMU", "BLE"],
  },
  {
    id: 14,
    title: "nRF52840 UWB Positioning Module",
    category: "PCB Design",
    description:
      "A high-performance UWB positioning module featuring the nRF52840, DWM3000, custom RF integration, onboard IMU, battery management, and current monitoring, engineered for precise indoor positioning, motion tracking, and reliable wireless communication.",
    image: "/pcb-pic8.png?height=400&width=600",
    tags: ["UWB", "nRF52840", "DWM3000", "Tracking"],
  },
  {
    id: 15,
    title: "ESP32 Smart RGB Pendant Module",
    category: "PCB Design",
    description:
      "A custom ESP32-powered pendant featuring programmable RGB illumination, integrated RF communication, and a compact embedded design for interactive keychain and wearable devices.",
    image: "/pcb-pic9.png?height=400&width=600",
    tags: ["ESP32", "RGB", "RF", "Embedded"],
  },
  {
    id: 16,
    title: "nRF52840 Wearable Swim Data Logger",
    category: "PCB Design",
    description:
      "A compact wearable data logger powered by the nRF52840, featuring a precision IMU and external flash memory for real-time motion tracking, long-duration data logging, and swimming performance analysis.",
    image: "/pcb-pic10.png?height=400&width=600",
    tags: ["nRF52840", "Wearable", "IMU", "Datalogger"],
  },
];

const categories = [
  "All Projects",
  "PCB Design",
  "Web Development",
  "Mobile Development",
  "IoT Solutions",
  "3D Printing",
  "CNC & Laser Cutting",
];

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a1724] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-[#f0c21f] uppercase tracking-wider">
              Our Portfolio
            </span>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl font-[family-name:var(--font-heading)]">
              Featured Projects
            </h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              Explore our portfolio of successful projects across PCB design,
              web development, mobile apps, and IoT solutions. Each project
              represents our commitment to quality and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 lg:py-24 bg-[#f4f6f8]">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <ProjectsFilter
            projects={projects}
            categories={categories.filter((cat) => cat !== "All Projects")}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-[#0a1724] sm:text-3xl font-[family-name:var(--font-heading)]">
            Have a Similar Project in Mind?
          </h2>
          <p className="mt-4 text-[#5a6a7a]">
            Let us help you bring your ideas to life. Get in touch for a free
            consultation.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[#f0c21f] text-[#0a1724] hover:bg-[#f0c21f]/90 font-semibold"
            >
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-[#0a1724] text-[#0a1724] hover:bg-[#0a1724] hover:text-white bg-transparent"
            >
              <Link href="/services/pcb-design">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
