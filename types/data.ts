import { Icon, IconProps } from '@tabler/icons-react'

export interface ICard {
  title: string
  url: string
  icon: string
  description?: string
}

export interface ICatagory {
  key: string
  title: string
  href: ''
  cards: ICard[]
}
