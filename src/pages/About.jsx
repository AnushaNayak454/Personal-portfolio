
import "../styles/About.css";
import profilePhoto from "../assets/Anu.png";

function About() {
  return (
    <div className="about-page">
      <div className="about-container">

        <div className="about-photo">
          <img src={profilePhoto} alt="Anusha" />
        </div>

        <div className="about-content">
          <h1>About Me</h1>
          <h2>Hello, I'm Anusha!</h2>

          <p>
            I am a Computer Science Engineering graduate
            passionate about web development and software
            engineering.
          </p>

          <p>
            I enjoy building responsive websites using
            React.js, JavaScript, Node.js, Express.js,
            and MongoDB.
          </p>

          <h2>My Goal</h2>
          <p>
            My goal is to become a skilled full-stack
            developer and build applications that solve
            real-world problems.
          </p>
        </div>

      </div>
    </div>
  );
}

export default About;
