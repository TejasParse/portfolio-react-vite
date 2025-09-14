import React, { useState, useRef } from 'react';
import Typewriter from 'typewriter-effect';
import { motion, useScroll, useTransform } from "motion/react"

// import "./Projects.css"
import ProjectsData from './Project.json';

import { Button, Modal } from 'react-bootstrap';
import { useSearchParams } from 'react-router';
import CodeforcesLogo from "./icons/codeforces.png";
import Github from "./icons/github.png";
import Linkedin from "./icons/linkedin.png";
import WCA from "./icons/wca.svg";
import Youtube from "./icons/youtube.png"

function MyVerticallyCenteredModal(props) {

  // console.log(props.projectType, props.indexProject, ProjectsData, "Kya hua?");

  let projectInformation = ProjectsData[props.projectType][props.indexProject];
  // console.log(projectInformation);

  if (!projectInformation) {
    projectInformation = ProjectsData["Web"][0];

  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      className='modal-90w'
      dialogClassName="modal-90w"
      centered
    >
      <Modal.Header closeButton className='bg-slate-300'>
        <Modal.Title id="contained-modal-title-vcenter">
          <div className='py-2' dangerouslySetInnerHTML={{ __html: projectInformation.title }}></div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='bg-slate-200'>

        <ul className='list-disc px-3'>
          {projectInformation.description.map(elm => {
            return (
              <li>{elm}</li>
            )
          })}
        </ul>
        <div className=' grid grid-cols-12 mt-2 bg-gray-300 py-2'>
          {/* <div className='font-bold'>Tech Used: </div> */}
          {
            projectInformation?.techUsed?.map(elm => {
              return (
                <div className={`col-span-6 flex flex-row justify-start items-center p-2`}>
                  <img src={elm.url} className='rounded-full bg-slate-100 mx-2' width={"40px"} />
                  <div className='ms-1'>{elm.caption}</div>
                </div>
              )
            })
          }
        </div>


        <div className={`grid grid-cols-${projectInformation.gridSize} mt-2`}>
          {
            projectInformation?.images?.map(elm => {

              return (
                <div className={`col-span-1 p-2 bg-gray-300`}>
                  <img src={elm.url} />
                  <div className='text-center pt-2'>{elm.caption}</div>
                </div>
              )
            })
          }

        </div>
      </Modal.Body>
      <Modal.Footer className='bg-slate-200'>
        <button className='text-white bg-black p-2 py-1 rounded-md' onClick={props.onHide}>Close</button>
      </Modal.Footer>
    </Modal>
  );
}

const Projects = () => {

  const [searchParams, setSearchParams] = useSearchParams();

  let getType = searchParams.get("q");
  // console.log(getType, "Will it work now");

  if (!(getType == "Javascript" || getType == "Python" || getType == "App") || getType == null) {
    getType = "Javascript";
  }

  const [projectType, setprojectType] = useState(getType);
  const [indexProject, setindexProject] = useState(0)

  const [show, setShow] = useState(false);

  const selectedStyle = "bg-white border-2 border-black";
  const notSelectedStyle = "text-white";

  const MlProjects = () => {

    return (
      <div className=''>
        <div className='grid grid-cols-12 gap-3'>
          {
            ProjectsData["Python"].filter((project) => project.visible).map((elm, index) => {
              return (
                <div className='col-span-12 md:col-span-6 lg:col-span-4 border-2 border-black bg-light-brown-bg text-white text-center font-semibold'>
                  <div >
                    <div className='py-2 md:text-lg' dangerouslySetInnerHTML={{ __html: elm.title }}></div>
                    <img src={elm.thumbnail} style={{ objectFit: "contain" }} />
                    <div className='p-2 font-normal flex justify-between'>
                      <div>
                        {
                          elm?.links?.map(lin => {
                            return (
                              <a
                                href={lin.url}
                                target="_blank"
                              >
                                <button className={`text-white bg-slate-600 p-2 py-1 rounded-md me-2`}>
                                  {lin.text}
                                </button>
                              </a>
                            )
                          })
                        }

                      </div>
                      <div>
                        <button className="text-white bg-black p-2 py-1 rounded-md" onClick={() => { setShow(true); setindexProject(index) }}>
                          Know More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }

          <MyVerticallyCenteredModal
            show={show}
            onHide={() => setShow(false)}
            projectType={projectType}
            indexProject={indexProject}
          />

        </div>
      </div>
    )
  }

  const AppProjects = () => {
    return (
      <>
        <div className="border-x-4 border-x-brown-bg border-b-4 border-b-brown-bg px-2 mb-6">
          <div className="flex flex-row justify-between border-b-2 text-light-brown-bg pb-2">
            <div className="text-xl font-bold">Tic Tac Toe</div>
            <div className="text-md text-black">
              <a
                href="https://play.google.com/store/apps/details?id=com.kridacreations.tictactoe"
                target="_blank"
              >
                <button className="text-white bg-green-600 p-2 py-1 rounded-md">
                  Play Store
                </button>
              </a>
              <a href="https://github.com/TejasParse/TicTacToe" target="_blank">
                <button className="text-white bg-slate-700 p-2 py-1 rounded-md ms-2">
                  Github
                </button>
              </a>
            </div>
          </div>
          <div className="p-4 font-md">
            <ul className="list-disc">
              <li>A Tic Tac Toe android application using Java with multiple difficulty level Bot</li>
              <li>
                Used Min-Max(AI) Algorithm to predict the next optimal move for the bot.
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }

  const WebProjects = () => {

    return (
      <div className=''>
        <div className='grid grid-cols-12 gap-3'>
          {
            ProjectsData["Javascript"].filter((project) => project.visible).map((elm, index) => {
              return (
                <div className='col-span-12 md:col-span-4 border-2 border-black bg-light-brown-bg text-white text-center font-semibold'>
                  <div >
                    <div className='py-2 md:text-md' dangerouslySetInnerHTML={{ __html: elm.title }}></div>
                    <img src={elm.thumbnail} style={{ objectFit: "contain" }} />
                    <div className='p-2 font-normal flex justify-between'>
                      <div>
                        {
                          elm?.links?.map(lin => {
                            return (
                              <a
                                href={lin.url}
                                target="_blank"
                              >
                                <button className={`text-white bg-slate-600 p-2 py-1 rounded-md me-2`}>
                                  {lin.text}
                                </button>
                              </a>
                            )
                          })
                        }

                      </div>
                      <div>
                        <button className="text-white bg-black p-2 py-1 rounded-md" onClick={() => { setShow(true); setindexProject(index) }}>
                          Know More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }

          <MyVerticallyCenteredModal
            show={show}
            onHide={() => setShow(false)}
            projectType={projectType}
            indexProject={indexProject}
          />

        </div>




      </div>
    )
  }

  const ProjectCard = ({ title, thumbnail, links, images, techUsed, description, className, onLearnMore }) => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
      <div 
        className={`relative cursor-pointer overflow-hidden rounded-lg ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Project Image */}
        <img 
          src={thumbnail} 
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-300 hover:scale-105`}
        />
        
        {/* Hover Overlay */}
        <div 
          className={`absolute inset-0 bg-black bg-opacity-80 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-white ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          
          {/* Project Title */}
          <div 
            className="text-xl font-bold text-center mb-4 text-white"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          
          {/* Project Description */}
          {description && description.length > 0 && (
            <div className="text-sm text-center mb-4 line-clamp-3 text-gray-200">
              {description[0]}
            </div>
          )}
          
          {/* Tech Stack */}
          {techUsed && techUsed.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4 justify-center">
              {techUsed.slice(0, 3).map((tech, index) => (
                <div key={index} className="flex items-center bg-white bg-opacity-20 rounded-full px-2 py-1">
                  <img src={tech.url} className="w-4 h-4 rounded-full mr-1" alt={tech.caption} />
                  <span className="text-xs">{tech.caption.split(' ')[0]}</span>
                </div>
              ))}
            </div>
          )}
          
          {/* Action Buttons */}
          <div className="flex gap-2 flex-wrap justify-center">
            {links && links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs rounded-md transition-colors duration-200"
                onClick={(e) => e.stopPropagation()}
              >
                {link.text}
              </a>
            ))}
            <button 
              className="px-3 py-1 bg-gray-800 hover:bg-gray-900 text-white text-xs rounded-md transition-colors duration-200"
              onClick={(e) => {
                e.stopPropagation();
                if (onLearnMore) onLearnMore();
              }}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    )
  }

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: ref1,            // track scrolling relative to this container
    offset: ["start end", "end start"], 
  });
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: ref2,            // track scrolling relative to this container
    offset: ["start end", "end start"], 
  });

  // Map scroll progress (0 → 1) to x values (-200 → 200)
  const x1 = useTransform(scrollYProgress1, [0, 1], [-400, 50]);
  const x2 = useTransform(scrollYProgress2, [0, 1], [50, -100]);

  return (
    <div className="flex flex-col justify-center py-3 md:px-24 md:py-0">
      <motion.div
        className="text-4xl font-bold mb-4 orbitron-font-style pb-3 border-b-2 border-white"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <Typewriter
          options={{
            strings: ['Projects'],
            autoStart: true,
            loop: true
          }}
        />
      </motion.div>
      <motion.div
        className='overflow-x-scroll'
      >
        <motion.div
          className={`flex gap-24 pb-4`}
          style={{ x: x1 }} 
          ref={ref1}
        >
          <ProjectCard 
            {...ProjectsData["Javascript"][0]} 
            className="w-1/3 flex-shrink-0 h-[300px]" 
            onLearnMore={() => {
              setShow(true);
              setindexProject(index);
              setprojectType("Javascript");
            }}
          />
          <ProjectCard 
            {...ProjectsData["Javascript"][0]} 
            className="w-1/3 flex-shrink-0 h-[300px]" 
            onLearnMore={() => {
              setShow(true);
              setindexProject(index);
              setprojectType("Javascript");
            }}
          />
          <ProjectCard 
            {...ProjectsData["Javascript"][0]} 
            className="w-1/3 flex-shrink-0 h-[300px]" 
            onLearnMore={() => {
              setShow(true);
              setindexProject(index);
              setprojectType("Javascript");
            }}
          />
        </motion.div>
        <motion.div
          className={`flex gap-24 pb-4`}
          style={{ x: x2 }} 
          ref={ref2}
        > 
          <ProjectCard 
            {...ProjectsData["Javascript"][0]} 
            className="w-1/3 flex-shrink-0 h-[300px]" 
            onLearnMore={() => {
              setShow(true);
              setindexProject(index);
              setprojectType("Javascript");
            }}
          />
          <ProjectCard 
            {...ProjectsData["Javascript"][0]} 
            className="w-1/3 flex-shrink-0 h-[300px]" 
            onLearnMore={() => {
              setShow(true);
              setindexProject(index);
              setprojectType("Javascript");
            }}
          />
          <ProjectCard 
            {...ProjectsData["Javascript"][0]} 
              className="w-1/3 flex-shrink-0 h-[300px]" 
            onLearnMore={() => {
              setShow(true);
              setindexProject(index);
              setprojectType("Javascript");
            }}
          />
        </motion.div>
        <motion.div
          className={`flex gap-24 pb-4`}
          style={{ x: x1 }} 
        >
          <ProjectCard 
            {...ProjectsData["Javascript"][0]} 
            className="w-1/3 flex-shrink-0 h-[300px]" 
            onLearnMore={() => {
              setShow(true);
              setindexProject(index);
              setprojectType("Javascript");
            }}
          />
          <ProjectCard 
            {...ProjectsData["Javascript"][0]} 
            className="w-1/3 flex-shrink-0 h-[300px]" 
            onLearnMore={() => {
              setShow(true);
              setindexProject(index);
              setprojectType("Javascript");
            }}
          />
          <ProjectCard 
            {...ProjectsData["Javascript"][0]} 
            className="w-1/3 flex-shrink-0 h-[300px]" 
            onLearnMore={() => {
              setShow(true);
              setindexProject(index);
              setprojectType("Javascript");
            }}
          />
        </motion.div>
      </motion.div>
       {/* Modal for project details */}
       <MyVerticallyCenteredModal
         show={show}
         onHide={() => setShow(false)}
         projectType={projectType}
         indexProject={indexProject}
       />
      {/* <div className="border-x-4 border-x-brown-bg border-b-4 border-b-brown-bg px-2 pb-3 mb-6">
        <div className="flex flex-row justify-between">
          <h1 className="text-3xl font-bold text-light-brown-bg">Projects</h1>
          <div className="bg-brown-bg px-2 rounded-lg flex flex-row justify-center content-center">
            <button className={`py-1 px-2 my-2 rounded-s-lg font-medium ${projectType == "Javascript" ? selectedStyle : notSelectedStyle}`} onClick={() => setprojectType("Javascript")}>Web</button>
            <button className={`py-1 px-2 my-2 font-medium ${projectType == "Python" ? selectedStyle : notSelectedStyle}`} onClick={() => setprojectType("Python")}>ML</button>
            <button className={`py-1 px-2 my-2 font-medium ${projectType == "App" ? selectedStyle : notSelectedStyle}`} onClick={() => setprojectType("App")}>App</button>
          </div>
        </div>
      </div> */}

      {/* {projectType == "Python" && <MlProjects />}
      {projectType == "Javascript" && <WebProjects />}
      {projectType == "App" && <AppProjects />} */}
      {/* {projectType == "Test" && <TestTemplates />} */}

    </div>
  );
}

export default Projects