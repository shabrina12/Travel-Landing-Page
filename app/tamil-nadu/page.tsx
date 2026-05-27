import Hero from '@/components/Hero'
import Services from '@/components/Services'
import TourPackages from '@/components/TourPackages'
import Destination from '@/components/Destination'
import TravelPoint from '@/components/TravelPoint'
import Testimonials from '@/components/Testimonials'
import ContactForm from '@/components/ContactForm'
import { TAMIL_NADU_PACKAGES } from '@/constants'

export const metadata = {
  title: 'Tamil Nadu Tour Packages | Best Prices | keralatour.info',
  description: 'Book Tamil Nadu tour packages. Explore Ooty, Kodaikanal, Kanyakumari & more. Best deals on 3-7 days trips. Custom itineraries available.',
}

export default function TamilNaduPage() {
  return (
    <>
      <Hero packages={TAMIL_NADU_PACKAGES} title="Tamil Nadu Tour Packages" subtitle="Explore the Land of Temples and Hill Stations" exploreText="Explore Tamil Nadu & South India!" />
      <TourPackages packages={TAMIL_NADU_PACKAGES} title="TAMIL NADU TOUR PACKAGES" subtitle="Explore Our Tour Packages" />
      <Destination />
      <Services />
      <TravelPoint />
      <Testimonials />
      <ContactForm />
    </>
  )
}