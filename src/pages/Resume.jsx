import "../styles/Resume.css";

const resume = "/Anusha_Resume.pdf";

function Resume() {
  return (
    <div className="resume-page">
      <div className="resume-header">
        <h1>My Resume</h1>

        <div className="resume-actions">
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="download-button"
          >
            Open in New Tab
          </a>

          <a
            href={resume}
            download="Anusha_Resume.pdf"
            className="download-button"
          >
            Download Resume
          </a>
        </div>
      </div>

      <object data={resume} type="application/pdf" className="resume-viewer">
        <p className="resume-fallback">
          Your browser can't display the PDF here.{" "}
          <a href={resume} target="_blank" rel="noopener noreferrer">
            Open the resume
          </a>{" "}
          instead.
        </p>
      </object>
    </div>
  );
}

export default Resume;
