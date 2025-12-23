'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Mountain, Compass, Star, Filter, Search, ChevronRight, Sparkles, Globe, Award, Clock, Users, Shield, Calendar, Heart } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

// Hero background images that will rotate every 8 seconds
const heroImages = [
  'https://images.unsplash.com/photo-1593693399741-6c85ff6e685c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  'https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
]

// Destination data matching your new detail pages
const destinations = [
  {
    id: 'hunza',
    name: 'Hunza Valley',
    region: 'Gilgit-Baltistan',
    description: 'Majestic mountains, turquoise lakes, and ancient forts in a UNESCO heritage valley.',
    price: 2499,
    rating: 4.9,
    duration: '7-10 Days',
    bestSeason: 'April - October',
    highlights: ['Rakaposhi Views', 'Altit Fort', 'Attabad Lake'],
    category: ['premium', 'cultural', 'luxury'],
    image: 'https://images.unsplash.com/photo-1593693399741-6c85ff6e685c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'skardu',
    name: 'Skardu',
    region: 'Gilgit-Baltistan',
    description: 'Gateway to K2 with breathtaking landscapes and serene lakes.',
    price: 2899,
    rating: 4.8,
    duration: '8-12 Days',
    bestSeason: 'May - September',
    highlights: ['Shangrila Resort', 'Kachura Lake', 'Deosai Plains'],
    category: ['premium', 'adventure'],
    image: 'https://images.unsplash.com/photo-1580137189272-c9379f8864fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'fairy-meadows',
    name: 'Fairy Meadows',
    region: 'Gilgit-Baltistan',
    description: 'Base camp of Nanga Parbat with magical meadows.',
    price: 2199,
    rating: 4.7,
    duration: '6-8 Days',
    bestSeason: 'June - September',
    highlights: ['Nanga Parbat', 'Beyal Camp', 'Glacier Views'],
    category: ['adventure'],
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'kashmir',
    name: 'Kashmir Valley',
    region: 'Azad Kashmir',
    description: 'Paradise on earth with serene lakes and Mughal gardens.',
    price: 2699,
    rating: 4.9,
    duration: '7-9 Days',
    bestSeason: 'March - November',
    highlights: ['Neelum Valley', 'Ratti Gali', 'Arang Kel'],
    category: ['luxury', 'cultural'],
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'naran',
    name: 'Naran Kaghan',
    region: 'Khyber Pakhtunkhwa',
    description: 'Alpine paradise with crystal clear lakes and pine forests.',
    price: 1999,
    rating: 4.6,
    duration: '5-7 Days',
    bestSeason: 'May - October',
    highlights: ['Saif-ul-Mulook', 'Lulusar Lake', 'Babusar Top'],
    category: ['adventure'],
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'chitral',
    name: 'Chitral Valley',
    region: 'Khyber Pakhtunkhwa',
    description: 'Ancient culture with towering peaks of Tirich Mir.',
    price: 2399,
    rating: 4.7,
    duration: '7-10 Days',
    bestSeason: 'April - October',
    highlights: ['Tirich Mir', 'Kalash Valley', 'Chitral Fort'],
    category: ['cultural', 'adventure'],
    image: 'https://images.unsplash.com/photo-1521334884684-d80222895322?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
]

export default function DestinationsPage() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [isScrolled, setIsScrolled] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Auto-rotate hero images every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const filters = [
    { id: 'all', label: 'All Destinations' },
    { id: 'premium', label: 'Premium' },
    { id: 'adventure', label: 'Adventure' },
    { id: 'cultural', label: 'Cultural' },
    { id: 'luxury', label: 'Luxury' }
  ]

  const filteredDestinations = destinations.filter(destination => {
    const matchesSearch = destination.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         destination.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         destination.description.toLowerCase().includes(searchQuery.toLowerCase())
    
    if (activeFilter === 'all') return matchesSearch
    return destination.category.includes(activeFilter) && matchesSearch
  })

  return (
    <div className="pt-20">
      {/* Hero Section with Rotating Background */}
      <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
        {/* Background Images with Fade Transition */}
        <div className="absolute inset-0">
          {heroImages.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
              }}
            />
          ))}
        </div>
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30"></div>
        
        {/* Animated Radial Gradient Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(56,189,248,0.2),transparent_50%)]"></div>
        
        {/* Image Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentImageIndex === index 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Hero Content */}
        <div className="relative h-full flex items-center">
          <div className="section-padding max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="relative z-10"
            >
              {/* Animated Floating Element */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="inline-flex items-center mb-6 px-5 py-2.5 rounded-full bg-white/20 backdrop-blur-lg border border-white/30 shadow-lg"
              >
                <Globe className="w-5 h-5 text-emerald-300 mr-2" />
                <span className="text-emerald-200 font-bold tracking-wider uppercase text-xs">
                  PREMIUM DESTINATIONS
                </span>
              </motion.div>
              
              {/* Main Heading with Gradient Text */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  <span className="text-white drop-shadow-lg">Discover the </span>
                  <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg">
                    Magic of Pakistan
                  </span>
                </h1>
                
                <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-lg">
                  Where majestic mountains meet ancient cultures, creating unforgettable adventures.
                </p>
              </motion.div>

              {/* Search Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.7 }}
                className="max-w-xl mx-auto"
              >
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-emerald-300" />
                    <input
                      type="text"
                      placeholder="Search destinations like Hunza, Skardu, Kashmir..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>
                
                {/* Quick Search Tags */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  className="flex flex-wrap justify-center gap-2 mt-4"
                >
                  {['Hunza', 'Kashmir', 'Naran', 'Skardu', 'Chitral'].map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setSearchQuery(tag)}
                      className="px-3 py-1 text-xs bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white rounded-full transition-all duration-300 hover:scale-105"
                    >
                      {tag}
                    </button>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-8 right-8 hidden md:block"
        >
          <div className="flex items-center text-white/80">
            <span className="text-sm mr-2">Scroll</span>
            <ChevronRight className="w-4 h-4 rotate-90" />
          </div>
        </motion.div>
      </section>

      {/* Filter Section */}
      <section className={`bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 py-5 transition-all duration-300 ${isScrolled ? 'shadow-lg sticky top-0 z-40 backdrop-blur-md' : ''}`}>
        <div className="section-padding">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center">
              <Filter className="w-5 h-5 text-gray-600 dark:text-gray-400 mr-2" />
              <span className="font-bold text-gray-900 dark:text-white text-sm">Filter by:</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {filters.map((filter, index) => (
                <motion.button
                  key={filter.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm ${
                    activeFilter === filter.id
                      ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md hover:shadow-lg'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 hover:border-emerald-500/30'
                  }`}
                >
                  {filter.label}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Destinations Grid */}
      <section className="section-padding py-16">
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
            {activeFilter === 'all' ? 'All Destinations' : activeFilter.charAt(0).toUpperCase() + activeFilter.slice(1) + ' Destinations'}
          </h2>
         
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeFilter}-${searchQuery}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filteredDestinations.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDestinations.map((destination, index) => (
                  <motion.div
                    key={destination.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    whileHover={{ y: -8 }}
                    className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                  >
                    {/* Image Section */}
                    <div className="h-56 relative overflow-hidden">
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                        style={{
                          backgroundImage: `url(${destination.image})`
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      
                      {/* Category Badges */}
                      <div className="absolute top-3 left-3 flex gap-2">
                        {destination.category.slice(0, 2).map((cat) => (
                          <span
                            key={cat}
                            className="px-2.5 py-1 bg-black/50 backdrop-blur-sm text-white text-xs font-medium rounded-lg"
                          >
                            {cat}
                          </span>
                        ))}
                      </div>
                      
                      {/* Price Tag */}
                      <div className="absolute bottom-3 right-3">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: index * 0.05 + 0.2 }}
                          className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-3 py-1.5 rounded-lg font-bold text-sm shadow-lg"
                        >
                          ${destination.price}
                        </motion.div>
                      </div>
                      
                      {/* Location Info */}
                      <div className="absolute bottom-3 left-3">
                        <div className="flex items-center text-white">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span className="font-medium text-sm">{destination.region}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="p-5">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                            {destination.name}
                          </h3>
                          <div className="flex items-center mb-3">
                            <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                            <span className="text-sm font-semibold text-gray-900 dark:text-white">{destination.rating}</span>
                            <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">/5.0</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                        {destination.description}
                      </p>
                      
                      {/* Info Row */}
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="flex items-center text-gray-600 dark:text-gray-400">
                          <Clock className="w-3.5 h-3.5 mr-2 text-emerald-500" />
                          <span className="text-xs">{destination.duration}</span>
                        </div>
                        <div className="flex items-center text-gray-600 dark:text-gray-400">
                          <Calendar className="w-3.5 h-3.5 mr-2 text-emerald-500" />
                          <span className="text-xs truncate">{destination.bestSeason}</span>
                        </div>
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <Link
                          href={`/destinations/${destination.id}`}
                          className="flex-1 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white py-2.5 rounded-lg font-medium text-sm text-center transition-colors flex items-center justify-center group"
                        >
                          <span>View Details</span>
                          <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                        <Link
                          href="/contact"
                          className="flex-1 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white py-2.5 rounded-lg font-medium text-sm text-center shadow-md hover:shadow-lg transition-all duration-300"
                        >
                          Book Now
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  No destinations found
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Try adjusting your search or filter criteria
                </p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* CTA Section */}
      <section className="section-padding py-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center mb-6 px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-sm border border-emerald-500/30">
              <Sparkles className="w-5 h-5 text-emerald-400 mr-2" />
              <span className="text-emerald-300 font-bold tracking-wider uppercase text-xs">
                NEED HELP CHOOSING?
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Contact Our Travel Experts
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Our luxury travel specialists will help you choose the perfect destination 
              and create a customized itinerary just for you.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              Get Free Consultation
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}