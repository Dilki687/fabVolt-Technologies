"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, User, Mail, Phone, FileText, Briefcase } from "lucide-react"

const WHATSAPP_NUMBER = "94784292775" // Replace with actual WhatsApp number

interface ServiceRequestFormProps {
  serviceType: string
}

export function ServiceRequestForm({ serviceType }: ServiceRequestFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    projectDescription: "",
    budget: "",
    timeline: "",
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
*NEW SERVICE REQUEST - FabVolt Technologies*

*Service Type:* ${serviceType}

*Contact Details:*
Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company || "N/A"}

*Project Details:*
${formData.projectDescription}

*Budget Range:* ${formData.budget || "Not specified"}
*Timeline:* ${formData.timeline || "Not specified"}

---
Sent from FabVolt Website
    `.trim()

    // Open WhatsApp with pre-filled message
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")

    setIsSubmitting(false)
  }

  return (
    <Card className="bg-white border-0 shadow-lg">
      <CardContent className="p-6 lg:p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Contact Details */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-[#0a1724] uppercase tracking-wider">
              Contact Information
            </h3>
            
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
                  Phone Number *
                </Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5a6a7a]" />
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (234) 567-8900"
                    className="pl-10 border-[#e2e8f0] focus:border-[#f0c21f] focus:ring-[#f0c21f]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="company" className="text-[#0a1724]">
                  Company Name
                </Label>
                <div className="relative">
                  <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5a6a7a]" />
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    className="pl-10 border-[#e2e8f0] focus:border-[#f0c21f] focus:ring-[#f0c21f]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-4 pt-4 border-t border-[#e2e8f0]">
            <h3 className="text-sm font-semibold text-[#0a1724] uppercase tracking-wider">
              Project Details
            </h3>

            <div className="space-y-2">
              <Label htmlFor="projectDescription" className="text-[#0a1724]">
                Project Description *
              </Label>
              <div className="relative">
                <FileText className="absolute left-3 top-3 w-4 h-4 text-[#5a6a7a]" />
                <Textarea
                  id="projectDescription"
                  name="projectDescription"
                  required
                  value={formData.projectDescription}
                  onChange={handleChange}
                  placeholder="Describe your project requirements, goals, and any specific features you need..."
                  rows={5}
                  className="pl-10 border-[#e2e8f0] focus:border-[#f0c21f] focus:ring-[#f0c21f] resize-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="budget" className="text-[#0a1724]">
                  Budget Range
                </Label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full h-10 px-3 rounded-md border border-[#e2e8f0] bg-white text-[#0a1724] text-sm focus:border-[#f0c21f] focus:ring-1 focus:ring-[#f0c21f] focus:outline-none"
                >
                  <option value="">Select budget range</option>
                  <option value="Under $1,000">Under $1,000</option>
                  <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                  <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                  <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                  <option value="$25,000+">$25,000+</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="timeline" className="text-[#0a1724]">
                  Project Timeline
                </Label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full h-10 px-3 rounded-md border border-[#e2e8f0] bg-white text-[#0a1724] text-sm focus:border-[#f0c21f] focus:ring-1 focus:ring-[#f0c21f] focus:outline-none"
                >
                  <option value="">Select timeline</option>
                  <option value="ASAP">ASAP</option>
                  <option value="1-2 weeks">1-2 weeks</option>
                  <option value="1 month">1 month</option>
                  <option value="2-3 months">2-3 months</option>
                  <option value="3+ months">3+ months</option>
                  <option value="Flexible">Flexible</option>
                </select>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold text-base"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              {isSubmitting ? "Processing..." : "Submit & Continue to WhatsApp"}
            </Button>
            <p className="mt-3 text-center text-sm text-[#5a6a7a]">
              Your request will be sent via WhatsApp for quick response.
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
