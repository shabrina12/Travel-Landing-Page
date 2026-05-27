// CMS Data Types

export interface CMSlug {
  current: string
}

export interface CMSImage {
  asset: {
    url?: string
    _ref?: string
  }
  alt?: string
}

export interface CMS_seo {
  metaTitle?: string
  metaDescription?: string
  ogImage?: CMSImage
}

export interface CMSTourPackage {
  _id: string
  title: string
  slug: CMSlug
  tagline?: string
  description?: string
  duration?: string
  price?: number
  minGuests?: string
  accommodation?: string
  hotel?: string
  locations?: string[]
  heroImage?: CMSImage
  gallery?: CMSImage[]
  itinerary?: { day: string; title: string; description: string }[]
  highlights?: string[]
  inclusions?: string[]
  exclusions?: string[]
  seo?: CMS_seo
}

export interface CMSDestination {
  _id: string
  name: string
  slug: CMSlug
  discountPercentage?: string
  heroImage?: CMSImage
}

export interface CMStestimonial {
  _id: string
  name: string
  role?: string
  rating?: number
  text: string
  image?: CMSImage
}

export interface CMSService {
  _id: string
  title: string
  description?: string
  icon?: string
  image?: CMSImage
}

export interface CMContactInfo {
  phone: string
  email: string
  address: string
  whatsapp: string
}

// SEO Landing Page Types
export interface CMSSEOLandingPage {
  _id: string
  title: string
  slug: CMSlug
  focusKeyword?: string
  heroHeading?: string
  heroSubtitle?: string
  heroImage?: CMSImage
  startingPrice?: number
  duration?: string
  destinationsCovered?: string[]
  overview?: string
  shortItinerary?: {
    day: string
    title: string
    description?: string
    image?: CMSImage
  }[]
  highlights?: string[]
  inclusions?: string[]
  exclusions?: string[]
  hotelCategoryNote?: string
  bestTimeToVisit?: string
  faqs?: {
    question: string
    answer?: string
  }[]
  relatedPages?: Array<{
    _id: string
    title: string
    slug: CMSlug
    focusKeyword?: string
  }>
  ctaTitle?: string
  ctaDescription?: string
  whatsappMessageTemplate?: string
  seoTitle?: string
  seoDescription?: string
  ogImage?: CMSImage
  canonicalUrl?: string
  noindex?: boolean
}
