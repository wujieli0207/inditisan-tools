import { IconComponents } from '@tabler/icons-react'
import { ICatagory } from '@/types/data'

const componentLibrary: ICatagory = {
  key: 'component-library',
  title: '组件库',
  icon: IconComponents,
  href: '',
  cards: [
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
  ],
}

export default componentLibrary
