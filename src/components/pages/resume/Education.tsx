import React from 'react'
import Header from './Header'

export default function Education() {
  return (
    <section>
    <Header text="education" />
    <section>
      <article>
        <h1 className='font-semibold text-lg'>Secondary school with information Technologies</h1>
        <p className=''>105th Atanas Dalchev</p>
        <h2 className='text-gray-600 italic'>09/2016 - 07/2021</h2>
      </article>
      <article className='mt-2'>
        <h1 className='font-semibold text-lg'>JavaScript Web Developer</h1>
        <p className=''>Software University - Softuni</p>
        <h2 className='text-gray-600 italic'>04/2021 - 05/2022</h2>

        <h3 className='mt-2 text-gray-600 italic'>Courses</h3>
        <ul className='list-disc ml-5 text-sm grid grid-cols-2'>
          <li>Programming Basics</li>
          <li>Programming Fundamentals with Js</li>
          <li>JS Advanced</li>
          <li>JS Applications</li>
          <li>JS Back-End</li>
          <li>ReactJS</li>
        </ul>
      </article>
    </section>
  </section>
  )
}
