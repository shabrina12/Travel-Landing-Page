import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kerala Tour Packages for Couple & Family | BH Holidays',
  description: 'Book Kerala tour packages for couples & families with BH Holidays. Explore Munnar, Alleppey houseboats & Thekkady. Best prices for 3–7 days trips. Call now!',
  robots: 'index, follow',
  authors: [{ name: 'BH Holidays' }],
  alternates: {
    canonical: 'https://keralatour.info/',
  },
  openGraph: {
    title: 'Kerala Tour Packages | BH Holidays',
    description: 'Customized Kerala tour packages for couples & families. Best deals on Munnar, Alleppey & Thekkady trips.',
    url: 'https://keralatour.info/',
    siteName: 'Kerala Tour Information by BH Holidays',
    type: 'website',
    images: [
      {
        url: 'https://keralatour.info/img/KeralaTravelPackage.webp',
        width: 1200,
        height: 630,
        alt: 'Kerala Tour Packages',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kerala Tour Packages | BH Holidays',
    description: 'Affordable Kerala packages for couples & families. Munnar, Alleppey & more.',
    images: ['https://keralatour.info/img/KeralaTravelPackage.webp'],
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function Seo() {
  return null
}