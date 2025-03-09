import React, { useEffect } from "react";
import { Element } from "react-scroll";
import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "Zerodha Clone",
    description:
      "A frontend clone of the Zerodha trading platform using React. Develop a responsive and intuitive frontend for a trading platform to enhance user engagement and streamline trading activities.",
    demo: "https://trademate-beta.vercel.app/",
    code: "https://github.com/Khushi-code162/trademate",
  },
];

const Projects = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".project-card");

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target); // Stop observing once it's visible
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <Element name="projects">
      <section className="projects">
        <h2 className="section-title">My Projects</h2>
        <div className="project-container">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="buttons">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  Live Demo
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-alt"
                >
                  GitHub Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Element>
  );
};

export default Projects;
