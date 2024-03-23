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
