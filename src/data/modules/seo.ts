import { IconIcons } from '@tabler/icons-react'
import { ICatagory } from '@/types/data'

const seo: ICatagory = {
  key: 'SEO',
  title: 'SEO',
  href: '',
  cards: [
    {
      title: 'LearningSEO',
      url: 'https://learningseo.io/',
      icon: 'https://icon.horse/icon/learningseo.io',
      description: '免费的 SEO 学习资源和工具',
    },
    {
      title: 'SEO Stuff',
      url: 'https://www.seo-stuff.com/',
      icon: 'https://icon.horse/icon/seo-stuff.com',
      description: '找到合适的 SEO 关键词',
    },
    {
      title: 'AITDK 扩展',
      url: 'https://aitdk.com/zh-CN/extension/',
      icon: 'https://icon.horse/icon/aitdk.com',
      description: '流量 & Whois & 网站SEO分析的 chrome 插件',
    },
  ],
}

export default seo
