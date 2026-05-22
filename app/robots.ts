import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'bingbot', allow: '/' },
      { userAgent: 'Googlebot', allow: '/' },
      { userAgent: 'Amazonbot', allow: '/' },
      { userAgent: 'CCBot', allow: '/' },
      { userAgent: 'Bytespider', allow: '/' },
      { userAgent: 'Applebot-Extended', allow: '/' },
      { userAgent: 'FacebookExternalHit', allow: '/' },
    ],
    sitemap: 'https://dental-standard-v2.vercel.app/sitemap.xml',
  }
}
