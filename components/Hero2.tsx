import React from 'react'
import Image from 'next/image'
import Button from './Button'

const Hero = () => {
  return (
    <section className='border border-black relative'>
      {/* <div className='circle' /> */}

      <div className='relative flex lg:flex-row flex-col py-16'>
        {/* LEFT */}
        <div className='flex flex-1 flex-col gap-8 lg:w-2/5'>
          <div className='flex gap-2 bg-gray-100 w-52 text-[#F85E9F] rounded-3xl py-3 px-6'>
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
        <div className='lg:relative lg:w-3/5 border border-red-400'>
          <div className='bg-hero w-full h-full'/>
          <div className='w-full h-full'>
            <Image src='/frame.png' alt='frame' layout='fill' objectFit='contain' />
          </div>      
        </div>

      </div>
    
    </section>
  )
}

export default Hero