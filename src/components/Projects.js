import React from 'react'

export default function Projects() {
    return (
        <section className='projects-section' id='projects'>
                <h2 className="about-me-header">Projects</h2>
                <div className="header-styled-break2"></div>
            <main className="projects-row">
                <div className="project-container">   
                    <img src='images/minatures/weaAppMin.png' className='project-img' alt='1' ></img>
                    <h3 className='project-title'>Weather App</h3>
                    <div className='technology-used'><h4>Technology used:</h4>
                    <div className='tech-icons'>
                        <i class="fa-brands fa-html5"></i> HTML
                        <i class="fa-brands fa-css3-alt"></i> CSS
                        <i class="fa-brands fa-js"></i> JS
                    </div>
                    </div> 
                    <p className='projects-paragraph'>Simple weather app created in VanillaJS. API fetched from <a href='https://openweathermap.org/api'>openweathermap.org/API</a></p>
                    <div className='projects-button'><a className='button-link' href='https://nil1143.github.io/weather-app/'>CHECK</a></div>
                     <a href='https://github.com/nil1143/weather-app.git' className='gh-link'>Github</a>             
                </div>
                <div className="project-container"> 
                    <img src='images/minatures/travelJournalMin1.png' className='project-img' alt='2'></img>
                    <h3 className='project-title'>Travel Journal</h3>
                    <div className='technology-used'><h4>Technology used:</h4>
                        <div className='tech-icons'>
                        <i class="fa-brands fa-html5"></i> HTML
                        <i class="fa-brands fa-css3-alt"></i> CSS
                        <i class="fa-brands fa-js"></i> JS
                        <i class="fa-brands fa-react"></i> REACT
                        </div>
                    </div>
                    <p className='projects-paragraph'>The mobile size journal in React App. Re-created from 'scratch' as a challenge in <a href='https://www.scrimba.com' id='scrimba'>Scrimba </a>React course. App deployed to Github Pages via Node.JS</p>
                    <div className='projects-button'><a className='button-link' href='https://nil1143.github.io/journal/'>CHECK</a></div>
                     <a href='https://github.com/nil1143/journal.git' className='gh-link'>Github</a>             
                    </div>
                    <div className="project-container">
                    <img src='images/minatures/coffeeWebMin1.png' className='project-img' alt='3' ></img>
                    <h3 className='project-title'>First UI project</h3>
                    <div className='technology-used'><h4>Technology used:</h4>
                    <div className='tech-icons'>
                        <i class="fa-brands fa-html5"></i> HTML  
                        <i class="fa-brands fa-css3-alt"></i> CSS
                        </div> 
                     </div>
                     <p className='projects-paragraph'>UI/UX static web design. My first project, created for college assignment needings</p>
                     <div className='projects-button'><a className='button-link' href='https://nil1143.github.io/first-ui-project/'>CHECK</a></div>
                     <a href='https://github.com/nil1143/first-ui-project.git' className='gh-link'>Github</a>
                </div>
                <div className="project-container">
                    <img src='images/in-prog.png' className='in-prog' alt='inprpog'></img>
                    <img src='' className='project-img' alt='minature'></img>
                    <h3 className='project-title'>Meme generator</h3>
                    <h4 className='technology-used'><h4>Technology used:</h4>
                    </h4>
                    <p className='projects-paragraph'>info paragraph</p>                 
                </div>
                <div className="project-container">
                    <img src='images/in-prog.png' className='in-prog' alt='inprpog'></img>
                    <img className='project-img' alt='minature'></img>
                    <h3 className='project-title'>AirBnB mobile clone API</h3>
                    <div className='tech-icons'>
                    <div className='technology-used'>Technology used:</div>
                    </div>
                    <p className='projects-paragraph'>info paragraph</p>      
                </div>
            </main>
        </section>
    )
}