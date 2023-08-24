import React from 'react'


// Icons
import { IoIosFitness } from "react-icons/io";
import { GiAirplaneDeparture } from "react-icons/gi";
import {
  FaBookOpen,
  FaBasketballBall,
  FaMusic,
  FaVolleyballBall,
} from "react-icons/fa";

// Components
import Header from './Header';

export default function Interests() {
  return (
    <section>
    <Header text="interests" />
    <section className="grid lg:grid-cols-2 gap-x-4 gap-y-4">
      <Interest icon={<IoIosFitness />} text="Fitness" />
      <Interest icon={<GiAirplaneDeparture />} text="Traveling" />
      <Interest icon={<FaBookOpen />} text="Reading" />
      <Interest icon={<FaBasketballBall />} text="Basketball" />
      <Interest icon={<FaMusic />} text="Music & Dances" />
      <Interest icon={<FaVolleyballBall />} text="Volleyball" />
    </section>
  </section>
  )
}

function Interest({ icon, text }: { icon: JSX.Element; text: string }) {
    return (
      <article className="flex items-center ">
        <div className='text-xl'>{icon}</div>
        <div className='ml-1'>{text}</div>
      </article>
    );
  }