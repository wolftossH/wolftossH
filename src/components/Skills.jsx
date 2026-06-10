import { skills } from "../data/resume";

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section__title">Skills</h2>
        <div className="skills__grid">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="skills__category">
              <h3 className="skills__cat-title">{category}</h3>
              <div className="skills__tags">
                {items.map((skill) => (
                  <span key={skill} className="tag tag--skill">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
