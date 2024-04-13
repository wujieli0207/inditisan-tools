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
    {
      title: 'tinyimg',
      url: 'https://www.zhangxinxu.com/sp/tinyimg/',
      icon: 'https://icon.horse/icon/zhangxinxu.com',
      description: '简易在线尺寸缩放与压缩工具，简单好用',
    },
  ],
}

export default picture
