import Image from 'next/image'
import Link from 'next/link'
import { CMSSEOLandingPage } from '@/lib/types'
import { urlFor } from '@/lib/imageUrl'
import { CONTACT_INFO } from '@/constants'

interface SEOLandingPageProps {
  page: CMSSEOLandingPage
  whatsappNumber?: string
}

export default function SEOLandingPageComponent({
  page,
  whatsappNumber = CONTACT_INFO.whatsapp,
}: SEOLandingPageProps) {
  const heroImageUrl = page.heroImage ? urlFor(page.heroImage).url() : null
  const ogImageUrl = page.ogImage ? urlFor(page.ogImage).url() : null

  return (
    <article className='w-full'>
      {/* Hero Section */}
      <section className='max-container padding-container py-12 lg:py-24 flex items-center'>
        <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center'>
          {/* Content */}
          <div className='flex flex-col gap-6 text-center lg:text-left'>
            <div className='inline-flex self-center lg:self-start items-center gap-2 bg-white shadow-md w-fit text-[#F85E9F] rounded-full py-3 px-6'>
              <p className='font-semibold text-sm'>{page.focusKeyword}</p>
            </div>

            <h1 className='text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight'>
              {page.heroHeading}
            </h1>

            <p className='text-[#191825]/60 text-lg lg:text-xl max-w-xl'>
              {page.heroSubtitle}
            </p>

            {/* Pricing & Duration */}
            <div className='flex items-baseline gap-2'>
              {page.startingPrice && (
                <>
                  <span className='text-3xl font-bold text-[#5D50C6]'>
                    from ₹{page.startingPrice.toLocaleString('en-IN')}
                  </span>
                  <span className='text-gray-500'>/ person</span>
                </>
              )}
            </div>

            {/* Tags */}
            <div className='flex flex-wrap gap-2 text-sm'>
              {page.duration && (
                <span className='bg-[#f3f0ff] px-3 py-1 rounded-full'>
                  {page.duration}
                </span>
              )}
              {page.destinationsCovered && page.destinationsCovered.length > 0 && (
                <span className='bg-[#f3f0ff] px-3 py-1 rounded-full'>
                  {page.destinationsCovered.length} Destinations
                </span>
              )}
            </div>

            {/* Destinations */}
            {page.destinationsCovered && page.destinationsCovered.length > 0 && (
              <p className='text-sm text-gray-600'>
                {page.destinationsCovered.join(' • ')}
              </p>
            )}

            {/* CTAs */}
            <div className='flex flex-wrap justify-center lg:justify-start gap-4 pt-4'>
              <a
                href='#contact'
                className='bg-[#5D50C6] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#4a3fb0] transition-colors'
              >
                Inquire Now
              </a>
              <a
                href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
                  page.whatsappMessageTemplate || 'Hi! I\'m interested in this tour package.'
                )}`}
                target='_blank'
                rel='noopener noreferrer'
                className='bg-[#25D366] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#20bd5a] transition-colors'
              >
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Image */}
          <div className='relative'>
            {heroImageUrl && (
              <Image
                src={heroImageUrl}
                alt={page.heroImage?.alt || page.title}
                width={600}
                height={500}
                className='rounded-3xl object-cover w-full'
                priority
              />
            )}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      {page.overview && (
        <section className='bg-[#f9f7ff] max-container padding-container py-16 lg:py-24'>
          <div className='max-w-3xl'>
            <h2 className='text-3xl lg:text-4xl font-bold text-[#191825] mb-6'>
              Trip Overview
            </h2>
            <p className='text-gray-700 text-lg leading-relaxed whitespace-pre-line'>
              {page.overview}
            </p>
          </div>
        </section>
      )}

      {/* Highlights Section */}
      {page.highlights && page.highlights.length > 0 && (
        <section className='max-container padding-container py-16 lg:py-24'>
          <h2 className='text-3xl lg:text-4xl font-bold text-[#191825] mb-12 text-center'>
            Highlights
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {page.highlights.map((highlight, idx) => (
              <div key={idx} className='bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow'>
                <div className='flex items-start gap-4'>
                  <div className='flex-shrink-0 w-10 h-10 bg-[#5D50C6] rounded-full flex items-center justify-center text-white font-bold'>
                    ✓
                  </div>
                  <p className='text-gray-700'>{highlight}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Day-wise Itinerary Section */}
      {page.shortItinerary && page.shortItinerary.length > 0 && (
        <section className='bg-[#f9f7ff] max-container padding-container py-16 lg:py-24'>
          <h2 className='text-3xl lg:text-4xl font-bold text-[#191825] mb-12 text-center'>
            Day-wise Itinerary
          </h2>
          <div className='space-y-8'>
            {page.shortItinerary.map((day, idx) => (
              <div key={idx} className='bg-white p-8 rounded-2xl shadow-md'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 items-start'>
                  <div className='lg:col-span-1'>
                    <h3 className='text-2xl font-bold text-[#5D50C6] mb-2'>{day.day}</h3>
                    <p className='text-lg font-semibold text-[#191825]'>{day.title}</p>
                  </div>
                  <div className='lg:col-span-2'>
                    {day.description && (
                      <p className='text-gray-700 leading-relaxed'>{day.description}</p>
                    )}
                  </div>
                </div>
                {day.image && (
                  <div className='mt-6 relative h-64 rounded-xl overflow-hidden'>
                    <Image
                      src={urlFor(day.image).url()}
                      alt={day.title}
                      fill
                      className='object-cover'
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Inclusions & Exclusions */}
      {(page.inclusions || page.exclusions) && (
        <section className='max-container padding-container py-16 lg:py-24'>
          <h2 className='text-3xl lg:text-4xl font-bold text-[#191825] mb-12 text-center'>
            What&apos;s Included & Excluded
          </h2>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            {/* Inclusions */}
            {page.inclusions && page.inclusions.length > 0 && (
              <div>
                <h3 className='text-2xl font-bold text-green-600 mb-6 flex items-center gap-2'>
                  <span className='text-3xl'>✓</span> Inclusions
                </h3>
                <ul className='space-y-3'>
                  {page.inclusions.map((inclusion, idx) => (
                    <li key={idx} className='flex items-start gap-3'>
                      <span className='text-green-600 font-bold mt-1'>+</span>
                      <span className='text-gray-700'>{inclusion}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Exclusions */}
            {page.exclusions && page.exclusions.length > 0 && (
              <div>
                <h3 className='text-2xl font-bold text-red-600 mb-6 flex items-center gap-2'>
                  <span className='text-3xl'>✗</span> Exclusions
                </h3>
                <ul className='space-y-3'>
                  {page.exclusions.map((exclusion, idx) => (
                    <li key={idx} className='flex items-start gap-3'>
                      <span className='text-red-600 font-bold mt-1'>–</span>
                      <span className='text-gray-700'>{exclusion}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Hotel Category Section */}
      {page.hotelCategoryNote && (
        <section className='bg-[#f9f7ff] max-container padding-container py-16 lg:py-24'>
          <div className='max-w-3xl'>
            <h2 className='text-3xl lg:text-4xl font-bold text-[#191825] mb-6'>
              Accommodation
            </h2>
            <p className='text-gray-700 text-lg leading-relaxed'>
              {page.hotelCategoryNote}
            </p>
          </div>
        </section>
      )}

      {/* Best Time to Visit */}
      {page.bestTimeToVisit && (
        <section className='max-container padding-container py-16 lg:py-24'>
          <div className='max-w-3xl'>
            <h2 className='text-3xl lg:text-4xl font-bold text-[#191825] mb-6'>
              Best Time to Visit
            </h2>
            <p className='text-gray-700 text-lg leading-relaxed whitespace-pre-line'>
              {page.bestTimeToVisit}
            </p>
          </div>
        </section>
      )}

      {/* FAQs Section */}
      {page.faqs && page.faqs.length > 0 && (
        <section className='bg-[#f9f7ff] max-container padding-container py-16 lg:py-24'>
          <h2 className='text-3xl lg:text-4xl font-bold text-[#191825] mb-12 text-center'>
            Frequently Asked Questions
          </h2>
          <div className='max-w-3xl mx-auto space-y-6'>
            {page.faqs.map((faq, idx) => (
              <details
                key={idx}
                className='bg-white p-6 rounded-xl shadow-md cursor-pointer group'
              >
                <summary className='font-semibold text-lg text-[#191825] list-none select-none flex justify-between items-center'>
                  {faq.question}
                  <span className='group-open:rotate-180 transition-transform'>
                    ▼
                  </span>
                </summary>
                <p className='text-gray-700 mt-4 leading-relaxed'>
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>
      )}

      {/* Related Pages */}
      {page.relatedPages && page.relatedPages.length > 0 && (
        <section className='max-container padding-container py-16 lg:py-24'>
          <h2 className='text-3xl lg:text-4xl font-bold text-[#191825] mb-12 text-center'>
            Explore Other Packages
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {page.relatedPages.map((relatedPage) => (
              <Link
                key={relatedPage._id}
                href={`/${relatedPage.slug.current}`}
                className='bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow'
              >
                <h3 className='text-xl font-bold text-[#191825] mb-2'>
                  {relatedPage.title}
                </h3>
                {relatedPage.focusKeyword && (
                  <p className='text-sm text-gray-600'>{relatedPage.focusKeyword}</p>
                )}
                <div className='mt-4 text-[#5D50C6] font-semibold'>
                  Learn More →
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* CTA Section */}
      {page.ctaTitle && (
        <section className='bg-gradient-to-r from-[#5D50C6] to-[#7D6FD6] max-container padding-container py-16 lg:py-24'>
          <div className='max-w-3xl text-center text-white'>
            <h2 className='text-3xl lg:text-4xl font-bold mb-6'>
              {page.ctaTitle}
            </h2>
            {page.ctaDescription && (
              <p className='text-lg mb-8 opacity-90'>
                {page.ctaDescription}
              </p>
            )}
            <div className='flex flex-wrap justify-center gap-4'>
              <a
                href='#contact'
                className='bg-white text-[#5D50C6] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors'
              >
                Inquire Now
              </a>
              <a
                href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
                  page.whatsappMessageTemplate || 'Hi! I\'m interested in this tour package.'
                )}`}
                target='_blank'
                rel='noopener noreferrer'
                className='bg-[#25D366] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#20bd5a] transition-colors'
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      )}
    </article>
  )
}
