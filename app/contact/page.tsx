'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Phone, Mail, MapPin, Clock, User, Calendar, MessageCircle, Star, Mountain, Sparkles, Shield, Globe, Users, Award, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    packageType: '',
    travelDates: '',
    travelers: '',
    message: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [activeBackground, setActiveBackground] = useState(0)

  const backgrounds = [
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', // Mountains
    'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', // Lakes
    'https://images.unsplash.com/photo-1521334884684-d80222895322?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', // Valleys
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', // Luxury
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBackground((prev) => (prev + 1) % backgrounds.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    // Reset after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleWhatsAppClick = () => {
    const phoneNumber = '+923001234567'
    const message = 'Hello! I am interested in booking a luxury travel experience with Northern Scapes.'
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <div className="pt-20">
      {/* Hero Section with Animated Background */}
      <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeBackground}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1 }}
            transition={{ duration: 2 }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${backgrounds[activeBackground]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(0.7)'
            }}
          />
        </AnimatePresence>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        
        <div className="relative h-full flex items-center">
          <div className="section-padding max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center mb-8 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <Sparkles className="w-6 h-6 text-accent-400 mr-3" />
                <span className="text-accent-300 font-bold tracking-wider uppercase text-sm">
                  CONTACT OUR LUXURY TEAM
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-8 leading-tight">
                Begin Your <span className="text-accent-300">Journey</span>
              </h1>
              
              <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-12 leading-relaxed">
                Our luxury travel specialists are ready to craft your perfect experience in Pakistan&apos;s majestic landscapes.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="flex flex-wrap gap-6 justify-center"
              >
                <button
                  onClick={handleWhatsAppClick}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 inline-flex items-center"
                >
                  <MessageCircle className="w-6 h-6 mr-3" />
                  Chat on WhatsApp
                </button>
                
                <a href="#contact-form" className="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg backdrop-blur-sm transition-all duration-300 inline-flex items-center">
                  <Send className="w-6 h-6 mr-3" />
                  Send Inquiry
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 bg-gray-50 dark:bg-gray-900">
        <div className="section-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { number: '2', text: 'Hours Response Time', icon: Clock },
              { number: '24/7', text: 'VIP Concierge', icon: Shield },
              { number: '98%', text: 'Satisfaction Rate', icon: Star },
              { number: '15+', text: 'Years Experience', icon: Award },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center border border-gray-200 dark:border-gray-700 hover:border-accent-500 dark:hover:border-accent-500 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{stat.number}</div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">{stat.text}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section id="contact-form" className="section-padding py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="luxury-card p-8 sticky top-24 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700"
            >
              <h2 className="text-3xl font-heading font-bold text-gray-900 dark:text-white mb-8">
                Contact Information
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-500/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent-600 dark:text-accent-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">Phone</h3>
                    <p className="text-gray-700 dark:text-gray-300">+92 300 1234567</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">24/7 Luxury Concierge</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-500/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-accent-600 dark:text-accent-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">Email</h3>
                    <p className="text-gray-700 dark:text-gray-300">contact@northernscapes.com</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Response within 2 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-500/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent-600 dark:text-accent-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">Office</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Luxury Plaza<br />
                      Islamabad, Pakistan
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-500/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-accent-600 dark:text-accent-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">Office Hours</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Monday - Friday: 9AM - 8PM<br />
                      Saturday: 10AM - 6PM<br />
                      Sunday: By appointment
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Contact Buttons */}
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <h3 className="font-bold text-gray-900 dark:text-white mb-6">Quick Contact</h3>
                <div className="space-y-4">
                  <button
                    onClick={handleWhatsAppClick}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-bold flex items-center justify-center transition-colors duration-300"
                  >
                    <MessageCircle className="w-5 h-5 mr-3" />
                    WhatsApp Now
                  </button>
                  
                  <a
                    href="tel:+923001234567"
                    className="w-full bg-accent-600 hover:bg-accent-700 text-white py-3 rounded-xl font-bold flex items-center justify-center transition-colors duration-300"
                  >
                    <Phone className="w-5 h-5 mr-3" />
                    Call Now
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="luxury-card p-8 md:p-12 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700"
            >
              <div className="mb-10">
                <h2 className="text-3xl font-heading font-bold text-gray-900 dark:text-white mb-4">
                  Plan Your Luxury Escape
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-lg">
                  Please provide your details and our luxury travel specialist will contact you within 24 hours 
                  to begin crafting your bespoke experience.
                </p>
              </div>

              <AnimatePresence>
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-center"
                  >
                    <CheckCircle className="w-20 h-20 text-white mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Thank You for Your Inquiry!
                    </h3>
                    <p className="text-white/90 text-lg mb-6">
                      Our luxury travel specialist will contact you within 2 hours to discuss your dream journey.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="bg-white text-green-700 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors duration-300"
                    >
                      Send Another Inquiry
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-8"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        <label className="block text-sm font-bold text-gray-900 dark:text-white mb-3">
                          <span className="flex items-center">
                            <User className="w-4 h-4 mr-2" />
                            Full Name *
                          </span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-accent-500 transition-all duration-300"
                          placeholder="John Smith"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <label className="block text-sm font-bold text-gray-900 dark:text-white mb-3">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-accent-500 transition-all duration-300"
                          placeholder="john@example.com"
                        />
                      </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <label className="block text-sm font-bold text-gray-900 dark:text-white mb-3">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-accent-500 transition-all duration-300"
                          placeholder="+92 300 1234567"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <label className="block text-sm font-bold text-gray-900 dark:text-white mb-3">
                          Interested Package
                        </label>
                        <select
                          name="packageType"
                          value={formData.packageType}
                          onChange={handleChange}
                          className="w-full px-4 py-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-accent-500 transition-all duration-300"
                        >
                          <option value="">Select a package</option>
                          <option value="gold">Gold Package</option>
                          <option value="platinum">Platinum Package</option>
                          <option value="elite">Elite Package</option>
                          <option value="custom">Custom Experience</option>
                        </select>
                      </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <label className="block text-sm font-bold text-gray-900 dark:text-white mb-3">
                          <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            Preferred Travel Dates *
                          </span>
                        </label>
                        <input
                          type="text"
                          name="travelDates"
                          value={formData.travelDates}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-accent-500 transition-all duration-300"
                          placeholder="e.g., June 2024, 7-10 days"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <label className="block text-sm font-bold text-gray-900 dark:text-white mb-3">
                          Number of Travelers
                        </label>
                        <select
                          name="travelers"
                          value={formData.travelers}
                          onChange={handleChange}
                          className="w-full px-4 py-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-accent-500 transition-all duration-300"
                        >
                          <option value="">Select number</option>
                          <option value="1">1 Traveler</option>
                          <option value="2">2 Travelers</option>
                          <option value="3-4">3-4 Travelers</option>
                          <option value="5-6">5-6 Travelers</option>
                          <option value="7+">7+ Travelers</option>
                        </select>
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <label className="block text-sm font-bold text-gray-900 dark:text-white mb-3">
                        Tell us about your dream journey
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full px-4 py-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-accent-500 transition-all duration-300 resize-none"
                        placeholder="Share your travel preferences, special requirements, and any specific experiences you're interested in..."
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                      className="flex items-center justify-between pt-8 border-t border-gray-200 dark:border-gray-700"
                    >
                      <button
                        type="submit"
                        className="bg-gradient-to-r from-accent-600 to-accent-700 hover:from-accent-700 hover:to-accent-800 text-white px-12 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 inline-flex items-center group"
                      >
                        Submit Inquiry
                        <Send className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                      </button>
                      
                      <div className="text-right">
                        <div className="flex items-center text-green-600 dark:text-green-400 font-bold">
                          <CheckCircle className="w-5 h-5 mr-2" />
                          <span>Response within 2 hours</span>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                          All inquiries are confidential
                        </p>
                      </div>
                    </motion.div>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
              filter: 'brightness(0.4)'
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/80 to-gray-900/90"></div>
        </div>
        
        <div className="relative z-10 section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center mb-8 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <Sparkles className="w-6 h-6 text-accent-400 mr-3" />
                <span className="text-accent-300 font-bold tracking-wider uppercase text-sm">
                  COMPLIMENTARY CONSULTATION
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8">
                Schedule Your Free Consultation
              </h2>
              
              <p className="text-xl text-gray-200 mb-12 leading-relaxed">
                Meet our luxury travel specialists for a personalized planning session. 
                We&apos;ll design your perfect journey through Pakistan&apos;s majestic landscapes.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="#contact-form"
                  className="bg-accent-600 hover:bg-accent-700 text-white px-10 py-5 rounded-xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 inline-flex items-center justify-center group"
                >
                  Book Free Consultation
                  <Calendar className="ml-3 w-6 h-6 group-hover:rotate-12 transition-transform" />
                </Link>
                
                <button
                  onClick={handleWhatsAppClick}
                  className="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-10 py-5 rounded-xl font-bold text-xl backdrop-blur-sm transition-all duration-300 inline-flex items-center justify-center group"
                >
                  <MessageCircle className="w-6 h-6 mr-3" />
                  Instant WhatsApp Chat
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

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
    </div>
  )
}