import React from "react";

import Link from "next/link";

// Icons
import { RiAccountCircleFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsLinkedin, BsGithub } from "react-icons/bs";

// TypeScript
type TSocialLinksData = {
  link?: string | null;
  text: string;
  icon: JSX.Element;
  isLast?: boolean;
  
};


// Here is the data
const socialLinksData: TSocialLinksData[] = [
  {
    text: "Emil Zlatinov",
    icon: <RiAccountCircleFill />,
  },
  {
    text: "emilzlatinov123@gmail.com",
    icon: <MdEmail />,
    link: "mailto:emilzlatinov123@gmail.com",

  },

  {
    text: "+359 87 623 7725",
    icon: <BsFillTelephoneFill />,
    link: "tel:+359876237725",

  },
  {
    text: "linkedin.com/in/emilzlatinov",
    icon: <BsLinkedin />,
    link: "https://linkedin.com/in/emilzlatinov",

  },
  {
    text: "github.com/StroverIT",
    icon: <BsGithub />,
    link: "https://github.com/StroverIT"

  },
];

// Main component
export default function AsideData() {

  return (
    <ul className="flex flex-col -mt-5 space-y-6 pt-10">
      {socialLinksData.map((link, index) => {
        return <SocialLinkList {...link} key={link.text} isLast={index == socialLinksData.length - 1 ? true : false}/>;
      })}
    </ul>
  );
}

// Every link to loop through this element
function SocialLinkList({
  link,
  text,
  icon,
  isLast
}: TSocialLinksData) {
    
  return (
    <Link href={link ? link : "#"}>
      <li className={`  border-gray-500 pl-5 relative ${!link ? "cursor-default": ""}`}>
        <section className={`flex  items-center ${link ? "hover:scale-110 hover:text-cyan-600 transition-all": "cursor-default"}`}>
          <div className="text-2xl  mr-1">{icon}</div>
          <div className="text-sm">{text}</div>
        </section>
        <div className={`absolute -left-[0.10rem] top-1/2 -translate-y-1/2 bg-cyan-600 h-2 w-2 rounded-full`}></div>

      </li>

    </Link>
  );
}
