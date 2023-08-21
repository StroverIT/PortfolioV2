import Image from "next/image";
import React from "react";

export default function Book() {
  return (
    <div className="book">
      <input type="checkbox" id="c1" />
      <input type="checkbox" id="c2" />
      <input type="checkbox" id="c3" />
      <div id="cover">
        <div className="relative h-24 w-24">
            <Image fill alt="testingBro" src="/1.jpg" />
        </div>
      </div>
      <div className="flip-book">
        <div className="flip" id="p1">
          <div className="back">
            <div className="relative h-24 w-24">
                <Image fill alt="testingBro" src="/2.jpg" />
            </div>
            <label className="back-btn" htmlFor="c1">
              Back
            </label>
          </div>
          <div className="front">
            <h2>Apple</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
              architecto nam aliquam illum voluptatibus, eius, nobis ab
              aspernatur, dolore praesentium nesciunt laboriosam iste officiis
              voluptas unde maiores numquam voluptatem provident.laboriosam iste
              officiis voluptas unde maiores numquam voluptatem
              provident.laboriosam iste officiis voluptas
            </p>
            <label className="next-btn" htmlFor="c1">
              Next
            </label>
          </div>
        </div>
        <div className="flip" id="p2">
          <div className="back">
            <div className="relative h-24 w-24">
                <Image fill alt="testingBro" src="/3.jpg" />
            </div>
            <label className="back-btn" htmlFor="c2">
              Back
            </label>
          </div>
          <div className="front">
            <h2>Pineapple</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
              architecto nam aliquam illum voluptatibus, eius, nobis ab
              aspernatur, dolore praesentium nesciunt laboriosam iste officiis
              voluptas unde maiores numquam voluptatem provident.laboriosam iste
              officiis voluptas unde maiores numquam voluptatem
              provident.laboriosam iste officiis voluptas
            </p>
            <label className="next-btn" htmlFor="c2">
              Next
            </label>
          </div>
        </div>

        <div className="flip" id="p3">
          <div className="back">
            <label className="back-btn" htmlFor="c3">
              Back
            </label>
          </div>
          <div className="front">
            <h2>Strawberry</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
              architecto nam aliquam illum voluptatibus, eius, nobis ab
              aspernatur, dolore praesentium nesciunt laboriosam iste officiis
              voluptas unde maiores numquam voluptatem provident.laboriosam iste
              officiis voluptas unde maiores numquam voluptatem
              provident.laboriosam iste officiis voluptas
            </p>
            <label className="next-btn" htmlFor="c3">
              Next
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
