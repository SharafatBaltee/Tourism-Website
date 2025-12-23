import Link from 'next/link'
import { experiences } from '@/lib/constants'
import { Heart, Users, Trophy, Sparkles } from 'lucide-react'

export const metadata = {
  title: 'Experiences | Northern Scapes - Luxury Travel',
  description: 'Discover our curated luxury experiences. From honeymoon packages to corporate retreats, we create unforgettable journeys.',
}

export default function ExperiencesPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-900 via-accent-900/20 to-primary-800">
        <div className="section-padding text-center">
          <h1 className="heading-1 text-white mb-6">
            Curated Luxury Experiences
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Each journey is meticulously crafted to provide unique moments of luxury, adventure, and cultural immersion.
          </p>
        </div>
      </section>

      {/* All Experiences - FIXED (No Images) */}
      <section className="section-padding py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {experiences.map((experience) => (
            <div key={experience.id} className="luxury-card overflow-hidden group">
              <div className="relative h-80 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <div className={`w-full h-full ${
                  experience.id === 'luxury-retreat' ? 'bg-gradient-to-br from-purple-600 via-purple-700 to-pink-700' :
                  experience.id === 'honeymoon' ? 'bg-gradient-to-br from-rose-600 via-pink-700 to-red-700' :
                  experience.id === 'corporate' ? 'bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-700' :
                  'bg-gradient-to-br from-green-600 via-emerald-700 to-teal-700'
                } group-hover:scale-110 transition-transform duration-700`} />
                <div className="absolute bottom-6 left-6 z-20">
                  <span className="text-lg font-semibold text-white bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full">
                    {experience.title}
                  </span>
                </div>
                <div className="absolute top-6 right-6 z-20">
                  <span className="text-2xl font-bold text-white bg-accent-600/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                    ${experience.price}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{experience.duration}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    {experience.title.includes('Honeymoon') && <Heart className="w-5 h-5 text-pink-500" />}
                    {experience.title.includes('Corporate') && <Users className="w-5 h-5 text-blue-500" />}
                    {experience.title.includes('Adventure') && <Trophy className="w-5 h-5 text-green-500" />}
                    {experience.title.includes('Retreat') && <Sparkles className="w-5 h-5 text-yellow-500" />}
                  </div>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 text-lg mb-8 leading-relaxed">
                  {experience.description}
                </p>
                
                <div className="mb-8">
                  <h4 className="font-semibold mb-4 text-lg">Includes:</h4>
                  <div className="flex flex-wrap gap-3">
                    {experience.includes.map((item, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gray-100 dark:bg-primary-700 rounded-full text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <Link
                    href={`/experiences/${experience.id}`}
                    className="text-accent-600 dark:text-accent-500 font-semibold hover:underline inline-flex items-center"
                  >
                    Learn More
                    <span className="ml-2">→</span>
                  </Link>
                  <Link
                    href="/contact"
                    className="btn-primary px-6 py-3"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Categories */}
      <section className="bg-gray-50 dark:bg-primary-800/30 py-20">
        <div className="section-padding">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6">
              Tailored For Every Occasion
            </h2>
            <p className="text-lead max-w-3xl mx-auto">
              Whether it&apos;s a romantic getaway, corporate retreat, or family adventure, we create perfect experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="luxury-card p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-4">Honeymoon & Romance</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Create unforgettable memories with your loved one in breathtaking settings
              </p>
              <Link
                href="/contact?type=honeymoon"
                className="inline-block text-pink-600 dark:text-pink-400 font-medium hover:underline"
              >
                Plan Your Romantic Getaway
              </Link>
            </div>

            <div className="luxury-card p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-4">Corporate & Executive</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Team-building and executive retreats in inspirational mountain settings
              </p>
              <Link
                href="/contact?type=corporate"
                className="inline-block text-blue-600 dark:text-blue-400 font-medium hover:underline"
              >
                Plan Corporate Retreat
              </Link>
            </div>

            <div className="luxury-card p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                <Trophy className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-4">Adventure & Exploration</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                For thrill-seekers who want luxury with their adventure experiences
              </p>
              <Link
                href="/contact?type=adventure"
                className="inline-block text-green-600 dark:text-green-400 font-medium hover:underline"
              >
                Start Your Adventure
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}