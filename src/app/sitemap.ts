import type { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/blog-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://threadstomillions.com';
  const posts = getAllPosts();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date('2026-04-11'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date('2026-04-11'),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/free-lead-magnet`,
      lastModified: new Date('2026-03-14'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // High-value blog posts get priority 0.9, others get 0.7
  const highPriorityPosts = new Set([
    'threads-monetization-requirements',
    'how-to-get-paid-on-threads',
    'how-to-grow-on-threads-2026',
    'threads-algorithm-2026',
    'threads-algorithm-reset-2026',
    'can-you-make-money',
    'threads-monetization-blueprint-2026',
    'threads-for-business-2026',
    'first-sale-guide',
    'star-method-explained',
    'threads-followers-to-make-money',
    'threads-app-guide-2026',
  ]);

  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedDate ?? post.date),
    changeFrequency: 'monthly' as const,
    priority: highPriorityPosts.has(post.slug) ? 0.9 : 0.7,
  }));

  return [...staticPages, ...blogPages];
}
