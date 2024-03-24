'use client'

import { siteConfig } from '@/config/site'
import Catagory from '@/components/Catagory'
import Empty from '@/components/Empty'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import data from '@/data'
import { handleSearch } from '@/utils/search'
import { useRef, useState } from 'react'
import SearchIcon from '@/components/Icon/Search'
import EnterIcon from '@/components/Icon/Enter'

export default function Home() {
  const [currentNav, setCurrentNav] = useState(
    data[0].children && data[0].children[0] ? data[0].children[0].key : ''
  )
  const [filterData, setFilterData] = useState(data)
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
        <div className="flex flex-col w-full items-center mt-32">
          {/* landing page */}
          <div className="text-center space-y-4 px-8">
            <h1 className="text-gray-800 font-bold text-3xl sm:text-4xl md:text-5xl">
              <span className="text-indigo-600">
                Inditisan = Indie + Artisan
              </span>
            </h1>
            <p className="text-gray-500 max-w-xl mx-auto leading-relaxed ">
              {siteConfig.description}
            </p>
          </div>

          {/* 搜索按钮 */}
          <div
            onSubmit={(e) => e.preventDefault()}
            className="max-w-xl px-8 mx-auto w-full mt-16"
          >
            <div className="relative">
              <SearchIcon className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3" />
              <input
                type="text"
                placeholder="Search"
                className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    setFilterData(handleSearch(data, e.currentTarget.value))
                  }
                }}
              />
              {/* 回车 icon */}
              <EnterIcon className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 right-3" />
            </div>
          </div>

          {/* 具体导航 */}
          {filterData.length > 0 ? (
            <div className="overflow-auto mt-16">
              {filterData.map((item) => {
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
          ) : (
            <div className="text-black mt-16">
              <Empty />
            </div>
          )}
        </div>
      </Sidebar>
    </main>
  )
}
