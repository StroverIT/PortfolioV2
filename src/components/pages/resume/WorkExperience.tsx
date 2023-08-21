import React from 'react'

// icons
import { BiWorld } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

// Components
import Header from './Header'
import Link from 'next/link';


export default function WorkExperience() {
  return (
    <section className="mt-2">
      <Header text="Work experience / projects" />
      <section className="flex flex-col gap-y-3 ">
        <Project
          projectTitle="Freelance website: Portfolio"
          websiteUrl="https://strover.bg"
          githubUrl="Strover"
        />
        <Project
          projectTitle="IvdaGeo: E-commerce"
          websiteUrl="https://ivdageopaint.bg"
          githubUrl="ivdaGeoNextApp"
        />
        <Project
          projectTitle="SoftOffice: E-commerce"
          websiteUrl="https://softoffice.bg"
          githubUrl="softOfficeNextJs"
        />
        <Project
          projectTitle="IvdaGeo: Portfolio"
          websiteUrl="https://cargomove.bg"
          githubUrl="cargomove"
        />
      </section>
    </section>
  )
}

function Project({
    projectTitle,
    websiteUrl,
    githubUrl,
  }: {
    projectTitle: string;
    websiteUrl: string;
    githubUrl: string;
  }) {
    const githubAppedUrl: string = `https://github.com/StroverIT/${githubUrl}`;
    return (
      <article className="ml-2">
        <h3 className="text-lg font-semibold">{projectTitle}</h3>
        <ul>
          <Link href={websiteUrl} target='_blank'>
            <li className="group hover:text-cyan-600 transition-all duration-500 delay-400">
              <section className='flex items-center'>
                <div className="text-lg">
                  <BiWorld />
                </div>
                <div className="ml-1">{websiteUrl}
                <div className='w-0 h-[1px] bg-cyan-600 group-hover:w-full transition-all duration-500'></div>
                </div>
                
              </section>
              
            </li>
          </Link>
          <Link href={githubAppedUrl} target="_blank">
            <li className="flex items-center group hover:text-cyan-600 transition-all duration-500 delay-400">
              <div className="text-lg">
                <BsGithub />
              </div>
              <div className="ml-1">{githubAppedUrl}
              <div className='w-0 h-[1px] bg-cyan-600 group-hover:w-full transition-all duration-500'></div>
              
              </div>
            </li>
          </Link>
        </ul>
      </article>
    );
  }
  
