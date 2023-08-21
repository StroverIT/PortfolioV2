import React from 'react'

// Components
import Header from './Header'
import Skill from './Skill'

export default function TechnicalSkills() {
  return (
    <section>
            <Header text="Technical skills" />
            <section className="flex flex-wrap gap-x-2 gap-y-2 mt-2">
              <Skill text="HTML" />
              <Skill text="CSS" />
              <Skill text="TailwindCSS" />
              <Skill text="SASS" />
              <Skill text="Bootstrap" />
              <Skill text="JavaScript" />
              <Skill text="React" />
              <Skill text="Redux" />
              <Skill text="NextJS" />
              <Skill text="TypeScript" />
              <Skill text="NodeJS" />
              <Skill text="Express" />
              <Skill text="MongoDB" />
              <Skill text="Git" />
              <Skill text="NPM" />
              <Skill text="AJAX" />
              <Skill text="RESTful APIs" />
            </section>
          </section>
  )
}
