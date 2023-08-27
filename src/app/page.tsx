
import React from "react";


// Components
import Articles from "@/components/pages/home/Articles";
import Book from "@/components/pages/home/Book";
import HeroSection from "@/components/pages/home/HeroSection";

// Data
import FindMe from "@/components/pages/home/FindMe";




export default function page() {
  return (
    <section className="md:container mt-10 font-inter mb-10 max-lg:py-10">
      <section className="max-lg container"><HeroSection/></section>
      {/* <Articles/> */}
        <Book />
      <section className="max-lg:container"><FindMe/></section>
    </section>
  );
}


