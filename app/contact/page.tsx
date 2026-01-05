'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Phone, Mail, MapPin, Clock, User, Calendar, MessageCircle, Star, Sparkles, Shield, Award, CheckCircle, ChevronLeft, ChevronRight, Globe, Building, CreditCard, ShieldCheck, Users, Mountain, Compass, Crown, Gem, Zap, Target, Loader2 } from 'lucide-react'

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
  const [isLoading, setIsLoading] = useState(false)
  const [activeBackground, setActiveBackground] = useState(0)
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [selectedDate, setSelectedDate] = useState('')
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth())
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
  
  const datePickerRef = useRef<HTMLDivElement>(null)

  // Load EmailJS script dynamically
  useEffect(() => {
    // Load EmailJS script
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js'
    script.async = true
    script.onload = () => {
      // Initialize EmailJS after script loads
      if (window.emailjs) {
        window.emailjs.init("BrExZw32GGBWtdxKg")
      }
    }
    document.body.appendChild(script)
    
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  const backgrounds = [
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1521334884684-d80222895322?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  ]

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (datePickerRef.current && !datePickerRef.current.contains(event.target as Node)) {
        setShowDatePicker(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBackground((prev) => (prev + 1) % backgrounds.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  // Function to create and download PDF as HTML file
  const createAndDownloadPDF = () => {
    const content = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Northern Scapes Inquiry</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 800px; margin: 0 auto; padding: 20px; }
    .header { text-align: center; border-bottom: 3px solid #2563eb; padding-bottom: 20px; margin-bottom: 30px; }
    .header h1 { color: #2563eb; font-size: 28px; margin: 0; }
    .header .subtitle { color: #666; font-size: 16px; margin-top: 5px; }
    .section { margin-bottom: 25px; padding: 15px; background: #f8fafc; border-radius: 8px; border-left: 4px solid #2563eb; }
    .section-title { color: #2563eb; font-size: 18px; font-weight: bold; margin-bottom: 10px; }
    .info-row { margin-bottom: 8px; display: flex; }
    .info-label { font-weight: bold; min-width: 150px; }
    .info-value { flex: 1; }
    .footer { margin-top: 40px; text-align: center; color: #666; font-size: 14px; border-top: 2px solid #e5e7eb; padding-top: 20px; }
    .company-info { background: #e8f4fd; padding: 15px; border-radius: 8px; margin-top: 20px; }
    .timestamp { text-align: right; color: #666; font-size: 12px; margin-bottom: 20px; }
  </style>
</head>
<body>
  <div class="timestamp">
    Submitted: ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}
  </div>
  
  <div class="header">
    <h1>NORTHERN SCAPES</h1>
    <div class="subtitle">LUXURY TRAVEL INQUIRY</div>
  </div>
  
  <div class="section">
    <div class="section-title">CUSTOMER DETAILS</div>
    <div class="info-row"><div class="info-label">Full Name:</div><div class="info-value">${formData.name}</div></div>
    <div class="info-row"><div class="info-label">Email Address:</div><div class="info-value">${formData.email}</div></div>
    <div class="info-row"><div class="info-label">Phone Number:</div><div class="info-value">${formData.phone}</div></div>
  </div>
  
  <div class="section">
    <div class="section-title">TRAVEL DETAILS</div>
    <div class="info-row"><div class="info-label">Package Type:</div><div class="info-value">${formData.packageType || 'Not specified'}</div></div>
    <div class="info-row"><div class="info-label">Travel Dates:</div><div class="info-value">${formData.travelDates}</div></div>
    <div class="info-row"><div class="info-label">Number of Travelers:</div><div class="info-value">${formData.travelers}</div></div>
  </div>
  
  <div class="section">
    <div class="section-title">MESSAGE</div>
    <div style="white-space: pre-line; padding: 10px; background: white; border-radius: 4px;">${formData.message}</div>
  </div>
  
  <div class="company-info">
    <div class="section-title">CONTACT INFORMATION</div>
    <div class="info-row"><div class="info-label">Northern Scapes:</div><div class="info-value">Manthal, Skardu, Gilgit-Baltistan, Pakistan</div></div>
    <div class="info-row"><div class="info-label">Phone:</div><div class="info-value">+92 345 5644205</div></div>
    <div class="info-row"><div class="info-label">Email:</div><div class="info-value">northernscapes512@gmail.com</div></div>
  </div>
  
  <div class="footer">
    <p>Thank you for choosing Northern Scapes!</p>
    <p>Our luxury travel specialist will contact you within 2 hours.</p>
    <p style="margin-top: 10px; font-size: 12px; color: #999;">This inquiry was submitted via Northern Scapes website on ${new Date().toLocaleString()}</p>
  </div>
</body>
</html>`

    // Create blob and download
    const blob = new Blob([content], { type: 'text/html' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `Northern-Scapes-Inquiry-${formData.name.replace(/\s+/g, '-')}-${Date.now()}.html`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  // Function to send WhatsApp message
  const sendWhatsAppMessage = () => {
    const phoneNumber = '923455644205'
    const message = `*NEW LUXURY TRAVEL INQUIRY - NORTHERN SCAPES*

👤 *Customer Information:*
• Name: ${formData.name}
• Email: ${formData.email}
• Phone: ${formData.phone}

✈️ *Travel Details:*
• Package: ${formData.packageType || 'Not specified'}
• Travel Dates: ${formData.travelDates}
• Travelers: ${formData.travelers}

📝 *Message:*
${formData.message}

⏰ *Submitted:* ${new Date().toLocaleString()}

📍 *Northern Scapes*
📞 +92 345 5644205
📧 northernscapes512@gmail.com
🗺️ Manthal, Skardu, Pakistan

_This inquiry was submitted via the Northern Scapes website._`

    const encodedMessage = encodeURIComponent(message)
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`
  }

  // ✅ FUNCTION TO SEND EMAIL VIA EMAILJS (using CDN)
  const sendEmail = async () => {
    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        package_type: formData.packageType || 'Not specified',
        travel_dates: formData.travelDates,
        travelers: formData.travelers,
        message: formData.message,
        date: new Date().toLocaleString(),
      }

      console.log('📧 Step 1: Sending email via EmailJS...', templateParams)

      // Check if emailjs is available
      if (!window.emailjs) {
        throw new Error('EmailJS not loaded')
      }

      const response = await window.emailjs.send(
        'service_kzeglly',     // Service ID
        'template_zdvvnoh',    // Template ID
        templateParams,
        'BrExZw32GGBWtdxKg'    // Public Key
      )

      console.log('✅ Email sent successfully:', response)
      return response
    } catch (error) {
      console.error('❌ EmailJS sending failed:', error)
      
      // Fallback to Formspree
      console.log('🔄 Trying Formspree fallback...')
      try {
        const formspreeResponse = await fetch('https://formspree.io/f/mrgwjjoy', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            packageType: formData.packageType,
            travelDates: formData.travelDates,
            travelers: formData.travelers,
            message: formData.message,
            _subject: 'New Inquiry - Northern Scapes Website',
            _replyto: formData.email,
            _cc: 'northernscapes512@gmail.com'
          }),
        })
        
        if (formspreeResponse.ok) {
          console.log('✅ Email sent via Formspree fallback')
          return { status: 200, text: 'Success via Formspree' }
        }
        throw new Error('Formspree failed')
      } catch (fallbackError) {
        console.error('❌ All email methods failed:', fallbackError)
        // Even if email fails, continue with PDF and WhatsApp
        return { status: 500, text: 'Email failed but continuing' }
      }
    }
  }

  // ✅ HANDLE SUBMIT FUNCTION
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.phone || !formData.travelDates || !formData.message) {
      alert('Please fill in all required fields')
      return
    }

    setIsLoading(true)
    console.log('🚀 Starting form submission...')

    try {
      // 1. Send email
      console.log('📧 Step 1: Sending email...')
      const emailResult = await sendEmail()
      
      // 2. Create and download PDF
      console.log('📄 Step 2: Creating PDF...')
      createAndDownloadPDF()
      console.log('✅ PDF downloaded successfully')
      
      // 3. Open WhatsApp
      console.log('💬 Step 3: Opening WhatsApp...')
      const whatsappURL = sendWhatsAppMessage()
      // Open WhatsApp in new tab
      setTimeout(() => {
        const newWindow = window.open(whatsappURL, '_blank')
        if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
          console.log('⚠️ WhatsApp window blocked by popup blocker')
          alert('Please allow popups to open WhatsApp automatically, or manually message: +92 345 5644205')
        }
      }, 1000)
      
      // 4. Show success message
      console.log('🎉 Step 4: Showing success message')
      setIsSubmitted(true)
      
      // 5. Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: '',
          email: '',
          phone: '',
          packageType: '',
          travelDates: '',
          travelers: '',
          message: ''
        })
      }, 5000)

    } catch (error) {
      console.error('❌ Submission failed:', error)
      alert('There was an error. Please check console (F12) and contact +92 345 5644205 directly if needed.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleWhatsAppClick = () => {
    const phoneNumber = '+923455644205'
    const message = 'Hello! I am interested in booking a luxury travel experience with Northern Scapes.'
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank')
  }

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay()
  }

  const handleDateSelect = (day: number) => {
    const date = new Date(currentYear, currentMonth, day)
    const formattedDate = date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })
    
    setSelectedDate(formattedDate)
    setFormData({
      ...formData,
      travelDates: formattedDate
    })
    setShowDatePicker(false)
  }

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear(currentYear - 1)
    } else {
      setCurrentMonth(currentMonth - 1)
    }
  }

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear(currentYear + 1)
    } else {
      setCurrentMonth(currentMonth + 1)
    }
  }

  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear)
    const firstDay = getFirstDayOfMonth(currentMonth, currentYear)
    const daysArray = []

    for (let i = 0; i < firstDay; i++) {
      daysArray.push(<div key={`empty-${i}`} className="h-10 w-10"></div>)
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const isToday = new Date().getDate() === day && 
                     new Date().getMonth() === currentMonth && 
                     new Date().getFullYear() === currentYear
      
      const dateStr = `${currentYear}-${currentMonth + 1}-${day}`
      const isSelected = selectedDate === dateStr

      daysArray.push(
        <button
          key={day}
          type="button"
          onClick={() => handleDateSelect(day)}
          className={`h-10 w-10 rounded-lg flex items-center justify-center text-sm font-medium transition-all duration-200
            ${isToday ? 'bg-accent-100 dark:bg-accent-900 text-accent-700 dark:text-accent-300' : ''}
            ${isSelected ? 'bg-accent-600 text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white'}
            ${new Date(currentYear, currentMonth, day) < new Date() ? 'opacity-50 cursor-not-allowed' : ''}
          `}
          disabled={new Date(currentYear, currentMonth, day) < new Date()}
        >
          {day}
        </button>
      )
    }

    return daysArray
  }

  return (
    <div className="pt-20">
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
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center border border-gray-200 dark:border-gray-700 hover:border-accent-500 dark:hover:border-accent-500 transition-all duration-300 shadow-lg"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center shadow-lg">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{stat.number}</div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">{stat.text}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact-form" className="section-padding py-20 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="p-8 md:p-12 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-2xl"
          >
            <div className="mb-10">
              <div className="inline-flex items-center mb-4 px-5 py-2 rounded-full bg-accent-100 dark:bg-accent-900/30">
                <Calendar className="w-5 h-5 text-accent-600 dark:text-accent-400 mr-2" />
                <span className="text-accent-700 dark:text-accent-300 font-bold text-sm uppercase tracking-wider">
                  BOOKING FORM
                </span>
              </div>
              <h2 className="text-3xl font-heading font-bold text-gray-900 dark:text-white mb-4">
                Plan Your Luxury Escape
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg">
                Please provide your details and our luxury travel specialist will contact you within 24 hours 
                to begin crafting your bespoke experience.
              </p>
              <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <p className="text-blue-700 dark:text-blue-300 text-sm">
                  <strong>Note:</strong> After submitting, you'll receive:
                  <ul className="mt-2 space-y-1">
                    <li>✓ Confirmation email to your inbox</li>
                    <li>✓ PDF download of your inquiry details</li>
                    <li>✓ Direct WhatsApp message to our team</li>
                  </ul>
                </p>
              </div>
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
                    Inquiry Successfully Submitted!
                  </h3>
                  <p className="text-white/90 text-lg mb-6">
                    Your details have been sent to our team. You should receive:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-white/20 p-4 rounded-lg">
                      <Mail className="w-8 h-8 text-white mx-auto mb-2" />
                      <div className="text-white text-sm">Email Confirmation</div>
                    </div>
                    <div className="bg-white/20 p-4 rounded-lg">
                      <MessageCircle className="w-8 h-8 text-white mx-auto mb-2" />
                      <div className="text-white text-sm">WhatsApp Message</div>
                    </div>
                    <div className="bg-white/20 p-4 rounded-lg">
                      <Send className="w-8 h-8 text-white mx-auto mb-2" />
                      <div className="text-white text-sm">PDF Download</div>
                    </div>
                  </div>
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
                      <label className="block text-sm font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                        <User className="w-4 h-4 mr-2 text-accent-600 dark:text-accent-400" />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-300 placeholder-gray-500 dark:placeholder-gray-400"
                        placeholder="Enter your full name"
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
                        className="w-full px-4 py-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-300 placeholder-gray-500 dark:placeholder-gray-400"
                        placeholder="Enter your email address"
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
                        className="w-full px-4 py-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-300 placeholder-gray-500 dark:placeholder-gray-400"
                        placeholder="+92 345 5644205"
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
                        className="w-full px-4 py-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-300 appearance-none"
                      >
                        <option value="" className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">Select a package</option>
                        <option value="Gold Package" className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">Gold Package (From $1,500)</option>
                        <option value="Platinum Package" className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">Platinum Package (From $2,500)</option>
                        <option value="Elite Package" className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">Elite Package (From $3,500)</option>
                        <option value="Custom Experience" className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">Custom Experience</option>
                      </select>
                    </motion.div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <label className="block text-sm font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-accent-600 dark:text-accent-400" />
                        Travel Dates *
                      </label>
                      <div className="relative" ref={datePickerRef}>
                        <input
                          type="text"
                          name="travelDates"
                          value={formData.travelDates}
                          onChange={handleChange}
                          onClick={() => setShowDatePicker(!showDatePicker)}
                          readOnly
                          required
                          className="w-full px-4 py-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-300 cursor-pointer"
                          placeholder="Click to select dates"
                        />
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                          <Calendar className="w-5 h-5 text-gray-400 dark:text-gray-500" />
                        </div>

                        {showDatePicker && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            className="absolute z-50 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-2xl p-4 min-w-[280px]"
                          >
                            <div className="flex items-center justify-between mb-4">
                              <button
                                type="button"
                                onClick={handlePrevMonth}
                                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                              >
                                <ChevronLeft className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                              </button>
                              <div className="text-lg font-bold text-gray-900 dark:text-white">
                                {months[currentMonth]} {currentYear}
                              </div>
                              <button
                                type="button"
                                onClick={handleNextMonth}
                                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                              >
                                <ChevronRight className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                              </button>
                            </div>

                            <div className="grid grid-cols-7 gap-1 mb-2">
                              {days.map((day) => (
                                <div key={day} className="h-8 w-8 flex items-center justify-center text-sm font-medium text-gray-500 dark:text-gray-400">
                                  {day}
                                </div>
                              ))}
                            </div>

                            <div className="grid grid-cols-7 gap-1">
                              {renderCalendarDays()}
                            </div>

                            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                              <button
                                type="button"
                                onClick={() => {
                                  const today = new Date()
                                  handleDateSelect(today.getDate())
                                  setCurrentMonth(today.getMonth())
                                  setCurrentYear(today.getFullYear())
                                }}
                                className="w-full py-2 text-sm font-medium text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 transition-colors"
                              >
                                Select Today
                              </button>
                            </div>
                          </motion.div>
                        )}
                      </div>
                      <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        Select your preferred travel dates
                      </div>
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
                        className="w-full px-4 py-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-300 appearance-none"
                      >
                        <option value="" className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">Select number</option>
                        <option value="1 Traveler" className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">1 Traveler</option>
                        <option value="2 Travelers" className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">2 Travelers</option>
                        <option value="3-4 Travelers" className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">3-4 Travelers</option>
                        <option value="5-6 Travelers" className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">5-6 Travelers</option>
                        <option value="7+ Travelers" className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">7+ Travelers</option>
                      </select>
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <label className="block text-sm font-bold text-gray-900 dark:text-white mb-3">
                      Tell us about your dream journey *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      required
                      className="w-full px-4 py-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-300 resize-none placeholder-gray-500 dark:placeholder-gray-400"
                      placeholder="Share your travel preferences, special requirements, and any specific experiences you're interested in..."
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-gray-200 dark:border-gray-700 gap-6"
                  >
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full sm:w-auto bg-gradient-to-r from-accent-600 to-accent-700 hover:from-accent-700 hover:to-accent-800 disabled:opacity-50 disabled:cursor-not-allowed text-white px-12 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 inline-flex items-center justify-center group"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-3 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          Submit Inquiry
                          <Send className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                        </>
                      )}
                    </button>
                    
                    <div className="text-center sm:text-right">
                      <div className="flex items-center text-green-600 dark:text-green-400 font-bold justify-center sm:justify-end">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        <span>Email + WhatsApp + PDF</span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        All inquiries are confidential
                      </p>
                    </div>
                  </motion.div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-heading font-bold text-gray-900 dark:text-white mb-4">
                Contact Information
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Reach out to us through any of these channels
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center border border-gray-200 dark:border-gray-700 hover:border-accent-500 dark:hover:border-accent-500 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <MessageCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">WhatsApp</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Instant messaging for quick inquiries</p>
                <a
                  href="https://wa.me/923455644205"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-bold transition-colors duration-300"
                >
                  Message Now
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center border border-gray-200 dark:border-gray-700 hover:border-accent-500 dark:hover:border-accent-500 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <Mail className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Email</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Send detailed inquiries and proposals</p>
                <a
                  href="mailto:northernscapes512@gmail.com"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold transition-colors duration-300"
                >
                  Email Us
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center border border-gray-200 dark:border-gray-700 hover:border-accent-500 dark:hover:border-accent-500 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                  <Phone className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Phone Call</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Speak directly with our travel specialists</p>
                <a
                  href="tel:+923455644205"
                  className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-bold transition-colors duration-300"
                >
                  Call Now
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Add TypeScript declaration for EmailJS on window
declare global {
  interface Window {
    emailjs: {
      init: (publicKey: string) => void
      send: (
        serviceId: string,
        templateId: string,
        templateParams: Record<string, unknown>,
        publicKey: string
      ) => Promise<{ status: number; text: string }>
    }
  }
}