import { useRef, useState, useEffect } from "react";
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
import { useLocation } from "react-router";

const MainApp = (props) => {
  const location = useLocation();

  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("AboutMe");

  // refs for each section
  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const leadershipRef = useRef(null);
  const speedCubingRef = useRef(null);
  const resumeRef = useRef(null);

  const sectionRefs = {
    AboutMe: aboutRef,
    Education: educationRef,
    Skills: skillsRef,
    Experience: experienceRef,
    Projects: projectsRef,
    Leadership: leadershipRef,
    SpeedCubing: speedCubingRef,
    Resume: resumeRef,
  };

  // scroll into section when clicking nav
  const scrollToSection = (section) => {
    sectionRefs[section].current?.scrollIntoView({ behavior: "smooth" });
    setNavOpen(false); // close mobile nav after clicking
  };

  useEffect(() => {
    const contentContainer = document.querySelector('#content-container');
    const handleScroll = (e) => {
      const container = e.target;
      const scrollPosition = container.scrollTop + container.clientHeight / 3;

      // console.log(scrollPosition, "This is the scroll position");

      for (const [section, ref] of Object.entries(sectionRefs)) {
        if (ref.current) {
          const { offsetTop, offsetHeight } = ref.current;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    if (contentContainer) {
      contentContainer.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (contentContainer) {
        contentContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  // console.log(activeSection, "Here is the path");

  return (
    <div className="grid grid-cols-10">
      <div className="hidden lg:block col-span-none lg:col-span-2 h-screen bg-brown-bg">
        <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
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
      <div
        className="col-span-10 lg:col-span-8 sm:px-3 lg:px-9 lg:h-screen overflow-y-scroll"
        id="content-container"
      >
        <section ref={aboutRef}>
          <AboutMe />
        </section>
        <section ref={educationRef}>
          <Education />
        </section>
        <section ref={experienceRef}>
          <Experience />
        </section>
        <section ref={projectsRef}>
          <Projects />
        </section>
        <section ref={skillsRef}>
          <Skills />
        </section>
        <section ref={leadershipRef}>
          <Leadership />
        </section>
        <section ref={speedCubingRef}>
          <SpeedCubing />
        </section>
        <section ref={resumeRef}>
          <Resume />
        </section>
      </div>
    </div>
  );

}

export default MainApp;