import { FC, ReactNode, Ref, useEffect, useRef, useState } from 'react'
import Menu from './Menu'
import { IconArrowNarrowUp, IconBulb } from '@tabler/icons-react'
import { ICatagory } from '@/types/data'
import Icon from './Icon'
import { useHover, useScroll } from 'ahooks'
import BottomLink from './BottomLink'

interface IProps {
  children: ReactNode
  navigation: ICatagory[]
  currentNav: ICatagory['key']
  setIsNavClick: (is: boolean) => void // 是否在侧边栏点击
  onNavItemClicked: (key: ICatagory['key']) => void
}

const Sidebar: FC<IProps> = ({
  children,
  navigation,
  currentNav,
  setIsNavClick,
  onNavItemClicked,
}) => {
  const mainRef = useRef<HTMLDivElement>(null)

  const scroll = useScroll(mainRef)
  const isMainHoving = useHover(mainRef)

  const [showScroll, setShowScroll] = useState(false)

  // 监听窗口滚动事件
  useEffect(() => {
    if (scroll && scroll?.top > 300) {
      setShowScroll(true)
    } else {
      setShowScroll(false)
    }
  }, [scroll, setIsNavClick])

  useEffect(() => {
    // 如果鼠标在内容页面内，此时不是点击 sidebar 的滚动事件
    if (isMainHoving) {
      setTimeout(() => {
        setIsNavClick(false)
      }, 1 * 1000)
    }
  }, [isMainHoving, setIsNavClick])

  // 点击按钮滚动到顶部的处理函数
  const scrollToTop = () => {
    mainRef.current?.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <div className="drawer lg:drawer-open w-full h-full">
        <input id="sidebar-drawer" type="checkbox" className="drawer-toggle" />
        <div
          ref={mainRef}
          className="drawer-content overflow-auto flex flex-col items-center justify-center"
        >
          {/* Page content here */}
          {children}
        </div>

        {/* 回到顶部 */}
        {showScroll && (
          <button
            className="fixed right-3 bottom-3 p-1 text-indigo-600 duration-150 bg-indigo-50 rounded-lg hover:bg-indigo-100 active:bg-indigo-200"
            onClick={() => scrollToTop()}
          >
            <IconArrowNarrowUp />
          </button>
        )}

        <div className="drawer-side">
          <label
            htmlFor="sidebar-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          />

          <nav className="w-52 h-full border-r bg-white space-y-8 px-2 flex flex-col justify-between items-center">
            <div className="flex flex-col h-full">
              {/* logo */}
              <div className="h-12 flex items-center justify-center mb-2">
                <IconBulb
                  width={30}
                  height={30}
                  className="text-sky-500 mr-1"
                />
                <span className="text-black font-bold text-xl font-sans">
                  Inditisan Tools
                </span>
              </div>

              {/* 菜单栏 */}
              <div className="overflow-auto px-2">
                <ul className="text-sm font-medium flex-1">
                  {navigation.map((item, idx) => {
                    if (item.children) {
                      return (
                        <li key={idx}>
                          <Menu
                            items={item.children}
                            currentNav={currentNav}
                            onNavItemClicked={onNavItemClicked}
                          >
                            <span>
                              {item.icon && <Icon componentName={item.icon} />}
                            </span>
                            {item.title}
                          </Menu>
                        </li>
                      )
                    } else {
                      return (
                        <li
                          key={idx}
                          onClick={() => onNavItemClicked(item.key)}
                        >
                          <span
                            className={`flex items-center gap-x-2 text-gray-600 p-2 rounded-lg  hover:bg-gray-50 active:bg-gray-100 duration-150 ${
                              item.key === currentNav
                                ? 'bg-gray-50 text-sky-500'
                                : ''
                            }`}
                          >
                            {item.title}
                          </span>
                        </li>
                      )
                    }
                  })}
                </ul>
              </div>
            </div>

            {/* 底部链接 */}
            <BottomLink className="fixed bottom-0 left-0 right-0" />
          </nav>
        </div>
      </div>
    </>
  )
}

export default Sidebar
