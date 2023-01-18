import React from "react"
import imgAbout from "../images/recorte.png"
import danielCV from "../documents/danielamadocv.pdf"
import imgDownload from "../images/white-cv.svg"

export default function About(){
    return(
        <div>
            <h1 className="about--title" >About me</h1>

            <div  className="about--container">
                <img
                    src={imgAbout}
                    alt="imagen about"
                    className="about--img"
                />

                <div className="about--text">
                    <p>I am currently a fourth year Systems Engineering student. 
                        I have great interest in front-end development, UI Design 
                        and Data Science.
                    </p>
                    <p>Some of the technologies I’ve worked with are Python, React.js, Javascript, Java and HTML&CSS.</p>

                    <p>Outside of Computer Science work, I have always loved drawing and 
                        illustration. Also I’m interested in research, language 
                        learning, books, film-making, photography and productivity.
                    </p>

                    <div>
                        <a href={danielCV} download="Daniel Amado - CV"  className="about--cvbutton">
                            <img src={imgDownload} alt="imagen descarga"/>
                            <p>Download CV</p>
                        </a>
                    </div>
                </div>

                
            </div>

        </div>
    )
}