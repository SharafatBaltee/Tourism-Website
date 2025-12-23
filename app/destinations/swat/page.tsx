'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MapPin, MountainSnow, Star, Clock, Heart, Share2, ChevronLeft, ChevronRight, Navigation, CheckCircle, Camera, Compass, Globe2, MessageCircle } from 'lucide-react'
import Link from 'next/link'

export default function SwatPage() {
  const [currentImage, setCurrentImage] = useState(0)
  const [favorite, setFavorite] = useState(false)
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const destination = {
    name: 'Swat',
    region: 'Khyber Pakhtunkhwa, Pakistan',
    description: 'Known as the Switzerland of Pakistan, Swat Valley offers lush green valleys, rivers, and mountains.',
    longDescription: 'Swat Valley is a stunning region in northern Pakistan, renowned for its natural beauty, rivers, forests, and mountains. It is a popular destination for tourists seeking adventure, hiking, and cultural experiences. Swat also boasts historical sites like Buddhist stupas, forts, and mosques.',
    price: 2199,
    rating: 4.7,
    duration: '5-8 Days',
    bestSeason: 'April - October',
    difficulty: 'Moderate',
    groupSize: '2-6 People',
    elevation: '980 meters',
    images: [
      'https://images.unsplash.com/photo-1580137189272-c9379f8864fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80',
      'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80',
    ],
    touristPoints: [
      { name: 'Malam Jabba', description: 'Famous ski resort and hill station', image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', distance: '40km from Mingora', bestTime: 'Winter', category: 'Adventure' },
      { name: 'Kalam Valley', description: 'Scenic valley with rivers and lakes', image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', distance: '100km from Mingora', bestTime: 'Summer', category: 'Nature' },
      { name: 'Mahodand Lake', description: 'Glacial lake surrounded by mountains', image: 'https://images.unsplash.com/photo-1521334884684-d80222895322?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', distance: '35km from Kalam', bestTime: 'May - September', category: 'Adventure' }
    ],
    climate: { summer: '15°C - 30°C', winter: '-5°C - 15°C', bestTime: 'April to October' },
    travelTips: [
      'Carry warm clothing in winter',
      'Hire local guides for hiking',
      'Respect local culture and traditions',
      'Stay hydrated and carry snacks for trekking'
    ],
    inclusions: [
      'Accommodation',
      'Transport from Mingora',
      'Meals included',
      'Guided tours',
      'Travel insurance'
    ]
  }

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % destination.images.length)
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + destination.images.length) % destination.images.length)
  const handleWhatsAppClick = () => window.open(`https://wa.me/+923001234567?text=${encodeURIComponent(`Hello! I am interested in booking the ${destination.name} tour package.`)}`, '_blank')

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          {destination.images.map((img, idx) => (
            <div key={idx} className={`absolute inset-0 transition-opacity duration-1000 ${idx === currentImage ? 'opacity-100' : 'opacity-0'}`} style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.7)' }} />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
        <div className="absolute inset-0 flex items-center justify-between px-4 md:px-8">
          <button onClick={prevImage} className="w-12 h-12 rounded-full bg-black/40 flex items-center justify-center text-white hover:bg-black/60 z-10">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick={nextImage} className="w-12 h-12 rounded-full bg-black/40 flex items-center justify-center text-white hover:bg-black/60 z-10">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {destination.images.map((_, idx) => (
            <button key={idx} onClick={() => setCurrentImage(idx)} className={`w-8 h-2 rounded-full transition-all duration-300 ${currentImage === idx ? 'bg-white w-12' : 'bg-white/50 hover:bg-white/70'}`} />
          ))}
        </div>
        <div className="relative h-full flex items-end">
          <div className="container mx-auto px-4 md:px-8 pb-12">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-white max-w-4xl">
              <div className="inline-flex items-center mb-6 px-6 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <MountainSnow className="w-5 h-5 text-accent-400 mr-3" />
                <span className="text-accent-300 font-bold tracking-wider uppercase text-sm">ADVENTURE DESTINATION</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-4 leading-tight">{destination.name}</h1>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-center text-xl">
                  <MapPin className="w-6 h-6 text-accent-400 mr-3" />
                  <span className="text-gray-200">{destination.region}</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center bg-white/10 px-5 py-2.5 rounded-lg">
                    <Star className="w-5 h-5 text-yellow-400 mr-2" />
                    <span className="font-bold text-white">{destination.rating}/5.0</span>
                  </div>
                  <div className="flex gap-3">
                    <button onClick={() => setFavorite(!favorite)} className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 ${favorite ? 'bg-red-500 text-white shadow-lg' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                      <Heart className={`w-5 h-5 ${favorite ? 'fill-current' : ''}`} />
                    </button>
                    <button className="w-11 h-11 rounded-xl bg-white/10 text-white hover:bg-white/20 flex items-center justify-center">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-600 dark:text-accent-400 mb-2">${destination.price}</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Starting Price</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{destination.duration}</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Tour Duration</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{destination.bestSeason}</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Best Season</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{destination.groupSize}</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Group Size</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Column */}
            <div className="lg:w-2/3 space-y-12">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About {destination.name}</h2>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">{destination.longDescription}</p>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className={`lg:w-1/3 ${isSticky ? 'sticky top-6' : ''} transition-all duration-300`}>
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                <div className="space-y-4">
                  <button onClick={handleWhatsAppClick} className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 mr-3" /> WhatsApp Inquiry
                  </button>
                  <Link href="/contact" className="block w-full bg-accent-600 hover:bg-accent-700 text-white py-4 rounded-xl font-bold text-lg text-center">
                    Book Adventure
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
