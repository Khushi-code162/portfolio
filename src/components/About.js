import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about">
      <div className="about-text">
        <h2>About Me</h2>
        <p>
        Hi, I’m Khushi, a passionate MERN stack developer with experience in building dynamic and scalable web applications. I specialize in using MongoDB, Express.js, React, and Node.js to create seamless full-stack solutions. Whether it’s crafting intuitive front-end interfaces or developing robust back-end systems, I focus on writing clean, efficient code that delivers great user experiences. I’m always eager to learn new technologies and improve my skills. Let's connect and create something impactful together!
        This version provides a bit more insight into your work while keeping it concise!
        </p>
        <a href="/resume.pdf" download className="btn">Download Resume</a>
      </div>
    </section>
  );
};

export default About;
