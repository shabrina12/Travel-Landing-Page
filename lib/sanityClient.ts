import { createClient } from 'next-sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ''
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01'

// Validate projectId format (only a-z, 0-9, dashes)
const isValidProjectId = projectId && /^[a-z0-9-]+$/.test(projectId)

export const client = isValidProjectId 
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
    })
  : {
      fetch: async () => null,
    }