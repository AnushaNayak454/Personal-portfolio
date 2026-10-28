import React from 'react'
import "../styles/Navbar.css";
import { FiDownload } from "react-icons/fi";
function Navbar() {
  return (
    <>
        <nav className="navbar">
            <div className="navbar-logo">
                <h1>Anusha S</h1>
            </div>
           <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/contact">Contact</a></li>
           </ul>
           <div className="resume-button">
            <a className="resume-link" href="/resume" target="_blank" rel="noopener noreferrer"> <FiDownload/> Resume</a>
           </div>
        </nav>
    
    </>
  )
}

export default Navbar