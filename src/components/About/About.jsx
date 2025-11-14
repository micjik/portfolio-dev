import React from 'react'
import heroImg from "../../assets/passport.jpg"
import './About.css'

const About = () => {
  return (
    <div className="about-me">
        <div className="about-left">
            <img src={heroImg} alt="" />
        </div>
        <div className="about-right">
            <h2>About Me</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Quidem rerum aliquam doloremque. Itaque facere quas, 
                labore quia corporis alias perspiciatis! Esse quo,
                ea reprehenderit officiis minus repudiandae officia illum qui!
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
