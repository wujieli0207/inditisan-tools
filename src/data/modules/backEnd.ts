import { IconLink } from '@tabler/icons-react'
import { ICatagory } from '@/types/data'

const backEnd: ICatagory = {
  key: 'backEnd',
  title: '服务端',
  icon: IconLink,
  href: '',
  cards: [
    {
      title: 'NestJS',
      url: 'https://nestjs.com/',
      icon: 'https://icon.horse/icon/nestjs.com',
      description: '',
    },
    {
      title: 'supabase',
      url: 'https://supabase.com/',
      icon: 'https://icon.horse/icon/supabase.com',
      description: '',
    },
    {
      title: 'MemFire Cloud',
      url: 'https://memfiredb.com/',
      icon: 'https://icon.horse/icon/memfiredb.com',
      description: 'supabase 的国产替代',
    },
  ],
}

export default backEnd
