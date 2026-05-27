import Hero from '@/components/Hero'
import Services from '@/components/Services'
import TourPackages from '@/components/TourPackages'
import Destination from '@/components/Destination'
import TravelPoint from '@/components/TravelPoint'
import Testimonials from '@/components/Testimonials'
import ContactForm from '@/components/ContactForm'
import { TOUR_PACKAGES } from '@/constants'
import { client } from '@/lib/sanityClient'
import { urlFor } from '@/lib/imageUrl'
import { CONTACT_INFO } from '@/constants'
import Link from 'next/link'
import Image from 'next/image'

const HOMEPAGE_QUERY = `*[_type == "homepage"][0]`
const FEATURED_TOURS_QUERY = `*[_type == "tourPackage"][0...3]{_id, title, slug, tagline, price, duration, heroImage}`

export async function generateMetadata() {
  const data = await client.fetch(HOMEPAGE_QUERY)
  
  if (!data?.seo) {
    return {
      title: 'Kerala Tour Packages | Best Prices from ₹8,999 | keralatour.info',
      description: 'Book Kerala tour packages starting ₹8,999/person. Houseboats in Alleppey, Munnar hill stations, Thekkady wildlife.',
    }
  }
  
  return {
    title: data.seo.seoTitle || 'Kerala Tour Packages | Best Prices | keralatour.info',
    description: data.seo.seoDescription,
  }
}

async function FeaturedTours() {
  const tours = await client.fetch(FEATURED_TOURS_QUERY)
  
  if (!tours || tours.length === 0) return null
  
  return (
    <section className='max-container padding-container py-20 flex flex-col gap-12'>
      <div className='text-center'>
        <h2 className='text-3xl font-bold text-[#191825]'>Featured Tour Packages</h2>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {tours.map((tour: any) => (
          <Link 
            key={tour._id}
            href={`/kerala-tour-packages/${tour.slug?.current}`}
            className='bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow'
          >
            <div className='relative h-48'>
              {tour.heroImage ? (
                <Image
                  src={urlFor(tour.heroImage).url()}
                  alt={tour.title}
                  fill
                  className='object-cover'
                />
              ) : (
                <div className='w-full h-full bg-gray-200' />
              )}
            </div>
            <div className='p-4'>
              <h3 className='font-bold text-lg text-[#191825]'>{tour.title}</h3>
              <p className='text-sm text-gray-600 mt-1'>{tour.duration}</p>
              <p className='text-xl font-bold text-[#5D50C6] mt-2'>
                {tour.price ? `₹${tour.price.toLocaleString('en-IN')}` : 'Contact for price'}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default async function Home() {
  const data = await client.fetch(HOMEPAGE_QUERY)
  
  // Prepare CMS data for Hero component
  const cmsHeroData = data ? {
    title: data.heroTitle,
    subtitle: data.heroSubtitle,
    exploreText: data.ctaText,
    heroImage: data.heroImage ? { asset: { url: urlFor(data.heroImage).url() } } : undefined,
  } : undefined

  // If no CMS data, use fallback
  if (!data) {
    return (
      <>
        <Hero packages={TOUR_PACKAGES} />
        <TourPackages packages={TOUR_PACKAGES} />
        <Destination />
        <Services />
        <TravelPoint />
        <Testimonials />
        <ContactForm />
      </>
    )
  }

  return (
    <>
      <Hero 
        cmsData={cmsHeroData}
        title={data.heroTitle}
        subtitle={data.heroSubtitle}
        exploreText={data.ctaText}
      />
      <FeaturedTours />
      <TourPackages packages={TOUR_PACKAGES} />
      <Destination />
      <Services />
      <TravelPoint />
      <Testimonials />
      <ContactForm />
    </>
  )
}
