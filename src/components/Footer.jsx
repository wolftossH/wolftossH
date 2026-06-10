import { personal } from "../data/resume";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        Designed &amp; Built by <strong>{personal.name}</strong>
      </p>
      <p className="footer__sub">
        <a href={personal.github} target="_blank" rel="noreferrer">GitHub</a>
        {" · "}
        <a href={personal.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
      </p>
    </footer>
  );
}
