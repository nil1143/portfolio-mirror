import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import Projects from "./components/Projects"
import ContactMe from "./components/ContactMe"
import Footer from "./components/Footer"

// import React from "react"

export default function App() {

    return (
        <div className="container">
        <Navbar />
        <Hero />
        <Card /> 
        <Projects />
        <ContactMe />
        <Footer />
        </div>
    )
}