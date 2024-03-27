import { ICatagory } from '@/types/data'

const database: ICatagory = {
  key: 'database',
  title: '数据库',
  cards: [
    {
      title: 'supabase',
      url: 'https://supabase.com/',
      icon: 'https://icon.horse/icon/supabase.com',
      description: '云数据库平台，此外还支持云函数、云存储、云身份验证等',
    },
    {
      title: 'MemFire Cloud',
      url: 'https://memfiredb.com/',
      icon: 'https://icon.horse/icon/memfiredb.com',
      description: 'supabase 的国产替代',
    },
    {
      title: 'upstash',
      url: 'https://upstash.com/',
      icon: 'https://icon.horse/icon/upstash.com',
      description: 'Redis 云平台',
    },
  ],
}

export default database
