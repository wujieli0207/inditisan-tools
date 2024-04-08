import { ICatagory } from '@/types/data'

const ai: ICatagory = {
  key: 'ai',
  title: 'AI 工具',
  cards: [
    {
      title: 'ChatGPT',
      url: 'https://chat.openai.com/',
      icon: 'https://icon.horse/icon/chat.openai.com',
      description: '目前最强的 AI 工具',
    },
    {
      title: 'Kimi',
      url: 'https://kimi.moonshot.cn/',
      icon: 'https://icon.horse/icon/kimi.moonshot.cn',
      description: '联网总结文章、长篇内容很不错',
    },
    {
      title: 'COZE',
      url: 'https://www.coze.com/',
      icon: 'https://icon.horse/icon/coze.com',
      description: '很方便的创建 agent',
    },
  ],
}

export default ai
