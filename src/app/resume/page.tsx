import React from "react";

import Image from "next/image";



// Components
import Profile from "@/components/pages/resume/Profile"
import WorkExperience from "@/components/pages/resume/WorkExperience";
import Education from "@/components/pages/resume/Education";
import TechnicalSkills from "@/components/pages/resume/TechnicalSkills";
import SoftSkills from "@/components/pages/resume/SoftSkills";
import Languages from "@/components/pages/resume/Languages";
import Interests from "@/components/pages/resume/Interests";
import Certificates from "@/components/pages/resume/Certificates";

export default function Home() {
  return (
    <main className="bg-white rounded-md pb-5">
      <section className="container grid lg:grid-cols-2 gap-x-10">
        <section className="">
          <Profile/>
          <WorkExperience/>
          <Education/>
        </section>

        <section className="">
          <TechnicalSkills/>
         <SoftSkills/>
          <Languages/>
          <Interests/>
        <Certificates/>
        </section>
      </section>
    </main>
  );
}






