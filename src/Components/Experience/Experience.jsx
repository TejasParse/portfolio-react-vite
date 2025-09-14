import React from 'react';
import Typewriter from 'typewriter-effect';
import { motion } from "motion/react"

import CompanyCard from './components/CompanyCard';

const Experience = () => {
  return (
    <div className="flex flex-col justify-center py-3 md:px-24 md:py-0 mt-[200px] mb-48">
      <motion.div
        className="text-4xl font-bold mb-4 orbitron-font-style pb-3 border-b-2 border-white"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <Typewriter
          options={{
            strings: ['Professional Experience'],
            autoStart: true,
            loop: true
          }}
        />
      </motion.div>
      <motion.div
        className='grid grid-cols-3 gap-4'
        initial={{ opacity: 0, y: -300 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 1 }}
      >
        <CompanyCard
          companyName="Psych For Life"
          companyImageUrl={"/company/psych.webp"} 
          companyTitle="Software Developer"
          companyDuration="Dec 2024 - Present"
          gradientType="psych"
        />
        <CompanyCard
          companyName="WalnutedAI"
          companyImageUrl={"/company/walnuted.png"} 
          companyTitle="Software Developer Intern"
          companyDuration="June 2025 - August 2025"
          gradientType="walnuted"
        />
        <CompanyCard
          companyName="DatStek"
          companyImageUrl={"/company/datstek.webp"} 
          companyTitle="Full Stack Developer Intern"
          companyDuration="Jan 2024 - June 2024"
          gradientType="datstek"
        />
        <CompanyCard
          companyName="Settyl Tech Private Ltd"
          companyImageUrl={"/company/settyl.jpg"} 
          companyTitle="Full Stack Developer Intern"
          companyDuration="May 2023 - Sept 2023"
          gradientType="settyl"
        />
        <CompanyCard
          companyName="Appscms Technologies"
          companyImageUrl={"/company/appscms.png"} 
          companyTitle="Software Development Intern"
          companyDuration="July 2022 - Nov 2022"
          gradientType="appscms"
        />
      </motion.div>
      {/* <div className='hidden'>
        <div className="border-x-4 border-x-brown-bg border-b-4 border-b-brown-bg px-2 mb-6">
          <div className="md:flex flex-row justify-between border-b-2 text-light-brown-bg pb-2">
            <div className="flex flex-row justify-start gap-2 items-center">
              <img
                className="w-[30px] h-[30px]"
                src={walnuted}
                alt="Walnuted AI"
              />
              <div className="md:text-xl font-bold">
                Software Developer Intern @ WalnutedAI
              </div>
            </div>
            <div className="md:text-xl text-black font-semibold">
              June 2025 - Present
            </div>
          </div>
          <div className="p-4 md:font-md">
            <ul className="list-disc">
              <li>
                Automated <b>multi-repo CI/CD</b> with <b>AWS Copilot</b> and <b>GitHub Actions</b>, eliminating manual effort and accelerating ML service delivery.
              </li>
              <li>
                Refactored monolithic <b>Next.js</b> codebase into separate frontend and <b>FastAPI</b> backend, improving scalability and development velocity.
              </li>
              <li>
                Built backend services with <b>FastAPI</b> and <b>Supabase</b> to power a college application chatbot platform with robust CRUD capabilities.
              </li>
            </ul>
          </div>
        </div>
        <div className="border-x-4 border-x-brown-bg border-b-4 border-b-brown-bg px-2 mb-6">
          <div className="md:flex flex-row justify-between border-b-2 text-light-brown-bg pb-2">
            <div className="flex flex-row justify-start gap-2 items-center">
              <img
                className="w-[30px] h-[30px]"
                src={psych}
                alt="Psych for Life"
              />
              <div className="md:text-xl font-bold">
                Software Developer (Part Time) @ Psych For Life
              </div>
            </div>
            <div className="md:text-xl text-black font-semibold">
              Dec 2024 - Present
            </div>
          </div>
          <div className="p-4 md:font-md">
            <ul className="list-disc">
              <li>
                Developed reusable UI components in <b>React.js</b> and <b>TypeScript</b>, reducing content managers’ lesson development time by <b>40%</b>.
              </li>
              <li>
                Reviewed <b>40+ Github PRs</b>, identifying critical bugs including <b>8</b> that <b>caused website crashes</b> while enforcing best practices in code quality.
              </li>
              <li>
                Replaced <b>JavaScript</b> logic in the <b>Node.js</b> backend with optimized <b>MongoDB</b> aggregation pipelines, <b>reducing query time</b> by <b>31%</b>.
              </li>
              <li>
                Deployed and maintained application services on <b>AWS (EC2, S3)</b> and containerized components using Docker for better scalability.
              </li>
            </ul>
          </div>
        </div>
        <div className="border-x-4 border-x-brown-bg border-b-4 border-b-brown-bg px-2 mb-6">
          <div className="md:flex flex-row justify-between border-b-2 text-light-brown-bg pb-2">
            <div className="flex flex-row justify-start gap-2 items-center">
              <img
                className="w-[30px] h-[30px]"
                src={datstek}
                alt="DatStek"
              />
              <div className="md:text-xl font-bold">
                Full Stack Dev Intern @ DatStek
              </div>
            </div>
            <div className="md:text-xl text-black font-semibold">
              Jan 2024 - June 2024
            </div>
          </div>
          <div className="p-4 md:font-md">
            <ul className="list-disc">
              <li>
                Delivered a Sports Content Management System using <span className="font-bold">ReactJs, MongoDB, and NodeJs,</span> optimizing search queries with complex <span className="font-bold">MongoDB aggregation pipelines by 14%.</span>
              </li>
              <li>
                Developed mobile and web apps for managing electoral campaigns using <span className="font-bold">FastAPI, PostgreSQL, and React.</span>
              </li>
              <li>
                Architected and implemented a legal document management suite using the <span className="font-bold">PERN</span> stack and <span className="font-bold">Google Docs API.</span>, enabling admins to build dynamic templates for users to generate legal documents.
              </li>
            </ul>
          </div>
        </div>
        <div className="border-x-4 border-x-brown-bg border-b-4 border-b-brown-bg px-2 mb-6">
          <div className="md:flex flex-row justify-between border-b-2 text-light-brown-bg pb-2">
            <div className="flex flex-row justify-start gap-2 items-center">
              <img
                className="w-[30px] h-[30px]"
                src={settyl}
                alt="Settyl"
              />
              <div className="md:text-xl font-bold">
                Full Stack Dev Intern @ Settyl Tech Private Ltd
              </div>
            </div>
            <div className="md:text-xl text-black font-semibold">
              May 2023 - Sept 2023
            </div>
          </div>
          <div className="p-4 md:font-md">
            <ul className="list-disc">
              <li>
                Migrated <b>Kafka Events</b> to <b>Azure Event Hubs</b>, reducing latency by <b>19%</b> in inter-database synchronization.
              </li>
              <li>
                Maintained complex <b>multi-database Node.js backend</b> services while delivering features in an <b>Agile</b> team using <b>Jira</b> for sprint planning.
              </li>
              <li>
                Collaborated with a team of <b>10 developers, owned 3 micro frontend repos, mentored an intern,</b> and <b>led</b> knowledge transfer sessions.
              </li>
            </ul>
          </div>
        </div>
        <div className="border-x-4 border-x-brown-bg border-b-4 border-b-brown-bg px-2">
          <div className="md:flex flex-row justify-between border-b-2 text-light-brown-bg pb-2">
            <div className="flex flex-row justify-start gap-2 items-center">
              <img
                className="w-[30px] h-[30px]"
                src={appscms}
                alt="Appscms"
              />
              <div className="md:text-xl font-bold">
                Software Development Intern @ Appscms Technologies
              </div>
            </div>
            <div className="md:text-xl text-black font-semibold">
              July 2022 - Nov 2022
            </div>
          </div>
          <div className="p-4 md:font-md">
            <ul className="list-disc">
              <li>
                Crafted <b>50+ GIF processing tools</b> like background removal, blur effects, and sprite sheet generation using <b>JavaScript</b> and <b>HTML Canvas</b>.
              </li>
              <li>
                Used Jekyll to generate the website and{" "}
                <span className="font-bold">
                  HTML, CSS and Vanilla Javascript
                </span>{" "}
                to work on the GIF processing logic.
              </li>
              <li>
                Developed and tested new features in the company’s flagship
                product with a team of developers which assisted the company in
                reaching a milestone of <span className="font-bold">7,00,000 sessions per month.</span> 
              </li>
            </ul>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Experience