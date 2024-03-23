import { FC, ReactNode } from 'react'
import Menu from './Menu'
import { IconBulb } from '@tabler/icons-react'
import { ICatagory } from '@/types/data'
import Icon from './Icon'

interface IProps {
  children: ReactNode
  navigation: ICatagory[]
  currentNav: ICatagory['key']
  onNavItemClicked: (key: ICatagory['key']) => void
}

const Sidebar: FC<IProps> = ({
  children,
  navigation,
  currentNav,
  onNavItemClicked,
}) => {
  return (
    <>
      <div className="drawer lg:drawer-open w-full h-full overflow-auto">
        <input id="sidebar-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          {children}
        </div>

        <div className="drawer-side">
          <label
            htmlFor="sidebar-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          />

          <nav className="w-52 h-full border-r bg-white space-y-8 px-2">
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
          </nav>
        </div>
      </div>
    </>
  )
}

export default Sidebar
