import React from 'react';

import PR from "./images/latestPr.png";

const SpeedCubing = () => {
  return (
    <div className="lg:h-screen flex flex-col justify-center">
      <div className="border-x-4 border-x-brown-bg border-b-4 border-b-brown-bg px-2 pb-3 mb-6">
        <div className="flex flex-row justify-between">
          <h1 className="text-xl md:text-3xl font-bold text-light-brown-bg">
            Speed Cubing
          </h1>
          <div className='text-lg md:text-2xl font-semibold'>
            Sept 2017 - Present
          </div>
        </div>
      </div>

      <img src={PR} alt="" />
    </div>
  );
}

export default SpeedCubing