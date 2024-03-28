import { siteConfig } from '@/config/site'
import { IconBrandGithub, IconBrandTwitter } from '@tabler/icons-react'
import Link from 'next/link'
import { FC } from 'react'

interface IProps {
  className?: string
}

const BottomLink: FC<IProps> = ({ className }) => {
  return (
    <div
      className={`flex items-center justify-center w-full bg-white border-t border-gray-200 ${className}`}
    >
      {/* github */}
      <Link href={siteConfig.links.github} target="_blank">
        <button className="my-1 mx-1 mr-1 p-2 text-sm text-gray-700 duration-100 rounded hover:bg-gray-100">
          <IconBrandGithub width={18} height={18} />
        </button>
      </Link>

      {/* twitter */}
      <Link href={siteConfig.links.twitter} target="_blank">
        <button className="my-1 mx-1 p-2 text-sm text-gray-700 duration-100 rounded hover:bg-gray-100">
          <IconBrandTwitter width={18} height={18} />
        </button>
      </Link>
    </div>
  )
}

export default BottomLink
