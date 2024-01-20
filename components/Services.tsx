import React from 'react'
import Title from './Title'
import Image from 'next/image'

const Services = () => {
  return (
    <section className='relative max-container padding-container flex md:flex-row xs:flex-col py-10 md:h-[420px] xs:h-full gap-8'>
      <div className='left xs:w-full md:w-2/5 py-4 flex flex-col justify-center'>
        <Title title='services' firstLine='Our top value' secondLine='categories for you' />
      </div>

      <div className='right xs:w-full md:w-3/5 py-4 px-4 flex gap-8 items-start hide-scrollbar overflow-x-auto'>
        <ServiceCard icon="/destination.png" title='Best Tour Guide' subtitle='What looked like a small patch of purple grass, above five feet.' />
        <ServiceCard icon="/booking.png" title='Easy Booking' subtitle='Square, was moving across the sand in their direction.' />
        <ServiceCard icon="/cloudy.png" title='Weather Forecast' subtitle='What looked like a small patch of purple grass, above five feet.' />
      </div>
    </section>
  )
}

interface ServiceCardProps {
  icon: string;
  title: string;
  subtitle: string;
}

const ServiceCard = ({icon, title, subtitle} : ServiceCardProps) => {
  return (
    <div className='bg-white h-full w-full xs:py-10 md:py-0 min-w-[250px] rounded-3xl shadow-2 px-12 flex flex-col gap-12 items-center justify-center'>
      <Image src={icon} alt='icon' width={50} height={50} />
      <div className='flex flex-col items-center gap-3'>
        <h3 className='text-lg font-bold'>{title}</h3>
        <p className='text-[14px] text-center opacity-60'>{subtitle}</p>
      </div>
    </div>
  )
}

export default Services