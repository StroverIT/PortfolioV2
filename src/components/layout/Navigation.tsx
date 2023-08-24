"use client"
import React, {useState} from "react";

import { FaHome } from "react-icons/fa";

// Icons
import { RiAccountCircleFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill, BsLinkedin, BsGithub} from "react-icons/bs";
import {BiLogoTelegram} from "react-icons/bi"

import IconBtn from "@/components/buttons/IconBtn";
import ListLink from "@/components/layout/ListItem";
import Link from "next/link";

type IconDataList = {
  icon: JSX.Element,
  link: string
}
const iconDataList: IconDataList[] = [
  {
    icon:  <BsGithub />,
    link: "https://github.com/StroverIT"
  },
  {
    icon:  <BsLinkedin />,
    link: "https://linkedin.com/in/emilzlatinov",
  },
  {
    icon: <MdEmail />,
    link: "mailto:emilzlatinov123@gmail.com",
  },
  {
    icon: <BsFillTelephoneFill />,
    link: "tel:+359876237725",
  }

]

export default function Navigation() {

  // const [isOpen, setOpen] = useState(window.matchMedia("(min-width: 1024px)").matches ? true : false)
  const [isOpen, setOpen] = useState(false)

  
  return (
    isOpen && <section className="bg-white justify-between flex lg:sticky lg:top-1 rounded-lg transition-transform shadow-2xl z-10">
      <article>
        <ul className="lg:flex gap-x-8 items-center uppercase font-semibold">
          <Link href="/">
            <li className="bg-cyan-400 flex items-center justify-center p-8 text-3xl rounded-lg hover:scale-75 transition-all hover:bg-cyan-300">
              <FaHome />
            </li>
          </Link>
          <ListLink text="Resume" url="/resume"/>
          <ListLink text="Portfolio" url="/portfolio"/>
          <ListLink text="Contact" url="/contact"/>

        </ul>
      </article>
      <article>
        <ul className="lg:flex gap-x-7 items-center  text-xl mr-4">
          
          {
            iconDataList.map((data,index)=>{
              return <IconLinkList key={data.link} {...data} isFirst={index == iconDataList.length - 1 ? true : false}/>
            })
          }
          <li>
            
            <IconBtn text="Hire Me" icon={<BiLogoTelegram/>}/>
          </li>
        </ul>
      </article>
    </section>
  );
}

function IconLinkList({icon, link, isFirst}: {icon: JSX.Element, link:string, isFirst: boolean}){
  return <Link href={link} target="_blank">
    <li className={`${isFirst ? "py-9" : ""} hover:scale-125 hover:text-cyan-600 transition-all`}>{icon}</li>
  </Link>
}