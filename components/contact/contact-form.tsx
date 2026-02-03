"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MessageCircle, User, Mail, Phone, FileText } from "lucide-react"

const WHATSAPP_NUMBER = "94710475008" // FabVolt WhatsApp number

export function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Create WhatsApp message
    const message = `
*NEW CONTACT MESSAGE - FabVolt Technologies*

*From:* ${formData.fullName}
*Email:* ${formData.email}
*Phone:* ${formData.phone}

*Subject:* ${formData.subject}

*Message:*
${formData.message}

---
Sent from FabVolt Website Contact Form
    `.trim()

    // Open WhatsApp with pre-filled message
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")

    setIsSubmitting(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="fullName" className="text-[#0a1724]">
            Full Name *
          </Label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5a6a7a]" />
            <Input
              id="fullName"
              name="fullName"
              type="text"
              required
              value={formData.fullName}
              onChange={handleChange}
              placeholder="John Doe"
              className="pl-10 border-[#e2e8f0] focus:border-[#f0c21f] focus:ring-[#f0c21f]"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-[#0a1724]">
            Email Address *
          </Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5a6a7a]" />
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="pl-10 border-[#e2e8f0] focus:border-[#f0c21f] focus:ring-[#f0c21f]"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-[#0a1724]">
            Phone Number
          </Label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5a6a7a]" />
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (234) 567-8900"
              className="pl-10 border-[#e2e8f0] focus:border-[#f0c21f] focus:ring-[#f0c21f]"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="subject" className="text-[#0a1724]">
            Subject *
          </Label>
          <select
            id="subject"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            className="w-full h-10 px-3 rounded-md border border-[#e2e8f0] bg-white text-[#0a1724] text-sm focus:border-[#f0c21f] focus:ring-1 focus:ring-[#f0c21f] focus:outline-none"
          >
            <option value="">Select a subject</option>
            <option value="PCB Design Inquiry">PCB Design Inquiry</option>
            <option value="Web Development">Web Development</option>
            <option value="Mobile App Development">Mobile App Development</option>
            <option value="IoT Solutions">IoT Solutions</option>
            <option value="Product Order">Product Order</option>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Partnership">Partnership</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-[#0a1724]">
          Message *
        </Label>
        <div className="relative">
          <FileText className="absolute left-3 top-3 w-4 h-4 text-[#5a6a7a]" />
          <Textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="How can we help you?"
            rows={5}
            className="pl-10 border-[#e2e8f0] focus:border-[#f0c21f] focus:ring-[#f0c21f] resize-none"
          />
        </div>
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold text-base"
      >
        <MessageCircle className="w-5 h-5 mr-2" />
        {isSubmitting ? "Processing..." : "Send via WhatsApp"}
      </Button>

      <p className="text-center text-sm text-[#5a6a7a]">
        Your message will be sent via WhatsApp for quick response.
      </p>
    </form>
  )
}
