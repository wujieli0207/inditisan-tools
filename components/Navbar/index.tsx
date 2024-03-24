import {
  IconBrandGithub,
  IconLayoutSidebarLeftExpand,
} from '@tabler/icons-react'
import Link from 'next/link'

const Navbar = () => {
  // const [theme, setTheme] = useState('light')

  // useEffect(() => {
  //   if (theme === 'dark') {
  //     document.documentElement.classList.add('dark')
  //     document.documentElement.style.filter = 'invert(0.92) hue-rotate(180deg)'
  //     document.querySelectorAll('img, video').forEach((element) => {
  //       // @ts-ignore
  //       element.style.filter = 'invert(0.92) hue-rotate(180deg)'
  //     })
  //   } else {
  //     document.documentElement.classList.remove('dark')
  //     document.documentElement.style.filter = ''
  //     document.querySelectorAll('img, video').forEach((element) => {
  //       // @ts-ignore
  //       element.style.filter = ''
  //     })
  //   }
  // }, [theme])

  // useEffect(() => {
  //   const localTheme = window.localStorage.getItem('theme')
  //   if (localTheme) {
  //     setTheme(localTheme)
  //   } else if (
  //     window.matchMedia &&
  //     window.matchMedia('(prefers-color-scheme: dark)').matches
  //   ) {
  //     setTheme('dark')
  //   }
  // }, [])

  // const toggleTheme = () => {
  //   if (theme === 'light') {
  //     window.localStorage.setItem('theme', 'dark')
  //     setTheme('dark')
  //   } else {
  //     window.localStorage.setItem('theme', 'light')
  //     setTheme('light')
  //   }
  // }

  return (
    <nav className="z-20">
      {/* toggle sidebar */}
      <div className="p-1 text-sm text-gray-700 duration-100  fixed top-[50%] -left-2 bg-white shadow-md rounded-lg hover:bg-gray-200  lg:hidden">
        <label htmlFor="sidebar-drawer">
          <IconLayoutSidebarLeftExpand width={18} height={18} />
        </label>
      </div>
    </nav>
  )
}

export default Navbar