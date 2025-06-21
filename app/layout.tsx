import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'New Sagar Tailors - Premium Custom Tailoring Since 1998',
  description: 'Experience the finest in custom tailoring with over 25 years of expertise. From traditional to contemporary.',
  keywords: 'Best Tailor in Pune, Best Tailor in Hadpsar, custom tailoring, suits, wedding attire, alterations, Pune tailors, premium clothing',
  metadataBase: new URL(process.env.APP_URL!),
  openGraph: {

    title: 'New Sagar Tailors - Premium Custom Tailoring Since 1998',
    description: 'Experience the finest in custom tailoring with over 25 years of expertise. From traditional to contemporary, we create garments that fit your style perfectly.',
    url: process.env.APP_URL,
    siteName: 'New Sagar Tailors',
    locale: 'en_US',
    type: 'website',
    images: ['opengraph-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'New Sagar Tailors - Premium Custom Tailoring Since 1998',
    description: 'Experience the finest in custom tailoring with over 25 years of expertise. From traditional to contemporary, we create garments that fit your style perfectly.',
    images: ['opengraph-image.png'],
  },
  alternates: {
    canonical: process.env.APP_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}