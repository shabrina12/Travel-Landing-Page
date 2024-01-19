import React from 'react'
import Image from 'next/image'
import Button from './Button'

const Hero = () => {
  return (
    <section className=' relative max-container padding-container py-20 sm:gap-8 gap-0 flex flex-col lg:flex-row'>
      <div className='bg-hero h-screen w-screen sm:top-[35%] lg:top-[3%]'/>
      
      {/* LEFT  */}
      <div className='relative z-2 flex flex-1 flex-col gap-8 lg:w-2/5'>
        <div className='flex gap-2 bg-white w-52 text-[#F85E9F] rounded-3xl py-3 px-6'>
          <p>Explore the world!</p>
          <Image src='/icon1.png' alt='icon' width={20} height={20} />
        </div>
        <h1 className='text-8xl font-semibold'>Travel <span className='text-[#F85E9F]'>top destination </span>of the world</h1>
        <p className='text-[#191825] text-opacity-50 text-xl'>We always make our customer happy by providing as many choices as possible </p>
        <div className='btn-container flex gap-4'>
          <Button type='button' title='Get Started' variant='btn_purple' />
          <Button type='button' title='Watch Demo' variant='btn_outline_black' icon='/play-circle.png' />
        </div>
      </div>

      {/* RIGHT */}
      <div className='relative lg:w-3/5 flexCenter flex-1'>
          {/* <div className='w-full h-full relative z-1'>
            <Image src='/frame.png' alt='frame' layout='fill' objectFit='contain' />
          </div>       */}
          <Image src='/frame.png' alt='frame' width={500} height={25} className='h-full w-auto'/>          
        </div>
    </section>
  )
}

export default Hero