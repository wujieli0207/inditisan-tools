import { IconPalette } from '@tabler/icons-react'
import { ICatagory } from '@/types/data'

const color: ICatagory = {
  key: 'color',
  title: '配色',
  icon: IconPalette,
  href: '',
  cards: [
    {
      title: 'palettemaker',
      url: 'https://palettemaker.com/app',
      icon: 'https://icon.horse/icon/palettemaker.com',
      description: '可以直观的看到各种配色效果',
    },
  ],
}

export default color
