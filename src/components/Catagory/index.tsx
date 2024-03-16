import { ICard } from '@/types/data'
import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface IProps {
  title: string
  cardList: ICard[]
}

const Catagory: FC<IProps> = ({ title, cardList }) => {
  return (
    <section className="max-w-screen-xl px-4 mx-auto my-16 md:px-8">
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold text-black">{title}</h2>

        <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cardList.map((card) => {
            return (
              <Link href={card.url} target="_blank" key={card.title}>
                <div className="flex items-center p-4 bg-white  rounded-md shadow-md w-72 min-h-28 hover:cursor-pointer hover:shadow-lg">
                  <div className="flex items-center justify-center w-10 h-10 border border-blue-100 rounded-full bg-blue-50">
                    <Image
                      width={18}
                      height={18}
                      src={card.icon}
                      alt={card.title}
                    />
                  </div>

                  <div className="ml-4">
                    <h2 className="font-semibold text-black">{card.title}</h2>
                    <p className="mt-2 text-sm text-gray-500">
                      {card.description}
                    </p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Catagory
