import Link from 'next/link'
import { Mountain, Facebook, Instagram, Twitter, Youtube, Linkedin } from 'lucide-react'
import { navLinks } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-gray-300">
      <div className="section-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Mountain className="w-10 h-10 text-accent-400" />
              <div>
                <span className="font-heading text-2xl font-bold text-white">
                  Northern Scapes
                </span>
                <p className="text-sm text-gray-400 tracking-wider">
                  LUXURY TRAVEL
                </p>
              </div>
            </div>
            <p className="text-gray-400 mb-8 max-w-md">
              Creating extraordinary luxury travel experiences in Northern Pakistan&apos;s 
              most breathtaking landscapes for discerning travelers worldwide.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter, Youtube, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-800 hover:bg-accent-600 flex items-center justify-center transition-colors"
                  aria-label={`Follow on ${Icon.name}`}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">More</h3>
            <ul className="space-y-3">
              {navLinks.slice(4).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="w-5 h-5 text-accent-400 mt-1">
                  📍
                </div>
                <span className="text-gray-400">
                  Luxury Travel Plaza<br />
                  Islamabad, Pakistan
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-5 h-5 text-accent-400">
                  📞
                </div>
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-5 h-5 text-accent-400">
                  ✉️
                </div>
                <span className="text-gray-400">contact@northernscapes.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Northern Scapes Luxury Travel. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-500">
              <Link href="/privacy" className="hover:text-gray-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-gray-300">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-gray-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}