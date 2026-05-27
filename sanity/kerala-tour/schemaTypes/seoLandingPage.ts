import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'seoLandingPage',
  title: 'SEO Landing Page',
  type: 'document',
  groups: [
    { name: 'basic', title: 'Basic Info' },
    { name: 'hero', title: 'Hero Section' },
    { name: 'pricing', title: 'Pricing & Duration' },
    { name: 'overview', title: 'Overview' },
    { name: 'itinerary', title: 'Day-wise Itinerary' },
    { name: 'details', title: 'Travel Details' },
    { name: 'inclusions', title: 'Inclusions & Exclusions' },
    { name: 'hotel', title: 'Hotel Category' },
    { name: 'best-time', title: 'Best Time to Visit' },
    { name: 'faq', title: 'FAQs' },
    { name: 'related', title: 'Related Pages' },
    { name: 'cta', title: 'Call to Action' },
    { name: 'seo', title: 'SEO & Advanced' },
  ],
  fields: [
    // Basic Info
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      group: 'basic',
      validation: (Rule) => Rule.required().max(100),
      description: 'Main heading for this landing page'
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      group: 'basic',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
      description: 'Unique URL identifier'
    }),
    defineField({
      name: 'focusKeyword',
      title: 'Focus Keyword',
      type: 'string',
      group: 'basic',
      validation: (Rule) => Rule.required(),
      description: 'Primary SEO keyword for this page (e.g., "Kerala houseboats 5 days")'
    }),
    defineField({
      name: 'pageType',
      title: 'Page Type',
      type: 'string',
      group: 'basic',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          { title: 'Keyword Landing Page', value: 'keywordLandingPage' },
          { title: 'Package Landing Page', value: 'packageLandingPage' },
          { title: 'Destination Landing Page', value: 'destinationLandingPage' },
          { title: 'Departure City Landing Page', value: 'departureCityLandingPage' },
          { title: 'Theme Landing Page', value: 'themeLandingPage' },
        ],
      },
      description: 'Select the landing page type to guide content and SEO focus',
    }),

    // Hero Section
    defineField({
      name: 'heroHeading',
      title: 'Hero Heading',
      type: 'string',
      group: 'hero',
      validation: (Rule) => Rule.required(),
      description: 'H1 tag - main heading (should contain focus keyword if natural)'
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'text',
      group: 'hero',
      rows: 3,
      validation: (Rule) => Rule.required(),
      description: 'Supporting text under main heading'
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      group: 'hero',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'SEO-friendly alt text for the image'
        })
      ]
    }),

    // Pricing & Duration
    defineField({
      name: 'startingPrice',
      title: 'Starting Price (₹)',
      type: 'number',
      group: 'pricing',
      description: 'Optional starting price per person for package-style landing pages'
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
      group: 'pricing',
      description: 'Optional duration, e.g. "5 Days / 4 Nights" for package-oriented pages'
    }),

    // Overview
    defineField({
      name: 'overview',
      title: 'Page Overview',
      type: 'text',
      group: 'overview',
      rows: 5,
      description: 'Optional page overview. Use when the page needs more descriptive SEO copy.'
    }),

    // Day-wise Itinerary
    defineField({
      name: 'shortItinerary',
      title: 'Day-wise Itinerary',
      type: 'array',
      group: 'itinerary',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'day', title: 'Day', type: 'string', validation: (Rule) => Rule.required() }),
          defineField({ name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() }),
          defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
          defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
        ],
        preview: {
          select: { title: 'day', subtitle: 'title' },
        },
      }],
      description: 'Optional day-wise itinerary. Use only for package/duration-specific landing pages, not generic keyword or category pages.'
    }),

    // Travel Details
    defineField({
      name: 'destinationsCovered',
      title: 'Destinations Covered',
      type: 'array',
      group: 'details',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
      description: 'Places visited during the trip'
    }),
    defineField({
      name: 'highlights',
      title: 'Highlights',
      type: 'array',
      group: 'details',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
      description: 'Key experiences and attractions'
    }),

    // Inclusions & Exclusions
    defineField({
      name: 'inclusions',
      title: 'Inclusions',
      type: 'array',
      group: 'inclusions',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
      description: 'What is included in the package'
    }),
    defineField({
      name: 'exclusions',
      title: 'Exclusions',
      type: 'array',
      group: 'inclusions',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
      description: 'What is NOT included'
    }),

    // Hotel Category
    defineField({
      name: 'hotelCategoryNote',
      title: 'Hotel Category Note',
      type: 'text',
      group: 'hotel',
      rows: 3,
      description: 'Optional note for hotel category. Do not specify exact hotel names on SEO landing pages; exact properties should be shared later in quote/WhatsApp/final proposal.'
    }),

    // Best Time to Visit
    defineField({
      name: 'bestTimeToVisit',
      title: 'Best Time to Visit',
      type: 'text',
      group: 'best-time',
      rows: 3,
      description: 'Seasons and months recommended for this trip'
    }),

    // FAQs
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      group: 'faq',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'question', title: 'Question', type: 'string', validation: (Rule) => Rule.required() }),
          defineField({ name: 'answer', title: 'Answer', type: 'text', rows: 4 }),
        ],
        preview: {
          select: { title: 'question' },
        },
      }],
      description: 'Frequently asked questions about this trip'
    }),

    // Related Pages
    defineField({
      name: 'relatedPages',
      title: 'Related Pages',
      type: 'array',
      group: 'related',
      of: [{ type: 'reference', to: [{ type: 'seoLandingPage' }] }],
      description: 'Link to other related landing pages (for internal linking)'
    }),

    // Call to Action
    defineField({
      name: 'ctaTitle',
      title: 'CTA Section Title',
      type: 'string',
      group: 'cta',
      validation: (Rule) => Rule.required(),
      description: 'Title for the call-to-action section'
    }),
    defineField({
      name: 'ctaDescription',
      title: 'CTA Description',
      type: 'text',
      group: 'cta',
      rows: 3,
      validation: (Rule) => Rule.required(),
      description: 'Description or copy for the CTA section'
    }),
    defineField({
      name: 'whatsappMessageTemplate',
      title: 'WhatsApp Message Template',
      type: 'text',
      group: 'cta',
      rows: 2,
      initialValue: 'Hi! I\'m interested in this tour package. Can you provide more details?',
      description: 'Pre-filled WhatsApp message template'
    }),

    // SEO & Advanced
    defineField({
      name: 'seoTitle',
      title: 'Meta Title (SEO)',
      type: 'string',
      group: 'seo',
      validation: (Rule) => Rule.required().max(60),
      description: 'Meta title for search engines (max 60 chars)'
    }),
    defineField({
      name: 'seoDescription',
      title: 'Meta Description (SEO)',
      type: 'text',
      group: 'seo',
      rows: 2,
      validation: (Rule) => Rule.required().max(160),
      description: 'Meta description for search engines (max 160 chars)'
    }),
    defineField({
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
      group: 'seo',
      description: 'Image for social media sharing',
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string'
        })
      ]
    }),
    defineField({
      name: 'canonicalUrl',
      title: 'Canonical URL',
      type: 'string',
      group: 'seo',
      description: 'Canonical URL (leave blank for auto-generation from slug)'
    }),
    defineField({
      name: 'noindex',
      title: 'Prevent Search Engine Indexing',
      type: 'boolean',
      group: 'seo',
      initialValue: false,
      description: 'Check to add noindex tag (blocks from search engines)'
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'focusKeyword', media: 'heroImage' },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: subtitle ? `Keyword: ${subtitle}` : 'SEO Landing Page',
      }
    },
  },
})
