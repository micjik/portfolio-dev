import React from 'react'
import img1 from "../../assets/learning-hub.png";
import img2 from "../../assets/crypto.png";
import img3 from "../../assets/recipe-finder.png";
import img4 from "../../assets/movie-app.png"
import { BsGithub } from "react-icons/bs";
import { BsLink } from "react-icons/bs";
import './Work.css'


const Work = () => {

    const works = [
        {
            image:img1,
            title: "Responsive E-Learning Landpage",
            description: "Building a responsive design using Html5 and Css3",
            github: "https://github.com/micjik/Landing-page.git",
            link: "https://micjik.github.io/Landing-page/"
        },
        {
            image:img2,
            title: "Crypto-Currency Landpage",
            description: "Building a Crypto Currency landing page using Html, Css, Sass and javascript",
            github: "https://github.com/micjik/cryptoZ.git",
            link: "https://micjik.github.io/cryptoZ/"
        },
        {
            image:img3,
            title: "Recipe Finder",
            description: "Building a recipe finder using Html, css and React",
            github: "https://github.com/micjik/recipe-finder.git",
            link: "https://recipe-sorter.netlify.app"
        },
        {
            image:img4,
            title: "Movie-App",
            description: "Building a Movie App using Html, Css and React",
            github: "https://github.com/micjik/movieApp.git",
            link: "https://moviesm.netlify.app"
        },
    ]
  return (
    <div>
    <div className="work-list" id="work">
       <h3 className="work-header">Work</h3>
       <div className="work-container">
        {works.map((work, index) => (
            <div key={index}className="work">
                <div className="work-content">
                    <div className="work-link">
                        <a href={work.github}><BsGithub/></a>
                        <a href={work.link}><BsLink/></a>
                    </div>
                    <h3>{work.title}</h3>
                    <p>{work.description}</p>
                </div>
                <div className="work-image">
                    <img src={work.image} alt="" />
                </div>
            </div>
        ))}
       </div>
    </div>
    </div>
  )
}

export default Work
