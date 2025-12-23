'use client'

import { color, motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background - FIXED (no video) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800/90 to-accent-900/30" />
       <div 
  className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]" 
  style={{ backgroundColor: '#19191d' }} 
/>
      </div>

      {/* Content */}
      <div className="relative z-10 section-padding text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <span className="inline-block text-accent-400 font-semibold tracking-widest uppercase mb-4 text-sm"
          style={{ color: '#FFFFFF' }} >
            Luxury Travel Redefined
          </span>
          <h1 className="heading-1 text-white mb-8 leading-tight">
            Experience Northern Pakistan&apos;s
            <span className="block text-accent-400">Untouched Majesty</span>
          </h1>
          <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed">
            Exclusive bespoke journeys through the world&apos;s most breathtaking landscapes, 
            crafted for discerning travelers seeking extraordinary adventures.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center justify-center group"
            >
              Plan Your Escape
              <ChevronDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </Link>
            <Link
              href="/destinations"
              className="btn-secondary text-white border-white hover:bg-white/10"
            >
              Explore Destinations
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="w-8 h-8 text-white/60" />
      </motion.div>
    </section>
  )
}