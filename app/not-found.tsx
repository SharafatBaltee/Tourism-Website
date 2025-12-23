import Link from 'next/link'
import { Home, Compass, Phone } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary-900 to-primary-800">
      <div className="section-padding text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-9xl font-heading font-bold text-white mb-8">
            404
          </h1>
          <h2 className="heading-2 text-white mb-6">
            Luxury Journey Interrupted
          </h2>
          <p className="text-xl text-gray-200 mb-12 leading-relaxed">
            The page you&apos;re looking for seems to be exploring other magnificent destinations. 
            Let us guide you back to the extraordinary experiences that await.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/"
              className="btn-primary inline-flex items-center justify-center"
            >
              <Home className="w-5 h-5 mr-2" />
              Return Home
            </Link>
            <Link
              href="/destinations"
              className="btn-secondary text-white border-white hover:bg-white/10 inline-flex items-center justify-center"
            >
              <Compass className="w-5 h-5 mr-2" />
              Explore Destinations
            </Link>
            <Link
              href="/contact"
              className="btn-secondary text-white border-white hover:bg-white/10 inline-flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}