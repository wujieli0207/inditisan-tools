import { ICatagory } from '@/types/data'
import backFramework from './backFramework'

const back: ICatagory = {
  key: 'back',
  title: '服务端开发',
  cards: [],
  icon: 'IconServer',
  children: [backFramework],
}

export default back
