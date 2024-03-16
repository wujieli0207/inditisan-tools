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
      />

      <div className="flex flex-col w-full">
        <Navbar />
        <div className="w-full overflow-auto">
          {data.map((item) => {
            return (
              <div
                key={item.title}
                ref={(el) => (categoryRefs.current[item.key] = el!)}
              >
                <Catagory title={item.title} cardList={item.cards} />
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}
