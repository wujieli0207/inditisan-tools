import { LayersIcon } from '@radix-ui/react-icons'
import { ICatagory } from '@/types/data'

const color: ICatagory = {
  title: '配色',
  icon: LayersIcon,
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
