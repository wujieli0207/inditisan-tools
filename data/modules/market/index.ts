import { ICatagory } from '@/types/data'
import seo from './seo'

const market: ICatagory = {
  key: 'market',
  title: '营销和推广',
  cards: [],
  icon: 'IconDeviceDesktopAnalytics',
  children: [seo],
}

export default market
