import { ICatagory } from '@/types/data'
import backFramework from './backFramework'
import email from './email'
import payment from './payment'
import monitorAnalysis from './monitorAnalysis'
import database from './database'
import ai from './ai'

const back: ICatagory = {
  key: 'back',
  title: '服务端',
  cards: [],
  icon: 'IconServer',
  children: [backFramework, database, email, payment, monitorAnalysis, ai],
}

export default back
