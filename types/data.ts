import { ForwardRefExoticComponent, RefAttributes } from 'react'

export interface ICard {
  title: string
  url: string
  icon: string
  description?: string
}

export interface ICatagory {
  title: string
  icon: ForwardRefExoticComponent<RefAttributes<SVGSVGElement>>
  href: ''
  cards: ICard[]
}
