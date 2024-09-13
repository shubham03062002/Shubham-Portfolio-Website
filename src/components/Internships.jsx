import React, { useEffect, useState, useRef } from "react";
import "animate.css"; // Import animate.css for animations

const Internship = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionTop = sectionRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Trigger animation when the section is visible in the viewport
        if (sectionTop < windowHeight - 100) {
          setAnimate(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} id="internship" className="experience">
      <div className="section-heading text-center">
        <h2
          className={`${
            animate ? "animate__animated animate__fadeInDown" : ""
          }`}
          style={{
            fontFamily: "Arial, sans-serif",
            fontSize: "30px",
            fontWeight: "bold",
            color: "#d92cf9",
            margin: "20px",
          }}
        >
          INTERNSHIPS
        </h2>
      </div>
      <hr />
      <div className="container">
        <div className="experience-content">
          <div className="main-timeline">
            <ul>
              <li
                className={`${
                  animate
                    ? "animate__animated animate__fadeInLeft animate__delay-1s"
                    : ""
                }`}
              >
                <div
                  className="single-timeline-box fix"
                  style={{
                    borderBottom: "2px solid #007bff",
                    padding: "20px 0",
                  }}
                >
                  <div className="row">
                    <div className="col-md-5">
                      <div className="experience-time text-right">
                        <h2
                          style={{
                            fontFamily: "Arial, sans-serif",
                            fontSize: "1.8rem",
                            fontWeight: "bold",
                            color: "#007bff",
                          }}
                        >
                          2023 - Present
                        </h2>
                        <h3
                          style={{
                            fontFamily: "Arial, sans-serif",
                            fontSize: "1.4rem",
                            color: "#555",
                          }}
                        >
                          Full Stack Web Developer
                        </h3>
                      </div>
                    </div>
                    <div className="col-md-offset-1 col-md-5">
                      <div className="timeline">
                        <div
                          className="timeline-content"
                          style={{
                            backgroundColor: "#f9f9f9",
                            padding: "15px",
                            borderRadius: "8px",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                          }}
                        >
                          <h4
                            className="title"
                            style={{
                              fontFamily: "Arial, sans-serif",
                              fontSize: "1.6rem",
                              color: "#007bff",
                              fontWeight: "bold",
                            }}
                          >
                            <span>
                              <i
                                className="fa fa-circle"
                                aria-hidden="true"
                              ></i>
                            </span>{" "}
                            INNOVATE INTERN
                          </h4>
                          <h5
                            style={{
                              fontFamily: "Arial, sans-serif",
                              fontSize: "1.2rem",
                              color: "#888",
                            }}
                          >
                            No.9, Bazar Lane, Mylapore, Chennai, Tamil Nadu,
                            India 600-004
                          </h5>
                          <p
                            className="description"
                            style={{
                              fontFamily: "Arial, sans-serif",
                              fontSize: "1rem",
                              color: "#333",
                            }}
                          >
                            Worked as a Full Stack Web Developer, handling both
                            front-end and back-end tasks, contributing to
                            project development and deployment.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internship;
