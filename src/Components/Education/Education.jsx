import React from 'react';

import iiits from "./icons/iiits.png"
import asu from "./icons/asu.webp"
import asu_removed from "./icons/asu_removed.png"

const Education = () => {

  return (
    <div className="h-screen py-3 md:px-24 md:py-0 flex flex-col justify-center">
      <div className="text-4xl font-bold mb-4">Education</div>
      <div className="border-y-2 border-white py-3 flex flex-row justify-start gap-5">
        <div>
          <img className="w-[30px] md:w-[200px]" src={asu_removed} alt="Settyl" />
        </div>
        <div className="flex-1 flex flex-col justify-center gap-2">
          <div className="flex flex-row justify-between mb-1 md:text-2xl font-bold">
            <div>
              Arizona State University
            </div>
            <div>
              August 2024 - May 2026
            </div>
          </div>
          <div className="flex flex-row justify-between mb-1 md:text-xl font-semibold">
            <div>
              Master of Science in Computer Science
            </div>
            <div>
              GPA: 4/4
            </div>
          </div>
          <div className="mb-1 font-semibold">
            Coursework: Software Verification Validation & Testing, Cloud Computing, Data Processing at Scale, Data Visualization, Multimedia and Web Databases, Knowledge Representation and Reasoning, Natural Language Processing
          </div>
          <div>
            Awarded the New American University Merit Scholarship of $9000 for outstanding academic performance.  
          </div>
        </div>
      </div>
      <div className="border-b-2 border-white py-3 flex flex-row justify-start gap-5">
        <div>
          <img className="w-[30px] md:w-[200px]" src={iiits} alt="Settyl" />
        </div>
        <div className="flex-1 flex flex-col justify-center gap-2">
          <div className="flex flex-row justify-between mb-1 md:text-2xl font-bold">
            <div>
              Indian Institute of Information Technology, Sri City
            </div>
            <div>
              Sept 2020 - May 2024
            </div>
          </div>
          <div className="flex flex-row justify-between mb-1 md:text-xl font-semibold">
            <div>
              Bachelor of Technology in Computer Science and Technology
            </div>
            <div>
              GPA: 9.30/10
            </div>
          </div>
          <div className="mb-1 font-semibold italic">
            Specialization in AI & ML
          </div>
          <div className="mb-1 font-semibold">
            Coursework: Machine Learning, Deep Learning, Data Structures and Algorithms, OOP, DBMS, Artificial Intelligence, COS, CCN, Full Stack Development, Information Retrieval, Computer Vision
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education