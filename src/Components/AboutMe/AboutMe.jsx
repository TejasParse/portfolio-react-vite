import Typewriter from 'typewriter-effect';

const AboutMe = (props) => {
  return (
    <div className="pt-8 md:px-24 flex flex-row justify-between">
      <div className="flex flex-col justify-center  pe-8 mt-10">
        <h1 className="text-3xl md:text-5xl font-bold pb-2 text-white">
          <Typewriter
            options={{
              strings: ['I\'m Tejas Ajay Parse', 'I Lead', 'I Code', 'I Debug', 'I Solve Puzzles'],
              autoStart: true,
              loop: true,
              stopOnLastString: true,
            }}
          />
        </h1>
        <h1 className="text-2xl font-bold pb-5 md:pb-10">
          Tempe, AZ{" "}
          <span className="text-blue-500">tparse21@gmail.com</span>
        </h1>      
        {/* <div className="md:text-lg mb-3 md:mb-1">
          I am currently pursuing a <b>Master of Science</b> in <b>Computer Science</b> at <b>Arizona State University</b>,
          maintaining a perfect GPA of <b>4.0</b>. I am proud to be one of the 1000s chosen to work as a
          Software Developer at Psych For Life, a startup under the Department of Psychology at ASU.
          With over <b>two years of software development experience</b>, I continue to refine my skills and
          contribute to impactful projects.
        </div>
        <div className="md:text-lg mb-3 md:mb-1">
          I completed my <b>Bachelor's in Computer Science and Engineering with a specialization in AI & ML</b> from the
          <b> Indian Institute of Information Technology Sri City</b>, graduating with a GPA of <b>9.3/10</b>.
          I have worked on numerous projects in Web Development and Machine Learning, and
          <b> I am now actively seeking Fall Internship Opportunities in Software Development and Machine Learning.</b>
        </div>
        <div className="md:text-lg mb-3 md:mb-4">
          Additionally, I am a dedicated speedcuber, competing since 2017 in World Cube Association events.
          I am ranked among the top 80 speedcubers in India, with a notable pyraminx solve of <b>1.84</b> seconds, ranking me 20th nationally.
        </div> */}
        <div className='text-2xl'>
          I am a Master's student in Computer Science at Arizona State University (GPA 4.0) and a Software Developer at Psych For Life, with over two years of experience in Web Development and Machine Learning.
          Beyond tech, I am a competitive speedcuber ranked among the top 80 in India, with a pyraminx solve of 1.84s ranking me 20th nationally.
        </div>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <img src={"/coding.gif"} className='w-[2000px]'/>
      </div>
    </div>
  );
};

export default AboutMe;
