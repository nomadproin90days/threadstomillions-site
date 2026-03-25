import type { Metadata, Viewport } from 'next';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://threadstomillions.com'),
  title: {
    default: 'Threads to Millions - Grow and Monetize Your Threads Audience',
    template: '%s | Threads to Millions',
  },
  description:
    'Join 5,200+ creators learning to grow and monetize on Threads. 25 course modules, 495+ templates, DM strategies, marketing psychology, and the ThreadyBot AI assistant. Members report $5K+ months and 130K+ views in 30 days.',
  authors: [{ name: 'Lexie', url: 'https://www.threads.net/@getdigitalwithlexie' }],
  creator: 'Lexie (@getdigitalwithlexie)',
  publisher: 'Threads to Millions',
  alternates: {
    canonical: 'https://threadstomillions.com',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  other: {
    'fb:app_id': '966242223397117',
  },
  openGraph: {
    url: 'https://threadstomillions.com',
    type: 'website',
    siteName: 'Threads to Millions',
    locale: 'en_US',
    title: 'Threads to Millions - Grow and Monetize Your Threads Audience',
    description:
      'Join 5,200+ creators learning to grow and monetize on Threads. 25 modules, 495+ templates, and an AI writing assistant. Members report $5K+ months.',
    images: [
      {
        url: '/og-image-v6.jpg',
        width: 1200,
        height: 630,
        alt: 'Threads to Millions - 25 modules, 495+ templates, 5,200+ members growing and monetizing on Threads',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Threads to Millions - Grow and Monetize Your Threads Audience',
    description:
      'Join 5,200+ creators learning to grow and monetize on Threads. 25 modules, 495+ templates, and an AI writing assistant. Members report $5K+ months.',
    images: ['/og-image-v6.jpg'],
    creator: '@getdigitalwithlexie',
  },
  category: 'education',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://threadstomillions.com/#organization',
      name: 'Threads to Millions',
      url: 'https://threadstomillions.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://threadstomillions.com/og-image-v6.jpg',
        width: 1200,
        height: 630,
      },
      founder: {
        '@type': 'Person',
        name: 'Lexie',
        alternateName: 'getdigitalwithlexie',
        url: 'https://www.threads.net/@getdigitalwithlexie',
      },
      sameAs: [
        'https://www.threads.net/@getdigitalwithlexie',
      ],
      description:
        'Threads to Millions is a community and course by Lexie teaching creators how to grow and monetize on the Threads social media platform using the proven STAR Method.',
    },
    {
      '@type': 'WebSite',
      '@id': 'https://threadstomillions.com/#website',
      url: 'https://threadstomillions.com',
      name: 'Threads to Millions',
      publisher: {
        '@id': 'https://threadstomillions.com/#organization',
      },
      description:
        'The proven roadmap to turn your content into conversions on Threads — without feeling spammy or salesy.',
    },
    {
      '@type': 'Course',
      '@id': 'https://threadstomillions.com/#course',
      name: 'Threads to Millions',
      description:
        'A 25-module course and community teaching creators how to grow their Threads audience and monetize their content. Includes 495+ post templates, DM closing strategies, marketing psychology training, the ThreadyBot AI writing assistant, and a private Skool community of 5,200+ members. Guest modules by @chloedigitally, @shiftwithalex, and more.',
      provider: {
        '@type': 'Organization',
        '@id': 'https://threadstomillions.com/#organization',
        name: 'Threads to Millions',
      },
      instructor: {
        '@type': 'Person',
        '@id': 'https://threadstomillions.com/#lexie',
        name: 'Lexie',
        alternateName: 'getdigitalwithlexie',
        url: 'https://www.threads.net/@getdigitalwithlexie',
      },
      inLanguage: 'en',
      educationalLevel: 'Beginner',
      coursePrerequisites: 'A free Threads account',
      url: 'https://threadstomillions.com',
      image: 'https://threadstomillions.com/og-image-v6.jpg',
      offers: {
        '@type': 'Offer',
        url: 'https://nomadproin90days.com/shop/d8beb61f-33df-4306-a897-87b3a1ffe197',
        price: '97',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        category: 'Online Course',
      },
      hasCourseInstance: {
        '@type': 'CourseInstance',
        courseMode: 'online',
        courseWorkload: 'Self-paced',
      },
      about: [
        'Threads social media growth',
        'Content monetization',
        'STAR Method',
        'Social media marketing',
      ],
      /* aggregateRating removed — add back only when backed by real review data */
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://threadstomillions.com/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How many hours per week do I need?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Minimum 5-7 hours/week. Recommended 7-10 for faster momentum. This accounts for content creation, engagement, and direct messaging.',
          },
        },
        {
          '@type': 'Question',
          name: 'What if I have under 500 followers?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "That's fine. The system is designed to work from a low audience size with proper positioning and execution.",
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need paid ads?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. This is built for organic growth and conversion.',
          },
        },
        {
          '@type': 'Question',
          name: 'What tools are required?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A free Threads account and a basic link or checkout setup. Optional tools (like ThreadyBot) are listed in onboarding.',
          },
        },
        {
          '@type': 'Question',
          name: 'What if I\'m not satisfied?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Email support anytime and we\'ll work with you. See our refund policy for details.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the affiliate commission?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '80% commission on every sale you refer. You get your own affiliate link inside the Skool community.',
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-GFG6T543YR" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-GFG6T543YR');`,
          }}
        />
        {/* Meta Pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','1742958549619533');fbq('track','PageView');`,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1742958549619533&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
