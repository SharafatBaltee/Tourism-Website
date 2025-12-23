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
  Trees, CloudSnow, Tent, Footprints, Castle,
  Flower, Snowflake, Sunrise, Moon, MountainSnow
} from 'lucide-react'

export default function ChitralDetailPage() {
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
    name: 'Chitral Valley',
    region: 'Khyber Pakhtunkhwa, Pakistan',
    description: 'Land of Kalash culture, majestic mountains, and ancient traditions.',
    longDescription: 'Chitral Valley is a stunning mountainous region in northern Pakistan, known for its unique Kalash culture, towering peaks, and pristine natural beauty. Home to the 7,708-meter-high Tirich Mir mountain, the valley offers a blend of cultural richness and adventure tourism. The Kalash people, with their distinct traditions and colorful festivals, add a unique cultural dimension to this breathtaking landscape.',
    
    price: 1899,
    rating: 4.8,
    duration: '5-7 Days',
    bestSeason: 'May - October',
    difficulty: 'Moderate',
    groupSize: '2-12 People',
    elevation: '1,500 - 4,500 meters',
    
    images: [
      'https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80',
      'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80',
      'https://images.unsplash.com/photo-1518432031355-db78608c8a90?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80',
      'https://images.unsplash.com/photo-1525811902-f2342640856e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80',
    ],
    
    history: {
      title: 'Cultural Heritage',
      content: 'Chitral has a rich history dating back over 2,000 years, with influences from Central Asian, Persian, and Indian civilizations. The region was ruled by the Mehtar dynasty for over 400 years and is home to the unique Kalash people who have maintained their ancient polytheistic religion and customs.',
      points: [
        'Home to the ancient Kalash people for over 2,000 years',
        'Ruled by the Mehtar dynasty from 1560 to 1969',
        'Strategic location on ancient Silk Road routes',
        'Unique cultural blend of Central Asian and South Asian traditions',
        'Known for traditional music and polo festivals'
      ]
    },
    
    touristPoints: [
      {
        name: 'Kalash Valley',
        description: 'Home to the unique Kalash people with ancient polytheistic traditions',
        image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        distance: '40km from Chitral Town',
        bestTime: 'Festival seasons',
        category: 'Cultural'
      },
      {
        name: 'Tirich Mir',
        description: 'Highest peak of the Hindu Kush range at 7,708 meters',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        distance: '45km from Chitral',
        bestTime: 'July - September',
        category: 'Adventure'
      },
      {
        name: 'Chitral Fort',
        description: 'Historic fort and palace of the former Mehtar rulers',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        distance: 'Within Chitral Town',
        bestTime: 'All Day',
        category: 'Historical'
      },
      {
        name: 'Shandur Pass',
        description: 'World\'s highest polo ground at 3,700 meters',
        image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        distance: '150km from Chitral',
        bestTime: 'July for Polo Festival',
        category: 'Event'
      },
      {
        name: 'Garam Chashma',
        description: 'Natural hot springs with therapeutic properties',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        distance: '45km from Chitral',
        bestTime: 'Winter months',
        category: 'Natural'
      },
      {
        name: 'Bumburet Valley',
        description: 'Largest Kalash valley with traditional villages',
        image: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        distance: '40km from Chitral',
        bestTime: 'May - October',
        category: 'Cultural'
      }
    ],
    
    climate: {
      summer: '15°C - 30°C (Pleasant during day, cool at night)',
      winter: '-10°C - 10°C (Cold with heavy snow in mountains)',
      spring: '10°C - 25°C (Best for flowers and greenery)',
      bestTime: 'May to October for accessibility and pleasant weather'
    },
    
    accommodation: [
      {
        type: 'Heritage Hotel',
        name: 'Chitral Mountain Lodge',
        rating: 4.5,
        price: '$70/night',
        features: ['Traditional Architecture', 'Mountain Views', 'Local Cuisine', 'Cultural Shows']
      },
      {
        type: 'Kalash Homestay',
        name: 'Kalash Traditional Stay',
        rating: 4.6,
        price: '$45/night',
        features: ['Cultural Immersion', 'Home-cooked Meals', 'Local Guides', 'Traditional Music']
      },
      {
        type: 'Boutique Hotel',
        name: 'Hindu Kush Retreat',
        rating: 4.4,
        price: '$90/night',
        features: ['Modern Amenities', 'Spa Services', 'Restaurant', 'Tour Desk']
      }
    ],
    
    travelTips: [
      'Respect local Kalash customs and traditions - ask before taking photos',
      'Carry warm clothing even in summer due to high altitude areas',
      'Plan around major festivals like Chilimjusht, Uchal, and Choimus',
      'Obtain necessary permits for restricted areas in advance',
      'Hire local guides for mountain treks and cultural tours'
    ],
    
    inclusions: [
      'All accommodation with breakfast',
      'Local transport including airport transfers',
      'English-speaking local guide',
      'Cultural performances and entry fees',
      'Permits for Kalash valleys',
      'All meals during village stays',
      'Emergency support and first aid'
    ],
    
    features: [
      { icon: Castle, text: 'Kalash Culture', desc: 'Unique ancient traditions and festivals' },
      { icon: MountainSnow, text: 'Hindu Kush Peaks', desc: 'Tirich Mir and other high mountains' },
      { icon: Flower, text: 'Natural Beauty', desc: 'Alpine meadows and crystal rivers' },
      { icon: Map, text: 'Adventure Routes', desc: 'Trekking and mountaineering trails' }
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
        
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-purple-900/50 to-indigo-900/80"></div>
        
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
                <Castle className="w-5 h-5 text-blue-400 mr-3" />
                <span className="text-blue-300 font-bold tracking-wider uppercase text-sm">
                  CULTURAL ADVENTURE
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
                {destination.name}
              </h1>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-center text-xl">
                  <MapPin className="w-6 h-6 text-blue-400 mr-3" />
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
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">${destination.price}</div>
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
                    <p className="text-gray-600 dark:text-gray-400">Where mountains meet ancient cultures</p>
                  </div>
                  <div className="hidden md:flex items-center space-x-4">
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">${destination.price}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">per person</div>
                    </div>
                    <Link
                      href="/contact"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300"
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
                          <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mr-5 flex-shrink-0">
                            <feature.icon className="w-6 h-6 text-blue-600" />
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
                    <div className="bg-gradient-to-br from-blue-900 to-indigo-800 rounded-xl p-6 text-white">
                      <h3 className="text-xl font-bold mb-4">Cultural Experience</h3>
                      <ul className="space-y-3">
                        <li className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                          <span>Kalash cultural immersion and festivals</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                          <span>Traditional music and dance performances</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                          <span>Visit to historic Chitral Fort</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                          <span>Local handicraft workshops</span>
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
                          <span className="font-semibold text-blue-600 dark:text-blue-400">{destination.bestSeason}</span>
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
                  <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mr-6">
                    <BookOpen className="w-7 h-7 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Cultural Heritage</h2>
                    <p className="text-gray-600 dark:text-gray-400">Ancient traditions of the Kalash people</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  <div>
                    <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8">
                      {destination.history.content}
                    </p>
                    
                    <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-xl p-6">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-4">Kalash Festivals</h4>
                      <p className="text-gray-700 dark:text-gray-300">
                        The Kalash celebrate three major festivals each year: Chilimjusht (spring), Uchal (summer), 
                        and Choimus (winter). These colorful events feature traditional music, dancing, and rituals 
                        that have been preserved for centuries.
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-5">
                    {destination.history.points.map((point: string, index: number) => (
                      <div key={index} className="flex items-start p-5 bg-gray-50 dark:bg-gray-900 rounded-xl">
                        <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-4 flex-shrink-0">
                          <span className="text-blue-600 font-bold text-lg">{index + 1}</span>
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
                    <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mr-6">
                      <Camera className="w-7 h-7 text-blue-600" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Valley Wonders</h2>
                      <p className="text-gray-600 dark:text-gray-400">Cultural and natural attractions</p>
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
                      className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:border-blue-500 shadow-lg hover:shadow-2xl transition-all duration-300"
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
                          <button className="text-blue-600 dark:text-blue-400 font-medium text-sm hover:text-blue-700 dark:hover:text-blue-300 flex items-center">
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
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800 shadow-xl"
                >
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mr-5">
                      <Thermometer className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Mountain Climate</h3>
                      <p className="text-gray-600 dark:text-gray-400">Seasonal weather patterns</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 bg-white/50 dark:bg-white/10 rounded-xl">
                      <div className="flex items-center">
                        <Sun className="w-5 h-5 text-orange-500 mr-3" />
                        <div>
                          <div className="font-semibold text-gray-900 dark:text-white">Summer</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">May - October</div>
                        </div>
                      </div>
                      <div className="text-lg font-bold text-blue-600 dark:text-blue-400">{destination.climate.summer}</div>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-white/50 dark:bg-white/10 rounded-xl">
                      <div className="flex items-center">
                        <Snowflake className="w-5 h-5 text-blue-400 mr-3" />
                        <div>
                          <div className="font-semibold text-gray-900 dark:text-white">Winter</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">November - April</div>
                        </div>
                      </div>
                      <div className="text-lg font-bold text-blue-600 dark:text-blue-400">{destination.climate.winter}</div>
                    </div>
                    
                    <div className="p-4 bg-white/70 dark:bg-white/20 rounded-xl">
                      <div className="flex items-center mb-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <div className="font-bold text-gray-900 dark:text-white">Best Cultural Time</div>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">{destination.climate.bestTime} for festivals and mountain access</p>
                    </div>
                  </div>
                </motion.div>

                {/* Travel Tips Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-8 border border-purple-200 dark:border-purple-800 shadow-xl"
                >
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mr-5">
                      <Shield className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Cultural Sensitivity</h3>
                      <p className="text-gray-600 dark:text-gray-400">Essential cultural tips</p>
                    </div>
                  </div>
                  
                  <div className="space-y-5">
                    {destination.travelTips.map((tip: string, index: number) => (
                      <div key={index} className="flex items-start p-4 bg-white/50 dark:bg-white/10 rounded-xl">
                        <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-4 flex-shrink-0">
                          <span className="text-purple-600 dark:text-purple-400 font-bold">{index + 1}</span>
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
                  className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white shadow-2xl"
                >
                  <div className="text-center mb-10">
                    <div className="text-5xl font-bold mb-3">${destination.price}</div>
                    <p className="text-white/90">Cultural immersion experience</p>
                    <div className="mt-4 inline-flex items-center bg-white/20 px-4 py-2 rounded-full">
                      <Castle className="w-5 h-5 text-yellow-400 mr-2" />
                      <span className="font-bold">Cultural Tours Included</span>
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
                      Book Cultural Tour
                    </Link>
                    
                    <button
                      onClick={handleWhatsAppClick}
                      className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                    >
                      <MessageCircle className="w-5 h-5 mr-3" />
                      WhatsApp Inquiry
                    </button>
                    
                    <div className="text-center pt-4 border-t border-white/20">
                      <p className="text-white/80 text-sm">Local guides • Cultural access • Comfort stays</p>
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
                      <p className="text-gray-600 dark:text-gray-400">Complete cultural package</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {destination.inclusions.map((item: string, index: number) => (
                      <div key={index} className="flex items-center p-4 bg-gray-50 dark:bg-gray-900 rounded-xl">
                        <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-4">
                          <CheckCircle className="w-4 h-4 text-blue-500" />
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
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">Valley Stays</h3>
                      <p className="text-gray-600 dark:text-gray-400">Cultural accommodation options</p>
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
      <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Discover the Mystical Kalash Culture
              </h2>
              <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
                Experience the ancient traditions of the Kalash people amidst the majestic Hindu Kush mountains. 
                Our cultural tours offer authentic experiences while respecting local traditions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-5 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center justify-center"
                >
                  Book Cultural Tour
                  <ArrowRight className="w-5 h-5 ml-3" />
                </Link>
                <Link
                  href="/destinations"
                  className="bg-white/10 hover:bg-white/20 border-2 border-white/30 text-white px-12 py-5 rounded-xl font-bold text-lg backdrop-blur-sm transition-all duration-300 inline-flex items-center justify-center"
                >
                  More Cultural Trips
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