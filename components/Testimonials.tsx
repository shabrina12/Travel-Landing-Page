'use client'
import React from 'react'
import Title from './Title'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Testimonials = () => {
  return (
    <section className='flex flex-col items-center gap-20 bg-testimonial py-20 relative w-full h-full'>
      {/* <div className='bg-testimonial h-screen w-screen left-[-3%]  ' /> */}
      
      <div className='px-14 text-center'>
        <Title title='testimonials' subtitle='Trust our clients' />
      </div>

      <div className='px-14 border border-red-500'>
      <Swiper
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
        >
          <SwiperSlide className='pb-12'>
            <TestimonialCard img='/profile2.jpg' name='Paradise Beach, Bantayan Island' rating='/star-yellow.png' review='$550.16'  />
          </SwiperSlide>
          <SwiperSlide className='pb-12'>
            <TestimonialCard img='/profile2.jpg' name='Paradise Beach, Bantayan Island' rating='/star-yellow.png' review='$550.16'  />
          </SwiperSlide>
          <SwiperSlide className='pb-12'>
            <TestimonialCard img='/profile2.jpg' name='Paradise Beach, Bantayan Island' rating='/star-yellow.png' review='$550.16'  />
          </SwiperSlide>
          <SwiperSlide className='pb-12'>
            <TestimonialCard img='/profile2.jpg' name='Paradise Beach, Bantayan Island' rating='/star-yellow.png' review='$550.16'  />
          </SwiperSlide>
          <SwiperSlide className='pb-12'>
            <TestimonialCard img='/profile2.jpg' name='Paradise Beach, Bantayan Island' rating='/star-yellow.png' review='$550.16'  />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

interface TestimonialCardProps {
  img: string;
  name: string;
  rating: string;
  review: string;
}

const TestimonialCard = ({img, name, rating, review} : TestimonialCardProps) => {
  return (
    <div className='flexCenter flex-col gap-8'>
      <Image className='rounded-[50%] w-[100px] h-[100px]' src={img} alt='profile' width={100} height={100} />
      <h3>{name}</h3>
      <Image src={rating} alt='rating' width={30} height={30} />
      <p>{review}</p>
    </div>
  )
}

export default Testimonials