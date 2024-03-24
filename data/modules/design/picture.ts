import { ICatagory } from '@/types/data'

const picture: ICatagory = {
  key: 'picture',
  title: '图片',
  cards: [
    {
      title: 'Unsplash',
      url: 'https://unsplash.com/',
      icon: 'https://icon.horse/icon/unsplash.com',
      description: '目前最大的免费图片站',
    },
    {
      title: 'StockCake',
      url: 'https://stockcake.com/',
      icon: 'https://icon.horse/icon/stockcake.com',
      description: 'AI 生成的免费图像素材网站',
    },
  ],
}

export default picture
