import { FC } from 'react'
import Image from 'next/image'
import { ICatagory } from '@/types/data'
import { IconBulb } from '@tabler/icons-react'

interface IProps {
  navigation: ICatagory[]
  currentNav: ICatagory['key']
  onNavItemClicked: (key: ICatagory['key']) => void
}

const Sidebar: FC<IProps> = ({ navigation, currentNav, onNavItemClicked }) => {
  return (
    <nav className="w-full h-full border-r bg-white space-y-8 sm:w-60">
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
  )
}

export default Sidebar
