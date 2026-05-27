import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Hero Section' },
    { name: 'cta', title: 'Call to Action' },
    { name: 'featured', title: 'Featured Tours' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    // Hero Section
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      group: 'hero',
      description: 'Main headline - e.g., "Kerala Tour Packages"'
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'text',
      rows: 2,
      group: 'hero',
      description: 'Subheading text'
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
      group: 'hero',
      description: 'Main hero section image'
    }),

    // CTA
    defineField({
      name: 'ctaText',
      title: 'CTA Button Text',
      type: 'string',
      group: 'cta',
      initialValue: 'Book Now',
      description: 'Text for the main button'
    }),
    defineField({
      name: 'whatsappNumber',
      title: 'WhatsApp Number',
      type: 'string',
      group: 'cta',
      description: 'Default WhatsApp for homepage'
    }),

    // Highlights
    defineField({
      name: 'highlights',
      title: 'Highlight Points',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'hero',
      options: { layout: 'tags' },
      description: 'Key selling points to display'
    }),

    // Featured Tours
    defineField({
      name: 'featuredTours',
      title: 'Featured Tours',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'tourPackage' }] }],
      group: 'featured',
      description: 'Select tour packages to feature on homepage'
    }),

    // SEO
    defineField({
      name: 'seoTitle',
      title: 'Meta Title',
      type: 'string',
      group: 'seo',
      description: 'Custom page title for SEO'
    }),
    defineField({
      name: 'seoDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      group: 'seo',
      description: 'Description for search engines'
    }),
  ],
  preview: {
    select: { title: 'heroTitle' },
    prepare({ title }) {
      return { title: title || 'Homepage', subtitle: 'Homepage Settings' }
    },
  },
})