import React from 'react'
import Image from 'next/image'

interface SponsorItem {
  src: string
  alt: string
  width: number
  height: number
}

interface SponsorProps {
  sponsors?: SponsorItem[]
}

const DEFAULT_SPONSORS: SponsorItem[] = [
  { src: '/sponsor1.png', alt: 'tripadvisor', width: 140, height: 40 },
  { src: '/sponsor2.png', alt: 'expedia', width: 120, height: 40 },
  { src: '/sponsor3.png', alt: 'bookingcom', width: 140, height: 40 },
  { src: '/sponsor4.png', alt: 'airbnb', width: 120, height: 40 },
  { src: '/sponsor5.png', alt: 'orbitz', width: 120, height: 40 },
]

const Sponsor = ({ sponsors = DEFAULT_SPONSORS }: SponsorProps) => {
  return (
    <section className='relative'>
        <Image className='absolute md:bottom-[30%] lg:left-[1.5%] sm:bottom-[50%]' src='/orange-triangle.png' alt='orange triangle' width={50} height={100} />
        <div className='max-container padding-container py-14 md:flex justify-between items-center xs:grid xs:grid-cols-3 xs:gap-8'>
            {sponsors.map((sponsor, index) => (
              <Image 
                key={index}
                src={sponsor.src} 
                alt={sponsor.alt} 
                width={sponsor.width} 
                height={sponsor.height} 
              />
            ))}
        </div>
    </section>
  )
}


export default Sponsor