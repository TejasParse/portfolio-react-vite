import React from 'react';
import python from "./icons/py_icon.png";
import cpp from "./icons/cpp_icon.png";
import java from "./icons/java_icon.png";
import javascript from "./icons/javascript.svg";
import c_lang from "./icons/c_lang.svg";
import react from "./icons/react.svg";
import node from "./icons/node_icon.png";
import express from "./icons/express_icon.png";
import tailwind from "./icons/tailwind.svg";
import android from "./icons/android.svg";
import bootstrap from "./icons/bootstrap.svg";
import tensorflow from "./icons/tensorflow.svg";
import pytorch from "./icons/pytorch.svg";
import pandas from "./icons/pandas.svg";
import scikit from "./icons/scikit.png";
import opencv from "./icons/opencv.svg";
import mongodb from "./icons/mongodb_icon.webp";
import mysql from "./icons/mysql_icon.png";
import azure from "./icons/azure.svg";
import github from "./icons/github_icon.png"
import typescript from "./icons/typescript.png"
import postgres from "./icons/postgre.png"
import aws from "./icons/aws.webp"
import numpy from "./icons/numpy.webp"

const Skills = () => {

  const FullStars = () => {
    return <>&#9733; &#9733; &#9733;</>;
  }

  const PartialStars = () => {
    return <>&#9733; &#9733; &#9734;</>;
  }

  const OneStars = () => {
    return <>&#9733; &#9734; &#9734;</>;
  }

  return (
    <div className="lg:h-screen flex flex-col justify-center px-2 py-2 md:p-0">
      <div className="border-b-4 border-b-brown-bg mb-4"></div>
      <div className="border-x-4 border-x-brown-bg px-2 mb-4">
        <div className="flex flex-row justify-between">
          <h1 className="text-3xl font-bold text-light-brown-bg">
            Skills & Achievements
          </h1>
        </div>
      </div>

      <div className="border-x-4 border-x-brown-bg px-2 mb-4">
        <div className="border-b-4 pb-2 border-b-brown-bg text-2xl text-brown-bg font-semibold">
          Achievements
        </div>
        <ul className="list-disc px-4 py-2 font-md">
          <li>
            Achieved 1st place in Smart India Hackathon 2023 organized by Government of India, standing out among 200+ teams.          </li>
          <li>
            Ranked globally at 3425 in Google Hashcode 2022 with 1,071,918 points (India Rank: 1456).
          </li>
          <li>
            Ended Google Kickstart 2021 Campaign with the best rank of 2813.
          </li>
          <li>
            Have a Max Codeforces Rating of 1310 (Pupil) and Codechef Rating of
            1754
          </li>
          <li>
            Solved over 650+ coding problems across coding platforms like
            Codechef, Codeforces and HackerRank
          </li>
        </ul>
      </div>
      <div className="border-x-4 border-x-brown-bg px-2 ">
        <div className="border-b-4 pb-2 border-b-brown-bg text-2xl text-brown-bg font-semibold mb-3">
          Skills
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <div className="border-b-2 border-b-black text-center font-bold mb-2">
              Languages
            </div>
            <div className="px-2">
              <div className="flex flex-row justify-between mb-2">
                <div className="flex flex-row gap-2">
                  <img src={python} alt="" style={{ width: "20px" }} />
                  <span>Python</span>
                </div>
                <div>
                  <PartialStars />
                </div>
              </div>
              <div className="flex flex-row justify-between mb-2">
                <div className="flex flex-row gap-2">
                  <img src={c_lang} alt="" style={{ width: "20px" }} />
                  <span>C</span>
                </div>
                <div>
                  <PartialStars />
                </div>
              </div>
              <div className="flex flex-row justify-between mb-2">
                <div className="flex flex-row gap-2">
                  <img src={cpp} alt="" style={{ width: "20px" }} />
                  <span>C++</span>
                </div>
                <div>
                  <PartialStars />
                </div>
              </div>
              <div className="flex flex-row justify-between mb-2">
                <div className="flex flex-row gap-2">
                  <img src={java} alt="" style={{ width: "20px" }} />
                  <span>Java</span>
                </div>
                <div>
                  <PartialStars />
                </div>
              </div>
              <div className="flex flex-row justify-between mb-2">
                <div className="flex flex-row gap-2">
                  <img src={javascript} alt="" style={{ width: "20px" }} />
                  <span>Javascript</span>
                </div>
                <div>
                  <FullStars />
                </div>
              </div>
              <div className="flex flex-row justify-between mb-2">
                <div className="flex flex-row gap-2">
                  <img src={typescript} alt="" style={{ width: "20px" }} />
                  <span>Typescript</span>
                </div>
                <div>
                  <FullStars />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="border-b-2 border-b-black text-center font-bold mb-2">
              Development
            </div>
            <div className="px-2">
              <div className="flex flex-row justify-between mb-2">
                <div className="flex flex-row gap-2">
                  <img src={react} alt="" style={{ width: "20px" }} />
                  <span>React</span>
                </div>
                <div>
                  <FullStars />
                </div>
              </div>
              <div className="flex flex-row justify-between mb-2">
                <div className="flex flex-row gap-2">
                  <img src={react} alt="" style={{ width: "20px" }} />
                  <span>React Native</span>
                </div>
                <div>
                  <FullStars />
                </div>
              </div>
              <div className="flex flex-row justify-between mb-2">
                <div className="flex flex-row gap-2">
                  <img src={node} alt="" style={{ width: "40px" }} />
                  <span>Nodejs</span>
                </div>
                <div>
                  <FullStars />
                </div>
              </div>
              <div className="flex flex-row justify-between mb-2">
                <div className="flex flex-row gap-2">
                  <img
                    src={bootstrap}
                    alt=""
                    style={{ width: "20px", height: "30px" }}
                  />
                  <span>Bootstrap</span>
                </div>
                <div>
                  <FullStars />
                </div>
              </div>
              <div className="flex flex-row justify-between mb-2">
                <div className="flex flex-row gap-2 content-center">
                  <img src={tailwind} alt="" style={{ width: "20px" }} />
                  <span>Tailwind</span>
                </div>
                <div>
                  <PartialStars />
                </div>
              </div>
              <div className="flex flex-row justify-between mb-2">
                <div className="flex flex-row gap-2">
                  <img src={android} alt="" style={{ width: "25px" }} />
                  <span>Android</span>
                </div>
                <div>
                  <PartialStars />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="border-b-2 border-b-black text-center font-bold mb-2">
              AI/ML
            </div>
            <div className="px-2">
              <div className="flex flex-row justify-between mb-2">
                <div className="flex flex-row gap-2">
                  <img src={pytorch} alt="" style={{ width: "20px" }} />
                  <span>PyTorch</span>
                </div>
                <div>
                  <PartialStars />
                </div>
              </div>
              <div className="flex flex-row justify-between mb-2">
                <div className="flex flex-row gap-2">
                  <img src={tensorflow} alt="" style={{ width: "20px" }} />
                  <span>Tensorflow</span>
                </div>
                <div>
                  <OneStars />
                </div>
              </div>
              <div className="flex flex-row justify-between mb-2">
                <div className="flex flex-row gap-2 content-center">
                  <img src={pandas} alt="" style={{ width: "20px" }} />
                  <span>Pandas</span>
                </div>
                <div>
                  <PartialStars />
                </div>
              </div>
              <div className="flex flex-row justify-between mb-2">
                <div className="flex flex-row gap-2">
                  <img src={scikit} alt="" style={{ width: "40px" }} />
                  <span>scikit-learn</span>
                </div>
                <div>
                  <PartialStars />
                </div>
              </div>
              <div className="flex flex-row justify-between mb-2">
                <div className="flex flex-row gap-2">
                  <img src={opencv} alt="" style={{ width: "25px" }} />
                  <span>open-cv</span>
                </div>
                <div>
                  <PartialStars />
                </div>
              </div>
              <div className="flex flex-row justify-between mb-2">
                <div className="flex flex-row gap-2">
                  <img src={numpy} alt="" style={{ width: "25px" }} />
                  <span>Numpy</span>
                </div>
                <div>
                  <PartialStars />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="border-b-2 border-b-black text-center font-bold mb-2">
              Developer Tools
            </div>
            <div className="px-2">
              <div className="flex flex-row justify-between mb-2">
                <div className="flex flex-row gap-2">
                  <img src={aws} alt="" style={{ width: "20px" }} />
                  <span>AWS</span>
                </div>
                <div>
                  <FullStars />
                </div>
              </div>
              <div className="flex flex-row justify-between mb-2">
                <div className="flex flex-row gap-2">
                  <img src={mongodb} alt="" style={{ width: "20px" }} />
                  <span>MongoDB</span>
                </div>
                <div>
                  <FullStars />
                </div>
              </div>
              <div className="flex flex-row justify-between mb-2">
                <div className="flex flex-row gap-2">
                  <img src={mysql} alt="" style={{ width: "20px" }} />
                  <span>MySQL</span>
                </div>
                <div>
                  <PartialStars />
                </div>
              </div>
              <div className="flex flex-row justify-between mb-2">
                <div className="flex flex-row gap-2 content-center">
                  <img src={azure} alt="" style={{ width: "20px" }} />
                  <span>Azure</span>
                </div>
                <div>
                  <FullStars />
                </div>
              </div>
              <div className="flex flex-row justify-between mb-2">
                <div className="flex flex-row gap-2">
                  <img src={github} alt="" style={{ width: "20px" }} />
                  <span>Github</span>
                </div>
                <div>
                  <FullStars />
                </div>
              </div>
              <div className="flex flex-row justify-between mb-2">
                <div className="flex flex-row gap-2">
                  <img src={postgres} alt="" style={{ width: "20px" }} />
                  <span>PostgreSQL</span>
                </div>
                <div>
                  <FullStars />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b-4 border-b-brown-bg mt-4"></div>
      <div className="pt-4">
        <div>
          Beginner <OneStars />
        </div>
        <div>
          Project Experience <PartialStars />
        </div>
        <div>
          Work Experience <FullStars />
        </div>
      </div>
    </div>
  );
}

export default Skills