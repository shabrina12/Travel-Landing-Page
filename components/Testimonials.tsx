'use client'
import React from 'react'
import Title from './Title'
import Image from 'next/image';
import { Carousel } from 'flowbite-react';

const Testimonials = () => {
  return (
    <section className='flex flex-col items-center gap-20 bg-testimonial mt-10 relative w-full h-[800px]'>
      {/* <div className='bg-testimonial h-screen w-screen left-[-3%]  ' /> */}
      
      <div className='px-14 text-center'>
        <Title title='testimonials' subtitle='Trust our clients' />
      </div>

      <div className='px-40 h-[400px] w-full'>
        <Carousel pauseOnHover slideInterval={2000} className='py-4'>
          <div className='flex gap-6 flex-col h-full items-center justify-center'>
            <Image className='rounded-[50%]' src="/profile2.jpg" alt="..." width={120} height={100} />
            <h1 className='text-xl font-semibold'><span className='text-[#FF5722]'>Mark Smith</span> / Travel Enthusiast</h1>
            <div className='flex gap-2'>
              <Image src='/star-yellow.png' alt='rating' width={30} height={30} />
              <Image src='/star-yellow.png' alt='rating' width={30} height={30} />
              <Image src='/star-yellow.png' alt='rating' width={30} height={30} />
            </div>            
            <p className='text-lg lg:w-3/4 xl:w-1/2 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
          </div>
          <div className='flex gap-6 flex-col h-full items-center justify-center'>
            <Image className='rounded-[50%]' src="/profile1.jpg" alt="..." width={120} height={100} />
            <h1 className='text-xl font-semibold'><span className='text-[#FF5722]'>Anna K.</span> / Travel Enthusiast</h1>
            <div className='flex gap-2'>
              <Image src='/star-yellow.png' alt='rating' width={30} height={30} />
              <Image src='/star-yellow.png' alt='rating' width={30} height={30} />
              <Image src='/star-yellow.png' alt='rating' width={30} height={30} />
              <Image src='/star-yellow.png' alt='rating' width={30} height={30} />
            </div>            
            <p className='text-lg lg:w-3/4 xl:w-1/2 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
          </div>
          <div className='flex gap-6 flex-col h-full items-center justify-center'>
            <Image className='rounded-[50%]' src="/profile3.jpg" alt="..." width={120} height={100} />
            <h1 className='text-xl font-semibold'><span className='text-[#FF5722]'>Leigh Anne</span> / Model</h1>
            <div className='flex gap-2'>
              <Image src='/star-yellow.png' alt='rating' width={30} height={30} />
              <Image src='/star-yellow.png' alt='rating' width={30} height={30} />
              <Image src='/star-yellow.png' alt='rating' width={30} height={30} />
              <Image src='/star-yellow.png' alt='rating' width={30} height={30} />
              <Image src='/star-yellow.png' alt='rating' width={30} height={30} />
            </div>            
            <p className='text-lg lg:w-3/4 xl:w-1/2 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
          </div>
        </Carousel>     
      </div>
    </section>
  )
}


export default Testimonials