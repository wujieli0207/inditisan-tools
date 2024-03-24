import { ICatagory } from '@/types/data'
import deploy from './deploy'
import domin from './domain'

const server: ICatagory = {
  key: 'server',
  title: '部署',
  cards: [],
  icon: 'IconCloud',
  children: [deploy, domin],
}

export default server
