import { ICatagory } from '@/types/data'

const componentLibrary: ICatagory = {
  key: 'component-library',
  title: '组件库',
  cards: [
    {
      title: 'tailwindcss',
      url: 'https://tailwindcss.com/',
      icon: 'https://icon.horse/icon/tailwindcss.com',
      description: '原子化 css 样式库',
    },
    {
      title: 'DaisyUI',
      url: 'https://daisyui.com/',
      icon: 'https://icon.horse/icon/daisyui.com',
      description: '目前最受欢迎的 Tailwind 组件库',
    },
    {
      title: 'FloatUI',
      url: 'https://floatui.com',
      icon: 'https://icon.horse/icon/floatui.com',
      description: '适合搭建产品介绍主页的组件库',
    },
    {
      title: 'Mantine UI',
      url: 'https://mantine.dev/',
      icon: '/icon/mantine.svg',
      description: '以开发者体验为首要目标的高质量 React 组件库',
    },
    {
      title: 'shadcn/ui',
      url: 'https://ui.shadcn.com/',
      icon: 'https://icon.horse/icon/ui.shadcn.com',
      description: '用于构建用户界面的现代化，功能丰富的 UI 库',
    },
    {
      title: 'radix-ui',
      url: 'https://www.radix-ui.com/',
      icon: 'https://icon.horse/icon/www.radix-ui.com',
      description: '提供一套原始组件，用于构建完全自定义的设计系统',
    },
  ],
}

export default componentLibrary
