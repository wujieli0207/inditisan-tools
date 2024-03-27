import { ICatagory } from '@/types/data'
import frontFramework from './frontFramework'
import componentLibrary from './componentLibrary'
import animation from './animation'
import template from './template'
import extension from './extension'

const front: ICatagory = {
  key: 'front',
  title: '前端开发',
  cards: [],
  icon: 'IconAppWindow',
  children: [frontFramework, componentLibrary, template, animation, extension],
}

export default front
