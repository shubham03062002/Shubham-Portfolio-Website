import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    let currentSection = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute("id");
      }
    });
    setActiveTab(currentSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleToggle = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light new">
      <div className="container">
        <a
          className="navbar-brand"
          href="#home"
          style={{ color: "#d92cf9", fontWeight: "bold" }}
        >
          Shubham
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleToggle}
          aria-controls="navbarMenu"
          aria-expanded={isNavbarOpen}
          aria-label="Toggle navigation"
        >
          {isNavbarOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div
          className={`collapse navbar-collapse ${isNavbarOpen ? "show" : ""}`}
          id="navbarMenu"
          style={{ marginLeft: "220px" }}
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a
                className={`nav-link ${activeTab === "home" ? "active" : ""}`}
                href="#home"
                onClick={() => handleTabClick("home")}
              >
                HOME
              </a>
            </li>

            <li className="nav-item">
              <a
                className={`nav-link ${activeTab === "about" ? "active" : ""}`}
                href="#about"
                onClick={() => handleTabClick("about")}
              >
                ABOUT
              </a>
            </li>

            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeTab === "education" ? "active" : ""
                }`}
                href="#education"
                onClick={() => handleTabClick("education")}
              >
                EDUCATION
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeTab === "skills" ? "active" : ""}`}
                href="#skills"
                onClick={() => handleTabClick("skills")}
              >
                SKILLS
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeTab === "internship" ? "active" : ""
                }`}
                href="#internship"
                onClick={() => handleTabClick("internship")}
              >
                INTERNSHIPS
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeTab === "projects" ? "active" : ""
                }`}
                href="#projects"
                onClick={() => handleTabClick("projects")}
              >
                PROJECTS
              </a>
            </li>

            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeTab === "contact" ? "active" : ""
                }`}
                href="#contact"
                onClick={() => handleTabClick("contact")}
              >
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
