import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skill from "./components/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skill />
      <Contact />
    </>
  );
}

export default App;
