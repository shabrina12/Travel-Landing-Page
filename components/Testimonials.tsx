'use client'
import React from 'react'
import Title from './Title'
import Image from 'next/image';
import { Carousel } from 'flowbite-react';

const Testimonials = () => {
  return (
    <section className='flex flex-col items-center gap-20 bg-testimonial mt-20 bg-black relative w-full h-[900px]'>
      {/* <div className='bg-testimonial h-screen w-screen left-[-3%]  ' /> */}
      
      <div className='px-14 text-center'>
        <Title title='testimonials' subtitle='Trust our clients' />
      </div>

      <div className='px-40 h-[400px] w-full border border-red-500'>
        <Carousel pauseOnHover slideInterval={3000} className='py-4'>
          <div className='flex gap-6 flex-col h-full items-center justify-center'>
            <Image className='rounded-[50%]' src="/profile2.jpg" alt="..." width={120} height={100} />
            <h1 className='text-xl font-semibold'><span className='text-[#FF5722]'>Mark Smith</span> / Travel Enthusiast</h1>
            <div className='flex gap-2'>
              <Image src='/star-yellow.png' alt='rating' width={30} height={30} />
              <Image src='/star-yellow.png' alt='rating' width={30} height={30} />
              <Image src='/star-yellow.png' alt='rating' width={30} height={30} />
            </div>            
            <p className='text-lg'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
              in a piece of classical Latin literature from 45 BC.
            </p>
          </div>
          <div className='flex gap-6 flex-col h-full items-center justify-center'>
            <Image className='rounded-[50%]' src="/profile1.jpg" alt="..." width={120} height={100} />
            <h1 className='text-xl font-semibold'><span className='text-[#FF5722]'>Mark Smith</span> / Travel Enthusiast</h1>
            <div className='flex gap-2'>
              <Image src='/star-yellow.png' alt='rating' width={30} height={30} />
              <Image src='/star-yellow.png' alt='rating' width={30} height={30} />
              <Image src='/star-yellow.png' alt='rating' width={30} height={30} />
            </div>            
            <p className='text-lg'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
              in a piece of classical Latin literature from 45 BC.
            </p>
          </div>
          <div className='flex gap-6 flex-col h-full items-center justify-center'>
            <Image className='rounded-[50%]' src="/profile2.jpg" alt="..." width={120} height={100} />
            <h1 className='text-xl font-semibold'><span className='text-[#FF5722]'>Mark Smith</span> / Travel Enthusiast</h1>
            <div className='flex gap-2'>
              <Image src='/star-yellow.png' alt='rating' width={30} height={30} />
              <Image src='/star-yellow.png' alt='rating' width={30} height={30} />
              <Image src='/star-yellow.png' alt='rating' width={30} height={30} />
            </div>            
            <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
          </div>
          <div className='flex gap-6 flex-col h-full items-center justify-center'>
            <Image className='rounded-[50%]' src="/profile1.jpg" alt="..." width={120} height={100} />
            <h1 className='text-xl font-semibold'><span className='text-[#FF5722]'>Mark Smith</span> / Travel Enthusiast</h1>
            <div className='flex gap-2'>
              <Image src='/star-yellow.png' alt='rating' width={30} height={30} />
              <Image src='/star-yellow.png' alt='rating' width={30} height={30} />
              <Image src='/star-yellow.png' alt='rating' width={30} height={30} />
            </div>            
            <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
          </div>
        </Carousel>     
      </div>
    </section>
  )
}




/*

<TestimonialCard Image='/profile2.jpg' name='Paradise Beach, Bantayan Island' rating='/star-yellow.png' review='$550.16'  />

interface TestimonialCardProps {
  Image: string;
  name: string;
  rating: string;
  review: string;
}

const TestimonialCard = ({Image, name, rating, review} : TestimonialCardProps) => {
  return (
    <div className='flexCenter flex-col gap-8'>
      <Image className='rounded-[50%] w-[100px] h-[100px]' src={Image} alt='profile' width={100} height={100} />
      <h3>{name}</h3>
      <Image src={rating} alt='rating' width={30} height={30} />
      <p>{review}</p>
    </div>
  )
} */

export default Testimonials