import { Icon, IconProps } from '@tabler/icons-react'
import { ForwardRefExoticComponent, RefAttributes } from 'react'

export interface ICard {
  title: string
  url: string
  icon: string
  description?: string
}

export interface ICatagory {
  key: string
  title: string
  icon: ForwardRefExoticComponent<Omit<IconProps, 'ref'> & RefAttributes<Icon>>
  href: ''
  cards: ICard[]
}
