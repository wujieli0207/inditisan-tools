import { ICatagory } from '@/types/data'
import information from './information'
import guider from './guider'

const inspiration: ICatagory = {
  key: 'inspiration',
  title: '灵感',
  cards: [],
  icon: 'IconSun',
  children: [information, guider],
}

export default inspiration
