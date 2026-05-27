import Hero from '@/components/Hero'
import Services from '@/components/Services'
import TourPackages from '@/components/TourPackages'
import Destination from '@/components/Destination'
import TravelPoint from '@/components/TravelPoint'
import Testimonials from '@/components/Testimonials'
import ContactForm from '@/components/ContactForm'
import { KARNATAKA_PACKAGES } from '@/constants'

export const metadata = {
  title: 'Karnataka Tour Packages | Best Prices | keralatour.info',
  description: 'Book Karnataka tour packages. Explore Mysore, Coorg, Hampi & more. Best deals on 3-7 days trips. Custom itineraries available.',
}

export default function KarnatakaPage() {
  return (
    <>
      <Hero packages={KARNATAKA_PACKAGES} title="Karnataka Tour Packages" subtitle="Discover the Silicon Valley of India" exploreText="Explore Karnataka & South India!" />
      <TourPackages packages={KARNATAKA_PACKAGES} title="KARNATAKA TOUR PACKAGES" subtitle="Explore Our Tour Packages" />
      <Destination />
      <Services />
      <TravelPoint />
      <Testimonials />
      <ContactForm />
    </>
  )
}