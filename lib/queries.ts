export const TOUR_PACKAGE_QUERY = `
  *[_type == "tourPackage" && slug.current == $slug][0]{
    title,
    slug,
    tagline,
    description,
    duration,
    price,
    minGuests,
    accommodation,
    hotel,
    locations,
    heroImage,
    gallery,
    itinerary,
    highlights,
    inclusions,
    exclusions,
    seo
  }
`

export const TOUR_PACKAGES_QUERY = `
  *[_type == "tourPackage" && !(_id in path("drafts.**"))] | order(price asc) {
    _id,
    title,
    slug,
    tagline,
    duration,
    price,
    heroImage
  }
`

// SEO Landing Page Queries
export const SEO_LANDING_PAGE_QUERY = `
  *[_type == "seoLandingPage" && slug.current == $slug && !noindex][0]{
    _id,
    title,
    slug,
    focusKeyword,
    heroHeading,
    heroSubtitle,
    heroImage,
    startingPrice,
    duration,
    destinationsCovered,
    overview,
    shortItinerary,
    highlights,
    inclusions,
    exclusions,
    hotelCategoryNote,
    bestTimeToVisit,
    faqs,
    relatedPages[] -> {
      _id,
      title,
      slug,
      focusKeyword
    },
    ctaTitle,
    ctaDescription,
    whatsappMessageTemplate,
    seoTitle,
    seoDescription,
    ogImage,
    canonicalUrl,
    noindex
  }
`

export const SEO_LANDING_PAGE_SLUGS_QUERY = `
  *[_type == "seoLandingPage" && !noindex]{
    slug,
    canonicalUrl,
    _updatedAt
  }
`

export const ALL_SEO_LANDING_PAGES_QUERY = `
  *[_type == "seoLandingPage" && !noindex] | order(_updatedAt desc){
    _id,
    title,
    slug,
    focusKeyword,
    seoDescription
  }
`