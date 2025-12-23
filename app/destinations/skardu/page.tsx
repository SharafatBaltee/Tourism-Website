'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  MapPin, Mountain, Clock, Users, Star, Calendar, 
  Navigation, Camera, Heart, Share2, Phone, Mail, 
  ChevronLeft, ChevronRight, Compass, Shield, Wind, Sun,
  Globe, BookOpen, Home, Utensils, Car, Wifi, Award,
  Sparkles, CheckCircle, WindIcon as Umbrella,
  Droplets, Thermometer, Eye, Globe2,
  PhoneCall, MessageCircle, Map, ArrowRight,
  Trees, CloudSnow, Waves, MountainSnow
} from 'lucide-react'
import Link from 'next/link'

export default function SkarduDetailPage() {
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
    name: 'Skardu',
    region: 'Gilgit-Baltistan, Pakistan',
    description: 'Gateway to the world\'s highest peaks including K2, surrounded by breathtaking landscapes.',
    longDescription: 'Skardu is a breathtaking city situated at an altitude of 2,500 meters in the Gilgit-Baltistan region. Serving as the gateway to the mighty Karakoram Range, it offers access to some of the world\'s highest peaks including K2, Gasherbrum, and Broad Peak. Surrounded by majestic mountains, serene lakes, and ancient Buddhist heritage, Skardu is a paradise for trekkers, mountaineers, and nature lovers.',
    
    price: 2899,
    rating: 4.8,
    duration: '8-12 Days',
    bestSeason: 'May - September',
    difficulty: 'Moderate to Challenging',
    groupSize: '2-8 People',
    elevation: '2,500 meters',
    
    images: [
      'https://images.unsplash.com/photo-1580137189272-c9379f8864fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80',
      'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80',
      'https://images.unsplash.com/photo-1521334884684-d80222895322?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80',
    ],
    
    history: {
      title: 'Historical Legacy',
      content: 'Skardu has been an important trading post on the Silk Road for centuries. It was part of the Tibetan Empire and later came under the rule of the Maqpon dynasty, which left behind magnificent forts and palaces. The region has deep Buddhist roots with ancient rock carvings and monasteries dating back to the 8th century.',
      points: [
        'Ancient Silk Route trading center since 500 AD',
        'Part of Tibetan Empire in 8th century',
        'Ruled by Maqpon dynasty for over 500 years',
        'Strategic location during British colonial rule',
        'Home to ancient Buddhist rock carvings'
      ]
    },
    
    touristPoints: [
      {
        name: 'Shangrila Resort',
        description: 'Beautiful resort complex with lake and gardens, often called "Heaven on Earth"',
        image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        distance: '5km from Skardu',
        bestTime: 'All Day',
        category: 'Resort'
      },
      {
        name: 'Kachura Lakes',
        description: 'Upper and Lower Kachura lakes with stunning turquoise waters and mountain reflections',
        image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        distance: '32km from Skardu',
        bestTime: 'Morning',
        category: 'Natural'
      },
      {
        name: 'Deosai Plains',
        description: 'Second highest plateau in the world at 4,114m, known as "Land of Giants"',
        image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        distance: '30km from Skardu',
        bestTime: 'June - September',
        category: 'Adventure'
      },
      {
        name: 'Satpara Lake',
        description: 'Crystal clear lake offering boating and stunning views of surrounding peaks',
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        distance: '8km from Skardu',
        bestTime: 'Afternoon',
        category: 'Natural'
      },
      {
        name: 'K2 Museum',
        description: 'Museum dedicated to the history of K2 expeditions and local Balti culture',
        image: 'https://images.unsplash.com/photo-1521334884684-d80222895322?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        distance: 'In Skardu city',
        bestTime: '10AM - 4PM',
        category: 'Cultural'
      },
      {
        name: 'Buddha Rock',
        description: 'Ancient Buddhist rock carving dating back to 8th century',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        distance: '15km from Skardu',
        bestTime: 'Morning',
        category: 'Historical'
      }
    ],
    
    climate: {
      summer: '10°C - 25°C (Cool and pleasant)',
      winter: '-15°C - 5°C (Very cold with heavy snow)',
      monsoon: 'Low rainfall, dry climate',
      bestTime: 'May to September (Spring to Early Autumn)'
    },
    
    accommodation: [
      {
        type: 'Luxury Resort',
        name: 'PC Skardu',
        rating: 4.7,
        price: '$180/night',
        features: ['Mountain View', 'Restaurant', 'Heating', 'WiFi']
      },
      {
        type: 'Boutique Hotel',
        name: 'Baltoro Hotel',
        rating: 4.5,
        price: '$100/night',
        features: ['Central Location', 'Local Cuisine', 'Tour Assistance', 'Breakfast']
      },
      {
        type: 'Adventure Camp',
        name: 'K2 Base Camp',
        rating: 4.6,
        price: '$150/night',
        features: ['Mountain Views', 'Guided Treks', 'Campfire', 'Local Guides']
      }
    ],
    
    travelTips: [
      'Prepare for high altitude - allow 2-3 days for acclimatization',
      'Carry proper trekking gear including warm clothing and waterproof jackets',
      'Hire experienced local guides for mountain expeditions',
      'Stay hydrated and drink plenty of water at high altitudes',
      'Respect local customs and seek permission before photographing people'
    ],
    
    inclusions: [
      'All meals including packed lunches for treks',
      'Luxury accommodation with heating facilities',
      '4x4 private transportation for mountain roads',
      'Experienced mountain guide and porter services',
      'All necessary trekking permits and fees',
      'Comprehensive travel and medical insurance',
      'Oxygen cylinders for high altitude areas'
    ],
    
    features: [
      { icon: MountainSnow, text: 'Gateway to K2', desc: 'Access to world\'s second highest peak' },
      { icon: Trees, text: 'Deosai National Park', desc: 'Home to Himalayan brown bears' },
      { icon: Waves, text: 'Crystal Clear Lakes', desc: 'Multiple glacial lakes and rivers' },
      { icon: CloudSnow, text: 'High Altitude Trekking', desc: 'World-class trekking routes' }
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
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
        
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
                <MountainSnow className="w-5 h-5 text-accent-400 mr-3" />
                <span className="text-accent-300 font-bold tracking-wider uppercase text-sm">
                  ADVENTURE DESTINATION
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-4 leading-tight">
                {destination.name}
              </h1>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-center text-xl">
                  <MapPin className="w-6 h-6 text-accent-400 mr-3" />
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
                    <p className="text-gray-600 dark:text-gray-400">Gateway to the world\'s highest peaks</p>
                  </div>
                  <div className="hidden md:flex items-center space-x-4">
                    <div className="text-right">
                      <div className="text-2xl font-bold text-accent-600 dark:text-accent-400">${destination.price}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">per person</div>
                    </div>
                    <Link
                      href="/contact"
                      className="bg-accent-600 hover:bg-accent-700 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300"
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
                          <div className="w-12 h-12 rounded-lg bg-accent-500/10 flex items-center justify-center mr-5 flex-shrink-0">
                            <feature.icon className="w-6 h-6 text-accent-600" />
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
                    <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl p-6 text-white">
                      <h3 className="text-xl font-bold mb-4">Adventure Highlights</h3>
                      <ul className="space-y-3">
                        <li className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                          <span>K2 Base Camp trekking</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                          <span>Deosai Plains wildlife safari</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                          <span>Lake fishing and boating</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                          <span>Mountain photography tours</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6">
                      <h3 className="font-bold text-gray-900 dark:text-white mb-4">Quick Facts</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                          <span className="text-gray-600 dark:text-gray-400">Elevation</span>
                          <span className="font-semibold text-gray-900 dark:text-white">{destination.elevation}</span>
                        </div>
                        <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                          <span className="text-gray-600 dark:text-gray-400">Best Time</span>
                          <span className="font-semibold text-accent-600 dark:text-accent-400">{destination.bestSeason}</span>
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
                  <div className="w-14 h-14 rounded-xl bg-accent-500/10 flex items-center justify-center mr-6">
                    <Compass className="w-7 h-7 text-accent-600" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Historical Legacy</h2>
                    <p className="text-gray-600 dark:text-gray-400">Centuries of cultural heritage</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  <div>
                    <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8">
                      {destination.history.content}
                    </p>
                    
                    <div className="bg-gradient-to-r from-blue-500/10 to-cyan-600/10 rounded-xl p-6">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-4">Historical Significance</h4>
                      <p className="text-gray-700 dark:text-gray-300">
                        Skardu was once the capital of the ancient kingdom of Baltistan and played a crucial role 
                        in the Silk Road trade. The region\'s strategic location made it a melting pot of cultures, 
                        religions, and civilizations.
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-5">
                    {destination.history.points.map((point: string, index: number) => (
                      <div key={index} className="flex items-start p-5 bg-gray-50 dark:bg-gray-900 rounded-xl">
                        <div className="w-10 h-10 rounded-full bg-accent-500/20 flex items-center justify-center mr-4 flex-shrink-0">
                          <span className="text-accent-600 font-bold text-lg">{index + 1}</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Historical Fact</h4>
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
                    <div className="w-14 h-14 rounded-xl bg-accent-500/10 flex items-center justify-center mr-6">
                      <Camera className="w-7 h-7 text-accent-600" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Top Attractions</h2>
                      <p className="text-gray-600 dark:text-gray-400">Must-visit spots in {destination.name}</p>
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
                      className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:border-accent-500 shadow-lg hover:shadow-2xl transition-all duration-300"
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
                          <button className="text-accent-600 dark:text-accent-400 font-medium text-sm hover:text-accent-700 dark:hover:text-accent-300 flex items-center">
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
                  className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800 shadow-xl"
                >
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mr-5">
                      <Thermometer className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Climate Guide</h3>
                      <p className="text-gray-600 dark:text-gray-400">Best time for mountain adventures</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 bg-white/50 dark:bg-white/10 rounded-xl">
                      <div className="flex items-center">
                        <Sun className="w-5 h-5 text-orange-500 mr-3" />
                        <div>
                          <div className="font-semibold text-gray-900 dark:text-white">Summer</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">May - September</div>
                        </div>
                      </div>
                      <div className="text-lg font-bold text-blue-600 dark:text-blue-400">{destination.climate.summer}</div>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-white/50 dark:bg-white/10 rounded-xl">
                      <div className="flex items-center">
                        <CloudSnow className="w-5 h-5 text-blue-500 mr-3" />
                        <div>
                          <div className="font-semibold text-gray-900 dark:text-white">Winter</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">October - April</div>
                        </div>
                      </div>
                      <div className="text-lg font-bold text-blue-600 dark:text-blue-400">{destination.climate.winter}</div>
                    </div>
                    
                    <div className="p-4 bg-white/70 dark:bg-white/20 rounded-xl">
                      <div className="flex items-center mb-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <div className="font-bold text-gray-900 dark:text-white">Adventure Season</div>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">{destination.climate.bestTime} is ideal for trekking and mountain expeditions</p>
                    </div>
                  </div>
                </motion.div>

                {/* Travel Tips Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 rounded-2xl p-8 border border-emerald-200 dark:border-emerald-800 shadow-xl"
                >
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mr-5">
                      <Shield className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Mountain Safety</h3>
                      <p className="text-gray-600 dark:text-gray-400">Essential tips for high altitude</p>
                    </div>
                  </div>
                  
                  <div className="space-y-5">
                    {destination.travelTips.map((tip: string, index: number) => (
                      <div key={index} className="flex items-start p-4 bg-white/50 dark:bg-white/10 rounded-xl">
                        <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mr-4 flex-shrink-0">
                          <span className="text-emerald-600 dark:text-emerald-400 font-bold">{index + 1}</span>
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
                  className="bg-gradient-to-br from-blue-600 to-cyan-700 rounded-2xl p-8 text-white shadow-2xl"
                >
                  <div className="text-center mb-10">
                    <div className="text-5xl font-bold mb-3">${destination.price}</div>
                    <p className="text-white/90">Premium adventure package</p>
                    <div className="mt-4 inline-flex items-center bg-white/20 px-4 py-2 rounded-full">
                      <MountainSnow className="w-5 h-5 text-yellow-400 mr-2" />
                      <span className="font-bold">K2 Access Included</span>
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
                      <span className="font-semibold">{destination.bestSeason}</span>
                    </div>
                    <div className="flex items-center justify-between py-3">
                      <span className="text-white/90">Group Size</span>
                      <span className="font-semibold">{destination.groupSize}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <Link
                      href="/contact"
                      className="block w-full bg-white text-blue-700 hover:bg-gray-100 text-center py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Book Adventure
                    </Link>
                    
                    <button
                      onClick={handleWhatsAppClick}
                      className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                    >
                      <MessageCircle className="w-5 h-5 mr-3" />
                      WhatsApp Inquiry
                    </button>
                    
                    <div className="text-center pt-4 border-t border-white/20">
                      <p className="text-white/80 text-sm">Expert guides • Safety equipment • Medical support</p>
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
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mr-5">
                      <Sparkles className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">What's Included</h3>
                      <p className="text-gray-600 dark:text-gray-400">Complete adventure package</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {destination.inclusions.map((item: string, index: number) => (
                      <div key={index} className="flex items-center p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
                        <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-4">
                          <CheckCircle className="w-4 h-4 text-green-500" />
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
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mr-5">
                      <Home className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">Accommodation</h3>
                      <p className="text-gray-600 dark:text-gray-400">Comfort in the mountains</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    {destination.accommodation.map((hotel: any, index: number) => (
                      <div key={index} className="p-5 bg-gray-50 dark:bg-gray-900 rounded-xl">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h4 className="font-bold text-gray-900 dark:text-white mb-1">{hotel.name}</h4>
                            <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">{hotel.type}</span>
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
                            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{hotel.price}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">per night</div>
                          </div>
                          <button className="text-sm text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300">
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
      <section className="py-20 bg-gradient-to-r from-blue-900 to-cyan-900">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Conquer the Karakoram with Us
              </h2>
              <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
                Experience the thrill of standing in the shadow of K2. Our expert mountaineering team will guide you 
                through the world\'s most spectacular mountain landscapes with safety and comfort.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/contact"
                  className="bg-accent-600 hover:bg-accent-700 text-white px-12 py-5 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center justify-center"
                >
                  Start Your Adventure
                  <ArrowRight className="w-5 h-5 ml-3" />
                </Link>
                <Link
                  href="/destinations"
                  className="bg-white/10 hover:bg-white/20 border-2 border-white/30 text-white px-12 py-5 rounded-xl font-bold text-lg backdrop-blur-sm transition-all duration-300 inline-flex items-center justify-center"
                >
                  More Destinations
                  <Globe2 className="w-5 h-5 ml-3" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}