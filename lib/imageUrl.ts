import imageUrlBuilder from '@sanity/image-url'
import { client } from './sanityClient'

// Build image URLs using Sanity's official image builder
const builder = imageUrlBuilder(client as any)

export function urlFor(source: any) {
  if (!source) {
    return {
      url: () => ''
    }
  }
  
  try {
    return builder.image(source)
  } catch (error) {
    // Fallback if client is not properly configured
    return {
      url: () => source?.asset?.url || ''
    }
  }
}