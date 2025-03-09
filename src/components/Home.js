import React, { useEffect } from "react";
import { Link } from "react-scroll";
import "./Home.css";
import profileImage from "../assets/profile.jpg";

const Home = () => {
  useEffect(() => {
    const homeText = document.querySelector(".home-text");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            homeText.classList.add("show");
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(homeText);
  }, []);

  return (
    <section id="home" className="home">
      {/* Left Section - Text Content */}
      <div className="home-left">
        <div className="home-text">
          <h1 className="name">Hi, I'm Khushi</h1>
          <h2 className="web">Web Developer</h2>
          <p className="description">
            Passionate about building beautiful, functional, and user-friendly websites.
            I specialize in front-end and back-end development, ensuring seamless digital experiences.
          </p>
          <div className="buttons">
            <Link to="projects" smooth={true} duration={500} className="btn">
              View Projects
            </Link>
            <Link to="contact" smooth={true} duration={500} className="btn btn-alt">
              Contact Me
            </Link>
          </div>
        </div>
      </div>

      {/* Right Section - Profile Image */}
      <div className="hero-image">
        <img src={profileImage} alt="Profile" />
      </div>
    </section>
  );
};

export default Home;
