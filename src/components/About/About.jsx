import React from 'react'
import heroImg from "../../assets/program.jpg"
import './About.css'

const About = () => {
  return (
    <div className="about-me" id="about">
        <div className="about-left">
            <img src={heroImg} alt="" />
        </div>
        <div className="about-right">
            <h2>About Me</h2>
            <p>I’m a Front-End Developer with a passion for creating clean, responsive, and user-friendly interfaces. Coming from a digital advisory background,
               I’ve spent years helping people use digital products, which sparked my interest in how these apps are actually built.
               Now I’m focused on turning ideas into real, functional web experiences using HTML, CSS, JavaScript, and React.
            </p>
            <div className="about-btn-btn">
                <button>Download CV</button>
                <button>Hire Me</button>
            </div>
        </div>
    </div>
  )
}

export default About
