
import "../styles/Contact.css";

function Contact() {
  return (
    <section className="contact-page">
      <div className="contact-card">
        <h1>Contact Me</h1>
        <p className="contact-subtitle">
          Let's connect and build something amazing!
        </p>

        <div className="contact-item">
          <span>📧</span>
          <div>
            <h3>Email</h3>
            <a href="mailto:yourmail@example.com">
              anushanayak454@gmail.com
            </a>
          </div>
        </div>

        <div className="contact-item">
          <span>📱</span>
          <div>
            <h3>Phone</h3>
            <p>+91 8xxxxxxxx4</p>
          </div>
        </div>

        <div className="contact-item">
          <span>📍</span>
          <div>
            <h3>Mangalore</h3>
            <p>Karnataka, India</p>
          </div>
        </div>

        <div className="contact-item">
          <span>💻</span>
          <div>
            <h3>GitHub</h3>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/AnushaNayak454
            </a>
          </div>
        </div>

        <div className="contact-item">
          <span>🔗</span>
          <div>
            <h3>LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/yourusername/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.linkedin.com/in/anusha-s-6258542b0
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
