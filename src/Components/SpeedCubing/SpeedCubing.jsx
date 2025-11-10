import React from 'react';
import Typewriter from 'typewriter-effect';
import { motion } from "motion/react"

import PR from "./images/latestPr.png";

const SpeedCubing = () => {
  return (
    <div className="flex flex-col justify-center py-3 md:px-24 my-96">
      <motion.div
        className="flex flex-row justify-between items-center mb-4 pb-3 border-b-2 border-white"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <div className="text-4xl font-bold orbitron-font-style">
          <Typewriter
            options={{
              strings: ['Speed Cubing'],
              autoStart: true,
              loop: true
            }}
          />
        </div>
        <div className='text-lg md:text-2xl font-semibold'>
          Sept 2017 - Present
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
        className="rounded-xl overflow-hidden shadow-2xl"
      >
        <img 
          src={PR} 
          alt="Speed Cubing Personal Records" 
          className="w-full h-auto"
        />
      </motion.div>
    </div>
  );
}

export default SpeedCubing