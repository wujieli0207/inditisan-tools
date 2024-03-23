'use client'

import Catagory from '@/src/components/Catagory'
import Navbar from '@/src/components/Navbar'
import Sidebar from '@/src/components/Sidebar'
import data from '@/src/data'
import { useRef, useState } from 'react'

export default function Home() {
  const [currentNav, setCurrentNav] = useState(data[0].key)
  const categoryRefs = useRef<Record<string, HTMLDivElement>>({}) // Store refs for each category

  const handleNavItemClick = (key: string) => {
    setCurrentNav(key)

    categoryRefs.current[key].scrollIntoView({ behavior: 'smooth' })
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
          <div className="w-full overflow-auto mt-12">
            {data.map((item) => {
              return (
                <div
                  key={item.key}
                  ref={(el) => (categoryRefs.current[item.key] = el!)}
                >
                  {/* 分类 */}
                  {item.children?.map((el) => {
                    return (
                      <Catagory
                        key={el.key}
                        title={el.title}
                        cardList={el.cards}
                      />
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
