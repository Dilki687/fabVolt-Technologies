export interface Product {
  id: string
  slug: string
  name: string
  category: string
  price: number
  shortDescription: string
  description: string
  images: string[]
  specifications: {
    label: string
    value: string
  }[]
  badge?: string
  inStock: boolean
}

export const products: Product[] = [
  {
    id: "1",
    slug: "arduino-sensor-shield",
    name: "Arduino Multi-Sensor Shield",
    category: "Development Boards",
    price: 24.99,
    shortDescription: "Versatile sensor shield compatible with Arduino Uno/Mega with multiple sensor interfaces.",
    description: "The Arduino Multi-Sensor Shield is a comprehensive expansion board designed to simplify sensor integration with your Arduino projects. This shield features dedicated connectors for temperature, humidity, pressure, motion, and light sensors, along with multiple GPIO breakouts. Perfect for prototyping IoT devices, weather stations, and automation projects.",
    images: [
      "/images/products/arduino-sensor-shield.jpg",
      "/images/products/arduino-sensor-shield.jpg",
      "/images/products/arduino-sensor-shield.jpg",
    ],
    specifications: [
      { label: "Compatibility", value: "Arduino Uno, Mega 2560" },
      { label: "Sensor Interfaces", value: "I2C, SPI, UART, Analog" },
      { label: "GPIO Breakouts", value: "20 pins" },
      { label: "Power Supply", value: "5V DC" },
      { label: "Dimensions", value: "68mm x 53mm" },
      { label: "PCB Layers", value: "2-layer FR4" },
    ],
    badge: "Best Seller",
    inStock: true,
  },
  {
    id: "2",
    slug: "esp32-relay-module",
    name: "ESP32 4-Channel Relay Module",
    category: "IoT Modules",
    price: 34.99,
    shortDescription: "WiFi-enabled relay control board with ESP32 for home automation and industrial control.",
    description: "Control your appliances remotely with this ESP32-based 4-channel relay module. Features optocoupler isolation for safety, onboard voltage regulation, and easy WiFi/Bluetooth connectivity. Ideal for smart home projects, industrial automation, and remote switching applications. Includes pre-loaded firmware for quick setup.",
    images: [
      "/images/products/esp32-relay-module.jpg",
      "/images/products/esp32-relay-module.jpg",
      "/images/products/esp32-relay-module.jpg",
    ],
    specifications: [
      { label: "MCU", value: "ESP32-WROOM-32" },
      { label: "Relay Channels", value: "4 x 10A" },
      { label: "Input Voltage", value: "5-12V DC" },
      { label: "Connectivity", value: "WiFi 802.11 b/g/n, Bluetooth 4.2" },
      { label: "Isolation", value: "Optocoupler" },
      { label: "Dimensions", value: "90mm x 60mm" },
    ],
    badge: "New",
    inStock: true,
  },
  {
    id: "3",
    slug: "stm32-motor-driver",
    name: "STM32 Dual Motor Driver Board",
    category: "Motor Control",
    price: 45.99,
    shortDescription: "High-performance dual H-bridge motor driver with STM32 microcontroller for robotics.",
    description: "A powerful motor control solution featuring the STM32F103 microcontroller and dual L298N H-bridge drivers. Capable of driving two DC motors or one stepper motor with precise PWM control. Features include current sensing, overcurrent protection, and encoder inputs for closed-loop control. Perfect for robotics, CNC machines, and automated systems.",
    images: [
      "/images/products/stm32-motor-driver.jpg",
      "/images/products/stm32-motor-driver.jpg",
      "/images/products/stm32-motor-driver.jpg",
    ],
    specifications: [
      { label: "MCU", value: "STM32F103C8T6" },
      { label: "Motor Channels", value: "2 DC or 1 Stepper" },
      { label: "Max Current", value: "2A per channel" },
      { label: "Input Voltage", value: "7-24V DC" },
      { label: "PWM Frequency", value: "Up to 20kHz" },
      { label: "Dimensions", value: "80mm x 50mm" },
    ],
    inStock: true,
  },
  {
    id: "4",
    slug: "lora-gateway-board",
    name: "LoRa Gateway Development Board",
    category: "Communication",
    price: 89.99,
    shortDescription: "Long-range LoRa gateway board for building IoT networks with up to 15km range.",
    description: "Build your own LoRaWAN network with this development-ready gateway board. Features the SX1276 LoRa transceiver with an ESP32 controller, supporting multiple frequency bands. Includes GPS module for precise timing, PoE support, and weatherproof enclosure compatibility. Ideal for agricultural monitoring, smart city applications, and remote sensor networks.",
    images: [
      "/images/products/lora-gateway-board.jpg",
      "/images/products/lora-gateway-board.jpg",
      "/images/products/lora-gateway-board.jpg",
    ],
    specifications: [
      { label: "LoRa Chip", value: "SX1276" },
      { label: "Frequency", value: "433/868/915 MHz" },
      { label: "Range", value: "Up to 15km (line of sight)" },
      { label: "Controller", value: "ESP32" },
      { label: "GPS", value: "u-blox NEO-6M" },
      { label: "Power", value: "5V DC or PoE" },
    ],
    badge: "Popular",
    inStock: true,
  },
  {
    id: "5",
    slug: "power-supply-module",
    name: "Universal Power Supply Module",
    category: "Power Electronics",
    price: 19.99,
    shortDescription: "Adjustable switching power supply module with multiple voltage outputs.",
    description: "A versatile power supply solution for your projects featuring adjustable output voltage from 1.25V to 35V. High-efficiency switching design with up to 95% efficiency. Includes 5V and 3.3V fixed outputs for logic circuits, overcurrent and thermal protection. Suitable for powering development boards, LED strips, and various electronic projects.",
    images: [
      "/images/products/power-supply-module.jpg",
      "/images/products/power-supply-module.jpg",
      "/images/products/power-supply-module.jpg",
    ],
    specifications: [
      { label: "Input Voltage", value: "7-40V DC" },
      { label: "Output Voltage", value: "1.25-35V (adjustable)" },
      { label: "Max Current", value: "3A" },
      { label: "Efficiency", value: "Up to 95%" },
      { label: "Fixed Outputs", value: "5V, 3.3V" },
      { label: "Dimensions", value: "45mm x 30mm" },
    ],
    inStock: true,
  },
  {
    id: "6",
    slug: "audio-amplifier-board",
    name: "Hi-Fi Stereo Amplifier Board",
    category: "Audio",
    price: 29.99,
    shortDescription: "Class-D stereo amplifier with Bluetooth 5.0 and 50W output per channel.",
    description: "Bring premium audio to your projects with this high-fidelity Class-D stereo amplifier. Features TPA3116 amplifier IC delivering 50W per channel with minimal distortion. Integrated Bluetooth 5.0 module for wireless streaming, along with AUX and USB inputs. Perfect for DIY speakers, automotive audio, and home theater projects.",
    images: [
      "/images/products/audio-amplifier-board.jpg",
      "/images/products/audio-amplifier-board.jpg",
      "/images/products/audio-amplifier-board.jpg",
    ],
    specifications: [
      { label: "Amplifier IC", value: "TPA3116D2" },
      { label: "Output Power", value: "50W x 2" },
      { label: "THD", value: "<0.1%" },
      { label: "Bluetooth", value: "5.0" },
      { label: "Inputs", value: "Bluetooth, AUX, USB" },
      { label: "Power Supply", value: "12-24V DC" },
    ],
    inStock: true,
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category)
}

export const productCategories = [
  "Development Boards",
  "IoT Modules",
  "Motor Control",
  "Communication",
  "Power Electronics",
  "Audio",
]
