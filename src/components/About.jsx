import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Styles from "./About.module.css";
import { section } from "framer-motion/client";

const About = () => {
  // Create a ref to track when the section is in view
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true });

  return (
    <section id="about">
      <div ref={ref}>
        <motion.div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "30px",
            fontFamily: "sans-serif",
            fontSize: "30px",
            color: "#d92cf9",
            fontWeight: "bold",
          }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
          }}
        >
          ABOUT ME
        </motion.div>
        <hr />
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginTop: "50px",
            marginLeft: "120px",
            marginRight: "20px",
          }}
        >
          <motion.div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "40%",
              gap: "30px",
            }}
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{
              duration: 2,
            }}
          >
            <div>
              <p className={Styles.para}>
                I'm Shubham Asawale, a passionate Full Stack Web Developer and
                Android Developer with a strong foundation in AI, machine
                learning, and data science, striving to build impactful digital
                solutions.
              </p>
            </div>
            <div className={Styles.detail}>
              My academic background includes an MSc in Computer Science,
              specializing in AI, machine learning, and data structures. I am
              dedicated to solving complex problems through innovative
              technology, and my experience spans multiple successful projects
              that demonstrate my technical proficiency and creativity.
            </div>
            <div class="row">
              <div class="col-sm-4">
                <div class="single-about-add-info">
                  <h3>phone</h3>
                  <p>+917887764390</p>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="single-about-add-info">
                  <h3>email</h3>
                  <p>shubhamasawale9@gmail.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className={Styles.photo}
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
          />
        </div>
        <hr />
      </div>
    </section>
  );
};

export default About;
