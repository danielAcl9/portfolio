import React from "react"
import imgAbout from "../images/about-img.jpg"
import danielCV from "../documents/danielamadocv.pdf"
import imgDownload from "../images/white-cv.svg"

export default function About(){
    return(
        <div>
            <h1>----- About -----</h1>

            {/* Comentarios para el github, veamos si puedo */}
            <h1>About me</h1>

            <img
                src={imgAbout}
                alt="imagen about"
                className="about--img"
            />

            <div className="about--text">
                <p>I am currently a fourth year Systems Engineering student. 
                    I have great interest in front-end development, UI Design 
                    and Data Science 
                </p>
                <p>Some of the technologies I’ve worked with are:</p>

                <div>
                    <ul className="about--list1">
                        <li>Python</li>
                        <li>React.js</li>
                        <li>Javascript</li>
                    </ul>

                    <ul className="about--list2">
                        <li>HTML&CSS</li>
                        <li>Java</li>
                    </ul>
                </div>

                <p>Outside of CompSci work, I have always loved drawing and 
                    illustration. Also I’m interested in research, language 
                    learning, books, film making, photography and productivity.
                </p>

                <div>
                    <a href={danielCV} download="Daniel Amado - CV"  className="about--cvbutton">
                        <img src={imgDownload} alt="imagen descarga"/>
                        <p>Download CV</p>
                    </a>
                </div>

                
            </div>

        </div>
    )
}