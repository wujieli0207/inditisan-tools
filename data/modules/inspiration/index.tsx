import { ICatagory } from '@/types/data'
import information from './information'
import guider from './guider'
import fellow from './fellow'

const inspiration: ICatagory = {
  key: 'inspiration',
  title: '灵感',
  cards: [],
  icon: 'IconSun',
  children: [information, guider, fellow],
}

export default inspiration
