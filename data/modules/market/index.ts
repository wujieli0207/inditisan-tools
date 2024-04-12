import { ICatagory } from '@/types/data'
import seo from './seo'
import propagate from './propagate'

const market: ICatagory = {
  key: 'market',
  title: '营销和推广',
  cards: [],
  icon: 'IconDeviceDesktopAnalytics',
  children: [seo, propagate],
}

export default market
