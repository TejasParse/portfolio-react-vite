import React from 'react';
import Typewriter from 'typewriter-effect';
import { motion, useScroll, useTransform, useSpring } from "motion/react"
import ProjectsData from './Project.json';
import { Modal } from 'react-bootstrap';

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

  // Gather all visible projects from all categories
  const allVisibleProjects = [
    ...ProjectsData["Javascript"].filter(p => p.visible),
    ...ProjectsData["Python"].filter(p => p.visible)
  ];

  // Distribute projects across three rows
  const row1Projects = allVisibleProjects.filter((_, idx) => idx % 3 === 0);
  const row2Projects = allVisibleProjects.filter((_, idx) => idx % 3 === 1);
  const row3Projects = allVisibleProjects.filter((_, idx) => idx % 3 === 2);

  const ProjectCard = ({ title, thumbnail, links, techUsed, description, className }) => {
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
          className={`absolute inset-0 bg-black bg-opacity-80 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-white ${isHovered ? 'opacity-100' : 'opacity-0'
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
              {techUsed.slice(0, 4).map((tech, index) => (
                <div key={index} className="flex items-center bg-white bg-opacity-20 rounded-full px-2 py-1">
                  <img src={tech.url} className="w-4 h-4 rounded-full mr-1" alt={tech.caption} />
                  <span className="text-xs text-black font-medium">{tech.caption.split(' ')[0]}</span>
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
          </div>
        </div>
      </div>
    )
  }

  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [-200, 200]), springConfig);
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [200, -200]), springConfig);
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 500]), springConfig);

  return (
    <div className="h-[270vh] flex flex-col justify-center py-3 md:px-24 md:py-0 overflow-hidden">
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
        ref={ref}
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity
        }}
      >
        <motion.div
          className={`flex gap-24 pb-4`}
          style={{ x: translateX }}
        >
          {row1Projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              className="w-1/3 flex-shrink-0 aspect-video"
            />
          ))}
        </motion.div>
        <motion.div
          className={`flex gap-24 pb-4`}
          style={{ x: translateXReverse }}
        >
          {row2Projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              className="w-1/3 flex-shrink-0 aspect-video"
            />
          ))}
        </motion.div>
        <motion.div
          className={`flex gap-24 pb-4`}
          style={{ x: translateX }}
        >
          {row3Projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              className="w-1/3 flex-shrink-0 aspect-video"
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Projects