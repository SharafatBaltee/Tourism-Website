'use client'

import { motion } from 'framer-motion'
import { Check, Crown, Gem, Sparkles } from 'lucide-react'
import Link from 'next/link'

interface Package {
  id: string
  name: string
  price: number
  duration: string
  description: string
  features: string[]
  highlighted: boolean
}

interface PackageCardProps {
  pkg: Package
}

export default function PackageCard({ pkg }: PackageCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`luxury-card overflow-hidden ${
        pkg.highlighted ? 'border-2 border-accent-500 shadow-xl' : ''
      }`}
    >
      {pkg.highlighted && (
        <div className="bg-gradient-to-r from-accent-600 to-accent-400 text-white py-3 px-6 text-center">
          <div className="flex items-center justify-center space-x-2">
            <Crown className="w-5 h-5" />
            <span className="font-semibold">MOST POPULAR</span>
            <Sparkles className="w-5 h-5" />
          </div>
        </div>
      )}
      
      <div className="p-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            {pkg.id === 'gold' && <Gem className="w-8 h-8 text-yellow-600" />}
            {pkg.id === 'platinum' && <Gem className="w-8 h-8 text-gray-400" />}
            {pkg.id === 'elite' && <Crown className="w-8 h-8 text-accent-600" />}
            <div>
              <h3 className="text-2xl font-heading font-semibold">{pkg.name}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">{pkg.duration}</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-accent-600 dark:text-accent-500">
              ${pkg.price}
            </div>
            <div className="text-gray-500 text-sm">per person</div>
          </div>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-8">{pkg.description}</p>
        
        <div className="mb-10">
          <h4 className="font-semibold mb-4 text-lg">Package Includes:</h4>
          <ul className="space-y-3">
            {pkg.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <Link
          href={`/contact?package=${pkg.id}`}
          className={`block text-center py-4 rounded-full font-semibold transition-all ${
            pkg.highlighted
              ? 'btn-primary'
              : 'border-2 border-accent-600 text-accent-600 dark:text-accent-500 hover:bg-accent-50 dark:hover:bg-accent-900/20'
          }`}
        >
          Select Package
        </Link>
      </div>
    </motion.div>
  )
}