import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { NAV_LINKS } from '@/constants'
import Button from './Button'

const Navbar = () => {
  return (
    <nav className='max-container padding-container flex justify-between py-8'>
        <div className='left'>
            <Link href='/' className='flexCenter gap-2'>
                <Image src='/travlog_logo.svg' alt='logo' width={40} height={40}/>
                <h2 className='font-bold text-lg'>Travlog</h2>
            </Link>            
        </div>

        <div className='middle'>
            <ul className="hidden h-full gap-12 lg:flex">
                {NAV_LINKS.map((link) => (
                    <Link href={link.href} key={link.key} className="flexCenter cursor-pointer transition-all hover:font-bold">
                        {link.label}
                    </Link>
                ))}
            </ul>
        </div>

        <div className='right lg:flexCenter hidden gap-4'>
            <Button type='button' title='Login' variant='btn_white' />
            <Button type='button' title='Sign Up' variant='btn_purple' />
        </div>
    </nav>
  )
}

export default Navbar