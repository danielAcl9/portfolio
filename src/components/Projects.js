import React from "react"
import imgPlaceholder from "../images/img-placeholder.png"
import imgGit from "../images/full-github.svg"
import imgWindow from "../images/window.svg"


export default function Projects(){
    return(
        <div>
            <h1>----- Proyectos -----</h1>
            <h1>Projects</h1>

            <div className="projects--container">
                <div className="projects--card">

                        <img src={imgPlaceholder} alt=""/>

                    <div className="content">

                        <h3>Animedoro Timer</h3>
                        <p>A variation of the Pomodoro technique</p>
                        <p className="sub">React.js</p>

                        <a href="https://github.com/" target="_blank" rel="noreferrer">
                            <img
                                src={imgGit}
                                alt="Logo Github"
                                className="cards-git"
                            />
                        </a>

                        <a href="https://github.com/" target="_blank" rel="noreferrer">
                            <img
                                src={imgWindow}
                                alt="Logo Github"
                                className="cards-window"
                            />
                        </a>

                    </div>
                </div>

                <div className="projects--card">

                        <img src={imgPlaceholder} alt=""/>

                    <div className="content">

                        <h3>Coming soon...</h3>
                        <p>Check out soon for new projects!</p>

                        <p className="sub">---</p>

                        <a href="https://github.com/" target="_blank" rel="noreferrer">
                            <img
                                src={imgGit}
                                alt="Logo Github"
                                className="cards-git"
                            />
                        </a>

                        <a href="https://github.com/" target="_blank" rel="noreferrer">
                            <img
                                src={imgWindow}
                                alt="Logo Github"
                                className="cards-window"
                            />
                        </a>

                    </div>
                </div>

                <div className="projects--card">

                        <img src={imgPlaceholder} alt=""/>

                    <div className="content">

                        <h3>Coming soon...</h3>
                        <p>Check out soon for new projects!</p>

                        <p className="sub">---</p>

                        <a href="https://github.com/" target="_blank" rel="noreferrer">
                            <img
                                src={imgGit}
                                alt="Logo Github"
                                className="cards-git"
                            />
                        </a>

                        <a href="https://github.com/" target="_blank" rel="noreferrer">
                            <img
                                src={imgWindow}
                                alt="Logo Github"
                                className="cards-window"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}