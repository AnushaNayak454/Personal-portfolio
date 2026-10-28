
import resume from "../assets/Anusha.pdf";
import "../styles/Resume.css";

function Resume() {
  return (
    <div className="resume-page">
      <div className="resume-header">
        <h1>My Resume</h1>

        <a
          href={resume}
          download="Anusha_Resume.pdf"
          className="download-button"
        >
          Download Resume
        </a>
      </div>

      <iframe
        src={resume}
        title="Resume PDF"
        className="resume-viewer"
      />
    </div>
  );
}

export default Resume;
