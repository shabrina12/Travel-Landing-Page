'use client'
import React from 'react'
import Title from './Title'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination } from 'swiper/modules';

const Destination = () => {
  return (
    <section className='relative max-container padding-container flex flex-col gap-16 py-12'>
      <Image className='absolute xs:bottom-[65%] xs:right-[5%] md:bottom-[70%] xl:right-0' src='/yellowx.png' alt='yellow object' width={100} height={100} />

      <div className='top'>
        <Title title='top destination' firstLine='Explore top destination' />
      </div>

      <div className='bottom flex items-center justify-between'>
        <Swiper
          slidesPerView={3}
          spaceBetween={60}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          breakpoints={{
            '@0.00': {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            '@0.75': {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            '@1.15': {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            '@1.60': {
              slidesPerView: 3,
              spaceBetween: 60,
            },
          }}
        >
          <SwiperSlide className='pb-12'>
            <DestinationCard img='/beach2.jpg' place='Paradise Beach, Bantayan Island' country='Rome, Italy' price='$550.16' rating='4.8' />
          </SwiperSlide>
          <SwiperSlide>
            <DestinationCard img='/ocean.jpg' place='Ocean with full of Colors' country='Maldives' price='$20.99' rating='4.5' />
          </SwiperSlide>
          <SwiperSlide>
            <DestinationCard img='/mountain.jpg' place='Mountain View, Above the cloud' country='United Arab Emeries' price='$150.99' rating='5.0' />
          </SwiperSlide>
          <SwiperSlide>
            <DestinationCard img='/snorkeling.jpg' place='Gili Trawangan Island' country='Lombok, Indonesia' price='$750.00' rating='4.8' />
          </SwiperSlide>
          <SwiperSlide>
            <DestinationCard img='/boat.jpg' place='Kuta Island' country='Bali, Indonesia' price='$670.50' rating='4.6' />
          </SwiperSlide>
        </Swiper>
      </div>
      
    </section>
  )
}

interface DestinationCardProps {
  img: string;
  place: string;
  country: string;
  price: string;
  rating: string;
}

const DestinationCard = ({img, place, country, price, rating} : DestinationCardProps) => {
  return (
    <div className='bg-white h-[500px] w-[340px] pb-4 rounded-3xl shadow-2 flex flex-col gap-4'>
      <div className='h-2/3 rounded-t-3xl'>
        <Image className='h-full w-full rounded-t-3xl' src={img} alt='img' width={150} height={150} />
      </div>

      <div className='h-1/3 px-6'>
        <div className='place-price flex justify-between'>
          <p className='font-bold text-lg w-1/2'>{place}</p>
          <p className='text_pink font-bold text-lg'>{price}</p>
        </div>
        <p className='mt-3'>{country}</p>
        <div className='mt-6 flex gap-1 items-center'>
          <p className='text_orange font-bold'>{rating}</p>
          <Image className='h-full' src='/star.png' alt='star' width={20} height={5} />
        </div>
      </div>    
    </div>
  )
}


export default Destination