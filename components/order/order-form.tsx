"use client"

import React from "react"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, Package, User, Mail, Phone, MapPin, FileText } from "lucide-react"

const WHATSAPP_NUMBER = "94784292775" // Replace with actual WhatsApp number

export function OrderForm() {
  const searchParams = useSearchParams()
  const productName = searchParams.get("product") || ""
  const productPrice = searchParams.get("price") || ""

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    product: productName,
    quantity: "1",
    notes: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Create WhatsApp message
    const message = `
*NEW ORDER REQUEST - FabVolt Technologies*

*Customer Details:*
Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Address: ${formData.address}

*Order Details:*
Product: ${formData.product}
Unit Price: $${productPrice}
Quantity: ${formData.quantity}

*Additional Notes:*
${formData.notes || "None"}

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
        <div className="flex items-center gap-3 mb-6 pb-6 border-b border-[#e2e8f0]">
          <div className="w-12 h-12 rounded-lg bg-[#f0c21f]/10 flex items-center justify-center">
            <Package className="w-6 h-6 text-[#f0c21f]" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-[#0a1724]">Order Request Form</h2>
            <p className="text-sm text-[#5a6a7a]">Fill in your details to proceed with the order</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Customer Details */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-[#0a1724] uppercase tracking-wider">
              Customer Information
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
              <Label htmlFor="address" className="text-[#0a1724]">
                Shipping Address *
              </Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 w-4 h-4 text-[#5a6a7a]" />
                <Textarea
                  id="address"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter your full shipping address"
                  rows={3}
                  className="pl-10 border-[#e2e8f0] focus:border-[#f0c21f] focus:ring-[#f0c21f] resize-none"
                />
              </div>
            </div>
          </div>

          {/* Order Details */}
          <div className="space-y-4 pt-4 border-t border-[#e2e8f0]">
            <h3 className="text-sm font-semibold text-[#0a1724] uppercase tracking-wider">
              Order Details
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="product" className="text-[#0a1724]">
                  Product Name *
                </Label>
                <Input
                  id="product"
                  name="product"
                  type="text"
                  required
                  value={formData.product}
                  onChange={handleChange}
                  placeholder="Enter product name"
                  className="border-[#e2e8f0] focus:border-[#f0c21f] focus:ring-[#f0c21f]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="quantity" className="text-[#0a1724]">
                  Quantity *
                </Label>
                <Input
                  id="quantity"
                  name="quantity"
                  type="number"
                  min="1"
                  required
                  value={formData.quantity}
                  onChange={handleChange}
                  className="border-[#e2e8f0] focus:border-[#f0c21f] focus:ring-[#f0c21f]"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes" className="text-[#0a1724]">
                Additional Notes
              </Label>
              <div className="relative">
                <FileText className="absolute left-3 top-3 w-4 h-4 text-[#5a6a7a]" />
                <Textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Any special requirements or notes..."
                  rows={3}
                  className="pl-10 border-[#e2e8f0] focus:border-[#f0c21f] focus:ring-[#f0c21f] resize-none"
                />
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
              You will be redirected to WhatsApp to complete your order.
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
