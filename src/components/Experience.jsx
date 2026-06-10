import { useEffect, useRef, useState } from "react";
import { experience } from "../data/resume";

function Chevron({ open }) {
  return (
    <svg
      className={`exp__chevron ${open ? "exp__chevron--open" : ""}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="18"
      height="18"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export default function Experience() {
  const itemsRef = useRef([]);
  const [openSet, setOpenSet] = useState(new Set(experience.map((_, i) => i)));

  function toggle(i) {
    setOpenSet((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("timeline__item--visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    itemsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="section experience">
      <div className="container container--wide">
        <h2 className="section__title">Experience</h2>
        <div className="timeline">
          {experience.map((e, i) => {
            const isOpen = openSet.has(i);
            return (
              <div
                key={i}
                ref={(el) => (itemsRef.current[i] = el)}
                className={`timeline__item ${i % 2 === 0 ? "timeline__item--left" : "timeline__item--right"}`}
              >
                <div className={`timeline__card ${isOpen ? "timeline__card--open" : ""}`}>
                  <button className="timeline__header" onClick={() => toggle(i)} aria-expanded={isOpen}>
                    <div className="timeline__header-left">
                      {e.logo && (
                        <img
                          src={e.logo}
                          alt={e.company}
                          className="timeline__logo"
                          onError={(ev) => { ev.currentTarget.style.display = "none"; }}
                        />
                      )}
                      <div className="timeline__title-group">
                        <h3 className="timeline__role">{e.role}</h3>
                        <span className="timeline__company">@ {e.company}</span>
                      </div>
                    </div>
                    <div className="timeline__header-right">
                      <span className="timeline__period">{e.period}</span>
                      <Chevron open={isOpen} />
                    </div>
                  </button>
                  <div className={`exp__body ${isOpen ? "exp__body--open" : ""}`}>
                    <div className="exp__body-inner">
                      <ul className="exp__bullets">
                        {e.bullets.map((b, j) => (
                          <li key={j}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="timeline__dot" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
