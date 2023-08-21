
"use client"
import Link from 'next/link'
import React from 'react'
import { usePathname  } from 'next/navigation'

const ListLink = ({text, url}: {text: string, url: string})=>{
    
    const pathname = usePathname()

    return <Link href={url}>
      <li className={`${url == pathname ? "text-cyan-600": "hover:text-cyan-600 transition-colors"}`}>{text}</li>
    </Link>
  }

  export default ListLink