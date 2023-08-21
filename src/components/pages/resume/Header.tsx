import React from 'react'

export default function Header({ text }: { text: string }) {
    return <h2 className="uppercase text-cyan-600 text-xl mb-2 font-semibold mt-4">{text}</h2>;
  }
  
