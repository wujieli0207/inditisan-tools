import { LayersIcon } from '@radix-ui/react-icons'
import { ICatagory } from '@/types/data'

const componentLibrary: ICatagory = {
  title: '组件库',
  icon: LayersIcon,
  href: '',
  cards: [
    {
      title: 'daisyUI',
      url: 'https://daisyui.com/',
      icon: 'https://icon.horse/icon/daisyui.com',
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
