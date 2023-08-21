import React from "react";


// Components
import Profile from "@/components/pages/home/Profile";
import Education from "@/components/pages/home/Education";
import WorkExperience from "@/components/pages/home/WorkExperience";
import TechnicalSkills from "@/components/pages/home/TechnicalSkills";
import SoftSkills from "@/components/pages/home/SoftSkills";
import Languages from "@/components/pages/home/Languages";
import Interests from "@/components/pages/home/Interests";
import Certificates from "@/components/pages/home/Certificates";

export default function Home() {
  return (
      <section className="container grid grid-cols-2 gap-x-10">
        <section>

         <Profile/>
         <WorkExperience/>
         <Education/> 
         
        </section>
        
        <section>
         
         <TechnicalSkills/>
          <SoftSkills/>
          <Languages/>
          <Interests/>
          <Certificates/>
          
         
          
         
        </section>
      </section>
   
  );
}






