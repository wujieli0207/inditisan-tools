import { ICatagory } from '@/types/data'

const information: ICatagory = {
  key: 'information',
  title: '信息源',
  cards: [
    {
      title: 'Product Hunt',
      url: 'https://www.producthunt.com/',
      icon: 'https://icon.horse/icon/www.producthunt.com',
      description: '新产品发布榜单',
    },
    {
      title: '产品沉思录',
      url: 'https://pmthinking.com/',
      icon: 'https://icon.horse/icon/pmthinking.com',
      description: '于产品的知识库，涵盖几十个人物/产品/公司专题研究',
    },
    {
      title: '独立开发前线',
      url: 'https://www.91wink.com/',
      icon: 'https://icon.horse/icon/91wink.com',
      description: '独立开发者的成长指南',
    },
  ],
}

export default information
