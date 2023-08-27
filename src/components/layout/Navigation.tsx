"use client"
import React, {useEffect, useState} from "react";


import Link from "next/link";

// Icons

import {BiLogoTelegram} from "react-icons/bi"
import { FaHome } from "react-icons/fa";


// Components
import IconBtn from "@/components/buttons/IconBtn";
import ListLink from "@/components/layout/ListItem";
import { Fade as Hamburger } from 'hamburger-react'
import { usePathname } from "next/navigation";
import { iconDataList } from "../Icons/ContactIconsData";


export default function Navigation() {

  const pathname = usePathname()
  // const [isOpen, setOpen] = useState(window.matchMedia("(min-width: 1024px)").matches ? true : false)
  const [isOpen, setOpen] = useState(false)

  useEffect(()=>{
    setOpen(window.matchMedia("(min-width: 1024px)").matches ? true : false)
  },[])

  useEffect(()=>{
    if(window.matchMedia("(max-width: 1024px)").matches)
    setOpen(false)
    window.scrollTo(0, 0)
  },[pathname])
  return (
    <>
     { isOpen && <section className="bg-white  justify-between flex lg:sticky max-lg:flex-col lg:top-1 rounded-lg transition-transform shadow-2xl  max-lg:fixed max-lg:top-0 max-lg:right-0 max-lg:h-[100dvh] z-50 max-lg:w-full">
        <article className="">
          <ul className="flex gap-x-8 gap-y-10 max-lg:w-full items-center uppercase font-semibold max-lg:flex-col">
            <Link href="/" className="w-full">
              <li className="bg-cyan-400 flex items-center justify-center p-8 text-3xl rounded-lg hover:scale-75 transition-all hover:bg-cyan-300 max-lg:w-full">
                <FaHome />
              </li>
            </Link>
            <ListLink text="Resume" url="/resume"/>
            <ListLink text="Portfolio" url="/portfolio"/>
            <ListLink text="Contact" url="/contact"/>
          </ul>
        </article>
        <article>
          <ul className="flex gap-x-7 gap-y-10  items-center  text-xl mr-4 max-lg:flex-col max-lg:justify-center">
      
            {
              iconDataList.map((data,index)=>{
                return <IconLinkList key={data.link} {...data} isFirst={index == iconDataList.length - 1 ? true : false}/>
              })
            }
            <li className="">
      
              <IconBtn text="Hire Me" icon={<BiLogoTelegram/>} link="/contact"/>
            </li>
          </ul>
        </article>
      </section>}

     <article className="fixed top-0 right-0 z-[999] lg:hidden bg-cyan-600 text-white rounded-bl-xl " ><Hamburger toggled={isOpen} toggle={setOpen} /></article> 
    </> 

  );
}

function IconLinkList({icon, link, isFirst}: {icon: JSX.Element, link:string, isFirst: boolean}){
  return <Link href={link} target="_blank">
    <li className={`${isFirst ? "lg:py-9" : ""} hover:scale-125 hover:text-cyan-600 transition-all max-lg:text-3xl`}>{icon}</li>
  </Link>
}