import { getAllPosts } from '@/lib/blog-data';

export function GET() {
  const posts = getAllPosts();
  const baseUrl = 'https://threadstomillions.com';

  const lines = [
    '# Threads to Millions',
    '',
    '> Learn how to grow and monetize on Threads. Strategies, hooks, engagement tactics, and monetization guides for creators.',
    '',
    '## Blog Posts',
    '',
    ...posts.map(
      (post) =>
        `- [${post.title}](${baseUrl}/blog/${post.slug}/md): ${post.description}`
    ),
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
