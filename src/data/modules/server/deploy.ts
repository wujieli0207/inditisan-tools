import { ICatagory } from '@/types/data'

const deploy: ICatagory = {
  key: 'deploy',
  title: '服务部署',
  cards: [
    {
      title: 'vercel',
      url: 'https://vercel.com',
      icon: 'https://icon.horse/icon/vercel.com',
      description: '海外云服务部署首选',
    },
    {
      title: '阿里云服务',
      url: 'https://www.aliyun.com/minisite/goods?userCode=kwgihg4f',
      icon: 'https://icon.horse/icon/aliyun.com',
      description: '国内云服务部署',
    },
    {
      title: '腾讯云服务',
      url: 'https://curl.qcloud.com/VXK0kq9Z',
      icon: 'https://icon.horse/icon/cloud.tencent.com',
      description: '国内云服务部署',
    },
    // {
    //   title: '华为云服务',
    //   url: 'https://curl.qcloud.com/VXK0kq9Z',
    //   icon: 'https://icon.horse/icon/cloud.tencent.com',
    //   description: '国内云服务部署',
    // },
  ],
}

export default deploy
