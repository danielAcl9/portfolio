import React from "react"
import imgLogo from "../images/VectorLogo.png"
import imgMail from "../images/black-envelope.svg"
import imgGit from "../images/black-github-alt.svg"
import imgLinkedIn from "../images/black-linkedin.svg"

export default function Footer(){
    return(
        <footer>
            <a href="index.html">
                    <img 
                        src={imgLogo}
                        alt=""
                        className="footer--logo"
                    />
                </a>

                {/* Barra baja de logos */}
                <div className="footer--logos">
                    
                    <a href="mailto: daniel.amado052@gmail.com">
                        <img
                            src={imgMail}
                            alt="Logo correo"
                            className="footer--icon"
                        />
                    </a>

                    <a href="https://github.com/danielAcl9" target="_blank" rel="noreferrer">
                        <img
                            src={imgGit}
                            alt="Logo Github"
                            className="footer--icon"
                        />
                    </a>

                    <a href="https://www.linkedin.com/in/damado2303/" target="_blank" rel="noreferrer">
                        <img
                            src={imgLinkedIn}
                            alt="Logo linkedin"
                            className="footer--icon"
                        />
                    </a>
                </div>

                <p>Built and designed by Daniel Amado</p>
                <p>All rights reserved ©</p>

        </footer>
    )
}