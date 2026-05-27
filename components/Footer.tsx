import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FOOTER_LINKS, FOOTER_CONTACT_INFO, SOCIALS, CONTACT_INFO } from '@/constants'

interface FooterLinkGroup {
  title: string
  links: string[]
}

interface FooterContactInfo {
  title: string
  address: string
  phone: string
  email: string
}

interface ContactInfo {
  phone: string
  email: string
  whatsapp: string
  address: string
}

interface FooterProps {
  footerLinks?: FooterLinkGroup[]
  contactInfo?: FooterContactInfo
  contactDetails?: ContactInfo
  companyName?: string
}

const Footer = ({ 
  footerLinks = FOOTER_LINKS,
  contactInfo = FOOTER_CONTACT_INFO,
  contactDetails = CONTACT_INFO,
  companyName = 'Kerala Tour'
}: FooterProps) => {
  return (
    <footer className='relative max-container padding-container pt-20 pb-10 bg-[#191825] text-white'>
      <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#F85E9F] via-[#5D50C6] to-[#FACD49]' />
      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16'>
        {/* LOGO & TEXT */}
        <div className='flex flex-col gap-6'>
          <Link href='/' className='flex items-center gap-3'>
            <Image src='/logo_bh.svg' alt={companyName} width={50} height={50} />
            <div>
              <h2 className='font-bold text-xl'>{companyName}</h2>
              <p className='text-sm opacity-70'>Information</p>
            </div>
          </Link>
          <p className='opacity-70 leading-relaxed'>
            At Kerala Tour, we are passionate about crafting unforgettable travel experiences that immerse you in the true essence of Kerala.
          </p>

          {/* SOCIAL MEDIA */}
          <div className='flex gap-4'>
            <a href='https://www.facebook.com/keralatour.information' target='_blank' rel='noopener noreferrer' className='w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#5D50C6] transition-colors'>
              <Image src='/fb.png' alt='Facebook' width={20} height={20} />
            </a>
            <a href='https://www.instagram.com/keralatour.info/' target='_blank' rel='noopener noreferrer' className='w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#5D50C6] transition-colors'>
              <Image src='/instagram.png' alt='Instagram' width={20} height={20} />
            </a>
            <a href={`https://api.whatsapp.com/send?phone=${contactDetails.whatsapp}`} target='_blank' rel='noopener noreferrer' className='w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#25D366] transition-colors'>
              <span className='text-lg'>📱</span>
            </a>
          </div>
        </div>

        {/* Destinations */}
        {footerLinks[0] && (
          <div className='flex flex-col gap-4'>
            <h3 className='text-xl font-bold'>{footerLinks[0].title}</h3>
            <ul className='flex flex-col gap-3 mt-4'>
              <li>
                <Link href='/' className='opacity-70 hover:opacity-100 transition-opacity'>
                  Kerala
                </Link>
              </li>
              <li>
                <Link href='/tamil-nadu' className='opacity-70 hover:opacity-100 transition-opacity'>
                  Tamil Nadu
                </Link>
              </li>
              <li>
                <Link href='/karnataka' className='opacity-70 hover:opacity-100 transition-opacity'>
                  Karnataka
                </Link>
              </li>
              <li>
                <Link href='/Lakshadweep' className='opacity-70 hover:opacity-100 transition-opacity'>
                  Lakshadweep
                </Link>
              </li>
            </ul>
          </div>
        )}

        {/* Company */}
        {footerLinks[1] && (
          <div className='flex flex-col gap-4'>
            <h3 className='text-xl font-bold'>{footerLinks[1].title}</h3>
            <ul className='flex flex-col gap-3 mt-4'>
              {footerLinks[1].links.map((link) => (
                <li key={link}>
                  <Link href='/' className='opacity-70 hover:opacity-100 transition-opacity'>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Contact */}
        <div className='flex flex-col gap-4'>
          <h3 className='text-xl font-bold'>{contactInfo.title}</h3>
          <div className='flex flex-col gap-4 mt-4'>
            <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className='flex items-start gap-3 opacity-70 hover:opacity-100 transition-opacity'>
              <span>📞</span>
              <span>{contactInfo.phone}</span>
            </a>
            <a href={`mailto:${contactInfo.email}`} className='flex items-start gap-3 opacity-70 hover:opacity-100 transition-opacity'>
              <span>✉️</span>
              <span>{contactInfo.email}</span>
            </a>
            <div className='flex items-start gap-3 opacity-70'>
              <span>📍</span>
              <span className='text-sm'>{contactInfo.address}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4'>
        <p className='opacity-70 text-sm text-center md:text-left'>
          © {new Date().getFullYear()} KeralaTour.info | Powered by <a href='https://keralatour.info' target='_blank' rel='noopener noreferrer' className='hover:text-[#F85E9F]'>Before Holiday</a>
        </p>
        <div className='flex gap-6 text-sm opacity-70'>
          <Link href='/privacy-policy' className='hover:opacity-100 transition-opacity'>Privacy Policy</Link>
          <Link href='/terms-and-conditions' className='hover:opacity-100 transition-opacity'>Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
