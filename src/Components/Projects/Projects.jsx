import React, { useState } from 'react';

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

  if(!projectInformation) {
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
          {projectInformation.description.map(elm=>{
            return (
              <li>{elm}</li>
            )
          })}
        </ul>
        <div className=' grid grid-cols-12 mt-2 bg-gray-300 py-2'>
          {/* <div className='font-bold'>Tech Used: </div> */}
          {
            projectInformation?.techUsed?.map(elm=>{
              return (
                <div className={`col-span-6 flex flex-row justify-start items-center p-2`}>
                  <img src={elm.url} className='rounded-full bg-slate-100 mx-2' width={"40px"}/>
                  <div className='ms-1'>{elm.caption}</div>
                </div>
              )
            })
          }
        </div>
        

        <div className={`grid grid-cols-${projectInformation.gridSize} mt-2`}>
          {
            projectInformation?.images?.map(elm=>{

              return (
                <div className={`col-span-1 p-2 bg-gray-300`}>
                  <img src={elm.url}/>
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

  if(!(getType=="Javascript" || getType=="Python" || getType=="App") || getType==null) {
    getType="Javascript";
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
            ProjectsData["Python"].filter((project)=> project.visible).map((elm, index) => {
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
                        <button className="text-white bg-black p-2 py-1 rounded-md" onClick={() =>{ setShow(true); setindexProject(index) }}>
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
            ProjectsData["Javascript"].filter((project)=> project.visible).map((elm, index) => {
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
                        <button className="text-white bg-black p-2 py-1 rounded-md" onClick={() =>{ setShow(true); setindexProject(index) }}>
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

  return (
    <div className="lg:h-screen flex flex-col justify-center px-3 py-3 md:px-0 md:py-0">
      <div className="border-x-4 border-x-brown-bg border-b-4 border-b-brown-bg px-2 pb-3 mb-6">
        <div className="flex flex-row justify-between">
          <h1 className="text-3xl font-bold text-light-brown-bg">Projects</h1>
          <div className="bg-brown-bg px-2 rounded-lg flex flex-row justify-center content-center">
            <button className={`py-1 px-2 my-2 rounded-s-lg font-medium ${projectType == "Javascript" ? selectedStyle : notSelectedStyle}`} onClick={() => setprojectType("Javascript")}>Web</button>
            <button className={`py-1 px-2 my-2 font-medium ${projectType == "Python" ? selectedStyle : notSelectedStyle}`} onClick={() => setprojectType("Python")}>ML</button>
            <button className={`py-1 px-2 my-2 font-medium ${projectType == "App" ? selectedStyle : notSelectedStyle}`} onClick={() => setprojectType("App")}>App</button>
            {/* <button className={`py-1 px-2 my-2 rounded-e-lg font-medium ${projectType == "Test" ? selectedStyle : notSelectedStyle}`} onClick={() => setprojectType("Test")}>Test</button> */}
          </div>
        </div>
      </div>

      {projectType == "Python" && <MlProjects />}
      {projectType == "Javascript" && <WebProjects />}
      {projectType == "App" && <AppProjects />}
      {/* {projectType == "Test" && <TestTemplates />} */}

    </div>
  );
}

export default Projects