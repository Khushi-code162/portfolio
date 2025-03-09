import React from "react";
import { Element } from "react-scroll";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <Element name="contact">
      <section className="contact">
        <h2 className="section-title">Contact Me</h2>

        {/* Contact Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        {/* Social Media Links */}
        <div className="social-links">
          <a href="https://www.linkedin.com/in/khushi-kumari-1582a427a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="khushi:kumarikhushi7166@gmail.com">
            <FaEnvelope />
          </a>
        </div>
      </section>
    </Element>
  );
};

export default Contact;
