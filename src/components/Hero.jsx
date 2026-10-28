import "../styles/Hero.css";
import myPhoto from "../assets/anusha.jpeg";
import { Link } from "react-router-dom";

function Hero() {
    return (
        <section className="hero" id="home">
            <div className="hero-content">
                <p className="hero-greeting">Hello, I'm</p>

                <h1>Anusha S</h1>

                <h2>Full Stack Developer</h2>

                <p className="hero-description">
                    I'm a Passionate and dedicated Computer Science student with a strong interest in web development and software engineering. I enjoy creating innovative solutions and continuously learning new technologies to enhance my skills.
                </p>
                <div className="project-view">
                    <Link to="/projects" className="hero-button">
                        View Projects
                    </Link>

                    <Link to="/contact" className="contact-me">
                        Contact Me
                    </Link>
                </div>
            </div>

            <div className="hero-image">
                <img src={myPhoto} alt="Anusha S" />
            </div>


        </section>
    );
}

export default Hero;