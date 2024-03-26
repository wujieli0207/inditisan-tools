import { ICatagory } from '@/types/data'

const monitorAnalysis: ICatagory = {
  key: 'monitorAnalysis',
  title: '监控与分析',
  cards: [
    {
      title: 'SENTRY',
      url: 'https://sentry.io/welcome/',
      icon: 'https://icon.horse/icon/sentry.io',
      description: '代码错误监控',
    },
    {
      title: 'Google Analytics',
      url: 'https://analytics.google.com/',
      icon: 'https://icon.horse/icon/analytics.google.com',
      description: '谷歌的流量分析工具',
    },
  ],
}

export default monitorAnalysis
