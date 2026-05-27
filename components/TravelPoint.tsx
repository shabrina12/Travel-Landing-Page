'use client'
import React from 'react'
import Title from './Title'
import Image from 'next/image'
import { STATS } from '@/constants'

interface StatItem {
  value: string
  label: string
}

interface TravelPointProps {
  stats?: StatItem[]
  title?: string
  subtitle?: string
}

const TravelPoint = ({ 
  stats = STATS,
  title = 'about us',
  subtitle = 'Welcome to Kerala Tour Information' 
}: TravelPointProps) => {
  return (
    <section className='relative max-container padding-container py-20'>
      <div className='flex flex-col lg:flex-row gap-16 items-center'>
        {/* LEFT - About Section */}
        <div className='flex-1 flex flex-col gap-8'>
          <Title title={title} subtitle={subtitle} />
          <p className='text-lg text-gray-600 leading-relaxed'>
            At Kerala Tour, we are passionate about crafting unforgettable travel experiences that immerse you in the true essence of Kerala. Our expert team of travel enthusiasts and local guides are dedicated to curating personalized itineraries that cater to your interests and preferences.
          </p>
          <p className='text-lg text-gray-600 leading-relaxed'>
            Embark on a journey of a lifetime with us as we unveil the hidden gems and breathtaking landscapes of &quot;God&apos;s Own Country.&quot;
          </p>

          {/* Stats */}
          <div className='grid grid-cols-3 gap-6 pt-4'>
            {stats.map((stat) => (
              <div key={stat.label} className='text-center'>
                <h3 className='text-3xl md:text-4xl font-bold text-[#5D50C6]'>{stat.value}</h3>
                <p className='text-sm text-gray-600 mt-1'>{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Images */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 pt-4'>
            <Image src='/about-1.jpg' alt='Kerala scenery' width={150} height={150} className='rounded-2xl object-cover w-full aspect-square' />
            <Image src='/about-2.jpg' alt='Kerala scenery' width={150} height={150} className='rounded-2xl object-cover w-full aspect-square' />
            <Image src='/about-3.jpg' alt='Kerala scenery' width={150} height={150} className='rounded-2xl object-cover w-full aspect-square' />
            <Image src='/about-4.jpg' alt='Kerala scenery' width={150} height={150} className='rounded-2xl object-cover w-full aspect-square' />
          </div>
        </div>

        {/* RIGHT - Decorative Image */}
        <div className='flex-1 relative'>
          <div className='relative aspect-square max-w-lg mx-auto'>
            <Image 
              src='/feature1.png' 
              alt='Kerala Tour' 
              fill
              className='object-contain'
            />
          </div>
          <div className='absolute -top-4 -right-4 w-20 h-20 bg-[#FACD49] rounded-full -z-10' />
          <div className='absolute -bottom-4 -left-4 w-32 h-32 bg-[#F85E9F] rounded-full -z-10 opacity-20' />
        </div>
      </div>
    </section>
  )
}

export default TravelPoint
