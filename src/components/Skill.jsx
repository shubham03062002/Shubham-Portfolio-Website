import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./Skill.css"; // Link to the CSS file for styling

const Skill = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true });

  return (
    <div ref={ref} className="skill-section">
      <section id="skills" className="skills">
        <div className="skill-content">
          <div className="section-heading text-center">
            <motion.h2
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "30px",
                color: "#d92cf9",
                fontWeight: "600",
                marginTop: "20px",
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              SKILLS
            </motion.h2>
          </div>
          <hr />
          <div className="container">
            <div className="row">
              {/* First column */}
              <motion.div
                className="col-lg-6 col-md-12"
                initial={{ opacity: 0, x: -100 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              >
                <div className="single-skill-content">
                  <div className="barWrapper">
                    <span className="progressText">MERN Stack</span>
                    <div className="single-progress-txt">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow={90}
                          aria-valuemin={10}
                          aria-valuemax={100}
                          style={{ width: "90%" }}
                        />
                      </div>
                      <h3>90%</h3>
                    </div>
                  </div>
                  <div className="barWrapper">
                    <span className="progressText">Bootstrap</span>
                    <div className="single-progress-txt">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow={85}
                          aria-valuemin={10}
                          aria-valuemax={100}
                          style={{ width: "85%" }}
                        />
                      </div>
                      <h3>85%</h3>
                    </div>
                  </div>
                  <div className="barWrapper">
                    <span className="progressText">Data Science</span>
                    <div className="single-progress-txt">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow={97}
                          aria-valuemin={10}
                          aria-valuemax={100}
                          style={{ width: "97%" }}
                        />
                      </div>
                      <h3>97%</h3>
                    </div>
                  </div>
                  <div className="barWrapper">
                    <span className="progressText">
                      FULL STACK WEB DEVELOPMENT
                    </span>
                    <div className="single-progress-txt">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow={90}
                          aria-valuemin={10}
                          aria-valuemax={100}
                          style={{ width: "90%" }}
                        />
                      </div>
                      <h3>90%</h3>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Second column */}
              <motion.div
                className="col-lg-6 col-md-12"
                initial={{ opacity: 0, x: 100 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              >
                <div className="single-skill-content">
                  <div className="barWrapper">
                    <span className="progressText">Machine Learning (ML)</span>
                    <div className="single-progress-txt">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow={80}
                          aria-valuemin={10}
                          aria-valuemax={100}
                          style={{ width: "95%" }}
                        />
                      </div>
                      <h3>80%</h3>
                    </div>
                  </div>
                  <div className="barWrapper">
                    <span className="progressText">
                      Artificial Intelligence (AI)
                    </span>
                    <div className="single-progress-txt">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow={82}
                          aria-valuemin={10}
                          aria-valuemax={100}
                          style={{ width: "92%" }}
                        />
                      </div>
                      <h3>82%</h3>
                    </div>
                  </div>
                  <div className="barWrapper">
                    <span className="progressText">HTML 5</span>
                    <div className="single-progress-txt">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow={90}
                          aria-valuemin={10}
                          aria-valuemax={100}
                          style={{ width: "90%" }}
                        />
                      </div>
                      <h3>90%</h3>
                    </div>
                  </div>
                  <div className="barWrapper">
                    <span className="progressText">ANDROID DEVELOPMENT</span>
                    <div className="single-progress-txt">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow={90}
                          aria-valuemin={10}
                          aria-valuemax={100}
                          style={{ width: "90%" }}
                        />
                      </div>
                      <h3>90%</h3>
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

export default Skill;
