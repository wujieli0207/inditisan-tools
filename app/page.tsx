'use client'

import Catagory from '@/src/components/Catagory'
import Navbar from '@/src/components/Navbar'
import Sidebar from '@/src/components/Sidebar'
import data from '@/src/data'
import { useEffect, useRef, useState } from 'react'

export default function Home() {
  const [currentNav, setCurrentNav] = useState(
    data[0].children && data[0].children[0] ? data[0].children[0].key : ''
  )
  const categoryRefs = useRef<Record<string, HTMLDivElement>>({})

  const handleNavItemClick = (key: string) => {
    setCurrentNav(key)

    categoryRefs.current[key].scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <main className="flex w-screen h-screen bg-white ">
      <Navbar />

      {/* 背景 */}
      <div
        aria-hidden="true"
        className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
      >
        <div className="blur-[206px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
        <div className="blur-[206px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
      </div>

      <Sidebar
        navigation={data}
        currentNav={currentNav}
        onNavItemClicked={handleNavItemClick}
      >
        <div className="flex flex-col w-full">
          <Navbar />

          <div className="overflow-auto">
            {data.map((item) => {
              return (
                <div key={item.key}>
                  {/* 分类 */}
                  {item.children?.map((catagory) => {
                    return (
                      <div
                        key={catagory.key}
                        ref={(e) => (categoryRefs.current[catagory.key] = e!)}
                      >
                        <Catagory catagory={catagory} />
                      </div>
                    )
                  })}
                </div>
              )
            })}
          </div>
        </div>
      </Sidebar>
    </main>
  )
}
