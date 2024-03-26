import { ICatagory } from '@/types/data'

const payment: ICatagory = {
  key: 'payment',
  title: '支付服务',
  cards: [
    {
      title: 'Stripe',
      url: 'https://stripe.com',
      icon: 'https://icon.horse/icon/stripe.com',
      description: '需要企业资质',
    },
    {
      title: 'lemon squeezy',
      url: 'https://lemonsqueezy.com/',
      icon: 'https://icon.horse/icon/lemonsqueezy.com',
      description: '个人也可以注册，支持微信支付宝',
    },
  ],
}

export default payment
