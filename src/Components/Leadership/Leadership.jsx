import React from 'react'

import iiits from "./icons/iiits.png"
import iota from "./icons/iota.png"

const Leadership = () => {
  return (
    <div className="lg:h-screen flex flex-col justify-center md:p-0 p-3">
      <div className="border-x-4 border-x-brown-bg border-b-4 border-b-brown-bg px-2 pb-3 mb-6">
        <h1 className="text-xl md:text-3xl font-bold text-light-brown-bg">
          Positions Of Responsibility
        </h1>
      </div>
      <div className="border-x-4 border-x-brown-bg border-b-4 border-b-brown-bg px-2 mb-6">
        <div className="md:flex flex-row justify-between border-b-2 text-light-brown-bg pb-2">
          <div className="flex flex-row items-center justify-start gap-2">
            <img
              className="w-[30px] h-[30px]"
              src={iiits}
              alt="IIIT Sri City Logo"
            />
            <div className="md:text-xl font-bold">
              Mess (Dining) Secretary @ Student Life Council, IIIT Sri City
            </div>
          </div>
          <div className="md:text-xl text-black font-semibold">
            Sept 2022 - May 2023
          </div>
        </div>
        <div className="p-4 font-md">
          <ul className="list-disc">
            <li>
              Managed the mess (dining) operations, crafting a balanced menu
              that enriched the dining experience for over 1000+ students from
              various backgrounds.
            </li>
            <li>
              Headed the technical team of Abhisarga, a prominent South Indian
              Techno-cultural festival where we flawlessly executed 18 events,
              drawing in more than 1900 participants across India.
            </li>
          </ul>
        </div>
      </div>

      <div className="border-x-4 border-x-brown-bg border-b-4 border-b-brown-bg px-2">
        <div className="md:flex flex-row justify-between border-b-2 text-light-brown-bg pb-2">
          <div className="flex flex-row justify-start items-center gap-2">
            <img
              className="w-[30px] h-[30px]"
              src={iota}
              alt="IOTA Logo"
            />
            <div className="md:text-xl font-bold">
              Head, Core @ IOTA, Projects Club of IIIT Sri City
            </div>
          </div>
          <div className="md:text-xl text-black font-semibold">
            Sept 2021 - May 2023
          </div>
        </div>
        <div className="p-4 font-md">
          <ul className="list-disc">
            <li>
              Served as the core member and later promoted to Head due to my
              active involvement.
            </li>
            <li>
              Lead the Web Developer Bootcamp for the Juniors with 5+ sessions
              on HTML, CSS, Javascript which played a vital role in nurturing
              their skills and knowledge.
            </li>
            <li>
              Organised a Hackathon, HackFrenzy as a part of our college fest
              Abhisarga which attracted over 400+ participants across India.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Leadership