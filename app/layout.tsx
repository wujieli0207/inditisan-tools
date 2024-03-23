import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'
import GoogleAnalytics from './GoogleAnalytics'
import BaiDuAnalytics from './BaiDuAnalytics'
import { siteConfig } from '@/config/site'
import GoogleAdense from './GoogleAdense'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: siteConfig.authors,
  creator: siteConfig.creator,
  openGraph: siteConfig.openGraph,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <Analytics />
      <SpeedInsights />
      <body className={inter.className}>
        {children}

        {process.env.NODE_ENV === 'development' ? (
          <></>
        ) : (
          <>
            <BaiDuAnalytics />
            <GoogleAnalytics />
            <GoogleAdense />
          </>
        )}
      </body>
    </html>
  )
}
