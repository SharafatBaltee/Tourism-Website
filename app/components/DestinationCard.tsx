'use client'

import { motion } from 'framer-motion'
import { MapPin, Star, Users } from 'lucide-react'
import Link from 'next/link'

interface Destination {
  id: string
  name: string
  region: string
  description: string
  price: number
  rating: number
  duration: string
  highlights: string[]
}

interface DestinationCardProps {
  destination: Destination
}

export default function DestinationCard({ destination }: DestinationCardProps) {
  // Different gradients for different destinations
  const getGradient = (id: string) => {
    switch(id) {
      case 'hunza': return 'bg-gradient-to-br from-cyan-600 to-blue-700'
      case 'skardu': return 'bg-gradient-to-br from-gray-700 to-gray-900'
      case 'fairy-meadows': return 'bg-gradient-to-br from-emerald-600 to-green-700'
      case 'kashmir': return 'bg-gradient-to-br from-purple-600 to-indigo-700'
      case 'naran': return 'bg-gradient-to-br from-blue-600 to-teal-600'
      case 'chitral': return 'bg-gradient-to-br from-amber-600 to-orange-600'
      default: return 'bg-gradient-to-br from-primary-600 to-accent-600'
    }
  }

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="luxury-card overflow-hidden group"
    >
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
        <div className={`w-full h-full ${getGradient(destination.id)} group-hover:scale-110 transition-transform duration-700`} />
        <div className="absolute bottom-4 left-4 z-20">
          <div className="flex items-center text-white mb-2">
            <MapPin className="w-4 h-4 mr-1" />
            <span className="text-sm font-medium">{destination.region}</span>
          </div>
          <h3 className="text-2xl font-heading font-semibold text-white">
            {destination.name}
          </h3>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
          {destination.description}
        </p>
        
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
            <span className="font-medium">{destination.rating}</span>
            <span className="text-gray-500 text-sm ml-1">/5.0</span>
          </div>
          <div className="text-right">
            <div className="text-accent-600 dark:text-accent-500 font-bold text-xl">
              ${destination.price}
            </div>
            <div className="text-gray-500 text-sm">per person</div>
          </div>
        </div>
        
        <div className="mb-6">
          <div className="flex items-center text-gray-500 text-sm mb-2">
            <Users className="w-4 h-4 mr-2" />
            <span>Experience Highlights</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {destination.highlights.slice(0, 3).map((highlight, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 dark:bg-primary-700 rounded-full text-sm"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>
        
        <Link
          href={`/destinations/${destination.id}`}
          className="block text-center btn-secondary py-3 hover:scale-105 transition-transform"
        >
          Explore Destination
        </Link>
      </div>
    </motion.div>
  )
}