import React from 'react'

export default function Footer() {
    return (
        <footer className='footer-container'>
                <img  className="footer-logo" src="images/WebCoffeee.png" alt="logo"></img>
                <div className='site-map'>
                <p className='site-map-header'>SITE MAP</p>
                <ul className='ul-site-map'>
                        <li className='ft-link'><a className='ft-link' href='#nav'>HOME</a></li>
                        <li className='ft-link'><a className='ft-link' href='#hero'>HERO</a></li>
                        <li className='ft-link'><a className='ft-link' href='#projects'>PROJECTS</a></li>
                        <li className='ft-link'><a className='ft-link' href='#contact'>CONTACT ME</a></li>
                </ul>
                </div>
                <div className='footer-links'>
                    <p>FOLLOW US</p>
                    <a href="https://github.com/nil1143"><i className="fa-brands fa-square-github footer-link"></i></a>      
                    <a href='https://www.linkedin.com/in/t-nil-b5b88a239/'><i className="fa-brands fa-linkedin footer-link"></i></a>
                    <a href='https://twitter.com/home'><i className="fa-brands fa-square-twitter footer-link"></i></a>
                    <a href='https://google.com'><i className="fa-solid fa-envelope footer-link"></i></a>
                    </div> 
                    <p className='reg'>Credits to:  	&reg; Tomasz Nilipiuk</p>
        </footer>
    )
}