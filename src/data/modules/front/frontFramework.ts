import { ICatagory } from '@/types/data'

const frontFramework: ICatagory = {
  key: 'frontFramework',
  title: '前端开发框架',
  cards: [
    {
      title: 'React',
      url: 'https://react.dev/',
      icon: 'https://icon.horse/icon/react.dev',
      description: 'React 框架',
    },
    {
      title: 'Next.js',
      url: 'https://nextjs.org/',
      icon: 'https://icon.horse/icon/nextjs.org',
      description: '基于 React 的 SSR 框架',
    },
    {
      title: 'Vue',
      url: 'https://vuejs.org/',
      icon: '/icon/vue.svg',
      description: 'Vue 框架',
    },
    {
      title: 'Nuxt',
      url: 'https://nuxt.com/',
      icon: 'https://icon.horse/icon/nuxt.com',
      description: '基于 Vue 的 SSR 框架',
    },
  ],
}

export default frontFramework
