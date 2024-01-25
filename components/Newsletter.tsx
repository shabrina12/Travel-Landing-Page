import React from 'react'
import Image from 'next/image'

const Newsletter = () => {
  return (
    <section className='relative'>
      <Image className='xs:w-[100px] lg:w-[150px] absolute xs:left-[2%] lg:left-[4%] top-[-8%]' src='/newsletter-vector.png' alt='vector' width={150} height={150} />
      
      <div className='bg-[#fff9e8] xs:mx-8 lg:mx-24 xs:px-8 lg:padding-container xs:py-16 lg:py-28 flex flex-col xs:gap-12 lg:gap-20'>
        <div className='flexCenter flex-col gap-4'>
          <h3 className='text_pink xs:text-lg lg:text-2xl font-bold text-center newsletter'>SUBSCRIBE TO OUR NEWSLETTER</h3>
          <h1 className='font-bold xs:text-2xl sm:text-3xl md:text-4xl lg:text-7xl text-center'>Prepare yourself & let’s explore the beauty of the world</h1>
        </div>

        <div className='flexCenter xs:gap-4 lg:gap-8 w-full'>
          <input className='xs:py-4 lg:py-6 px-8 rounded-2xl w-full' type='text' placeholder='Your Email' />
          <button className='rounded-2xl bg-[#5D50C6] xs:text-sm lg:text-lg xs:px-4 lg:px-12 xs:py-4 lg:py-6 text-white'>Subscribe</button>
        </div>   
      </div>
     
    </section>
  )
}

export default Newsletter