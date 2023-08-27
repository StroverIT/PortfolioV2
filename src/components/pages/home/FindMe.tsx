import { iconDataList } from '@/components/Icons/ContactIconsData'
import Link from 'next/link'
import React from 'react'

export default function FindMe() {
  return (
    <section className='mt-10'>
        <article className="text-center">
          <h3 className="text-2xl font-semibold">FIND ME ON</h3>
          <p className="">Feel free to <span className="text-cyan-600">connect</span> with me</p>
        </article>
        <article className="flex gap-x-6 items-center justify-center mt-4">
          {
            iconDataList.map(icon=>{
              return <IconLinkList key={icon.link} {...icon}/>
            })
          }
        </article>
      </section>
  )
}

function IconLinkList({icon, link}: {icon: JSX.Element, link:string}){
    return <Link href={link} target="_blank">
      <div className={` hover:scale-125 transition-all bg-cyan-600 text-white text-lg rounded-full p-2`}>{icon}</div>
    </Link>
  }