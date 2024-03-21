import { FC, ReactNode } from 'react'
import Image from 'next/image'
import { ICatagory } from '@/types/data'
import { IconBulb } from '@tabler/icons-react'

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
    <div className="drawer lg:drawer-open w-full h-full overflow-auto">
      <input id="sidebar-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        {children}
        {/* <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label> */}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="sidebar-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        {/* <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul> */}
        <nav className="w-52 h-full border-r bg-white space-y-8">
          <div className="flex flex-col h-full">
            <div className="h-12 flex items-center justify-center mb-2">
              <IconBulb width={30} height={30} className="text-sky-500 mr-1" />
              <span className="text-black font-bold text-xl font-sans">
                Inditisan Tools
              </span>
            </div>
            <div className="flex-1 flex flex-col h-full overflow-auto">
              <ul className="px-4 text-sm font-medium flex-1">
                {navigation.map((item, idx) => (
                  <li key={idx} onClick={() => onNavItemClicked(item.key)}>
                    <a
                      className={`flex items-center gap-x-2 text-gray-600 p-2 rounded-lg  hover:bg-gray-50 active:bg-gray-100 duration-150 ${
                        currentNav === item.key ? 'bg-gray-100' : ''
                      }`}
                    >
                      {/* <div className="text-gray-500">
                    <item.icon stroke={2} size={16} />
                  </div> */}
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Sidebar
