import React from 'react';
import Typewriter from 'typewriter-effect';
import { motion } from "motion/react"

import iiits from "./icons/iiits.png"
import iota from "./icons/iota.png"

const Leadership = () => {
  return (
    <div className="flex flex-col justify-center py-3 md:px-24 my-96">
      <motion.div
        className="text-4xl font-bold mb-4 orbitron-font-style pb-3 border-b-2 border-white"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <Typewriter
          options={{
            strings: ['Positions Of Responsibility'],
            autoStart: true,
            loop: true
          }}
        />
      </motion.div>
      <motion.div
        className="border-b-2 border-white px-2 mb-6"
        initial={{ opacity: 0, y: 100, x: 400 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.1 }}
      >
        <div className="md:flex flex-row justify-between pb-2">
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
          <div className="md:text-xl font-semibold">
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
      </motion.div>

      <motion.div
        className="border-b-2 border-white px-2"
        initial={{ opacity: 0, y: 100, x: -400 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.1 }}
      >
        <div className="md:flex flex-row justify-between pb-2">
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
          <div className="md:text-xl font-semibold">
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
      </motion.div>
    </div>
  );
}

export default Leadership