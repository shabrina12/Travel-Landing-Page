"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { NAV_LINKS } from '@/constants'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import { useLeadPopup } from './LeadPopupForm'

interface NavLink {
  key: string
  href: string
  label: string
}

interface NavbarProps {
  links?: NavLink[]
  logoText?: string
}

const Navbar = ({ 
  links = NAV_LINKS,
  logoText = 'Kerala Tour' 
}: NavbarProps) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { openPopup } = useLeadPopup();

  return (
    <nav className='max-container padding-container flex justify-between py-8'>
        <div className='left'>
            <Link href='/' className='flexCenter gap-2'>
                <Image src='/logo_bh.svg' alt='logo' width={40} height={40}/>
                <h2 className='font-bold text-lg'>{logoText}</h2>
            </Link>            
        </div>

        <div className='middle'>
            <ul className="hidden h-full gap-12 lg:flex">
                {links.map((link) => (
                    <Link href={link.href} key={link.key} className="flexCenter cursor-pointer transition-all hover:font-bold">
                        {link.label}
                    </Link>
                ))}
            </ul>

            {/*-------------- NAVBAR LINKS MOBILE -----------------*/}
            {navbarOpen ? 
                <ul className='lg:hidden sm:block flex flex-col'>
                    {links.map((link) => (
                        <li key={link.key} className="flexCenter cursor-pointer pb-2 transition-all hover:font-bold">
                            <Link href={link.href}>
                                {link.label}
                            </Link> 
                        </li>
                    ))}
                </ul>
                : null
            } 
        </div>

        <div className='right lg:flexCenter hidden gap-4'>
            <button onClick={openPopup} className='bg-[#5D50C6] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#4a3fb0] transition-colors'>
                Get Quote
            </button>
        </div>         

        {/*-------------- MENU ICON MOBILE -----------------*/}
        <div className="block cursor-pointer lg:hidden">
        {
            !navbarOpen ? (
                <button onClick={() => setNavbarOpen(true)}>
                    <Bars3Icon className='h-5 w-5' />
                </button>
            ) : (
                <button onClick={() => setNavbarOpen(false)}>
                    <XMarkIcon className='h-5 w-5' />
                </button>
            )
        }
        </div> 
    </nav>
  )
}

export default Navbar