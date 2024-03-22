import { SiteConfig } from '@/types/siteConfig'

const baseSiteConfig = {
  name: 'Inditisan Tools',
  description: 'Great Tools for Independent Developer.',
  url: 'https://www.inditisan.com',
  ogImage: 'https://smartexcel.cc/og.jpg',
  metadataBase: new URL('https://www.smartexcel.cc'),
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
  authors: [
    {
      name: 'wujieli',
      url: 'https://www.wujieli.top/',
    },
  ],
  creator: '@wujieli',
  themeColor: '#fff',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  links: {
    twitter: 'https://twitter.com/li_wujie',
    github: 'https://github.com/wujieli0207/inditisan-tools',
  },
}

export const siteConfig: SiteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    // images: [`${baseSiteConfig.url}/og.png`],
    creator: baseSiteConfig.creator,
  },
}
