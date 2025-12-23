import Image from 'next/image'
import Link from 'next/link'
import { Award, Globe, Heart, Shield, Users } from 'lucide-react'

export const metadata = {
  title: 'About Us | Northern Scapes - Luxury Travel',
  description: 'Learn about Northern Scapes - luxury travel specialists creating unforgettable experiences in Northern Pakistan.',
}

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-primary-900 to-primary-800">
        <div className="section-padding">
          <h1 className="heading-1 text-white text-center mb-6">
            Our Story
          </h1>
          <p className="text-xl text-gray-200 max-w-4xl mx-auto text-center">
            For over a decade, we&apos;ve been crafting unforgettable luxury travel experiences in the world&apos;s most breathtaking landscapes.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-accent-600 dark:text-accent-500 font-semibold tracking-wide uppercase">
              Our Mission
            </span>
            <h2 className="heading-2 mt-4 mb-6">
              Redefining Luxury Travel
            </h2>
            <p className="text-lead mb-8">
              We believe luxury travel should be effortless, authentic, and transformative. Our mission is to provide 
              discerning travelers with unparalleled access to Northern Pakistan&apos;s most spectacular regions, 
              while maintaining the highest standards of service, sustainability, and cultural respect.
            </p>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-accent-100 dark:bg-accent-900/30 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-accent-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Passion for Excellence</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Every detail matters. We pour our passion into creating perfect experiences.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-accent-100 dark:bg-accent-900/30 flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-accent-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Sustainable Tourism</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We work closely with local communities to ensure our presence benefits everyone.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[500px] rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-900 to-accent-900/50" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 dark:bg-primary-800/30 py-20">
        <div className="section-padding">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6">
              Our Core Values
            </h2>
            <p className="text-lead max-w-3xl mx-auto">
              These principles guide every decision we make and every experience we create.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="luxury-card p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent-100 dark:bg-accent-900/30 flex items-center justify-center">
                <Shield className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Trust & Safety</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Your safety is our top priority with comprehensive security and medical protocols.
              </p>
            </div>

            <div className="luxury-card p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent-100 dark:bg-accent-900/30 flex items-center justify-center">
                <Award className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We strive for perfection in every aspect of your journey.
              </p>
            </div>

            <div className="luxury-card p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent-100 dark:bg-accent-900/30 flex items-center justify-center">
                <Users className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Personalization</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Every journey is tailored to your specific preferences and desires.
              </p>
            </div>

            <div className="luxury-card p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent-100 dark:bg-accent-900/30 flex items-center justify-center">
                <Globe className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Committed to preserving the natural beauty and cultural heritage of our destinations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding py-20">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-6">
            Meet Our Luxury Specialists
          </h2>
          <p className="text-lead max-w-3xl mx-auto">
            Our team of experts brings decades of experience in luxury hospitality, adventure tourism, and cultural immersion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: 'Sarah Khan',
              role: 'Founder & CEO',
              bio: 'Former luxury hotelier with 15+ years experience in premium hospitality.',
              expertise: ['Luxury Stays', 'Guest Experience', 'Destination Strategy']
            },
            {
              name: 'Ali Raza',
              role: 'Head of Adventure',
              bio: 'Mountaineering expert and certified wilderness first responder.',
              expertise: ['Safety Protocols', 'Adventure Planning', 'Local Guides']
            },
            {
              name: 'Fatima Ahmed',
              role: 'Experience Curator',
              bio: 'Cultural anthropologist specializing in authentic local experiences.',
              expertise: ['Cultural Immersion', 'Local Partnerships', 'Sustainable Tourism']
            }
          ].map((member, index) => (
            <div key={index} className="luxury-card p-8 text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center text-white text-4xl font-heading font-bold">
                {member.name.charAt(0)}
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-2">{member.name}</h3>
              <p className="text-accent-600 dark:text-accent-500 font-medium mb-4">{member.role}</p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{member.bio}</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {member.expertise.map((skill, idx) => (
                  <span key={idx} className="px-3 py-1 bg-gray-100 dark:bg-primary-700 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}