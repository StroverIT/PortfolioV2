"use client";
import React, { useState } from "react";
import { Flip } from "./Flip";
import Image from "next/image";

import { motion, useAnimationControls } from "framer-motion";

type FlipData = {
   image: string // Image is starting from cover => test:after Image -> first index of image
   p: string // text that is showing to the book

//--- Not implemented yet
   _id?: string 
   title?: string 
}
const data: FlipData[] = [
  {
    image: "/book/chapterOne.png",
    title: "1",
    p: `In a world where technology evolves at lightning speed, embarking 
    on a journey to become a React Developer was both exhilarating and challenging. This is the story of how
     I transformed from a curious learner into a proficient React Developer, creating dynamic and interactive user 
     interfaces that would reshape the digital landscape.`,
    _id: "1231sada",
  },
  {
    image: "/book/chapterTwo.png",
    title: "1",
    p: `Every journey begins with 
    a spark of curiosity. For me, it was the intrigue of 
    how websites and applications seamlessly responded to user actions. 
    The foundation was laid as I delved into the basics of HTML, CSS, and JavaScript, 
    laying the groundwork for what was to come.

    `,
    _id: "1safa3241",
  },
  {
    image: "/book/chapterThree.png",
    title: "Pinaple",
    p: `
    The turning point came when I discovered React - a 
    JavaScript library for building user interfaces. The declarative 
    syntax and component-based architecture appealed to my coding sensibilities, 
    igniting a passion within me to explore this technology further.`,
    _id: "safas231423",
  },
  {
    image: "/book/chapterFour.png",
    title: "Last brat",
    p: `Learning React was no walk in the park. I faced challenges in understanding concepts like components, props, and state. Countless hours were spent poring over documentation, tutorials, and online courses. The path was riddled with moments of frustration, but every breakthrough brought a sense of accomplishment that fueled my determination.`,
    _id: "safas231423",
  },
  {
    image: "/book/chapterFive.png",
    title: "Last brat",
    p: `With a growing understanding of React, I embarked on my first real project. It was a modest to-do list application, but the lessons learned were monumental. Debugging became my constant companion, and the thrill of seeing my code come to life was unparalleled.`,
    _id: "safas231423",
  },  {
    image: "/book/chapterSix.png",
    title: "Last brat",
    p: `React was just the tip of the iceberg. I delved into the wider React ecosystem, exploring tools like Redux for state management and React Router for navigation. Each piece of the puzzle expanded my skill set and opened up new possibilities for crafting seamless user experiences.`,
    _id: "safas231423",
  },  {
    image: "/book/chapterSeven.png",
    title: "Last brat",
    p: `No developer is an island. Collaborative projects introduced me to the dynamics of teamwork and version control. Working alongside experienced developers provided insights into best practices, coding standards, and the art of constructive code reviews.`,
    _id: "safas231423",
  },  {
    image: "/book/chapterEight.png",
    title: "Last brat",
    p: `As I tackled more complex applications, I faced challenges like handling asynchronous operations, optimizing performance, and integrating with back-end services. These hurdles pushed me to dig deeper, expanding my problem-solving skills and knowledge of the inner workings of React.`,
    _id: "safas231423",
  },  {
    image: "/book/chapterNine.png",
    title: "Last brat",
    p: `From that first "Hello, World!" in React to deploying fully-fledged applications, every milestone was a testament to my growth. The joy of seeing users interact with something I had crafted from lines of code was the ultimate reward.`,
    _id: "safas231423",
  },  {
    image: "/book/chapterTen.png",
    title: "Last brat",
    p: `A true master not only excels in their craft but also shares their knowledge. I began writing blog posts, giving talks at meetups, and contributing to open-source projects. The cycle of learning and teaching enriched my journey in ways I never imagined.`,
    _id: "safas231423",
  },
  {
    image: "/book/conclusion.png",
    title: "Last brat",
    p: `Becoming a React Developer isn't a destination; it's a journey of constant evolution. With every new React release, every innovative project, and every coding challenge, I continue to refine my skills and deepen my understanding.`,
    _id: "safas231423",
  },
  {
    image: "/nan.png",
    title: "Last brat",
    p: `Becoming a React Developer was more than learning a technology; it was a transformation of self. The journey tested my patience, perseverance, and passion for coding. As I reflect on how far I've come, I realize that the journey has only just begun. Armed with the power of React, I look forward to shaping the digital world and embracing the endless possibilities it offers.    `,
    _id: "safas231423",
  },
];
export default function Book() {

  const [page, setPage] = useState(-1);

  const containerControl = useAnimationControls();
  const coverControl = useAnimationControls();

  return (
    <motion.div
      className="flex items-center justify-center relative"
      id="book"
      animate={containerControl}
    >
      {/* Cover */}
      <div className="relative w-[350px] h-[500px]">
        <motion.div
          className={`relative h-[500px] w-[350px] bg-[#2596BE] shadow-2xl cursor-pointer   test z-10`}
          animate={coverControl}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 70,
          }}
          onClick={(e) => {
            coverControl.set({
              x: "350px",
            });
            setPage(0);
            setTimeout(() => {
              coverControl.start({
                rotateY: "-180deg",
              });
            }, [500]);
            setTimeout(() => {
              coverControl.start({
                zIndex: 0,
              });
            }, [1000]);
          }}
        >
          <Image alt="testingbro" fill={true} src="/book/cover.png" />
        </motion.div>
      </div>
      {/* Book page */}
      {page >= 0 && (
        <motion.div
          //  initial={{
          //   translateX: "-200px",

          //  }}
          //   animate={{
          //     // translateX: "2px",

          //   }}
          // transition={{ duration: 1 }}
          className="h-[500px] w-[350px] relative perspective shadow-2xl"
        >
          {data.map((item, i) => {
            return (
              <Flip
                key={item.image}
                {...item}
                zIndex={data.length - i}
                isLast={i == data.length - 1 ? true : false}
                flipIndex={i + 1}
                page={page}
                setPage={setPage}
              />
            );
          })}
        </motion.div>
      )}
    </motion.div>
  );
}
