import Image from "next/image";
import React from "react";

// Components
import AsideData from "./AsideData";
import IconBtn from "../buttons/IconBtn";

// Icons
import { AiOutlineDownload } from "react-icons/ai";
import { BiSolidUser } from "react-icons/bi";

export default function Aside() {
  return (
    <section className="bg-white sticky top-1 rounded-lg overflow-hidden">
      <section className=" p-4   ">
        <h2 className="text-3xl font-semibold">Emil Zlatinov</h2>
        <p className="text-gray-600 text-xl -mt-1">React Developer</p>
      </section>

      <div className="relative h-[21.5rem] w-full  brightness-125 profile_image -mt-3">
        <Image src="/profile.jpg" alt="my profile picture" fill className="" />
      </div>
      <section className="mx-4 pb-4 relative">
        <div className="absolute left-[0.15rem] h-[15rem] w-[1px] bg-gray-300"></div>
        <AsideData />
        <div className="absolute -left-4 -top-3 h-10 w-10 bg-cyan-600 rounded-full flex items-center justify-center text-white text-2xl">
          <BiSolidUser />
        </div>
      </section>
      <section>
        <div className="flex items-center justify-center mt-10 mb-4">
          <IconBtn text="Download CV" icon={<AiOutlineDownload />} />
        </div>
      </section>
    </section>
  );
}
