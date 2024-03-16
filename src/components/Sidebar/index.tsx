import { useMemo } from 'react'
import data from '@/src/data'
import Image from 'next/image'

const Sidebar = () => {
  const navigation = useMemo(() => {
    return data.map((item) => item)
  }, [])

  return (
    <>
      <nav className="w-full h-full border-r bg-white space-y-8 sm:w-60">
        <div className="flex flex-col h-full">
          <div className="h-20 flex items-center px-8">
            <a className="flex-none">
              <Image
                src="https://floatui.com/logo.svg"
                width={140}
                height={32}
                className="mx-auto"
                alt="logo"
              />
            </a>
          </div>
          <div className="flex-1 flex flex-col h-full overflow-auto">
            <ul className="px-4 text-sm font-medium flex-1">
              {navigation.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="flex items-center gap-x-2 text-gray-600 p-2 rounded-lg  hover:bg-gray-50 active:bg-gray-100 duration-150"
                  >
                    <div className="text-gray-500">
                      <item.icon />
                    </div>
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Sidebar
