import React from 'react'
import Article from './Article';

// Interfaces || Types
import { TArticle } from "@/components/pages/home/interfaces";

const articlesData: TArticle[] = [
    {
      title: `Crafting User-Centric Front-End Experiences:`,
      text: <p>At the core of my journey lies a burning passion for front-end development. 
      The canvas of the web is where I thrive, transforming concepts into captivating digital realities.
      <br/>
       Through my proficiency in React, I paint user-centric interfaces that not only engage but also immerse visitors in a seamless digital journey.
        My dedication to staying updated with the latest trends and technologies ensures that every pixel resonates with the cutting-edge of modern design.</p>,
      image: `frontEnd.webp`,
    },
    {
      title: `Unleashing the Power of Next.js:`,
      text: <p>When it comes to delivering performance-driven web applications,
         Next.js is my trusty companion. Leveraging server-side rendering and optimized routing, I 
         create applications that load in a flash, captivating users from their very first interaction. 
         With Next.js in my toolkit, I ensure that my creations are not only aesthetically pleasing but also
          technically impeccable.</p>,
      image: `nextjs.svg`,
    },
  
    {
      title: `Tailwind CSS: The Elegance of Simplicity:`,
      text: <p>A true craftsman knows the value of simplicity, and that&apos;s where Tailwind CSS comes into play. With its utility-first approach, I sculpt elegant and responsive designs that adapt flawlessly to various devices and screen sizes. The result? A consistent and delightful user experience that leaves a lasting impression.</p>,
      image: `tailwindcss.jpg`,
    },
    {
      title: `Empowering Back-End Skills:`,
      text: <p>While my heart lies in front-end development, I recognize the significance of a robust back-end. 
        My expertise in MongoDB, Node.js, and Express empowers me to craft holistic solutions that seamlessly integrate data management, logic, and presentation layers.
         This comprehensive skill set ensures that the entire web development ecosystem dances harmoniously to the tune of excellence.</p>,
      image: `mongodb.jpg`,
    },
    {
      title: `My Promise to You: Elevating Your Team:`,
      text: <p>I&apos;m not just a developer; I&apos;m a collaborator. My commitment to teamwork and open communication means that I seamlessly integrate into your projects, adding value not only through my technical skills but also my dedication to achieving collective goals. I&apos;m driven to learn, grow, and adapt, ensuring that your team thrives in an ever-evolving digital landscape.</p>,
      image: `elevatingTeam.jpg`,
    },
    {
      title: "Thanks!",
      text: <p>Thank you for taking the time to learn a bit about 
        me and my journey as a developer. If you&apos;re looking for a dedicated front-end developer with
         a penchant for React and an eye for crafting immersive user experiences, I&apos;m excited to connect. Let&apos;s collaborate to craft digital masterpieces that leave users amazed and inspired.</p>,
      image: `thanks.webp`,
    },
  ];

export default function Articles() {
  return (
    <section className="flex flex-col gap-y-20 lg:mt-20 mt-10 ">
    {articlesData.map((article, index) => {
      return <Article key={article.title} {...article} index={index} />;
    })}
  </section>
  )
}
