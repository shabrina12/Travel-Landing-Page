import React from 'react'
import Image from 'next/image'
import Button from './Button'

const Hero = () => {
  return (
    <section className='relative max-container padding-container xs:py-12 sm:py-28 xs:gap-16 sm:gap-32 gap-0 flex flex-col xl:flex-row'>
      <div className='bg-hero h-screen w-screen xs:right-[5%] xs:top-[45%] sm:right-[5%] xl:top-[5%] xl:right-[-24%]'/>
      
      {/* LEFT  */}
      <div className='relative z-2 flex flex-1 flex-col gap-8 xl:w-2/5'>
        <div className='flex shadow gap-2 bg-white w-[215px] text-[#F85E9F] rounded-3xl py-3 px-6'>
          <p className='font-semibold'>Explore the world!</p>
          <Image src='/icon1.png' alt='icon' width={20} height={20} />
        </div>
        <h1 className='sm:text-8xl xs:text-6xl font-semibold'>Travel <span className='text-[#F85E9F]'>top destination </span>of the world</h1>
        <p className='text-[#191825] text-opacity-50 text-xl'>We always make our customer happy by providing as many choices as possible </p>
        <div className='btn-container flex gap-4'>
          <Button type='button' title='Get Started' variant='btn_purple shadow' />
          <Button type='button' title='Watch Demo' variant='btn_outline_black' icon='/play-circle.png' />
        </div>
      </div>

      {/* RIGHT */}
      <div className='relative z-1 xl:w-3/5 flexCenter first-line:flex-1'>
        <Image src='/frame.png' alt='frame' width={500} height={25} className='h-full w-auto'/>          
        <Image className='absolute xs:left-[0] md:left-[15%] lg:left-[22%] xl:left-[5%] top-[42%]' src='/icon-place.png' alt='icon place' width={60} height={60} />
        <Image className='absolute md:right-[30%] xs:right-[15%] xs:top-[90%]' src='/icon-people.png' alt='icon people' width={60} height={60} />
        <div className='absolute shadow sm:left-[75%] sm:top-[65%] xs:top-[50%] xs:left-[85%] flex sm:flex-row xs:flex-col xs:flexCenter xs:text-center gap-2 bg-white rounded-3xl py-3 px-6'>
          <Image src='/location.png' alt='location' width={20} height={20} />
          <p className='font-semibold'>Top Places</p>
        </div> 
      </div>
    </section>
  )
}

export default Hero