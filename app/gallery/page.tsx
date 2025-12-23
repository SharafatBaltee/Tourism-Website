'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, Maximize2, ChevronLeft, ChevronRight } from 'lucide-react'

const galleryImages = [
  {
    id: 1,
    src: '/images/gallery/1.jpg',
    alt: 'Hunza Valley landscape',
    category: 'Landscapes',
    title: 'Hunza Valley Panorama'
  },
  {
    id: 2,
    src: '/images/gallery/2.jpg',
    alt: 'Luxury mountain resort',
    category: 'Accommodation',
    title: 'Premium Mountain Resort'
  },
  {
    id: 3,
    src: '/images/gallery/3.jpg',
    alt: 'Private dining experience',
    category: 'Experiences',
    title: 'Private Mountain Dining'
  },
  {
    id: 4,
    src: '/images/gallery/4.jpg',
    alt: 'Helicopter tour',
    category: 'Transport',
    title: 'Helicopter Scenic Tour'
  },
  {
    id: 5,
    src: '/images/gallery/5.jpg',
    alt: 'Spa and wellness',
    category: 'Wellness',
    title: 'Mountain Spa Retreat'
  },
  {
    id: 6,
    src: '/images/gallery/6.jpg',
    alt: 'Adventure activities',
    category: 'Adventure',
    title: 'Mountain Trekking'
  },
  {
    id: 7,
    src: '/images/gallery/7.jpg',
    alt: 'Cultural experience',
    category: 'Culture',
    title: 'Local Cultural Immersion'
  },
  {
    id: 8,
    src: '/images/gallery/8.jpg',
    alt: 'Sunset view',
    category: 'Landscapes',
    title: 'Sunset Over Mountains'
  },
  {
    id: 9,
    src: '/images/gallery/9.jpg',
    alt: 'Luxury camping',
    category: 'Accommodation',
    title: 'Glamping Experience'
  },
  {
    id: 10,
    src: '/images/gallery/10.jpg',
    alt: 'Wildlife',
    category: 'Nature',
    title: 'Mountain Wildlife'
  },
  {
    id: 11,
    src: '/images/gallery/11.jpg',
    alt: 'Winter sports',
    category: 'Adventure',
    title: 'Winter Sports'
  },
  {
    id: 12,
    src: '/images/gallery/12.jpg',
    alt: 'Stargazing',
    category: 'Experiences',
    title: 'Private Stargazing'
  }
]

const categories = ['All', 'Landscapes', 'Accommodation', 'Experiences', 'Adventure', 'Wellness', 'Culture']

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

  const openImage = (image: typeof galleryImages[0], index: number) => {
    setSelectedImage(image)
    setCurrentIndex(index)
  }

  const closeImage = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % filteredImages.length
    setSelectedImage(filteredImages[nextIndex])
    setCurrentIndex(nextIndex)
  }

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length
    setSelectedImage(filteredImages[prevIndex])
    setCurrentIndex(prevIndex)
  }

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-primary-900 to-primary-800">
        <div className="section-padding text-center">
          <h1 className="heading-1 text-white mb-6">
            Luxury Gallery
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            A visual journey through our exclusive destinations, luxury accommodations, and bespoke experiences.
          </p>
        </div>
      </section>

      {/* Gallery Filter */}
      <section className="section-padding py-12">
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-accent-600 text-white'
                  : 'bg-gray-100 dark:bg-primary-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-primary-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8">
          {filteredImages.map((image, index) => (
            <div 
              key={image.id} 
              className="mb-8 break-inside-avoid cursor-pointer group"
              onClick={() => openImage(image, index)}
            >
              <div className="relative overflow-hidden rounded-xl luxury-card">
                <div className="aspect-[4/3] bg-gray-200 dark:bg-primary-800 relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-white font-semibold text-lg">{image.title}</h3>
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
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4">
          <button
            onClick={closeImage}
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors"
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>
          
          <button
            onClick={prevImage}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors p-3"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          
          <button
            onClick={nextImage}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors p-3"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div className="relative max-w-6xl max-h-[80vh]">
            <div className="relative w-full h-[70vh] bg-gray-800 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
              <div className="absolute bottom-6 left-6 z-20 text-white">
                <h3 className="text-2xl font-semibold mb-2">{selectedImage.title}</h3>
                <p className="text-gray-200">{selectedImage.category} • {currentIndex + 1} of {filteredImages.length}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}