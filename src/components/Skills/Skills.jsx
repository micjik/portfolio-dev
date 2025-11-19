import React from 'react'
import github from "../../assets/github-ar21~bgwhite.svg";
import javascript from "../../assets/javascript-ar21~bgwhite.svg"
import nodejs from "../../assets/nodejs-ar21~bgwhite.svg";
import reactjs from "../../assets/reactjs-ar21~bgwhite.svg";
import tailwind from "../../assets/tailwindcss-ar21.svg";
import visualstudio from "../../assets/visualstudio_code-ar21~bgwhite.svg";
import css from "../../assets/w3_css-ar21~old.svg";
import html5 from "../../assets/w3_html5-ar21~bgwhite.svg"
import './Skills.css'

const Skills = () => {
  return (
    <div>
      <div className="skills" id="skills">
        <h2>Skills and Tools</h2>
        <div className="skills-container">
           <div className="skill-img-top">
              <img src={html5} alt="skill-img" />
              <img src={css} alt="skill-img" />
              <img src={javascript} alt="skill-img" />
              <img src={reactjs} alt="skill-img" />
           </div>
           <div className="skill-img-bottom">
            <img src={github} alt="skill-img" />
              <img src={visualstudio} alt="skill-img" />
              <img src={tailwind} alt="skill-img" />
              <img src={nodejs} alt="skill-img" />
           </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
