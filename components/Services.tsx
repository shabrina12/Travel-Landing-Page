'use client'
import React from 'react'
import Title from './Title'
import { Hotel, Ship, Car, Headphones, CreditCard, Star, LucideIcon } from 'lucide-react'
import { SERVICES } from '@/constants'

const iconMap: Record<string, LucideIcon> = {
    Hotel,
    Ship,
    Car,
    Headphones,
    CreditCard,
    Star,
}

interface ServiceItem {
  icon: string
  title: string
  subtitle: string
}

interface ServicesProps {
  services?: ServiceItem[]
  title?: string
  subtitle?: string
}

const Services = ({ 
  services = SERVICES,
  title = 'our services',
  subtitle = 'Why Book With Us' 
}: ServicesProps) => {
  return (
    <section className='relative max-container padding-container py-20'>
      <div className='text-center mb-12'>
        <Title title={title} subtitle={subtitle} />
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {services.map((service, index) => (
          <ServiceCard 
            key={service.title}
            icon={service.icon}
            title={service.title}
            subtitle={service.subtitle}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}

interface ServiceCardProps {
  icon: string;
  title: string;
  subtitle: string;
  index: number;
}

const ServiceCard = ({ icon, title, subtitle, index }: ServiceCardProps) => {
  const IconComponent = iconMap[icon]
  return (
    <div className='bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center text-center gap-4'>
      <div className='w-20 h-20 bg-[#f3f0ff] rounded-full flex items-center justify-center'>
        {IconComponent && <IconComponent size={40} color='#4f46e5' />}
      </div>
      <h3 className='text-xl font-bold text-[#191825]'>{title}</h3>
      <p className='text-gray-600 text-sm leading-relaxed'>{subtitle}</p>
    </div>
  )
}

export default Services
