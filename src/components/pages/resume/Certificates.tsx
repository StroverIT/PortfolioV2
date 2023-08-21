import React from 'react'

// Components
import Header from './Header'
import Link from 'next/link';

export default function Certificates() {
  return (
    <section>
    <Header text="certificates" />
    <section className="grid  gap-y-4">
      <Certificate
        title="Programming basics - Software University"
        url="https://softuni.bg/certificates/details/109577/a16c54dc"
      />
      <Certificate
        title="Programming Fundamentals with JS - Software University"
        url="https://softuni.bg/certificates/details/119731/ff670231"
      />
      <Certificate
        title="JS Advanced - Software University"
        url="https://softuni.bg/certificates/details/127853/856dd137"
      />
      <Certificate
        title="JS Applications - Software University"
        url="https://softuni.bg/certificates/details/130347/e267c6e1"
      />
      <Certificate
        title="JS Back-End - Software University"
        url="https://softuni.bg/certificates/details/137108/57a8e417"
      />
    </section>
  </section>
  )
}

function Certificate({ title, url }: { title: string; url: string }) {
    return (
      <article>
        <h3 className='font-semibold'>{title}</h3>
        <Link href={url} target="_blank">
          <section className='group hover:text-cyan-600 transition-all duration-500 delay-400 inline-flex relative'>
            <p className='text-sm'>{url}</p>
            <div className='w-0 h-[1px] bg-cyan-600 group-hover:w-full transition-all duration-500 absolute bottom-0 left-0'></div>
            
          </section>
        </Link>
      </article>
    );
  }
  
