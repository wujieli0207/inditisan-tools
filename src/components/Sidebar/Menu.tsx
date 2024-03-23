import { ICatagory } from '@/types/data'
import { FC, ReactNode, useState } from 'react'

interface IProps {
  children: ReactNode
  items: ICatagory[] // 子菜单
  currentNav: ICatagory['key']
  onNavItemClicked: (key: ICatagory['key']) => void
}

const Menu: FC<IProps> = ({
  children,
  items,
  currentNav,
  onNavItemClicked,
}) => {
  const [isOpened, setIsOpened] = useState(false)

  return (
    <>
      <div
        className="w-full flex items-center justify-between text-gray-600 p-2 rounded-lg  hover:bg-gray-50 hover:text-sky-500 hover:cursor-pointer active:bg-gray-100 duration-150"
        onClick={() => setIsOpened(!isOpened)}
      >
        <div className="flex items-center gap-x-2">{children}</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`w-5 h-5 duration-150 ${isOpened ? 'rotate-180' : ''}`}
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      {isOpened ? (
        <ul className="mx-4 pl-2 border-l text-sm font-medium">
          {items.map((item, idx) => (
            <li key={idx} onClick={() => onNavItemClicked(item.key)}>
              <span
                className={`flex items-center gap-x-2 text-gray-600 p-2 rounded-lg  hover:bg-gray-50 hover:text-sky-500 hover:cursor-pointer active:bg-gray-100 duration-150 ${
                  item.key === currentNav ? 'bg-gray-50 text-sky-500' : ''
                }`}
              >
                {item.title}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        ''
      )}
    </>
  )
}

export default Menu
