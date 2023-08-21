import React from 'react'

// Components 
import Header from './Header'
import Skill from './Skill'


export default function SoftSkills() {
  return (
    <section>
            <Header text="soft skills" />
            <section className="flex flex-wrap gap-x-2 gap-y-2 mt-2">
              <Skill theme="black" text="Time managment" />
              <Skill theme="black" text="Teamwork" />
              <Skill theme="black" text="Flexibility" />
              <Skill theme="black" text="Verbal and Written Communication" />
              <Skill theme="black" text="Attention to detail" />
              <Skill theme="black" text="Problem solving" />
            </section>
          </section>
  )
}
