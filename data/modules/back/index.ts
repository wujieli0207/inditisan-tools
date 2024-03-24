import { ICatagory } from '@/types/data'
import backFramework from './backFramework'
import email from './email'

const back: ICatagory = {
  key: 'back',
  title: '服务端开发',
  cards: [],
  icon: 'IconServer',
  children: [backFramework, email],
}

export default back
