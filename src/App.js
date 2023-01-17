import React from "react"
import Header from "./components/Header"
import Home from "./components/Home"
import About from "./components/About"
import Projects from "./components/Projects"
import Footer from "./components/Footer"

export default function App() {
    return(
        <div>
            <Header/>
            <Home/>
            <About/>
            <Projects/>
            <Footer/>
        </div>
    )
}