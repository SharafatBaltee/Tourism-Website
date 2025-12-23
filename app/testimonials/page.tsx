'use client'

import { useState } from 'react'
import { testimonials } from '@/lib/constants'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'

export default function TestimonialsPage() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-primary-900 to-primary-800">
        <div className="section-padding text-center">
          <h1 className="heading-1 text-white mb-6">
            Client Testimonials
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Read what our discerning clients have to say about their Northern Scapes experiences.
          </p>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="section-padding py-20">
        <div className="luxury-card p-12 relative max-w-5xl mx-auto">
          <Quote className="absolute top-8 left-8 w-16 h-16 text-accent-100 dark:text-accent-900/30" />
          <div className="text-center mb-10">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 text-yellow-500 fill-current mx-1"
                />
              ))}
            </div>
            <p className="text-2xl italic text-gray-700 dark:text-gray-300 leading-relaxed mb-10 max-w-3xl mx-auto">
              &ldquo;{testimonials[currentIndex].content}&rdquo;
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-6 md:mb-0">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center text-white text-xl font-bold mr-4">
                {testimonials[currentIndex].name.charAt(0)}
              </div>
              <div>
                <h3 className="text-xl font-semibold">{testimonials[currentIndex].name}</h3>
                <p className="text-gray-600 dark:text-gray-400">{testimonials[currentIndex].role}</p>
                <p className="text-sm text-gray-500">{testimonials[currentIndex].date}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full border border-gray-300 dark:border-primary-700 hover:bg-gray-100 dark:hover:bg-primary-800 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-gray-600 dark:text-gray-400">
                {currentIndex + 1} / {testimonials.length}
              </span>
              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full border border-gray-300 dark:border-primary-700 hover:bg-gray-100 dark:hover:bg-primary-800 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials */}
      <section className="bg-gray-50 dark:bg-primary-800/30 py-20">
        <div className="section-padding">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6">
              More Client Stories
            </h2>
            <p className="text-lead max-w-3xl mx-auto">
              Discover how we&apos;ve created unforgettable memories for travelers from around the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="luxury-card p-8">
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-500 fill-current mr-1"
                    />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-8 italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                    <p className="text-xs text-gray-500">{testimonial.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding py-20">
        <div className="text-center">
          <h2 className="heading-2 mb-6">
            Ready to Share Your Story?
          </h2>
          <p className="text-lead max-w-2xl mx-auto mb-10">
            Join our family of satisfied clients and create your own Northern Scapes story.
          </p>
          <a
            href="/contact"
            className="btn-primary inline-flex items-center"
          >
            Start Your Journey
            <ChevronRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  )
}