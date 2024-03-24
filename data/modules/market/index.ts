import { ICatagory } from '@/types/data'
import seo from './seo'
import information from './information'

const market: ICatagory = {
  key: 'market',
  title: '营销和推广',
  cards: [],
  icon: 'IconDeviceDesktopAnalytics',
  children: [seo, information],
}

export default market
