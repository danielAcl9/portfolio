import React from "react"
import imgLogo from "../images/VectorLogo.png"

export default function Header() {
    return(
        <header>
            <nav className="navbar">

                {/* Logo principal */}
                <div className="div--logo">
                    <a href="index.html">
                        <img 
                            src={imgLogo}
                            className="header--logo"
                            alt=""
                        />
                    </a>
                </div>

                {/* Barra de navegación */}
                <div>
                    <ul className="header--menu">
                        <a href="Home.js">Home</a>
                        <a href="About.js">About Me</a>
                        <a href="Projects.js">Projects</a>
                        <a href="Footer.js">Contact</a>
                    </ul>
                </div>
            </nav>
        </header>
    )
}