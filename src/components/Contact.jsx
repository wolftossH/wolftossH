import { personal } from "../data/resume";

const RESUME_URL = "/wolftossH/resume.pdf";

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container contact__inner">
        <h2 className="section__title">Get In Touch</h2>
        <p className="contact__sub">
          I&apos;m always open to interesting conversations, opportunities, and collaborations.
          My inbox is open — I&apos;ll do my best to get back to you.
        </p>
        <a href={`mailto:${personal.email}`} className="btn btn--primary btn--lg">
          Say Hello
        </a>
        <div className="contact__resume">
          <a href={RESUME_URL} target="_blank" rel="noreferrer" className="btn btn--outline">
            View Resume
          </a>
        </div>
        <div className="contact__links">
          <a href={personal.github} target="_blank" rel="noreferrer">GitHub</a>
          <span>·</span>
          <a href={personal.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}
