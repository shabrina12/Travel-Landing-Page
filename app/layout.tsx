import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import MetaPixel from '@/components/MetaPixel'
import { metadata } from '@/components/Seo'
import { LeadPopupProvider } from '@/components/LeadPopupForm'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='overflow-x-hidden scroll-smooth'>
      <head>
        <link rel="canonical" href="https://keralatour.info/" />
        <link rel="icon" href="/favicon.ico" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-53DHTWZL');`
        }}
      />
      </head>
      <body className='relative'>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-53DHTWZL"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <MetaPixel />
        <div className='circle-pink hidden lg:block'/>
        <div className='circle-yellow hidden xl:block'/>
        <LeadPopupProvider>
          <Navbar />
          <main className='relative overflow-hidden'>
            {children}
          </main>
          <Footer />
          <WhatsAppFloat />
        </LeadPopupProvider>
      </body>
    </html>
  )
}
