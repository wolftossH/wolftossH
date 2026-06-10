const RESUME_URL = "/wolftossH/resume.pdf";

export default function Resume() {
  return (
    <section id="resume" className="section resume">
      <div className="container">
        <h2 className="section__title">Resume</h2>
        <div className="resume__card">
          <div className="resume__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
              strokeLinecap="round" strokeLinejoin="round" width="48" height="48">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
          </div>
          <div className="resume__info">
            <h3>Huy Trinh — Resume</h3>
            <p>Data Analytics Engineer · UC San Diego B.S. Data Science</p>
          </div>
          <div className="resume__actions">
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              className="btn btn--outline"
            >
              View
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
