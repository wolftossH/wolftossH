import { personal, education, certifications } from "../data/resume";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section__title">About Me</h2>
        <div className="about__grid">
          <div className="about__text">
            <p>
              I&apos;m a Data Analytics Engineer at Workday, where I build data pipelines,
              machine learning systems, and LLM-powered applications that drive real business outcomes.
            </p>
            <p>
              My work spans the full data lifecycle — from ingesting and transforming raw data at scale
              with PySpark and dbt, to deploying production ML models and generative AI chatbots.
              I care about measurable impact: the systems I&apos;ve built have saved $100k+ in compute
              costs, improved conversion rates by 8%, and cut pipeline runtimes by 80%.
            </p>
            <p>
              Outside of work I enjoy building side projects exploring distributed systems, blockchain,
              and real-time data architectures.
            </p>
          </div>
          <div className="about__sidebar">
            <div className="about__card">
              <h3>Education</h3>
              {education.map((e) => (
                <div key={e.school} className="about__edu">
                  <strong>{e.school}</strong>
                  <span>{e.degree}</span>
                  <span className="about__gpa">GPA: {e.gpa}</span>
                  <span className="about__period">{e.period}</span>
                </div>
              ))}
            </div>
            <div className="about__card">
              <h3>Certifications</h3>
              <ul className="about__certs">
                {certifications.map((c) => (
                  <li key={c.name}>
                    <a href={c.url} target="_blank" rel="noreferrer">{c.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            {/* <div className="about__card about__contact-card"> */}
              {/* <h3>Contact</h3> */}
              {/* <a href={`mailto:${personal.email}`}>{personal.email}</a> */}
              {/* <span>{personal.phone}</span> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
