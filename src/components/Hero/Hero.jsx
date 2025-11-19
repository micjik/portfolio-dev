import React from 'react'
import { Typewriter } from 'react-simple-typewriter';
import heroImg from "../../assets/program.jpg"
import './Hero.css'

const Hero = () => {
  return (
    <div className="hero" id="hero">
        <div className="hero-content">
            <div className="hero-left">
              <h2>I'm Michael Adetayo</h2>
              <h3><Typewriter
            words={[ 'Frontend Engineer', 'Web Developer']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}/>
            </h3>
            <p>I'm Frontend Engineer with one year successful working experience</p>
            </div>
            <div className="hero-right">
                <div className="hero-img">
                    <img src={heroImg} alt="" />
                </div>

            </div>
        </div>
    </div>
  )
}

export default Hero
