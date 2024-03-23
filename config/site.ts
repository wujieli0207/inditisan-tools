import { SiteConfig } from '@/types/siteConfig'

const baseSiteConfig = {
  name: 'Inditisan Tools',
  description:
    'Inditisan Tools：独立开发者的宝库，聚合全网独立开发技术栈、工具箱、资源和社区，助您在独立开发的旅程上更加顺畅',
  url: 'https://www.inditisan.com',
  ogImage: 'https://www.inditisan.com/og.jpg',
  metadataBase: new URL('https://www.inditisan.com'),
  keywords: [
    '独立开发',
    '独立开发者',
    '独立开发技术栈',
    '独立开发资源',
    '独立开发者工具',
    '独立开发者社区',
    '独立开发者出海',
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
    locale: 'zh_CN',
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
