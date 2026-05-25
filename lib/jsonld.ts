/* Shared JSON-LD schema fragments for SEO & GEO */

export const BASE_URL = 'https://www.timmschurig.com'

export const personSchema = {
  '@type': 'Person',
  '@id': `${BASE_URL}/#person`,
  name: 'Timm Schurig',
  jobTitle: 'SEO & Webdesign Freelancer',
  description:
    'SEO & Webdesign Freelancer aus Langenfeld (Rheinland). 5+ Jahre Erfahrung in Suchmaschinenoptimierung und modernem Webdesign für kleine und mittelständische Unternehmen im DACH-Raum.',
  url: BASE_URL,
  email: 'mail@timmschurig.com',
  image: `${BASE_URL}/timm.png`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Zum Galkhausener Bach 72',
    addressLocality: 'Langenfeld',
    postalCode: '40764',
    addressRegion: 'Nordrhein-Westfalen',
    addressCountry: 'DE',
  },
  sameAs: ['https://www.linkedin.com/in/timm-schurig/'],
  knowsAbout: [
    'Suchmaschinenoptimierung',
    'SEO',
    'Webdesign',
    'Next.js',
    'WordPress',
    'Webflow',
    'Onpage-SEO',
    'Content-Marketing',
    'Local SEO',
  ],
}

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'ProfessionalService'],
  '@id': `${BASE_URL}/#business`,
  name: 'Timm Schurig – SEO & Webdesign',
  url: BASE_URL,
  email: 'mail@timmschurig.com',
  image: `${BASE_URL}/timm.png`,
  logo: `${BASE_URL}/favicon.svg`,
  founder: { '@id': `${BASE_URL}/#person` },
  employee: { '@id': `${BASE_URL}/#person` },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Zum Galkhausener Bach 72',
    addressLocality: 'Langenfeld',
    postalCode: '40764',
    addressRegion: 'Nordrhein-Westfalen',
    addressCountry: 'DE',
  },
  areaServed: [
    { '@type': 'Country', name: 'Deutschland' },
    { '@type': 'Country', name: 'Österreich' },
    { '@type': 'Country', name: 'Schweiz' },
  ],
  priceRange: '€€',
  knowsAbout: ['SEO', 'Suchmaschinenoptimierung', 'Webdesign', 'Webentwicklung'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'SEO & Webdesign Leistungen',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'SEO-Optimierung',
          description:
            'Ganzheitliche Suchmaschinenoptimierung: Onpage-Analyse, Keyword-Recherche, technisches SEO und Content-Strategie.',
          provider: { '@id': `${BASE_URL}/#business` },
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Webdesign & Entwicklung',
          description:
            'Moderne, schnelle Websites mit Next.js, Webflow oder WordPress – optimiert für Performance und Conversion.',
          provider: { '@id': `${BASE_URL}/#business` },
        },
      },
    ],
  },
  sameAs: ['https://www.linkedin.com/in/timm-schurig/'],
}

export const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  name: 'Timm Schurig – SEO & Webdesign Freelancer',
  url: BASE_URL,
  publisher: { '@id': `${BASE_URL}/#business` },
  inLanguage: 'de-DE',
}

export const globalSchema = {
  '@context': 'https://schema.org',
  '@graph': [webSiteSchema, localBusinessSchema, personSchema],
}

export function articleSchema(post: {
  title: string
  excerpt?: string | null
  content?: string | null
  slug: string
  published_at: string
  cover_image?: string | null
  meta_description?: string | null
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.meta_description || post.excerpt || '',
    url: `${BASE_URL}/blog/${post.slug}`,
    datePublished: post.published_at,
    dateModified: post.published_at,
    author: { '@id': `${BASE_URL}/#person` },
    publisher: { '@id': `${BASE_URL}/#business` },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE_URL}/blog/${post.slug}` },
    ...(post.cover_image ? { image: { '@type': 'ImageObject', url: post.cover_image } } : {}),
    inLanguage: 'de-DE',
    isPartOf: { '@id': `${BASE_URL}/#website` },
  }
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
