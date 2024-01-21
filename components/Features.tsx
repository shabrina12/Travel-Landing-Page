import React from 'react'
import Title from './Title'
import Image from 'next/image'

const Features = () => {
  return (
    <section className='max-container padding-container py-20 gap-16 flex md:flex-row xs:flex-col'>
      {/* LEFT */}
      <div className='xs:w-full md:w-1/2 flex flex-col gap-8'>
        <div className='top'>
          <Title title='Key features' subtitle='We offer best services' />
          <p className='mt-8 opacity-50'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>              
        </div>
        <div className='bottom'>
          <FeaturesCard icon='/icon-feature.png' title='We offer best services' subtitle='Lorem Ipsum is not simply random text' />
          <FeaturesCard icon='/icon-feature2.png' title='Schedule your trip' subtitle='It has roots in a piece of classical' />
          <FeaturesCard icon='/icon-feature3.png' title='Get discounted coupons' subtitle='Lorem Ipsum is not simply random text' />
        </div>
      </div>

      {/* RIGHT */}
      <div className='pt-14 relative right flex xs:w-full md:w-1/2'>
        <Image className='absolute xs:w-[250px] sm:w-[300px] lg:w-[350px] xs:left-[25%] xs:bottom-[70%] sm:left-[33%] sm:bottom-[72%]' src='/feature-object.png' alt='object' width={350} height={350} />
        <Image className='z-20 w-[60%] h-[90%]' src='/feature1.png' alt='feature' width={500} height={500} />
        <Image className='z-30 absolute w-[50%] h-[65%] top-[45%] left-[30%]' src='/feature2.png' alt='feature' width={500} height={500} />
        <div className='z-40 absolute xs:left-[25%] top-[14%] sm:left-[35%] rounded-5xl py-3 px-6 paradise flex items-center gap-2 bg-white shadow'>
          <Image className='xs:w-[20px] md:w-[30px]' src='/icon-map.png' alt='map' width={30} height={30}/>
          <p className='xs:text-[12px] lg:text-lg font-bold'>Paradise on Earth</p>
        </div>
      </div>
    </section>
  )
}

interface FeatureProps {
  icon: string;
  title: string;
  subtitle: string;
}

const FeaturesCard = ({icon, title, subtitle} : FeatureProps) => {
  return (
    <div className='flex items-center xs:w-full xl:w-3/4 gap-4 p-6 rounded-3xl hover:border'>
      <div className='left'>
        <Image src={icon} alt='icon' width={80} height={80} />
      </div>

      <div>
        <h4 className='text-2xl font-semibold'>{title}</h4>
        <p className='text-lg opacity-50'>{subtitle}</p>
      </div>
    </div>
  )
}

export default Features