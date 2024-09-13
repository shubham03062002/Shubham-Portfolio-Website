import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Skill from "./components/Skill";
import Internship from "./components/Internships";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Education />
      <Skill />
      <Internship />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
