import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'
import GoogleAnalytics from './GoogleAnalytics'
import BaiDuAnalytics from './BaiDuAnalytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Inditisan Tools',
  description: 'Great Tools for Independent Developer',
  keywords: [
    'tools',
    'resources',
    'developer',
    'independant',
    'freelancer',
    'solo',
    'self-employed',
    'efficiency',
    'time-saving',
    'enhancement',
  ],
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
          </>
        )}
      </body>
    </html>
  )
}
