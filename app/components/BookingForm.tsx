'use client'

import { useState } from 'react'
import { Send, Calendar, Users, MapPin } from 'lucide-react'

interface BookingFormProps {
  compact?: boolean
}

export default function BookingForm({ compact = false }: BookingFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    travelers: '2',
    destination: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle booking submission
    console.log('Booking submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className={`luxury-card ${compact ? 'p-6' : 'p-8'}`}>
      <h3 className={`font-heading font-semibold mb-6 ${compact ? 'text-xl' : 'text-2xl'}`}>
        {compact ? 'Quick Inquiry' : 'Start Your Journey'}
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className={compact ? 'space-y-4' : 'space-y-6'}>
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Full Name *"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-primary-700 bg-white dark:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-accent-500"
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email Address *"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-primary-700 bg-white dark:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-accent-500"
            />
          </div>

          <div>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Phone Number *"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-primary-700 bg-white dark:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-accent-500"
            />
          </div>

          <div className="relative">
            <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              name="date"
              value={formData.date}
              onChange={handleChange}
              placeholder="Preferred Travel Dates"
              className="w-full px-12 py-3 rounded-lg border border-gray-300 dark:border-primary-700 bg-white dark:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-accent-500"
            />
          </div>

          <div className="relative">
            <Users className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <select
              name="travelers"
              value={formData.travelers}
              onChange={handleChange}
              className="w-full px-12 py-3 rounded-lg border border-gray-300 dark:border-primary-700 bg-white dark:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-accent-500 appearance-none"
            >
              <option value="1">1 Traveler</option>
              <option value="2">2 Travelers</option>
              <option value="3-4">3-4 Travelers</option>
              <option value="5-6">5-6 Travelers</option>
              <option value="7+">7+ Travelers</option>
            </select>
          </div>

          <div className="relative">
            <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <select
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              className="w-full px-12 py-3 rounded-lg border border-gray-300 dark:border-primary-700 bg-white dark:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-accent-500 appearance-none"
            >
              <option value="">Select Destination</option>
              <option value="hunza">Hunza Valley</option>
              <option value="skardu">Skardu</option>
              <option value="fairy-meadows">Fairy Meadows</option>
              <option value="kashmir">Kashmir</option>
              <option value="all">All Destinations</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full btn-primary flex items-center justify-center"
        >
          {compact ? 'Send Inquiry' : 'Request Custom Itinerary'}
          <Send className="ml-2 w-5 h-5" />
        </button>

        {compact && (
          <p className="text-center text-sm text-gray-500 mt-4">
            We&apos;ll contact you within 24 hours
          </p>
        )}
      </form>
    </div>
  )
}