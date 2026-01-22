import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Threads to Millions - Grow and Monetize Your Threads Audience',
  description:
    'The proven roadmap to turn your content into conversions—without feeling spammy or salesy.',
  openGraph: {
    url: 'https://threadstomillions.com',
    type: 'website',
    title: 'Threads to Millions - Grow and Monetize Your Threads Audience',
    description: 'The proven roadmap to turn your content into conversions—without feeling spammy or salesy.',
    images: [
      {
        url: 'https://threadstomillions.com/og-image-v3.jpg',
        width: 1200,
        height: 630,
        alt: 'Threads to Millions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Threads to Millions - Grow and Monetize Your Threads Audience',
    description: 'The proven roadmap to turn your content into conversions—without feeling spammy or salesy.',
    images: ['https://threadstomillions.com/og-image-v3.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  );
}
