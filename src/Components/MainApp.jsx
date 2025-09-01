import Navbar from "./Navbar/Navbar";
import { Routes, Route, Link } from "react-router";
import Education from "./Education/Education";
import Skills from "./Skills/Skills";
import Experience from "./Experience/Experience";
import Projects from "./Projects/Projects";
import AboutMe from "./AboutMe/AboutMe";
import Resume from "./Resume/Resume";
import Leadership from "./Leadership/Leadership";
import SpeedCubing from "./SpeedCubing/SpeedCubing";
import { useState } from "react";
import { useLocation } from "react-router";

const MainApp = (props) => {
  const location = useLocation();

  console.log(location.pathname, "Here is the path");

  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="grid grid-cols-10">
      <div className="hidden lg:block col-span-none lg:col-span-2 h-screen bg-brown-bg">
        <Navbar />
      </div>
      <div className="lg:hidden col-span-10">
        <div className="flex flex-row justify-between items-center p-3 bg-brown-bg">
          <div className="fs-3 fw-semibold text-white">{location.pathname==="/" ? "/About Me" : location.pathname}/</div>
          <div className="h-[40px] w-[40px]" onClick={() => setNavOpen(prev => !prev)}><img src="/hamburger.png" /></div>
        </div>
        {
          navOpen && (
            <>
              <Link to={"/"}><div className="bg-gray-200 p-2">About Me</div></Link>
              <Link to={"/Education"}><div className="bg-gray-100 p-2">Education</div></Link>
              <Link to={"/Skills"}><div className="bg-gray-200 p-2">Skills</div></Link>
              <Link to={"/Experience"}><div className="bg-gray-100 p-2">Experience</div></Link>
              <Link to={"/Projects"}><div className="bg-gray-200 p-2">Projects</div></Link>
              <Link to={"/Leadership"}><div className="bg-gray-100 p-2">Leadership</div></Link>
              <Link to={"/SpeedCubing"}><div className="bg-gray-200 p-2">SpeedCubing</div></Link>
              <Link to={"/Resume"}><div className="bg-gray-100 p-2">Resume</div></Link>
            </>
          )
        }

      </div>
      <div className="col-span-10 lg:col-span-8 sm:px-3 lg:px-9">
        <Routes>
          <Route index element={<AboutMe />} path="/" />
          <Route element={<Education />} path="/Education" />
          <Route element={<Skills />} path="/Skills" />
          <Route element={<Experience />} path="/Experience" />
          <Route element={<Projects />} path="/Projects" />
          <Route element={<Leadership />} path="/Leadership" />
          <Route element={<SpeedCubing />} path="/SpeedCubing" />
          <Route element={<Resume />} path="/Resume" />
        </Routes>
      </div>
    </div>
  );

}

export default MainApp;