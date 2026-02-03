'use client'

import { useState } from 'react'
import { Play, X } from 'lucide-react'

interface VideoPlayerProps {
  videoId: string
  title: string
}

export function VideoPlayer({ videoId, title }: VideoPlayerProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Video Preview Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="relative w-full group rounded-lg overflow-hidden bg-[#0a1724] hover:bg-[#1a2a3a] transition-colors duration-300"
      >
        <div className="aspect-video bg-gradient-to-br from-[#0a1724] to-[#1a2a3a] flex items-center justify-center">
          <Play className="w-16 h-16 text-[#f0c21f] group-hover:scale-110 transition-transform duration-300" />
        </div>
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
        <p className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white font-semibold">
          {title}
        </p>
      </button>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-4xl relative rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/80 text-white p-2 rounded-lg transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Video Embed */}
            <div className="aspect-video bg-black">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
