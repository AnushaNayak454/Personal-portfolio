import React from 'react'
import "../styles/Navbar.css";
import { FiDownload } from "react-icons/fi";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
        <nav className="navbar">
            <div className="navbar-logo">
                <h1>Anusha S</h1>
            </div>
           <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
           </ul>
           <div className="resume-button">
            <Link className="resume-link" to="/resume"> <FiDownload/> Resume</Link>
           </div>
        </nav>
    
    </>
  )
}

export default Navbar