import Catagory from '@/src/components/Catagory'
import Sidebar from '@/src/components/Sidebar'
import data from '@/src/data'

export default function Home() {
  return (
    <main className="flex w-screen h-screen bg-white ">
      <Sidebar />

      <div className="w-full overflow-auto">
        {data.map((item) => {
          return (
            <div key={item.title}>
              <Catagory title={item.title} cardList={item.cards} />
            </div>
          )
        })}
      </div>
    </main>
  )
}
