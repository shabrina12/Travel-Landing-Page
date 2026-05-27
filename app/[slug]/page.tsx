import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { client } from '@/lib/sanityClient'
import { SEO_LANDING_PAGE_QUERY, TOUR_PACKAGE_QUERY } from '@/lib/queries'
import SEOLandingPageComponent from '@/components/SEOLandingPage'
import { urlFor } from '@/lib/imageUrl'
import TourPackagePage from '@/app/kerala-tour-packages/[slug]/page'
import { CMSSEOLandingPage } from '@/lib/types'
import { CONTACT_INFO } from '@/constants'

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Try to fetch SEO landing page first
  const seoPage = await client.fetch(SEO_LANDING_PAGE_QUERY, { slug: params.slug })
  
  if (seoPage) {
    const ogImageUrl = seoPage.ogImage ? urlFor(seoPage.ogImage).url() : null
    const canonicalUrl = seoPage.canonicalUrl || `https://keralatour.info/${params.slug}`
    
    return {
      title: seoPage.seoTitle || seoPage.heroHeading || seoPage.title,
      description: seoPage.seoDescription,
      keywords: seoPage.focusKeyword,
      robots: seoPage.noindex ? 'noindex, nofollow' : 'index, follow',
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        title: seoPage.seoTitle || seoPage.title,
        description: seoPage.seoDescription,
        images: ogImageUrl ? [{ url: ogImageUrl }] : undefined,
        url: canonicalUrl,
        type: 'website',
      },
    }
  }

  // Fallback to tour package
  const tourPackage = await client.fetch(TOUR_PACKAGE_QUERY, { slug: params.slug })
  if (tourPackage) {
    return {
      title: tourPackage.seo?.metaTitle || tourPackage.title,
      description: tourPackage.seo?.metaDescription,
    }
  }

  return {}
}

export default async function Page({ params }: { params: { slug: string } }) {
  // Try to fetch SEO landing page first
  const seoPage = await client.fetch(SEO_LANDING_PAGE_QUERY, { slug: params.slug })
  
  if (seoPage) {
    return (
      <>
        {/* Structured Data: BreadcrumbList */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: 'https://keralatour.info',
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: seoPage.title,
                  item: `https://keralatour.info/${params.slug}`,
                },
              ],
            }),
          }}
        />

        {/* Structured Data: FAQPage */}
        {seoPage.faqs && seoPage.faqs.length > 0 && (
          <script
            type='application/ld+json'
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: seoPage.faqs.map((faq: any) => ({
                  '@type': 'Question',
                  name: faq.question,
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: faq.answer,
                  },
                })),
              }),
            }}
          />
        )}

        {/* Structured Data: TouristTrip */}
        {(seoPage.startingPrice || seoPage.duration) && (
          <script
            type='application/ld+json'
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'TouristTrip',
                name: seoPage.title,
                description: seoPage.overview,
                itinerary: seoPage.shortItinerary?.map((day: any) => ({
                  '@type': 'Place',
                  name: day.title,
                  description: day.description,
                })),
                offers: {
                  '@type': 'Offer',
                  priceCurrency: 'INR',
                  price: seoPage.startingPrice?.toString(),
                  availability: 'https://schema.org/InStock',
                },
              }),
            }}
          />
        )}

        <SEOLandingPageComponent
          page={seoPage}
          whatsappNumber={CONTACT_INFO.whatsapp}
        />
      </>
    )
  }

  // Fallback to tour package using kerala-tour-packages route
  const tourPackage = await client.fetch(TOUR_PACKAGE_QUERY, { slug: params.slug })
  
  if (tourPackage) {
    // For backward compatibility, render the package details inline
    const { urlFor: imageUrlFor } = await import('@/lib/imageUrl')
    const heroImageUrl = tourPackage?.heroImage ? imageUrlFor(tourPackage.heroImage).url() : null

    return (
      <section className='max-container padding-container py-16 lg:py-24 flex items-center'>
        <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
          {/* LEFT - Content */}
          <div className='flex flex-col gap-6 text-center lg:text-left'>
            <div className='inline-flex self-center lg:self-start items-center gap-2 bg-white shadow-md w-fit text-[#F85E9F] rounded-full py-3 px-6'>
              <p className='font-semibold text-sm'>Explore Kerala!</p>
            </div>

            <h1 className='text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight'>
              {tourPackage?.title}
            </h1>

            <p className='text-[#191825]/60 text-lg lg:text-xl max-w-xl'>
              {tourPackage?.tagline}
            </p>

            <div className='flex items-baseline gap-2'>
              <span className='text-3xl font-bold text-[#5D50C6]'>
                {tourPackage?.price ? `from ₹${tourPackage.price.toLocaleString('en-IN')}` : 'Contact for price'}
              </span>
              {tourPackage?.price && <span className='text-gray-500'>/ person</span>}
            </div>

            <div className='flex flex-wrap gap-2 text-sm'>
              {tourPackage?.duration && (
                <span className='bg-[#f3f0ff] px-3 py-1 rounded-full'>{tourPackage.duration}</span>
              )}
              {tourPackage?.minGuests && (
                <span className='bg-[#f3f0ff] px-3 py-1 rounded-full'>{tourPackage.minGuests}</span>
              )}
              {tourPackage?.accommodation && (
                <span className='bg-[#f3f0ff] px-3 py-1 rounded-full'>{tourPackage.accommodation}</span>
              )}
              {tourPackage?.hotel && (
                <span className='bg-[#f3f0ff] px-3 py-1 rounded-full'>{tourPackage.hotel}</span>
              )}
            </div>

            {tourPackage?.locations && tourPackage.locations.length > 0 && (
              <p className='text-sm text-gray-600'>
                {tourPackage.locations.join(' | ')}
              </p>
            )}

            <div className='flex flex-wrap justify-center lg:justify-start gap-4'>
              <a
                href='#contact'
                className='bg-[#5D50C6] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#4a3fb0] transition-colors'
              >
                Book Now
              </a>
              <a
                href={`https://api.whatsapp.com/send?phone=${CONTACT_INFO.whatsapp}&text=I am interested in ${tourPackage?.title}`}
                target='_blank'
                rel='noopener noreferrer'
                className='bg-[#25D366] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#20bd5a] transition-colors'
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* RIGHT - Image */}
          {heroImageUrl && (
            <div className='relative'>
              {/* Dynamic import Image here if needed */}
              <img
                src={heroImageUrl}
                alt={tourPackage?.title || 'Tour Package'}
                className='rounded-3xl object-cover w-full'
              />
            </div>
          )}
        </div>
      </section>
    )
  }

  notFound()
}