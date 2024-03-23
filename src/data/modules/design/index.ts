import { ICatagory } from '@/types/data'
import designMethod from './designMethod'
import icon from './icon'
import color from './color'
import picture from './picture'

const design: ICatagory = {
  key: 'design',
  title: '设计',
  cards: [],
  icon: 'IconPalette',
  children: [designMethod, color, icon, picture],
}

export default design
