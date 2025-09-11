import React from "react";
import CodeforcesLogo from "./icons/codeforces.png"
import Github from "./icons/github.png"
import Linkedin from "./icons/linkedin.png"
import WCA from "./icons/wca.svg"

export default function BottomNavbar({
}) {
  return (
    <div
      className={`hover:scale-105 flex flex-row justify-center gap-4 fixed bottom-6 left-1/2 transform -translate-x-1/2 rounded-full bg-dark-primary-hover text-white shadow-lg px-6 py-3 transition-transform duration-200 focus:outline-none cursor-pointer`}
    >
      <a target="_blank" href="https://codeforces.com/profile/TejasParse03">
        <img
          className="rounded aspect-square hover:scale-110 transition-transform duration-200"
          style={{ width: "35px" }}
          src={CodeforcesLogo}
          alt="Codeforces"
        />
      </a>
      <a target="_blank" href="https://github.com/TejasParse">
        <img
          className="rounded aspect-square hover:scale-110 transition-transform duration-200"
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
          className="rounded aspect-square hover:scale-110 transition-transform duration-200"
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
          className="rounded aspect-square hover:scale-110 transition-transform duration-200"
          style={{ width: "35px" }}
          src={WCA}
          alt=""
        />
      </a>
    </div>
  );
}
