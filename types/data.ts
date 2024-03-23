export interface ICard {
  title: string
  url: string
  icon: string
  description?: string
}

export interface ICatagory {
  key: string
  title: string
  cards: ICard[]
  icon?: string
  children?: ICatagory[]
}
