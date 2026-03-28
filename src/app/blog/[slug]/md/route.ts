import { getPostBySlug } from '@/lib/blog-data';
import { NextRequest } from 'next/server';

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return new Response('# 404 - Post not found', {
      status: 404,
      headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
    });
  }

  const markdown = [
    `# ${post.title}`,
    '',
    `> ${post.description}`,
    '',
    `**Published:** ${post.date} | **Read time:** ${post.readTime} | **Category:** ${post.category}`,
    '',
    `**Keywords:** ${post.keywords.join(', ')}`,
    '',
    '---',
    '',
    post.content,
    '',
    '---',
    '',
    `*Source: [Threads to Millions](https://threadstomillions.com/blog/${slug})*`,
    '',
  ];

  return new Response(markdown.join('\n'), {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
