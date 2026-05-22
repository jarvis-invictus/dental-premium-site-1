import { MetadataRoute } from 'next'
import { services } from '@/lib/services_data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dental-standard-v2.vercel.app'

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...servicePages,
  ]
}
