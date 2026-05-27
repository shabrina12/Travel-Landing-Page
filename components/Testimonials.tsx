'use client'
import React from 'react'
import Title from './Title'
import Image from 'next/image'
import { Carousel } from 'flowbite-react'

interface TestimonialItem {
  image: string
  name: string
  role: string
  rating: number
  text: string
}

interface TestimonialsProps {
  testimonials?: TestimonialItem[]
  title?: string
  subtitle?: string
}

const DEFAULT_TESTIMONIALS: TestimonialItem[] = [
  {
    image: '/profile2.jpg',
    name: 'Mark Smith',
    role: 'Travel Enthusiast',
    rating: 4,
    text: 'Our trip to Kerala was absolutely magical! The backwaters, tea gardens, and beaches were all stunning. The team at Kerala Tour made everything so seamless.',
  },
  {
    image: '/profile1.jpg',
    name: 'Anna K.',
    role: 'Travel Enthusiast',
    rating: 5,
    text: 'Best vacation ever! The houseboat experience was incredible, and Munnar was so beautiful. Highly recommend their honeymoon packages!',
  },
  {
    image: '/profile3.jpg',
    name: 'Leigh Anne',
    role: 'Travel Blogger',
    rating: 5,
    text: 'As a travel blogger, I have seen many destinations, but Kerala truly stands out. The personalized service from this team made our trip unforgettable.',
  },
]

const Testimonials = ({ 
  testimonials = DEFAULT_TESTIMONIALS,
  title = 'testimonials',
  subtitle = 'What Our Clients Say' 
}: TestimonialsProps) => {
  return (
    <section className='flex flex-col items-center gap-16 bg-[#f9f5ff] mt-10 relative w-full py-20'>
      <div className='px-14 text-center'>
        <Title title={title} subtitle={subtitle} />
      </div>

      <div className='xs:px-8 md:px-20 lg:px-40 w-full'>
        <Carousel pauseOnHover slideInterval={4000} className='py-8'>
          {testimonials.map((item, index) => (
            <TestimonialCard 
              key={index}
              image={item.image}
              name={item.name}
              role={item.role}
              rating={item.rating}
              text={item.text}
            />
          ))}
        </Carousel>     
      </div>
    </section>
  )
}

interface TestimonialCardProps {
  image: string;
  name: string;
  role: string;
  rating: number;
  text: string;
}

const TestimonialCard = ({ image, name, role, rating, text }: TestimonialCardProps) => {
  return (
    <div className='flex gap-6 flex-col h-full items-center justify-center px-4'>
      <Image 
        className='rounded-full' 
        src={image} 
        alt={name} 
        width={100} 
        height={100}
        style={{ objectFit: 'cover' }}
      />
      <h3 className='text-xl font-semibold'>
        <span className='text-[#FF5722]'>{name}</span> / {role}
      </h3>
      <div className='flex gap-1'>
        {[...Array(5)].map((_, i) => (
          <Image 
            key={i}
            src={i < rating ? '/star-yellow.png' : '/star.png'} 
            alt={i < rating ? 'filled star' : 'empty star'} 
            width={24} 
            height={24}
          />
        ))}
      </div>            
      <p className='text-lg lg:w-3/4 xl:w-2/3 text-center text-gray-600 leading-relaxed'>
        &quot;{text}&quot;
      </p>
    </div>
  )
}

export default Testimonials
