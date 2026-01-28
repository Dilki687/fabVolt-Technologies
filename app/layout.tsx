import React from "react"
import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: '--font-space-grotesk' });

export const metadata: Metadata = {
  title: 'FabVolt Technologies | PCB Design & Software Solutions',
  description: 'FabVolt Technologies specializes in PCB Design, Electronics Services, Web Development, Mobile Apps, and IoT Solutions. Trusted tech partner for innovation.',
  keywords: ['PCB Design', 'Electronics', 'Web Development', 'Mobile Apps', 'IoT Solutions', 'Software Development', 'FabVolt'],
  authors: [{ name: 'FabVolt Technologies' }],
  openGraph: {
    title: 'FabVolt Technologies | PCB Design & Software Solutions',
    description: 'Your trusted partner for PCB Design, Electronics, Web Development, and IoT Solutions.',
    type: 'website',
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
