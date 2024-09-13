import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./Education.css";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true });

  return (
    <div
      style={{
        marginTop: "40px",
      }}
      ref={ref}
    >
      <section id="education" className="education">
        <div className="section-heading text-center">
          <motion.h2
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "30px",
              color: "#d92cf9",
              fontWeight: "600",
              margin: "20px",
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            EDUCATION
          </motion.h2>
        </div>
        <hr />
        <div className="container" style={{ marginTop: "30px" }}>
          <div className="education-horizontal-timeline">
            <div
              className="row"
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
              <motion.div
                className="col-sm-4"
                initial={{ opacity: 0, y: 100 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              >
                <div className="single-horizontal-timeline">
                  <div className="experience-time">
                    <h2>2023 - 2025</h2>
                    <h3>
                      Master <span>of Science </span> Computer Science
                    </h3>
                  </div>
                  <hr />
                  <div className="timeline-horizontal-border">
                    <i className="fa fa-circle" aria-hidden="true" />
                    <span className="single-timeline-horizontal" />
                  </div>
                  <div className="timeline">
                    <div className="timeline-content">
                      <h4 className="title">
                        Chhatrapati Shahu Institute of Business Education and
                        Research
                      </h4>
                      <h5>Kolhapur, Maharashtra, India</h5>
                      <p className="description">
                        Completed coursework in advanced computer science
                        topics, data structures, and algorithms, specializing in
                        AI and machine learning.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="col-sm-4"
                initial={{ opacity: 0, y: 100 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              >
                <div className="single-horizontal-timeline">
                  <div className="experience-time">
                    <h2>2020 - 2023</h2>
                    <h3>
                      Bachelor <span>of Science </span> Computer Science
                    </h3>
                  </div>
                  <hr />
                  <div className="timeline-horizontal-border">
                    <i className="fa fa-circle" aria-hidden="true" />
                    <span className="single-timeline-horizontal" />
                  </div>
                  <div className="timeline">
                    <div className="timeline-content">
                      <h4 className="title">Shivaji University</h4>
                      <h5>Kolhapur, Maharashtra, India</h5>
                      <p className="description">
                        Focused on foundational computer science principles,
                        coding, and software development with hands-on
                        experience in full-stack development.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <hr />
    </div>
  );
};

export default Education;
