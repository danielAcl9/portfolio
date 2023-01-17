import React from "react"
import sunglassesEmoji from "../images/sunglasses-emoji.png"
import imgPerfil from "../images/profile.jpg"
import imgMailHome from "../images/black-envelope.svg"
import imgMail from "../images/white-envelope.svg"
import imgGit from "../images/black-github-alt.svg"
import imgLinkedIn from "../images/black-linkedin.svg"

export default function Home(){
    return(
        <div className="home--content">
             {/* Barra lateral de logos */}
            <div className="home--sidebar">
                <a href="mailto: dafeamca99@gmail.com">
                    <img
                        src={imgMailHome}
                        alt=""
                        className="home--logo"
                        />
                    </a>

                <a href="https://github.com/">
                    <img
                        src={imgGit}
                        alt="Logo Github"
                        className="home--logo"
                    />
                </a>

                <a href="https://www.linkedin.com/feed/">
                    <img
                        src={imgLinkedIn}
                        alt="Logo linkedin"
                        className="home--logo"
                    />
                </a>
            </div>

            {/* Esto es un divisorio, borrar al final */}
            <div className="home--center--items">
                <div className="home--name">
                    <h1>Daniel Amado</h1>
                    <img
                        src={sunglassesEmoji}
                        alt="Sunglasess"
                        className="home--emoji"
                    />
                </div>
                <div className="home--text">
                    <h2>Front-end Developer</h2>
                    <p>I’m a systems engineer, creative designer and artist 
                        based in Colombia. And I’m very passionate about my work.
                    </p>
                </div>

                <div>
                    <a href="mailto: dafeamca99@gmail.com"  className="home--button">
                        <img src={imgMail} alt="enviar correo"/>
                        <p>Say hi!</p>
                    </a>
                </div>
            </div>


            <img
                src={imgPerfil}
                alt="imagen de perfil"
                className="home--profile--pic"
            />
        </div>
    )
}