import { LayersIcon } from '@radix-ui/react-icons'
import { ICatagory } from '@/types/data'

const animation: ICatagory = {
  title: '动画',
  icon: LayersIcon,
  href: '',
  cards: [
    {
      title: 'Lottie',
      url: 'https://lottiefiles.com/',
      icon: 'https://icon.horse/icon/lottiefiles.com',
    },
    {
      title: 'auto-animate',
      url: 'https://auto-animate.formkit.com/',
      icon: 'https://icon.horse/icon/auto-animate.formkit.com',
      description: '即插即用的过渡动画库，没有框架限制',
    },
    {
      title: 'visualDesign',
      url: 'https://hepengwei.cn/#/html/visualDesign',
      icon: 'https://icon.horse/icon/hepengwei.cn',
      description: '各种有意思的前端动效和功能实现',
    },
    {
      title: 'animotion',
      url: 'https://animotion.dev/',
      icon: 'https://icon.horse/icon/animotion.dev',
      description: '可视化配置 css 动画',
    },
    {
      title: 'Aceternity UI',
      url: 'https://ui.aceternity.com/',
      icon: 'https://icon.horse/icon/ui.aceternity.com',
      description: '非常多炫酷的特效，适合用在展示型网站',
    },
  ],
}

export default animation
