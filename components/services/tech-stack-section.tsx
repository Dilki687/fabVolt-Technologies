'use client'

import Image from "next/image"

const technologies = [
  { name: "React", category: "Frontend", icon: "⚛️" },
  { name: "Next.js", category: "Frontend", icon: "▲" },
  { name: "TypeScript", category: "Language", icon: "TS" },
  { name: "Node.js", category: "Backend", icon: "⬢" },
  { name: "Python", category: "Backend", icon: "🐍" },
  { name: "PostgreSQL", category: "Database", icon: "🐘" },
  { name: "MongoDB", category: "Database", icon: "🍃" },
  { name: "MySQL", category: "Database", icon: "DB" },
  { name: "Laravel", category: "Backend", icon: "L" },
  { name: "AWS", category: "Cloud", icon: "☁️" },
  { name: "React Native", category: "Mobile", icon: "📱" },
  { name: "Flutter", category: "Mobile", icon: "✨" },
  { name: "Docker", category: "DevOps", icon: "🐳" },
  { name: "Git", category: "Version Control", icon: "⎇" },
]

export function TechStackSection() {
  return (
    <section className="py-16 lg:py-24 bg-[#f4f6f8]">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-[#f0c21f] uppercase tracking-wider">
            Technology Stack
          </span>
          <h2 className="mt-3 text-3xl font-bold text-[#0a1724] sm:text-4xl font-[family-name:var(--font-heading)]">
            Tools & Technologies We Use
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-[#5a6a7a] leading-relaxed">
            We work with the latest and most reliable technologies to build robust, scalable, and high-performance solutions.
          </p>
        </div>

        {/* Tech Grid with Auto-rotating Animation */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="group relative"
              style={{
                animation: `float 3s ease-in-out infinite`,
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="bg-white rounded-lg p-6 border border-[#e2e8f0] hover:border-[#f0c21f] shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col items-center justify-center text-center">
                {/* Tech Icon/Emoji */}
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>

                {/* Tech Name */}
                <h3 className="text-lg font-semibold text-[#0a1724] mb-2">
                  {tech.name}
                </h3>

                {/* Category */}
                <span className="text-xs font-medium text-[#f0c21f] uppercase tracking-wider">
                  {tech.category}
                </span>
              </div>

              {/* Rotating Border on Hover */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#f0c21f] to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* CSS for floating animation */}
        <style jsx>{`
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
          }

          @keyframes rotate {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </div>
    </section>
  )
}
