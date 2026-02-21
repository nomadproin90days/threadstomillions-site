import type { MetadataRoute } from 'next';

const blogSlugs = [
  'first-sale-guide',
  '10-proven-hooks',
  'the-threads-opportunity',
  'profile-optimization',
  'scaling-strategy',
  'four-content-pillars',
  'posting-blueprint',
  'monetizing-attention',
  'engagement-hacks',
  'dm-strategy',
  'vanity-metrics',
  'email-list-building',
  'content-recycling',
  'skool-launch',
  'newsletter-pipeline',
  'can-you-make-money',
  'why-threads-failed',
  'star-method-explained',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://threadstomillions.com';

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date('2026-02-20'),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date('2026-02-20'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date('2026-02-20'),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}
