'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Filter, ExternalLink } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

interface Project {
  id: number
  title: string
  category: string
  description: string
  image: string
  tags: string[]
}

interface ProjectsFilterProps {
  projects: Project[]
  categories: string[]
}

export function ProjectsFilter({ projects, categories }: ProjectsFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState('All Projects')

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All Projects') {
      return projects
    }
    return projects.filter(project => project.category === selectedCategory)
  }, [selectedCategory, projects])

  return (
    <>
      {/* Categories */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <Filter className="w-5 h-5 text-[#5a6a7a]" />
          <span className="text-sm font-medium text-[#5a6a7a]">Filter by Category</span>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setSelectedCategory('All Projects')}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
              selectedCategory === 'All Projects'
                ? 'bg-[#0a1724] text-white'
                : 'bg-white text-[#0a1724] border border-[#e2e8f0] hover:border-[#f0c21f] hover:text-[#f0c21f]'
            }`}
          >
            All Projects
          </button>
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                selectedCategory === category
                  ? 'bg-[#0a1724] text-white'
                  : 'bg-white text-[#0a1724] border border-[#e2e8f0] hover:border-[#f0c21f] hover:text-[#f0c21f]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <Card key={project.id} className="bg-white border border-[#e2e8f0] overflow-hidden hover:shadow-lg transition-all duration-300 group hover:border-[#f0c21f]">
              <div className="aspect-video relative bg-[#f4f6f8] overflow-hidden group cursor-pointer">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <span className="text-xs font-semibold text-[#f0c21f] uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="mt-2 text-xl font-semibold text-[#0a1724]">
                  {project.title}
                </h3>
                <p className="mt-3 text-[#5a6a7a] leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-[#0a1724]/5 text-[#0a1724] font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-lg text-[#5a6a7a]">No projects found in this category.</p>
          </div>
        )}
      </div>

      {/* Results Count */}
      <div className="mt-8 text-center">
        <p className="text-sm text-[#5a6a7a]">
          Showing <strong>{filteredProjects.length}</strong> of <strong>{projects.length}</strong> projects
        </p>
      </div>
    </>
  )
}
