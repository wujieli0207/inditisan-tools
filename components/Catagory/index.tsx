import { ICard, ICatagory } from '@/types/data'
import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface IProps {
  catagory: ICatagory
}

const Catagory: FC<IProps> = ({ catagory }) => {
  const { title, cards: cardList } = catagory

  return (
    <section className="max-w-screen-xl px-8 mx-auto my-4 md:px-8">
      <div className="flex flex-col mb-12">
        <h2 className="text-2xl font-bold text-black">{title}</h2>

        <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cardList.map((card) => {
            return (
              <Link
                href={card.url}
                target="_blank"
                key={card.title}
                className="flex items-center h-28"
              >
                <div className="flex items-center p-4 w-full h-full bg-white rounded-md shadow-md  hover:cursor-pointer hover:shadow-lg">
                  <div className="basis-1/5">
                    <div className="flex items-center justify-center w-10 h-10 border border-blue-100 rounded-full bg-blue-50">
                      <Image
                        width={18}
                        height={18}
                        src={card.icon}
                        alt={card.title}
                      />
                    </div>
                  </div>

                  <div className="basis-4/5">
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
