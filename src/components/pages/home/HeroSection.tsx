import React from 'react'

export default function HeroSection() {
  return (
    <article>
          <h1 className=" font-bold mb-1 text-center">
            <span className="text-2xl">Welcome to My Portfolio!</span>
            <br/>
            <span className="text-lg">
              Crafting Experiences with React and
              Front-end Brilliance
            </span>
          </h1>
        <p className="flex items-center justify-center lg:text-lg max-lg:mt-4">
          <span className="lg:max-w-2xl ">
            Hello and welcome to my portfolio! I&apos;m thrilled that you&apos;ve
            stopped by to get to know me better. Allow me to introduce myself. 
            <br/> – I&apos;m Emil Zlatinov, a passionate developer with a heart set on
            creating remarkable front-end experiences using React, Next.js, and
            Tailwind CSS. 
            <br/>
            With a solid foundation in MongoDB, Node.js, and
            Express, I bring a unique blend of skills to the world of web
            development.
          </span>
        </p>
      </article>
  )
}
