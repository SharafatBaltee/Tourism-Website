'use client';

import Hero from '@/components/Hero'
import DestinationCard from '@/components/DestinationCard'
import PackageCard from '@/components/PackageCard'
import { destinations, experiences, trustBadges } from '@/lib/constants'
import { Mountain, Shield, Globe, Star, Heart, Users, Trophy, Sparkles, Gem, Award, Crown, ChevronRight, Clock, MapPin, Users as UsersIcon, CheckCircle, Phone, Mail, Facebook, Instagram, Twitter, Youtube, MessageCircle, Map, Calendar, ShieldCheck } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

// Unsplash images
const destinationImages = {
  hunza: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
  skardu: 'https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
  'fairy-meadows': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
  kashmir: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
  naran: 'https://images.unsplash.com/photo-1580137189272-c9379f8864fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
  chitral: 'https://images.unsplash.com/photo-1521334884684-d80222895322?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80'
}

const experienceImages = {
  'luxury-retreat': 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
  'honeymoon': 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
  'corporate': 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80',
  'adventure': 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80'
}

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleWhatsAppClick = () => {
    const phoneNumber = '+923001234567'
    const message = 'Hello! I am interested in booking a luxury travel experience with Northern Scapes.'
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <>
      <Hero />

      {/* WhatsApp Floating Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200 }}
        onClick={handleWhatsAppClick}
        className="fixed bottom-8 right-8 z-50 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-2xl flex items-center justify-center group transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute right-full mr-3 px-3 py-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
          Chat on WhatsApp
        </span>
      </motion.button>

      {/* Luxury Introduction - WITHOUT Company Details */}
      <section className="relative py-24 md:py-28 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
              filter: 'brightness(0.5)'
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-900/70 to-gray-900/90"></div>
        </div>

        <div className="relative z-10 section-padding">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
              {/* Left Side: Text Content */}
              <div className="text-white">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="inline-flex items-center mb-8 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
                >
                  <Gem className="w-7 h-7 text-accent-400 mr-3" />
                  <span className="text-accent-300 font-bold tracking-wider uppercase text-base">
                    PREMIUM LUXURY TRAVEL
                  </span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.7 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-8 leading-tight"
                >
                  Discover <span className="text-accent-300">Pakistan&apos;s</span> Majestic Beauty
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.7 }}
                  className="text-xl text-gray-200 mb-12 leading-relaxed"
                >
                  Northern Scapes specializes in exclusive bespoke journeys through Pakistan&apos;s most breathtaking landscapes.
                  Every detail is meticulously curated for discerning travelers seeking extraordinary adventures.
                </motion.p>

                {/* Features List - No Contact Details */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.7 }}
                  className="space-y-5 mb-12"
                >
                  <div className="flex items-center">
                    <CheckCircle className="w-7 h-7 text-green-400 mr-4" />
                    <span className="text-gray-100 font-medium text-lg">All-Inclusive Luxury Packages</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-7 h-7 text-green-400 mr-4" />
                    <span className="text-gray-100 font-medium text-lg">Private Guided Tours</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-7 h-7 text-green-400 mr-4" />
                    <span className="text-gray-100 font-medium text-lg">5-Star Accommodations</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-7 h-7 text-green-400 mr-4" />
                    <span className="text-gray-100 font-medium text-lg">24/7 VIP Concierge Service</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.7 }}
                  className="flex flex-col sm:flex-row gap-6"
                >
                  <Link
                    href="/contact"
                    className="bg-accent-600 hover:bg-accent-700 text-white px-10 py-5 rounded-xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 inline-flex items-center justify-center group"
                  >
                    Start Your Journey
                    <ChevronRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </Link>
                  <Link
                    href="/destinations"
                    className="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-10 py-5 rounded-xl font-bold text-xl backdrop-blur-sm transition-all duration-300 inline-flex items-center justify-center group"
                  >
                    Explore Destinations
                    <ChevronRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </motion.div>
              </div>

              {/* Right Side: Statistics Cards with Animation */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: '15+', text: 'Years Experience', delay: 0.2 },
                  { number: '98%', text: 'Satisfaction Rate', delay: 0.3 },
                  { number: '500+', text: 'Tours Completed', delay: 0.4 },
                  { number: '24/7', text: 'Support', delay: 0.5 }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: stat.delay, duration: 0.5 }}
                    whileHover={{ scale: 1.05, y: -10 }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-accent-500/50 transition-all duration-300"
                  >
                    <div className="text-5xl font-bold text-white mb-3">{stat.number}</div>
                    <div className="text-gray-100 font-semibold text-lg mb-2">{stat.text}</div>
                    <div className="mt-6 w-16 h-1.5 bg-accent-400 rounded-full"></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="relative py-24 bg-gray-50 dark:bg-gray-900">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-20"
          >
            <div className="inline-flex items-center justify-center mb-8">
              <MapPin className="w-8 h-8 text-accent-600 dark:text-accent-400 mr-3" />
              <span className="text-accent-700 dark:text-accent-300 font-bold tracking-wider uppercase text-sm">
                EXCLUSIVE DESTINATIONS
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-6">
              Discover Majestic Northern Pakistan
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Explore our handpicked destinations offering unique landscapes, rich culture,
              and luxury accommodations.
            </p>
          </motion.div>

          {/* Destination Cards with Animation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16">
            {destinations.slice(0, 4).map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-accent-500 dark:hover:border-accent-500"
              >
                {/* Real Image for Destination */}
                <div className="h-48 relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${destinationImages[destination.id as keyof typeof destinationImages]})`
                    }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  ></motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-5 left-5">
                    <h3 className="text-xl font-bold text-white">{destination.name}</h3>
                    <div className="flex items-center mt-1">
                      <MapPin className="w-4 h-4 text-white/90 mr-1" />
                      <span className="text-white/90 text-sm">{destination.region}</span>
                    </div>
                  </div>
                  <div className="absolute top-5 right-5 bg-black/50 backdrop-blur-sm rounded-xl px-3 py-2">
                    <span className="text-white font-bold">${destination.price}</span>
                  </div>
                </div>

                {/* Card Content - Compact */}
                <div className="p-6">
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                    {destination.description}
                  </p>

                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                      <span className="font-semibold text-gray-900 dark:text-white">{destination.rating}</span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm ml-1">/5.0</span>
                    </div>
                    <div className="text-right">
                      <div className="text-accent-600 dark:text-accent-400 font-bold">${destination.price}</div>
                      <div className="text-gray-500 dark:text-gray-400 text-xs">per person</div>
                    </div>
                  </div>

                  <Link
                    href={`/destinations/${destination.id}`}
                    className="block w-full bg-accent-600 hover:bg-accent-700 text-white text-center py-3 rounded-lg font-medium text-sm transition-colors"
                  >
                    Explore Destination
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-center"
          >
            <Link
              href="/destinations"
              className="inline-flex items-center bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white px-8 py-4 rounded-xl font-bold text-lg border border-gray-300 dark:border-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <MapPin className="w-5 h-5 mr-3" />
              View All Destinations
              <ChevronRight className="ml-3 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-24 bg-white dark:bg-gray-900">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center mb-20"
          >
            <div className="inline-flex items-center justify-center mb-8">
              <Award className="w-10 h-10 text-accent-600 dark:text-accent-400 mr-3" />
              <span className="text-accent-700 dark:text-accent-300 font-bold tracking-wider uppercase text-base">
                WHY CHOOSE NORTHERN SCAPES
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-8">
              The Ultimate Luxury Travel Experience
            </h2>

            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              We go beyond ordinary travel to deliver extraordinary experiences.
            </p>
          </motion.div>

          {/* Features Grid with Animation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {trustBadges.map((badge, index) => (
              <motion.div
                key={badge.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-10 border border-gray-200 dark:border-gray-700 hover:border-accent-500 dark:hover:border-accent-500 transition-colors duration-300"
              >
                <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center">
                  {badge.icon === 'shield' && <Shield className="w-10 h-10 text-white" />}
                  {badge.icon === 'globe' && <Globe className="w-10 h-10 text-white" />}
                  {badge.icon === 'star' && <Star className="w-10 h-10 text-white" />}
                  {badge.icon === 'mountain' && <Mountain className="w-10 h-10 text-white" />}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                  {badge.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg text-center leading-relaxed">
                  {badge.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Experiences - SHORTER CARDS */}
      <section className="relative py-24 bg-gray-50 dark:bg-gray-900">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center mb-20"
          >
            <div className="inline-flex items-center justify-center mb-8">
              <Crown className="w-10 h-10 text-accent-600 dark:text-accent-400 mr-3" />
              <span className="text-accent-700 dark:text-accent-300 font-bold tracking-wider uppercase text-base">
                SIGNATURE EXPERIENCES
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-8">
              Tailored Luxury Journeys
            </h2>

            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Choose from our exclusive curated experiences.
            </p>
          </motion.div>

          {/* Experience Cards - SHORTER Height */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {experiences.slice(0, 3).map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700 hover:border-accent-500 dark:hover:border-accent-500 transition-all duration-300"
              >
                {/* Real Image for Experience - SHORTER */}
                <div className="h-44 relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${experienceImages[experience.id as keyof typeof experienceImages]})`
                    }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  ></motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                  <div className="absolute bottom-5 left-5 right-5">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-bold text-white">{experience.title}</h3>
                      <span className="text-xl font-bold text-white bg-black/50 backdrop-blur-sm px-4 py-2 rounded-lg">
                        ${experience.price}
                      </span>
                    </div>
                    <div className="flex items-center text-white/90 mt-2">
                      <Clock className="w-5 h-5 mr-2" />
                      <span className="text-base font-medium">{experience.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Experience Content - Compact */}
                <div className="p-6">
                  <p className="text-gray-700 dark:text-gray-300 text-base mb-6 line-clamp-2">
                    {experience.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Includes:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {experience.includes.slice(0, 4).map((item, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                          <span className="text-sm text-gray-600 dark:text-gray-400 truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Link
                      href={`/experiences/${experience.id}`}
                      className="flex-1 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white py-3 rounded-xl font-medium text-center transition-colors"
                    >
                      Details
                    </Link>
                    <Link
                      href="/contact"
                      className="flex-1 bg-accent-600 hover:bg-accent-700 text-white py-3 rounded-xl font-medium text-center transition-colors shadow-lg hover:shadow-xl"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-20 text-center"
          >
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-accent-600 to-primary-600 rounded-3xl p-14">
              <h3 className="text-3xl font-bold text-white mb-6">
                Ready to Begin Your Luxury Escape?
              </h3>
              <p className="text-white/90 text-lg mb-10 leading-relaxed">
                Contact our luxury travel specialists for a complimentary consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/contact"
                  className="bg-white hover:bg-gray-100 text-gray-900 px-10 py-5 rounded-xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300"
                >
                  Book Free Consultation
                </Link>
                <button
                  onClick={handleWhatsAppClick}
                  className="bg-green-600 hover:bg-green-700 text-white px-10 py-5 rounded-xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 inline-flex items-center justify-center"
                >
                  <MessageCircle className="w-6 h-6 mr-3" />
                  Chat on WhatsApp
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTACT & COMPANY DETAILS SECTION - MOVED TO LAST */}
      <section className="relative py-24 bg-gray-900">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <div className="mb-12 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <ShieldCheck className="w-7 h-7 text-accent-400 mr-3" />
                Contact & Company Details
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-xl bg-accent-600/20 flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-accent-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Phone Number</div>
                    <div className="text-gray-300">+92 300 1234567</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-xl bg-accent-600/20 flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-accent-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Email</div>
                    <div className="text-gray-300">contact@northernscapes.com</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-xl bg-accent-600/20 flex items-center justify-center mr-4">
                    <Map className="w-6 h-6 text-accent-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Address</div>
                    <div className="text-gray-300">Luxury Plaza, Islamabad, Pakistan</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-xl bg-accent-600/20 flex items-center justify-center mr-4">
                    <Calendar className="w-6 h-6 text-accent-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Office Hours</div>
                    <div className="text-gray-300">Mon-Sat: 9AM - 8PM</div>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <h4 className="text-white font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.1, y: -5 }}
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-colors duration-300"
                  >
                    <Facebook className="w-6 h-6 text-white" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, y: -5 }}
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 flex items-center justify-center transition-colors duration-300"
                  >
                    <Instagram className="w-6 h-6 text-white" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, y: -5 }}
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-blue-500 hover:bg-blue-600 flex items-center justify-center transition-colors duration-300"
                  >
                    <Twitter className="w-6 h-6 text-white" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, y: -5 }}
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-red-600 hover:bg-red-700 flex items-center justify-center transition-colors duration-300"
                  >
                    <Youtube className="w-6 h-6 text-white" />
                  </motion.a>
                </div>
              </div>
            </div>

            {/* Final CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-center"
            >
              <Link
                href="/contact"
                className="inline-flex items-center bg-accent-600 hover:bg-accent-700 text-white px-12 py-6 rounded-xl font-bold text-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 group"
              >
                Get In Touch With Us
                <ChevronRight className="ml-4 w-7 h-7 group-hover:translate-x-2 transition-transform" />
              </Link>
              <p className="text-gray-400 mt-6">
                We&apos;re available 24/7 to answer your questions and help plan your dream journey.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}