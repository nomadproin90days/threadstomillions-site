import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Threads to Millions - Grow and Monetize Your Threads Audience',
  description:
    'The proven roadmap to turn your content into conversions—without feeling spammy or salesy.',
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
