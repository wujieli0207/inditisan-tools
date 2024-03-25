import { siteConfig } from '@/config/site'
import { IconBrandGithub, IconBrandTwitter } from '@tabler/icons-react'
import Link from 'next/link'

const BottomLink = () => {
  return (
    <div>
      {/* github */}
      <Link href={siteConfig.links.github} target="_blank">
        <button className="my-2 mx-1 mr-1 p-2 text-sm text-gray-700 duration-100 rounded hover:bg-gray-100">
          <IconBrandGithub width={18} height={18} />
        </button>
      </Link>

      {/* twitter */}
      <Link href={siteConfig.links.twitter} target="_blank">
        <button className="my-2 mx-1 p-2 text-sm text-gray-700 duration-100 rounded hover:bg-gray-100">
          <IconBrandTwitter width={18} height={18} />
        </button>
      </Link>
    </div>
  )
}

export default BottomLink
