import React from 'react'



export default function IconBtn({text, icon, onClick}: {text: string, icon: JSX.Element, onClick?: ()=> void}) {
  return (
    <div onClick={onClick} className='bg-cyan-600 rounded-full pr-2 pl-4 py-1  flex items-center justify-between group cursor-pointer hover:shadow-xl hover:scale-110 transition-transform duration-500'>
        
        <div className=' font-semibold text-white '>{text}</div>
        <div className='bg-white rounded-full p-1 text-lg ml-4 group-hover:rotate-[360deg] group-hover:scale-125 transition-transform duration-500'>{icon}</div>
        </div>
  )
}
