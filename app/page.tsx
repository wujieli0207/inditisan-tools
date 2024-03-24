'use client'

import { siteConfig } from '@/config/site'
import Catagory from '@/components/Catagory'
import Empty from '@/components/Empty'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import data from '@/data'
import { handleSearch } from '@/utils/search'
import { useRef, useState } from 'react'

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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search"
                className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    console.log(
                      'e.currentTarget.value: ',
                      e.currentTarget.value
                    )
                    setFilterData(handleSearch(data, e.currentTarget.value))
                  }
                }}
              />
              {/* 回车 icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 right-3"
                viewBox="0 0 1024 1024"
                version="1.1"
                p-id="4792"
                width="200"
                height="200"
              >
                <path
                  d="M900 386.016v-192q0-16.992-11.488-28.512t-28-11.488-28.512 11.488-12 28.512v192q0 92-64.992 156.992T598.016 608H258.016l112.992-112q11.008-12 11.008-28.512t-11.488-28-28-11.488-28.512 12L136 618.016q-12 12-12 28.512t12 28.512l183.008 183.008q12 12 28.512 12t28.512-11.488 12-28-12-28.512l-114.016-114.016h336q124.992 0 213.504-88.512t88.512-213.504z"
                  p-id="4793"
                  fill="#bfbfbf"
                ></path>
              </svg>
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
