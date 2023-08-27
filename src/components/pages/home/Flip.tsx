"use client";
import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

export function Flip({
  image,
  p,
  isLast,
  flipIndex,
  zIndex,
  page,
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipRef = useRef(null)
  
  useLayoutEffect(() => {

    flipRef.current.style.zIndex = page == flipIndex || isFlipped ? flipIndex : zIndex
    flipRef.current.style.transform = page == flipIndex || isFlipped ? "rotateY(-180deg)" : ""

  }, [isFlipped]);

  return (
    <section
      className={`w-full h-full absolute top-0 left-0  text-black flip `}
      id={`p${flipIndex} flip `}
      ref={flipRef}
     
    >
      <article
        className="absolute w-full h-full top-0 left-0    bg-[#2596BE] back"
        // id="back"
      >
        <div className="relative h-full w-full">
          <Image alt={image} fill src={image} className="object-contain"/>
        </div>
         {page >= 0 && (
          <label
            className="absolute bottom-[13px] left-[13px] cursor-pointer text-black z-[999]"
            id="back-btn"
            onClick={() => setIsFlipped(false)}
          >
            Back
          </label>
        )}
      </article>
      <article
        className=" absolute w-full h-full top-0 right-0 bg-gray-100  px-[13px] front border-l"
        id="front"
      >
        <div className="flex items-center justify-center h-full p-2 lg:p-10 max-lg:text-sm ">

        <div className="max-lg:max-h-[200px] max-lg:overflow-y-scroll overflow-x-hidden">{p}</div>
        </div>
       
        {!isLast && (
          <label
            className="absolute bottom-[13px] right-[13px] cursor-pointer text-black"
            onClick={() => setIsFlipped(true)}
            id="next-btn"
          >
            Next Chapter
          </label>
        )}
      </article>
    </section>
  );
}
