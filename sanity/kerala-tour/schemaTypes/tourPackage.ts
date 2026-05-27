import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'tourPackage',
  title: 'Tour Package',
  type: 'document',
  groups: [
    { name: 'basic', title: 'Basic Info' },
    { name: 'pricing', title: 'Pricing' },
    { name: 'media', title: 'Media' },
    { name: 'content', title: 'Content' },
    { name: 'itinerary', title: 'Itinerary' },
    { name: 'location', title: 'Location & Travel' },
    { name: 'seo', title: 'SEO' },
    { name: 'cta', title: 'Lead Generation' },
  ],
  fields: [
    // Basic Info
    defineField({ name: 'title', title: 'Package Title', type: 'string', group: 'basic', validation: (Rule) => Rule.required() }),
    defineField({ name: 'slug', title: 'URL Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, group: 'basic', validation: (Rule) => Rule.required() }),
    defineField({ name: 'tagline', title: 'Tagline', type: 'string', group: 'basic', description: 'Short catchy headline' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 4, group: 'basic', description: 'Full description' }),

    // Pricing
    defineField({ name: 'price', title: 'Price (₹)', type: 'number', group: 'pricing', description: 'Price per person' }),
    defineField({ name: 'discountPrice', title: 'Discount Price (₹)', type: 'number', group: 'pricing' }),
    defineField({ name: 'duration', title: 'Duration', type: 'string', group: 'pricing', description: 'e.g., "5 Days / 4 Nights"' }),
    defineField({ name: 'minGuests', title: 'Minimum Guests', type: 'string', group: 'pricing', initialValue: 'Min. 2 Adults' }),

    // Media
    defineField({ name: 'heroImage', title: 'Hero Image', type: 'image', options: { hotspot: true }, group: 'media', description: 'Main landing page image' }),
    defineField({ name: 'gallery', title: 'Gallery Images', type: 'array', of: [{ type: 'image' }], group: 'media' }),

    // Content Sections
    defineField({
      name: 'highlights',
      title: 'Highlights',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'content',
      options: { layout: 'tags' },
      description: 'Key selling points'
    }),
    defineField({
      name: 'inclusions',
      title: 'Inclusions',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'content',
      options: { layout: 'tags' },
      description: 'What is included'
    }),
    defineField({
      name: 'exclusions',
      title: 'Exclusions',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'content',
      options: { layout: 'tags' },
      description: 'What is NOT included'
    }),

    // Itinerary
    defineField({
      name: 'itinerary',
      title: 'Itinerary',
      type: 'array',
      group: 'itinerary',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'day', title: 'Day', type: 'string', validation: (Rule) => Rule.required(), description: 'e.g., Day 1' }),
          defineField({ name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() }),
          defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
          defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
        ],
        preview: {
          select: { title: 'day', subtitle: 'title' },
        },
      }],
    }),

    // Location & Travel
    defineField({
      name: 'locations',
      title: 'Destinations',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'location',
      options: { layout: 'tags' },
      description: 'Places covered in tour'
    }),
    defineField({ name: 'startingPoint', title: 'Starting Point', type: 'string', group: 'location' }),
    defineField({ name: 'endingPoint', title: 'Ending Point', type: 'string', group: 'location' }),
    defineField({ name: 'accommodation', title: 'Accommodation', type: 'string', group: 'location', description: 'e.g., Houseboat, Resort' }),
    defineField({ name: 'hotel', title: 'Hotel Category', type: 'string', group: 'location', description: 'e.g., 3 Star Hotels' }),

    // SEO
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      group: 'seo',
      fields: [
        defineField({ name: 'seoTitle', title: 'Meta Title', type: 'string' }),
        defineField({ name: 'seoDescription', title: 'Meta Description', type: 'text', rows: 3 }),
        defineField({ name: 'seoImage', title: 'Social Share Image', type: 'image', description: 'For Facebook/Open Graph' }),
      ],
    }),

    // Lead Generation
    defineField({ name: 'whatsappNumber', title: 'WhatsApp Number', type: 'string', group: 'cta', description: 'Override default if needed' }),
    defineField({ name: 'ctaText', title: 'CTA Button Text', type: 'string', group: 'cta', initialValue: 'Book Now' }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'tagline', media: 'heroImage' },
    prepare({ title, subtitle }) {
      return { title, subtitle: subtitle || `${title} - Tour Package` }
    },
  },
})