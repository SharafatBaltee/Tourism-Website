import PackageCard from '@/components/PackageCard'
import { packages } from '@/lib/constants'
import { Check, Crown, Gem, Sparkles } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Packages | Northern Scapes - Luxury Travel',
  description: 'Choose from our exclusive luxury travel packages. Gold, Platinum, and Elite tiers for every discerning traveler.',
}

export default function PackagesPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-accent-900/20 via-primary-900 to-accent-900/10">
        <div className="section-padding text-center">
          <h1 className="heading-1 text-white mb-6">
            Premium Travel Packages
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Select from our curated luxury packages, each designed to deliver exceptional value and unforgettable experiences.
          </p>
        </div>
      </section>

      {/* Package Comparison */}
      <section className="section-padding py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-4">
            <Gem className="w-6 h-6 text-accent-600" />
            <span className="text-accent-600 dark:text-accent-500 font-semibold tracking-wide uppercase">
              Luxury Tiers
            </span>
            <Sparkles className="w-6 h-6 text-accent-600" />
          </div>
          <h2 className="heading-2 mb-6">
            Choose Your Luxury Experience
          </h2>
          <p className="text-lead max-w-3xl mx-auto">
            Each package includes premium accommodations, expert guides, and exclusive experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </section>

      {/* Package Features Comparison */}
      <section className="bg-gray-50 dark:bg-primary-800/30 py-20">
        <div className="section-padding">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-6">
              What&apos;s Included in Each Package
            </h2>
            <p className="text-lead max-w-3xl mx-auto">
              Transparent pricing with comprehensive inclusions across all tiers
            </p>
          </div>

          <div className="luxury-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-100 dark:bg-primary-700">
                    <th className="text-left p-6 font-semibold">Features</th>
                    <th className="p-6 font-semibold text-center">Gold</th>
                    <th className="p-6 font-semibold text-center">Platinum</th>
                    <th className="p-6 font-semibold text-center">Elite</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    'Luxury Accommodation',
                    'Private Guide & Driver',
                    'All Meals Included',
                    'Helicopter Transfers',
                    'Spa Treatments',
                    'Adventure Activities',
                    '24/7 Concierge',
                    'Professional Photography',
                    'VIP Airport Services',
                    'Custom Itinerary'
                  ].map((feature, index) => (
                    <tr key={index} className="border-b border-gray-200 dark:border-primary-700">
                      <td className="p-6 font-medium">{feature}</td>
                      <td className="p-6 text-center">
                        {index < 6 ? (
                          <Check className="w-6 h-6 text-green-500 mx-auto" />
                        ) : (
                          <span className="text-gray-400">—</span>
                        )}
                      </td>
                      <td className="p-6 text-center">
                        {index < 8 ? (
                          <Check className="w-6 h-6 text-green-500 mx-auto" />
                        ) : (
                          <span className="text-gray-400">—</span>
                        )}
                      </td>
                      <td className="p-6 text-center">
                        <Check className="w-6 h-6 text-green-500 mx-auto" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding py-20">
        <div className="luxury-card p-12 text-center">
          <Crown className="w-16 h-16 text-accent-600 mx-auto mb-6" />
          <h2 className="heading-2 mb-6">
            Ready for a Bespoke Experience?
          </h2>
          <p className="text-lead max-w-2xl mx-auto mb-10">
            Contact our luxury travel specialists to create a completely customized package 
            tailored to your exact preferences and requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact" className="btn-primary">
              Request Custom Package
            </Link>
            <Link href="/contact?type=consultation" className="btn-secondary">
              Book Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}