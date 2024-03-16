import { LayersIcon } from '@radix-ui/react-icons'
import { ICatagory } from '@/types/data'

const domin: ICatagory = {
  title: '域名',
  icon: LayersIcon,
  href: '',
  cards: [
    {
      title: 'namecheap',
      url: 'https://www.namecheap.com',
      icon: 'https://icon.horse/icon/www.namecheap.com',
      description: '海外域名，主打一个便宜',
    },
  ],
}

export default domin
