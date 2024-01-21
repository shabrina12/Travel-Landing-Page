import React from 'react'
import Title from './Title'
import Image from 'next/image'

const TravelPoint = () => {
  return (
    <section className='relative max-container padding-container py-20 flex xs:flex-col md:flex-row items-end'>
      <Image className='absolute z-30 xs:bottom-[60%] md:bottom-[5%] md:left-[-5%] lg:left-[5%] xs:w-[500px] xs:h-[500px] md:w-[570px] md:h-[570px] lg:w-[650px] lg:h-[650px]' src='/person.png' alt='person' width={650} height={700}/>
      
      {/* LEFT */}
      <div className='sm:w-[65%] xs:h-[500px] xs:w-full'>
        <div className='absolute z-20 gradient-purple rounded-[50%] blur-sm w-[90px] h-[90px] xs:right-[20%] xs:top-0 md:right-[50%] md:top-[20%] lg:top-[10%] xl:right-[55%] xl:top-[20px]' />
        <div className='absolute z-20 gradient-purple rounded-[50%] blur-sm w-[50px] h-[50px] xs:left-[5%] xs:top-[5%] md:top-[32%] lg:top-[32%] xl:left-0 xl:top-[17%]' />
        <div className='absolute z-20 bg-[#FF5722] rounded-[50%] blur-sm w-[30px] h-[30px] xs:right-[30%] xs:bottom-[70%] sm:right-[20%] md:right-[60%] md:bottom-[25%] lg:right-[55%] lg:bottom-[30%] xl:bottom-0 xl:right-[55%] xl:top-[65%]' />
        <div className='absolute z-20 bg-[#FF5722] rounded-[50%] blur-sm w-[20px] h-[20px] xs:left-[60%] xs:bottom-[83%] sm:bottom-[81%] sm:left-[65%] md:left-[35%] md:bottom-[40%] lg:bottom-[50%] xl:bottom-0 xl:left-[37%] xl:top-[45%]' />
        <div className='absolute left-[-5%] rounded-e-[500px] md:w-[55%] xs:w-[90%] xs:h-[400px] md:h-[500px] bg-[#FACD49]' />
        <div className='absolute z-20 py-2 px-4 rounded-3xl bg-white flex items-center gap-2 shadow xs:right-[5%] xs:top-[10%] md:right-[40%] md:top-[35%] lg:top-[30%] xl:right-[48%] xl:top-[20%]'>
          <Image src='/discount.png' alt='disc' width={40} height={40} />
          <p className='md:text-md lg:text-xl font-semibold'>Discounted Price</p>
        </div>
      </div>

      {/* RIGHT */}
      <div className='relative md:w-[35%] xs:w-full flex flex-col gap-12'>
        <Image className='absolute right-[-10%] lg:top-[50%] xl:top-[45%] xs:top-[45%]' src='/travelpoin-object.png' alt='object' width={80} height={80} />
        <div className='top flex flex-col gap-8'>
          <Title title='Travel Point' subtitle='We helping you find your dream location' />
          <p className='text-lg opacity-50'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>   
        </div>
        <div className='bottom grid grid-cols-2 gap-8'>
          <TravelPointCard title='500+' subtitle='Holiday Package' />
          <TravelPointCard title='100' subtitle='Luxury Hotel' />
          <TravelPointCard title='7' subtitle='Premium Airlines' />
          <TravelPointCard title='2k+' subtitle='Happy Customer' />
        </div>
      </div>
    </section>
  )
}

interface TravelPointCardProps {
  title: string;
  subtitle: string;
}

const TravelPointCard = ({title, subtitle} : TravelPointCardProps) => {
  return (
    <div className='border py-6 px-4 rounded-3xl flexCenter flex-col gap-2 bg-white'>
      <h3 className='text_orange text-3xl font-bold'>{title}</h3>
      <p className='font-semibold text-center'>{subtitle}</p>
    </div>
  )
}

export default TravelPoint