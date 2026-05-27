import { client } from '@/lib/sanityClient'
import { SEO_LANDING_PAGE_SLUGS_QUERY } from '@/lib/queries'
import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch SEO landing page slugs
  const seoPages = await client.fetch(SEO_LANDING_PAGE_SLUGS_QUERY)

  const baseUrl = 'https://keralatour.info'

  // Base routes
  const baseRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/karnataka`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tamil-nadu`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  // Add SEO landing pages
  const seoPageRoutes: MetadataRoute.Sitemap = (seoPages || []).map((page: any) => ({
    url: `${baseUrl}/${page.slug.current}`,
    lastModified: page._updatedAt ? new Date(page._updatedAt) : new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  return [...baseRoutes, ...seoPageRoutes]
}