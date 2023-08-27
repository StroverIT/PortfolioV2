import React from 'react'
import { TArticle } from './interfaces'
import Image from 'next/image'


export default function Article({title, text,image, index}: TArticle) {
  const imageUrl = `/homePage/${image}`
  return (
    <section className='grid lg:grid-cols-[50%40%] gap-x-10 gap-y-4 min-h-[30dvh] items-center justify-center'>
      {/* ${index % 2 == 0 && "order-1"} */}
      <article className={`relative bg-white z-30 `}>
        <h2 className='text-lg font-semibold mb-2'>{title}</h2>
        <p className=''>{text}</p>
      </article>
      <article className='relative z-10'>
        <div className='relative lg:h-96 lg:w-96 w-44 h-44 '>
          <Image src={imageUrl} fill alt={title} className='object-contain  '/>
        </div>
      </article>
    </section>
  )
}
