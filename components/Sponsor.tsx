import React from 'react'
import Image from 'next/image'

const Sponsor = () => {
  return (
    <section className='relative'>
        <Image className='absolute md:bottom-[30%] lg:left-[1.5%] sm:bottom-[50%]' src='/orange-triangle.png' alt='orange triangle' width={50} height={100} />
        <div className='max-container padding-container py-14 md:flex justify-between items-center sm:grid sm:grid-cols-3 sm:gap-4'>
            <Image src='/sponsor1.png' alt='tripadvisor' width={140} height={40} />
            <Image src='/sponsor2.png' alt='expedia' width={120} height={40}  />
            <Image src='/sponsor3.png' alt='bookingcom' width={140} height={40}  />
            <Image src='/sponsor4.png' alt='airbnb' width={120} height={40}/>
            <Image src='/sponsor5.png' alt='orbitz' width={120} height={40} />
        </div>
    </section>
  )
}


export default Sponsor