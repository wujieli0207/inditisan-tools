import { ICatagory } from '@/types/data'
import backFramework from './backFramework'
import email from './email'
import payment from './payment'
import monitorAnalysis from './monitorAnalysis'

const back: ICatagory = {
  key: 'back',
  title: '服务端',
  cards: [],
  icon: 'IconServer',
  children: [backFramework, email, payment, monitorAnalysis],
}

export default back
