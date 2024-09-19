import React from "react";
import Typical from "react-typical";
import { Fade, Bounce } from "react-awesome-reveal"; // Import animations
import Styles from "./Home.module.css";

const Home = () => {
  return (
    <section id="home" className={Styles.homimg}>
      <Fade direction="left" triggerOnce={true} duration={1500}>
        <div style={{ display: "block", fontFamily: "sans-serif" }}>
          <h1 className="name">HI, I'M SHUBHAM ASAWALE</h1>
        </div>
      </Fade>

      <Bounce triggerOnce={true} delay={500} duration={2000}>
        <div
          style={{
            display: "block",
            color: "honeydew",
            fontFamily: "cursive",
            fontSize: "50px",
            fontWeight: "bold",
          }}
        >
          <h4>
            <Typical
              loop={Infinity}
              wrapper="span"
              steps={[
                "A Software developer",
                2000,
                "Android developer",
                2000,
                "Full Stack Web developer",
                2000,
                "Data Analyst",
                2000,
                "Machine Learning Enthusiast",
                2000,
              ]}
            />
          </h4>
        </div>
      </Bounce>

      <Fade direction="up" triggerOnce={true} delay={1000}>
        <a href="/Shubham_Resume.pdf" download="Shubham_Resume.pdf">
          <button className={Styles.resumeButton}>Download Resume</button>
        </a>
      </Fade>
    </section>
  );
};

export default Home;
