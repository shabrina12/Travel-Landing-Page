import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const data = await request.json()

    if (!data.email || !data.email.trim()) {
      return NextResponse.json(
        { success: false, error: 'Email is required' },
        { status: 400 }
      )
    }

    // Build payload with lead attribution metadata
    const payload = {
      lastname: data.name,
      mobile: data.phone,
      email: data.email,
      travelDate: data.travelDate || '',
      description: data.message || '',
      source: 'KTOUR',
      // Optional lead attribution fields (safely ignored if CRM doesn't support them)
      ...(data.sourcePage && { sourcePage: data.sourcePage }),
      ...(data.sourceUrl && { sourceUrl: data.sourceUrl }),
      ...(data.landingPageSlug && { landingPageSlug: data.landingPageSlug }),
      ...(data.focusKeyword && { focusKeyword: data.focusKeyword }),
      ...(data.ctaLocation && { ctaLocation: data.ctaLocation }),
    }

    const response = await fetch(
      'https://crm.before.holiday/api/submit-contact',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }
    )

    if (response.ok) {
      return NextResponse.json({ success: true })
    } else {
      console.error('CRM response error:', response.status, await response.text())
      return NextResponse.json(
        { success: false, error: 'CRM submission failed' },
        { status: 400 }
      )
    }
  } catch (error) {
    console.error('Lead API error:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}