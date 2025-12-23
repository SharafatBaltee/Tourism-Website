'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

// Import only the icons that actually exist in lucide-react
import { 
  MapPin, Mountain, Clock, Users, Star, Calendar, 
  Navigation, Camera, Heart, Share2, Phone, Mail, 
  ChevronLeft, ChevronRight, Compass, Shield, Wind, Sun,
  Globe, BookOpen, Home, Utensils, Car, Wifi, Award,
  Sparkles, CheckCircle, Droplets, Thermometer, Eye,
  PhoneCall, MessageCircle, Map, ArrowRight,
  Trees, CloudSnow, Tent, Footprints, Flower,
  Snowflake, Sunrise, Moon,Map as Lake, Waves, Ship,
  Coffee, ShoppingBag, Umbrella
} from 'lucide-react'

export default function KashmirDetailPage() {
  const [currentImage, setCurrentImage] = useState(0)
  const [favorite, setFavorite] = useState(false)
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const destination = {
    name: 'Kashmir Valley',
    region: 'Jammu & Kashmir, India',
    description: 'Paradise on Earth with serene lakes, snow-capped peaks, and Mughal gardens.',
    longDescription: 'Kashmir Valley, often called "Paradise on Earth," is a breathtaking region nestled between the Great Himalayas and the Pir Panjal range. Known for its stunning landscapes, serene Dal Lake, magnificent Mughal gardens, and snow-capped mountains, Kashmir offers a perfect blend of natural beauty and cultural richness. From houseboat stays to snow adventures in Gulmarg, every moment in Kashmir is magical.',
    
    price: 2499,
    rating: 4.9,
    duration: '7-10 Days',
    bestSeason: 'April - October (Summer), December - March (Winter)',
    difficulty: 'Easy to Moderate',
    groupSize: '2-15 People',
    elevation: '1,600 - 2,700 meters',
    
    images: [
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80',
      'https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80',
      'https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80',
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80',
    ],
    
    history: {
      title: 'Historical Legacy',
      content: 'Kashmir has been a center of learning and culture for centuries, known as "Sharada Peeth" in ancient times. The region saw the glorious rule of the Mughals who developed beautiful gardens, followed by Afghan, Sikh, and Dogra rulers. Kashmir\'s rich heritage is reflected in its handicrafts, cuisine, and architectural marvels.',
      points: [
        'Known as "Sharada Peeth" - seat of learning in ancient times',
        'Mughal emperors developed famous gardens in 16th-17th centuries',
        'Center of Sanskrit learning and Buddhist scholarship',
        'Famous for Pashmina shawls and intricate handicrafts',
        'Unique blend of Hindu, Buddhist, and Islamic influences'
      ]
    },
    
    touristPoints: [
      {
        name: 'Dal Lake',
        description: 'Iconic lake with houseboats, shikaras, and floating gardens',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        distance: 'Heart of Srinagar',
        bestTime: 'April - October',
        category: 'Natural'
      },
      {
        name: 'Gulmarg',
        description: 'World-class skiing destination with gondola rides',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        distance: '52km from Srinagar',
        bestTime: 'December - March',
        category: 'Adventure'
      },
      {
        name: 'Pahalgam',
        description: 'Picturesque valley on Lidder River, base for Amarnath Yatra',
        image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        distance: '95km from Srinagar',
        bestTime: 'May - September',
        category: 'Natural'
      },
      {
        name: 'Shalimar Bagh',
        description: 'Magnificent Mughal garden built by Emperor Jahangir',
        image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        distance: '15km from Srinagar',
        bestTime: 'Spring and Autumn',
        category: 'Historical'
      },
      {
        name: 'Sonamarg',
        description: 'Meadow of Gold with glaciers and alpine flowers',
        image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        distance: '80km from Srinagar',
        bestTime: 'May - September',
        category: 'Natural'
      },
      {
        name: 'Betaab Valley',
        description: 'Lush green valley named after Bollywood film',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        distance: '15km from Pahalgam',
        bestTime: 'April - October',
        category: 'Natural'
      }
    ],
    
    climate: {
      summer: '15°C - 30°C (Pleasant with cool breezes)',
      winter: '-2°C - 10°C (Cold with heavy snowfall)',
      spring: '10°C - 25°C (Flowering season)',
      autumn: '10°C - 25°C (Clear skies, golden colors)',
      bestTime: 'April to October for sightseeing, December to March for snow'
    },
    
    accommodation: [
      {
        type: 'Houseboat',
        name: 'Heritage Houseboat Stay',
        rating: 4.7,
        price: '$120/night',
        features: ['On Dal Lake', 'Traditional Décor', 'Kashmiri Meals', 'Shikara Service']
      },
      {
        type: 'Heritage Hotel',
        name: 'Mughal Royal Retreat',
        rating: 4.8,
        price: '$150/night',
        features: ['Historic Building', 'Mughal Gardens', 'Spa Services', 'Fine Dining']
      },
      {
        type: 'Mountain Resort',
        name: 'Alpine Snow Resort',
        rating: 4.6,
        price: '$110/night',
        features: ['Ski-in/Ski-out', 'Fireplace Rooms', 'Hot Tub', 'Adventure Desk']
      }
    ],
    
    travelTips: [
      'Carry woolens even in summer for cool evenings',
      'Book houseboats in advance during peak season',
      'Try traditional Kashmiri wazwan cuisine',
      'Respect local customs and dress modestly',
      'Carry medication for altitude if going to high areas'
    ],
    
    inclusions: [
      'Accommodation in houseboat/hotel',
      'All meals including traditional Kashmiri cuisine',
      'Shikara ride on Dal Lake',
      'Local English-speaking guide',
      'All sightseeing and entry fees',
      'Gondola ride in Gulmarg',
      'Airport transfers and local transport'
    ],
    
    features: [
      { icon: Lake, text: 'Houseboat Stay', desc: 'Unique overnight stay on Dal Lake' },
      { icon: Mountain, text: 'Snow Adventures', desc: 'Skiing and snowboarding in Gulmarg' },
      { icon: Flower, text: 'Mughal Gardens', desc: 'Exquisite Persian-style gardens' },
      { icon: ShoppingBag, text: 'Handicrafts', desc: 'Pashmina shawls and carpets' }
    ]
  }

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % destination.images.length)
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + destination.images.length) % destination.images.length)

  const handleWhatsAppClick = () => {
    const phoneNumber = '+923001234567'
    const message = `Hello! I am interested in booking the ${destination.name} tour package.`
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          {destination.images.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImage ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(0.7)'
              }}
            />
          ))}
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/70 via-pink-900/50 to-rose-900/80"></div>
        
        <div className="absolute inset-0 flex items-center justify-between px-4 md:px-8">
          <button onClick={prevImage} className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/60 transition-all duration-300 z-10">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick={nextImage} className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/60 transition-all duration-300 z-10">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {destination.images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-8 h-2 rounded-full transition-all duration-300 ${
                currentImage === index ? 'bg-white w-12' : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
        
        <div className="relative h-full flex items-end">
          <div className="container mx-auto px-4 md:px-8 pb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white max-w-4xl"
            >
              <div className="inline-flex items-center mb-6 px-6 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <Flower className="w-5 h-5 text-pink-400 mr-3" />
                <span className="text-pink-300 font-bold tracking-wider uppercase text-sm">
                  PARADISE ON EARTH
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
                {destination.name}
              </h1>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-center text-xl">
                  <MapPin className="w-6 h-6 text-pink-400 mr-3" />
                  <span className="text-gray-200">{destination.region}</span>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="flex items-center bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-lg">
                    <Star className="w-5 h-5 text-yellow-400 fill-current mr-2" />
                    <span className="font-bold text-white">{destination.rating}/5.0</span>
                  </div>
                  
                  <div className="flex gap-3">
                    <button
                      onClick={() => setFavorite(!favorite)}
                      className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        favorite ? 'bg-red-500 text-white shadow-lg' : 'bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20'
                      }`}
                    >
                      <Heart className={`w-5 h-5 ${favorite ? 'fill-current' : ''}`} />
                    </button>
                    
                    <button className="w-11 h-11 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 flex items-center justify-center">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">${destination.price}</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Starting Price</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{destination.duration}</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Tour Duration</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{destination.bestSeason.split('(')[0]}</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Best Season</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{destination.groupSize}</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Group Size</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Content */}
            <div className="lg:w-2/3 space-y-12">
              {/* Overview Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center justify-between mb-10">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                      About {destination.name}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">Where every season paints a new masterpiece</p>
                  </div>
                  <div className="hidden md:flex items-center space-x-4">
                    <div className="text-right">
                      <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">${destination.price}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">per person</div>
                    </div>
                    <Link
                      href="/contact"
                      className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  <div>
                    <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8">
                      {destination.longDescription}
                    </p>
                    
                    <div className="space-y-5">
                      {destination.features.map((feature, index) => (
                        <div key={index} className="flex items-start p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
                          <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mr-5 flex-shrink-0">
                            <feature.icon className="w-6 h-6 text-purple-600" />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 dark:text-white mb-1">{feature.text}</h4>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">{feature.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-purple-900 to-pink-800 rounded-xl p-6 text-white">
                      <h3 className="text-xl font-bold mb-4">Kashmiri Experience</h3>
                      <ul className="space-y-3">
                        <li className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-pink-400 mr-3" />
                          <span>Romantic houseboat stay on Dal Lake</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-pink-400 mr-3" />
                          <span>Gondola ride to Apharwat Peak in Gulmarg</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-pink-400 mr-3" />
                          <span>Traditional Kashmiri wazwan feast</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-pink-400 mr-3" />
                          <span>Shikara ride through floating gardens</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6">
                      <h3 className="font-bold text-gray-900 dark:text-white mb-4">Quick Facts</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                          <span className="text-gray-600 dark:text-gray-400">Elevation Range</span>
                          <span className="font-semibold text-gray-900 dark:text-white">{destination.elevation}</span>
                        </div>
                        <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                          <span className="text-gray-600 dark:text-gray-400">Best Time</span>
                          <span className="font-semibold text-purple-600 dark:text-purple-400">{destination.bestSeason.split('(')[0]}</span>
                        </div>
                        <div className="flex justify-between items-center py-3">
                          <span className="text-gray-600 dark:text-gray-400">Difficulty</span>
                          <span className="font-semibold text-gray-900 dark:text-white">{destination.difficulty}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* History Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center mb-8">
                  <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center mr-6">
                    <BookOpen className="w-7 h-7 text-purple-600" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Historical Legacy</h2>
                    <p className="text-gray-600 dark:text-gray-400">From Mughal gardens to ancient learning centers</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  <div>
                    <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8">
                      {destination.history.content}
                    </p>
                    
                    <div className="bg-gradient-to-r from-purple-500/10 to-pink-600/10 rounded-xl p-6">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-4">Mughal Gardens</h4>
                      <p className="text-gray-700 dark:text-gray-300">
                        Kashmir\'s Mughal Gardens - Shalimar Bagh, Nishat Bagh, and Chashme Shahi - 
                        represent the pinnacle of Persian garden design. Built by Emperor Jahangir for his wife Nur Jahan, 
                        these terraced gardens with flowing water channels reflect paradise as described in the Quran.
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-5">
                    {destination.history.points.map((point: string, index: number) => (
                      <div key={index} className="flex items-start p-5 bg-gray-50 dark:bg-gray-900 rounded-xl">
                        <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center mr-4 flex-shrink-0">
                          <span className="text-purple-600 font-bold text-lg">{index + 1}</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Historical Note</h4>
                          <p className="text-gray-700 dark:text-gray-300">{point}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Tourist Attractions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center justify-between mb-10">
                  <div className="flex items-center">
                    <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center mr-6">
                      <Camera className="w-7 h-7 text-purple-600" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Valley Wonders</h2>
                      <p className="text-gray-600 dark:text-gray-400">Lakes, gardens, and snow peaks</p>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                  {destination.touristPoints.map((point: any, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -8 }}
                      className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:border-purple-500 shadow-lg hover:shadow-2xl transition-all duration-300"
                    >
                      <div className="h-56 relative overflow-hidden">
                        <div 
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                          style={{ backgroundImage: `url(${point.image})` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                        
                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1.5 bg-black/70 backdrop-blur-sm text-white text-xs font-bold rounded-lg">
                            {point.category}
                          </span>
                        </div>
                        
                        <div className="absolute bottom-4 left-4">
                          <h3 className="text-xl font-bold text-white mb-2">{point.name}</h3>
                          <div className="flex items-center text-white/90">
                            <Navigation className="w-4 h-4 mr-2" />
                            <span className="text-sm">{point.distance}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <p className="text-gray-700 dark:text-gray-300 text-sm mb-5 leading-relaxed">
                          {point.description}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-gray-600 dark:text-gray-400">
                            <Clock className="w-4 h-4 mr-2" />
                            <span className="text-sm">{point.bestTime}</span>
                          </div>
                          <button className="text-purple-600 dark:text-purple-400 font-medium text-sm hover:text-purple-700 dark:hover:text-purple-300 flex items-center">
                            More Info
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Climate & Travel Tips */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Climate Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-8 border border-purple-200 dark:border-purple-800 shadow-xl"
                >
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mr-5">
                      <Thermometer className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Seasonal Beauty</h3>
                      <p className="text-gray-600 dark:text-gray-400">Year-round destination</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 bg-white/50 dark:bg-white/10 rounded-xl">
                      <div className="flex items-center">
                        <Sun className="w-5 h-5 text-orange-500 mr-3" />
                        <div>
                          <div className="font-semibold text-gray-900 dark:text-white">Summer</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">April - October</div>
                        </div>
                      </div>
                      <div className="text-lg font-bold text-purple-600 dark:text-purple-400">{destination.climate.summer}</div>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-white/50 dark:bg-white/10 rounded-xl">
                      <div className="flex items-center">
                        <Snowflake className="w-5 h-5 text-blue-400 mr-3" />
                        <div>
                          <div className="font-semibold text-gray-900 dark:text-white">Winter</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">December - March</div>
                        </div>
                      </div>
                      <div className="text-lg font-bold text-purple-600 dark:text-purple-400">{destination.climate.winter}</div>
                    </div>
                    
                    <div className="p-4 bg-white/70 dark:bg-white/20 rounded-xl">
                      <div className="flex items-center mb-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <div className="font-bold text-gray-900 dark:text-white">Dual Season Destination</div>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">{destination.climate.bestTime}</p>
                    </div>
                  </div>
                </motion.div>

                {/* Travel Tips Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 rounded-2xl p-8 border border-pink-200 dark:border-pink-800 shadow-xl"
                >
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center mr-5">
                      <Shield className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Travel Essentials</h3>
                      <p className="text-gray-600 dark:text-gray-400">Tips for Kashmir travel</p>
                    </div>
                  </div>
                  
                  <div className="space-y-5">
                    {destination.travelTips.map((tip: string, index: number) => (
                      <div key={index} className="flex items-start p-4 bg-white/50 dark:bg-white/10 rounded-xl">
                        <div className="w-8 h-8 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center mr-4 flex-shrink-0">
                          <span className="text-pink-600 dark:text-pink-400 font-bold">{index + 1}</span>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300">{tip}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className={`lg:w-1/3 ${isSticky ? 'sticky top-6' : ''} transition-all duration-300`}>
              <div className="space-y-8">
                {/* Booking Card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-gradient-to-br from-purple-600 to-pink-700 rounded-2xl p-8 text-white shadow-2xl"
                >
                  <div className="text-center mb-10">
                    <div className="text-5xl font-bold mb-3">${destination.price}</div>
                    <p className="text-white/90">Romantic paradise experience</p>
                    <div className="mt-4 inline-flex items-center bg-white/20 px-4 py-2 rounded-full">
                      <Ship className="w-5 h-5 text-yellow-400 mr-2" />
                      <span className="font-bold">Houseboat Stay Included</span>
                    </div>
                  </div>
                  
                  <div className="space-y-5 mb-10">
                    <div className="flex items-center justify-between py-3 border-b border-white/20">
                      <span className="text-white/90">Duration</span>
                      <span className="font-semibold">{destination.duration}</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-white/20">
                      <span className="text-white/90">Difficulty</span>
                      <span className="font-semibold">{destination.difficulty}</span>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-white/20">
                      <span className="text-white/90">Best Time</span>
                      <span className="font-semibold">{destination.bestSeason.split('(')[0]}</span>
                    </div>
                    <div className="flex items-center justify-between py-3">
                      <span className="text-white/90">Group Size</span>
                      <span className="font-semibold">{destination.groupSize}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <Link
                      href="/contact"
                      className="block w-full bg-white text-purple-700 hover:bg-gray-100 text-center py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Book Paradise Tour
                    </Link>
                    
                    <button
                      onClick={handleWhatsAppClick}
                      className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                    >
                      <MessageCircle className="w-5 h-5 mr-3" />
                      WhatsApp Inquiry
                    </button>
                    
                    <div className="text-center pt-4 border-t border-white/20">
                      <p className="text-white/80 text-sm">Houseboat • Gondola rides • Cultural meals</p>
                    </div>
                  </div>
                </motion.div>

                {/* What's Included */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mr-5">
                      <Sparkles className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">What's Included</h3>
                      <p className="text-gray-600 dark:text-gray-400">Complete Kashmir package</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {destination.inclusions.map((item: string, index: number) => (
                      <div key={index} className="flex items-center p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
                        <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-4">
                          <CheckCircle className="w-4 h-4 text-purple-500" />
                        </div>
                        <span className="text-gray-800 dark:text-gray-300 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Accommodation */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center mr-5">
                      <Home className="w-6 h-6 text-pink-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">Unique Stays</h3>
                      <p className="text-gray-600 dark:text-gray-400">Iconic Kashmir accommodation</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    {destination.accommodation.map((hotel: any, index: number) => (
                      <div key={index} className="p-5 bg-gray-50 dark:bg-gray-900 rounded-xl">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h4 className="font-bold text-gray-900 dark:text-white mb-1">{hotel.name}</h4>
                            <span className="text-sm text-purple-600 dark:text-purple-400 font-medium">{hotel.type}</span>
                          </div>
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                            <span className="font-bold">{hotel.rating}</span>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {hotel.features.map((feature: string, idx: number) => (
                            <span key={idx} className="px-3 py-1.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-lg">
                              {feature}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{hotel.price}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">per night</div>
                          </div>
                          <button className="text-sm text-purple-600 dark:text-purple-400 font-medium hover:text-purple-700 dark:hover:text-purple-300">
                            View Details
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-pink-900">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Experience Paradise on Earth
              </h2>
              <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
                From romantic houseboats on Dal Lake to thrilling ski slopes in Gulmarg, 
                Kashmir offers unforgettable experiences in every season. Let us craft your perfect Kashmir getaway.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/contact"
                  className="bg-pink-600 hover:bg-pink-700 text-white px-12 py-5 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center justify-center"
                >
                  Book Kashmir Tour
                  <ArrowRight className="w-5 h-5 ml-3" />
                </Link>
                <Link
                  href="/destinations"
                  className="bg-white/10 hover:bg-white/20 border-2 border-white/30 text-white px-12 py-5 rounded-xl font-bold text-lg backdrop-blur-sm transition-all duration-300 inline-flex items-center justify-center"
                >
                  More Romantic Getaways
                  <ArrowRight className="w-5 h-5 ml-3" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}