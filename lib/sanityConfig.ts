export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID

export function isSanityConfigured(): boolean {
  return !!projectId && projectId !== 'your-project-id' && projectId?.length > 0
}

export async function checkSanityConnection() {
  if (!isSanityConfigured()) {
    return { connected: false, error: 'Sanity not configured' }
  }
  return { connected: true, error: null }
}