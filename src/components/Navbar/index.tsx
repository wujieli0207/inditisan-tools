import {
  IconBrandGithub,
  IconSun,
  IconLayoutSidebarLeftExpand,
} from '@tabler/icons-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const Navbar = () => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
      document.documentElement.style.filter = 'invert(0.92) hue-rotate(180deg)'
      document.querySelectorAll('img, video').forEach((element) => {
        // @ts-ignore
        element.style.filter = 'invert(0.92) hue-rotate(180deg)'
      })
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.style.filter = ''
      document.querySelectorAll('img, video').forEach((element) => {
        // @ts-ignore
        element.style.filter = ''
      })
    }
  }, [theme])

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme')
    if (localTheme) {
      setTheme(localTheme)
    } else if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      setTheme('dark')
    }
  }, [])

  const toggleTheme = () => {
    if (theme === 'light') {
      window.localStorage.setItem('theme', 'dark')
      setTheme('dark')
    } else {
      window.localStorage.setItem('theme', 'light')
      setTheme('light')
    }
  }

  return (
    <nav className="bg-white border-b h-12 flex justify-between ">
      <div>
        {/* toggle sidebar */}
        <div className="my-2 ml-3 mx-1 p-1 text-sm text-gray-700 duration-100 border rounded-lg hover:border-sky-500 active:shadow-lg lg:hidden">
          <label htmlFor="sidebar-drawer">
            <IconLayoutSidebarLeftExpand width={18} height={18} />
          </label>
        </div>
      </div>
      <div>
        {/* dark / light */}
        <button
          className="my-2 mx-1 p-1 text-sm text-gray-700 duration-100 border rounded-lg hover:border-sky-500 active:shadow-lg "
          onClick={toggleTheme}
        >
          <IconSun width={18} height={18} />
        </button>

        {/* github */}
        <Link
          href="https://github.com/wujieli0207/inditisan-tools"
          target="_blank"
        >
          <button className="my-2 mx-1 mr-3 p-1 text-sm text-gray-700 duration-100 border rounded-lg hover:border-sky-500 active:shadow-lg">
            <IconBrandGithub width={18} height={18} />
          </button>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
