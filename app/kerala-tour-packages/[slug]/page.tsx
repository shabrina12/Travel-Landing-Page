import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { client } from '@/lib/sanityClient'
import { TOUR_PACKAGE_QUERY } from '@/lib/queries'
import { urlFor } from '@/lib/imageUrl'
import { CONTACT_INFO } from '@/constants'

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await client.fetch(TOUR_PACKAGE_QUERY, { slug: params.slug })
  if (!data) return {}

  return {
    title: data.seo?.metaTitle || data.title,
    description: data.seo?.metaDescription,
  }
}

export default async function TourPackagePage({ params }: Props) {
  const data = await client.fetch(TOUR_PACKAGE_QUERY, { slug: params.slug })

  if (!data) {
    notFound()
  }

  const heroImageUrl = data?.heroImage ? urlFor(data.heroImage).url() : null

  return (
    <section className='max-container padding-container py-16 lg:py-24 flex items-center'>
      <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
        {/* LEFT - Content */}
        <div className='flex flex-col gap-6 text-center lg:text-left'>
          <div className='inline-flex self-center lg:self-start items-center gap-2 bg-white shadow-md w-fit text-[#F85E9F] rounded-full py-3 px-6'>
            <p className='font-semibold text-sm'>Explore Kerala!</p>
          </div>
          
          <h1 className='text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight'>
            {data?.title}
          </h1>
          
          <p className='text-[#191825]/60 text-lg lg:text-xl max-w-xl'>
            {data?.tagline}
          </p>

          <div className='flex items-baseline gap-2'>
            <span className='text-3xl font-bold text-[#5D50C6]'>
              {data?.price ? `from ₹${data.price.toLocaleString('en-IN')}` : 'Contact for price'}
            </span>
            {data?.price && <span className='text-gray-500'>/ person</span>}
          </div>

          <div className='flex flex-wrap gap-2 text-sm'>
            {data?.duration && (
              <span className='bg-[#f3f0ff] px-3 py-1 rounded-full'>{data.duration}</span>
            )}
            {data?.minGuests && (
              <span className='bg-[#f3f0ff] px-3 py-1 rounded-full'>{data.minGuests}</span>
            )}
            {data?.accommodation && (
              <span className='bg-[#f3f0ff] px-3 py-1 rounded-full'>{data.accommodation}</span>
            )}
            {data?.hotel && (
              <span className='bg-[#f3f0ff] px-3 py-1 rounded-full'>{data.hotel}</span>
            )}
          </div>

          {/* Locations */}
          {data?.locations && data.locations.length > 0 && (
            <p className='text-sm text-gray-600'>
              {data.locations.join(' | ')}
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
              href={`https://api.whatsapp.com/send?phone=${CONTACT_INFO.whatsapp}&text=I am interested in ${data?.title}`}
              target='_blank'
              rel='noopener noreferrer'
              className='bg-[#25D366] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#20bd5a] transition-colors'
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* RIGHT - Image */}
        <div className='relative'>
          {heroImageUrl && (
            <Image
              src={heroImageUrl}
              alt={data?.title || 'Tour Package'}
              width={600}
              height={500}
              className='rounded-3xl object-cover w-full'
              priority
            />
          )}
        </div>
      </div>
    </section>
  )
}