import React from "react"

export default function Hero() {
    return(
        <section className="hero" id='hero'>
            <div className="hero--info">
                <h1 className="hero--header">Welcome</h1>
                <p className="hero--paragraph">Hello! Welcome to my responsive ReactApp hero static page and check out my projects!!!</p>
                <div className="styled-break"></div>
                <div className='hero-buttons'>
                    <div className="button"><a className='hero-but' href='#projects' target="_blank" rel='noreferrer'>Projects</a></div>
                    <div className="button2"><a className='hero-but' href='#contact-me'>Get in touch</a></div>
                </div>
            </div>
        </section>
    )
}
