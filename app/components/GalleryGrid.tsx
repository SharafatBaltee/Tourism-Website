'use client'

import { useState } from 'react'
import { Maximize2 } from 'lucide-react'

interface GalleryGridProps {
  images: Array<{
    id: number
    src: string
    alt: string
    title: string
    category: string
  }>
  columns?: 2 | 3 | 4
}

export default function GalleryGrid({ images, columns = 3 }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<typeof images[0] | null>(null)

  const columnClasses = {
    2: 'md:columns-2',
    3: 'md:columns-2 lg:columns-3',
    4: 'md:columns-2 lg:columns-3 xl:columns-4'
  }

  return (
    <>
      <div className={`columns-1 ${columnClasses[columns]} gap-8`}>
        {images.map((image) => (
          <div 
            key={image.id} 
            className="mb-8 break-inside-avoid cursor-pointer group"
            onClick={() => setSelectedImage(image)}
          >
            <div className="relative overflow-hidden rounded-xl luxury-card">
              <div className="aspect-[4/3] bg-gray-200 dark:bg-primary-800 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white font-semibold">{image.title}</h3>
                  <p className="text-gray-200 text-sm">{image.category}</p>
                </div>
                <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Maximize2 className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl max-h-[80vh]">
            <div className="relative w-full h-[70vh] bg-gray-800 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
              <div className="absolute bottom-6 left-6 z-20 text-white">
                <h3 className="text-2xl font-semibold mb-2">{selectedImage.title}</h3>
                <p className="text-gray-200">{selectedImage.category}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}