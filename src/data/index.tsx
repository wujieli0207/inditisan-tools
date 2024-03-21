import { ICatagory } from '@/types/data'
import animation from './modules/animation'
import color from './modules/color'
import componentLibrary from './modules/componentLibrary'
import icon from './modules/icon'
import domain from './modules/domain'
import frontEnd from './modules/frontEnd'
import backEnd from './modules/backEnd'
import information from './modules/information'
import seo from './modules/seo'
import deploy from './modules/deploy'

const data: ICatagory[] = [
  frontEnd,
  backEnd,
  componentLibrary,
  animation,
  color,
  icon,
  deploy,
  domain,
  seo,
  information,
]

export default data
