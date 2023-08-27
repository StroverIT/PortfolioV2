"use client";
import React, { useRef, useState } from "react";

// Icons
import { BiLogoTelegram } from "react-icons/bi";

// Components
import GoogleInputs from "@/components/inputs/GoogleInputs";
import IconBtn from "@/components/buttons/IconBtn";
// Utils
import {format} from "@/utils/formatFormData"

// Libs
import {toastError, toastSuccess} from "@/libs/notifications"
import formActionEmail from "@/libs/formActionEmail";
// Types
type Inputs = {
  holder: string;
  name: string;
};


// All inputs data
const inputs: Inputs[] = [
  { holder: "Company Name", name: "companyName" },
  { holder: "Full Name", name: "fullName" },

  { holder: "Email", name: "email" },

  ,
  { holder: "Message", name: "message" },

  ,
];

export default function page() {
  const [isLoading, setLoading] = useState(false)

  // Getting all refs
  const refs = {};


  async function submitEmail(){
      console.log("vliza li ?", refs);
      
      setLoading(true)
       formActionEmail(format(refs)).then(data=> {
  
        if(data.error) toastError(data.error);
        if(data.message) {
          toastSuccess(data.message)
          // resetForm()
        }
        setLoading(false)
        
      })
  }

  return (
      <section className="grid lg:grid-cols-2 gap-x-24 max-lg:container max-lg:py-10">
        <section>
            <h1 className="text-2xl text-cyan-600">Get In Touch</h1>
            <p className="text-stone-500">
              I&apos;m now currently looking for new opportunities, my inbox is
              always open. Whether you have a question or just want to say hi,
              I&apos;ll try my best to get back to you!
            </p>
            <h2 className="text-gray-600 mt-2 text-lg">Contact me directly through email</h2>
        </section>
        <form className="grid gap-y-4 max-w-xs" >
          {inputs.map((input: Inputs, i: number) => {
            (refs as any)[input.name] = useRef(null);
            return (
              <GoogleInputs
                key={input.holder}
                placeholder={input.holder}
                name={input.name}
                ref={(refs as any)[input.name]}
              />
            );
          })}
          <div className=" flex ">
            <IconBtn
              text="Send Email"
              type="button"
              isLoading={isLoading}
              onClick={submitEmail}
              icon={<BiLogoTelegram />}
              link="#"
            />
          </div>
        </form>
      </section>
  );
}
