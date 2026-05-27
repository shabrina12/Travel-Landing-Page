'use client'
import React from 'react'
import Title from './Title'
import Image from 'next/image'
import { DESTINATIONS } from '@/constants'

interface DestinationItem {
  name: string
  discount: string
  image: string
}

interface DestinationProps {
  destinations?: DestinationItem[]
  title?: string
  subtitle?: string
}

const Destination = ({ 
  destinations = DESTINATIONS,
  title = 'destination',
  subtitle = 'Popular Destination' 
}: DestinationProps) => {
  return (
    <section id="destinations" className='relative max-container padding-container flex flex-col gap-16 py-12'>
      <div className='top'>
        <Title title={title} subtitle={subtitle} />
      </div>

      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6'>
        {destinations.map((dest, index) => (
          <DestinationCard 
            key={dest.name}
            name={dest.name}
            discount={dest.discount}
            image={dest.image}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}

interface DestinationCardProps {
  name: string;
  discount: string;
  image: string;
  index: number;
}

const DestinationCard = ({ name, discount, image, index }: DestinationCardProps) => {
  return (
    <div className='relative group overflow-hidden rounded-3xl cursor-pointer'>
      <div className='aspect-[3/4] relative'>
        <Image
          src={image}
          alt={name}
          fill
          className='object-cover transition-transform duration-500 group-hover:scale-110'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent' />
        
        <div className='absolute top-4 left-4 bg-[#FF5722] text-white px-3 py-1 rounded-full text-sm font-bold'>
          {discount}
        </div>
        
        <div className='absolute bottom-6 left-6'>
          <h3 className='text-white text-xl md:text-2xl font-bold'>{name}</h3>
        </div>
      </div>
    </div>
  )
}

export default Destination
