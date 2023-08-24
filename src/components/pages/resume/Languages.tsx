import React from 'react'

// Components
import Header from './Header'

export default function Languages() {
  return (
    <section>
    <Header text="languages" />
    <section className="grid lg:grid-cols-2 gap-x-4 gap-y-4">
      <Language lng="Bulgarian" prof="Native" />
      <Language
        lng="English"
        prof="Intermediate Professional Proficiency"
      />
      <Language lng="Russian" prof="Limited Working Proficiency" />
    </section>
  </section>
  )
}

function Language({ lng, prof }: { lng: string; prof: string }) {
    return (
      <div className="">
        <h3>{lng}</h3>
        <p className="text-cyan-500 italic text-sm">{prof}</p>
      </div>
    );
  }