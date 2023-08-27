import Image from "next/image";
import Link from "next/link";
import React from "react";

// Icons
import { BiWorld } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

type ProjectType = {
  name: string;
  websiteUrl: string;
  githubUrl: string;
  description: string;
  type: string;
  image: string;
};
const projectsData: ProjectType[] = [
  {
    name: "Freelance website",
    websiteUrl: "https://strover.bg",
    githubUrl: "Strover",
    description: ``,
    type: "Portfolio",
    image: "strover",
  },
  {
    name: "IvdaGeo",
    websiteUrl: "https://ivdageopaint.bg",
    githubUrl: "ivdaGeoNextApp",
    description: "",
    type: "E-commerce",
    image: "ivdageo",
  },
  {
    name: "SoftOffice",
    websiteUrl: "https://softoffice.bg",
    githubUrl: "softOfficeNextJs",
    description: "",
    type: "E-commerce",
    image: "softoffice",
  },
  {
    name: "Cargomove",
    websiteUrl: "https://cargomove.bg",
    githubUrl: "cargomove",
    description: "",
    type: "Portfolio",
    image: "cargomove",
  },
];
export default function page() {
  return (
    <section className="grid max-lg:container lgrid-cols-2 gap-6 max-lg:py-4">
      {projectsData.map((data) => {
        return <Project key={data.name} {...data} />;
      })}
    </section>
  );
}

function Project({
  name,
  websiteUrl,
  githubUrl,
  description,
  type,
  image,
}: ProjectType) {
  const githubAppendUrl = `https://github.com/StroverIT/${githubUrl}`;
  return (
    <article className="shadow-xl p-4 rounded-md break-all">
      <div className="relative h-72 w-full">
        <Image
          src={`/websites/${image}.png`}
          fill
          alt="description"
          className="object-contain"
        />
      </div>
      <h2 className="font-semibold text-lg">{name}</h2>
      <p>{type} website</p>
      <ul className="mt-1">
        <li className="flex items-center">
          <div className="text-lg">
            <BiWorld />
          </div>
          <Link href={websiteUrl} target="_blank" className="ml-1 underline">
            {websiteUrl}
          </Link>
        </li>
        <li className="flex items-center mt-1 word">
          <div className="text-lg">
            <BsGithub />
          </div>
          <Link
            href={githubAppendUrl}
            target="_blank"
            className="ml-1 underline"
          >
            {githubAppendUrl}
          </Link>
        </li>
      </ul>
    </article>
  );
}
