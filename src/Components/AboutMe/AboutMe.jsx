import CodeforcesLogo from "./icons/codeforces.png"
import Github from "./icons/github.png"
import Linkedin from "./icons/linkedin.png"
import WCA from "./icons/wca.svg"

const AboutMe = (props) => {
  return (
    <div className="lg:h-screen flex flex-col justify-center px-4 md:pe-24 py-3 md:py-0">
      <h1 className="text-2xl md:text-5xl font-bold pb-2">
        Tejas Ajay <span className="text-brown-bg">Parse</span>
      </h1>
      <h1 className="text-xl font-bold pb-5 md:pb-10">
        Tempe, AZ{" "}
        <span className="text-brown-bg">tparse21@gmail.com</span>
      </h1>
      <div className="md:text-lg mb-3 md:mb-1">


        I am currently pursuing a <b>Master of Science</b> in <b>Computer Science</b> at <b>Arizona State University</b>,
        maintaining a perfect GPA of <b>4.0</b>. I am proud to be one of the 1000s chosen to work as a
        Software Developer at Psych For Life, a startup under the Department of Psychology at ASU.
        With over <b>two years of software development experience</b>, I continue to refine my skills and
        contribute to impactful projects.

        {/* I am a passionate Software Development and Machine Learning enthusiast with a B.Tech in Computer Science, specializing in AI & ML from Indian Institute of Information Technology Sri City, where I graduated with a CGPA of <b>9.30</b>.
        My team, Git Clone, won the <b>Smart India Hackathon 2023</b>, hosted by the <b>Ministry of Education</b>.
        Currently, I am pursuing a Master of Science in Computer Science at Arizona State University. */}
        {/* I am a passionate Software Development and Machine Learning Enthusiast, who has completed my B.Tech in Computer Science with a specialization in AI & ML from the Indian Institute of Information Technology, Sri City, graduating with a CGPA of <b>9.30</b>. 
        My team, Git Clone, won the <b>Smart India Hackathon 2023</b> held by the <b>Ministry of Education</b>. 
        I have started my Master of Science in Computer Science at Arizona State University. */}

        {/* I am a passionate Machine Learning and Web Development Enthusiast,
        currently pursuing my B.Tech in Computer Science with specialization in
        AI & ML from IIIT Sri City with a CGPA of <b>9.30</b>. Our team Git Clone
        won the <b>Smart India Hackathon 2023</b> held by <b>Ministry of Education.</b>{" "} */}
      </div>
      <div className="md:text-lg mb-3 md:mb-1">
        I completed my <b>Bachelor's in Computer Science and Engineering with a specialization in AI & ML</b> from the
        <b> Indian Institute of Information Technology Sri City</b>, graduating with a GPA of <b>9.3/10</b>.
        I have worked on numerous projects in Web Development and Machine Learning, and
        <b> I am now actively seeking Fall Internship Opportunities in Software Development and Machine Learning.</b>
        {/* During my B.Tech, I worked on numerous projects in Web Development and Machine Learning and gained over a year of internship experience as a Web Developer,
        particularly in the MERN stack. I am now seeking full-time opportunities in Machine Learning and Web Development to further broaden my expertise. */}
        {/* During my B.Tech I have worked on several projects in Web Development
        and Machine Learning. I also have <b>over a year of Intern experience</b>{" "}
        as a Web Developer particularly in MERN stack. I am currently
        looking for full time Machine Learning and Web Development opportunities to expand my knowledge boundary. */}
      </div>
      <div className="md:text-lg mb-3 md:mb-4">
        Additionally, I am a dedicated speedcuber, competing since 2017 in World Cube Association events.
        I am ranked among the top 80 speedcubers in India, with a notable pyraminx solve of <b>1.84</b> seconds, ranking me 20th nationally.
      </div>
      <div className="flex flex-row gap-x-4">
        <a target="_blank" href="https://codeforces.com/profile/TejasParse03">
          <img
            className="rounded aspect-square"
            style={{ width: "35px" }}
            src={CodeforcesLogo}
            alt="Codeforces"
          />
        </a>
        <a target="_blank" href="https://github.com/TejasParse">
          <img
            className="rounded aspect-square"
            style={{ width: "35px" }}
            src={Github}
            alt=""
          />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/tejas-ajay-parse-b171211b6/"
        >
          <img
            className="rounded aspect-square"
            style={{ width: "35px" }}
            src={Linkedin}
            alt=""
          />
        </a>
        <a
          target="_blank"
          href="https://www.worldcubeassociation.org/persons/2017PARS06"
        >
          <img
            className="rounded aspect-square"
            style={{ width: "35px" }}
            src={WCA}
            alt=""
          />
        </a>
      </div>
    </div>
  );
};

export default AboutMe;
