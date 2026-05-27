'use client'
import React from 'react'
import Image from 'next/image'
import Button from './Button'
import { CONTACT_INFO, TOUR_PACKAGES } from '@/constants'
import type { CMSTourPackage, CMSImage } from '@/lib/types'

interface HeroProps {
  cmsData?: {
    title?: string
    subtitle?: string
    exploreText?: string
    heroImage?: CMSImage
  }
  packages?: typeof TOUR_PACKAGES
  title?: string
  subtitle?: string
  exploreText?: string
}

const Hero = ({ 
  cmsData,
  packages,
  title: propsTitle, 
  subtitle: propsSubtitle, 
  exploreText: propsExploreText 
}: HeroProps) => {
  // For backward compatibility - packages can be passed but currently not used in Hero
  const _ = packages
  // Use CMS data if provided, otherwise fall back to props or defaults
  const title = cmsData?.title || propsTitle || 'Kerala Tour'
  const subtitle = cmsData?.subtitle || propsSubtitle || "Embark on a journey of a lifetime with us as we unveil the hidden gems & breathtaking landscapes of God's Own Country."
  const exploreText = cmsData?.exploreText || propsExploreText || 'Explore Kerala & South India!'
  const heroImage = cmsData?.heroImage

  return (
    <section className='relative max-container padding-container py-16 lg:py-24 flex items-center'>
      {/* Background decoration */}
      <div className='absolute inset-0 bg-hero opacity-30 pointer-events-none' />
      
      <div className='relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
        {/* LEFT - Content */}
        <div className='flex flex-col gap-6 text-center lg:text-left order-2 lg:order-1'>
          <div className='inline-flex self-center lg:self-start items-center gap-2 bg-white shadow-md w-fit text-[#F85E9F] rounded-full py-3 px-6'>
            <Image src='/icon1.png' alt='icon' width={16} height={16} className='w-4 h-4' />
            <p className='font-semibold text-sm'>{exploreText}</p>
          </div>
          
          <h1 className='text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight'>
            {title} <span className='text-[#F85E9F]'>Packages</span>
          </h1>
          
          <p className='text-[#191825]/60 text-lg lg:text-xl max-w-xl mx-auto lg:mx-0'>
            {subtitle}
          </p>
          
          <div className='flex flex-wrap justify-center lg:justify-start gap-4'>
            <a href='#packages'>
              <Button type='button' title='Explore Packages' variant='btn_purple shadow' />
            </a>
            <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}>
              <Button type='button' title={CONTACT_INFO.phone} variant='btn_outline_black' icon='/phone.png' />
            </a>
          </div>

          {/* Quick Stats */}
          <div className='flex justify-center lg:justify-start gap-8 pt-4'>
            <div className='text-center'>
              <p className='text-3xl font-bold text-[#5D50C6]'>20+</p>
              <p className='text-sm opacity-60'>Tour Packages</p>
            </div>
            <div className='text-center'>
              <p className='text-3xl font-bold text-[#5D50C6]'>1240+</p>
              <p className='text-sm opacity-60'>Hotel Deals</p>
            </div>
            <div className='text-center'>
              <p className='text-3xl font-bold text-[#5D50C6]'>5234+</p>
              <p className='text-sm opacity-60'>Happy Clients</p>
            </div>
          </div>
        </div>

        {/* RIGHT - Image */}
        <div className='relative flex items-center justify-center order-1 lg:order-2'>
          <div className='relative w-full max-w-md lg:max-w-full aspect-square'>
            <Image 
              src='/frame.png' 
              alt='Kerala Tour' 
              fill
              className='object-contain'
              priority
            />
            <div className='absolute top-1/4 left-0 md:left-4 bg-white rounded-full py-2 px-4 shadow-lg flex items-center gap-2'>
              <Image src='/location.png' alt='location' width={16} height={16} className='w-4 h-4' />
              <p className='font-semibold text-sm whitespace-nowrap'>Top Destinations</p>
            </div>
            <div className='absolute bottom-1/3 right-0 md:right-4 bg-white rounded-full p-2 shadow-lg'>
              <Image src='/icon-place.png' alt='places' width={32} height={32} />
            </div>
            <div className='absolute top-1/2 right-4 bg-white rounded-full p-2 shadow-lg hidden md:block'>
              <Image src='/icon-people.png' alt='people' width={32} height={32} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero