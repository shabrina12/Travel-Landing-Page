import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Travlog App',
  description: 'Travel UI/UX App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='overflow-x-hidden'>
        <div className='circle-pink h-screen w-screen lg:top-[-40%] lg:left-[-15%;] md:left-[-20%;] sm:top-[-50%] sm:left-[-25%]'/>
        <div className='circle-yellow h-screen w-screen xl:top-[110%] left-[80%] sm:top-[180%]'/>
        <Navbar />
        <main className='relative overflow-hidden'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
