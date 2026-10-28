import "../styles/Project.css";
import pragathi from "../assets/pragathi.png";


function Projects() {

    const projects = [
        {
            title: "Food Recipe Web Application",
            description: "A MERN stack application where users can explore, add, and manage food recipes.",
            technologies: ["React", "Node.js", "Express.js", "MongoDB"],
            image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZCUyMHJlY2lwZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            title: "Matsyamitra - Fish Classifier",
            description:
                "A fish image classification project designed to help identify Indian Ocean fish.",
            technologies: "Python, TensorFlow, React, Flask",
        },
        {
            title: "Smart Construction Helmet",
            description:
                "An IoT-based safety system designed to detect accidents and send emergency alerts.",
            technologies: "ESP32, Sensors, GPS, Firebase",
        },
        {
            title: "Coaching Center Website",
            description:
                "A responsive website created to present coaching center information and services.",
            technologies: "React, CSS, JavaScript",
            websiteLink: <a href="https://coaching-center-website.netlify.app/" target="_blank" rel="noopener noreferrer">Visit Website</a>,
           image: pragathi
        }

    ];


return (
   <section className="projects-page">
    <h1>My Projects</h1>
    <p className="projects-subtitle">
        Here are some of the projects I've worked on, showcasing my skills in web development, machine learning, and IOT.
    </p>

    <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p className="technologies">
              <strong>Technologies:</strong> {project.technologies}
            </p>
            {project.image && <img src={project.image} alt={project.title} className="project-image" />}
            {project.websiteLink && <p>{project.websiteLink}</p>}
          </div>
        ))}
      </div>

   </section>
  );

}
export default Projects;