import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="projects" style={{ marginBottom: "0px" }}>
      <div className="section-heading text-center">
        <h2
          className="animate__animated animate__fadeInDown"
          style={{
            fontFamily: "Arial, sans-serif",
            fontSize: "30px",
            fontWeight: "bold",
            color: "#d92cf9",
            margin: "20px",
          }}
        >
          PROJECTS
        </h2>
      </div>
      <hr />
      <div className="container">
        <div className="projects-content">
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li className="animate__animated animate__fadeInUp">
              <h3
                style={{
                  fontSize: "1.6rem",
                  fontWeight: "bold",
                  color: "#007bff",
                }}
              >
                <a
                  href="https://github.com/shubham03062002/Ecommerce-MERN-App"
                  style={{ textDecoration: "none" }}
                >
                  CommerceCraft
                </a>
              </h3>
              <p style={{ fontSize: "1rem", color: "#333" }}>
                A comprehensive E-commerce website development framework
                designed to streamline online store creation, with features like
                product management, payment integration, and user-friendly
                dashboards.
              </p>
            </li>
            <li className="animate__animated animate__fadeInUp">
              <h3
                style={{
                  fontSize: "1.6rem",
                  fontWeight: "bold",
                  color: "#007bff",
                }}
              >
                <a
                  href="https://github.com/shubham03062002/Chat-App"
                  style={{ textDecoration: "none" }}
                >
                  Chat App using MERN
                </a>
              </h3>
              <p style={{ fontSize: "1rem", color: "#333" }}>
                A real-time chat application developed using MongoDB,
                Express.js, React, and Node.js with secure user authentication
                and encrypted messaging capabilities.
              </p>
            </li>
            <li className="animate__animated animate__fadeInUp">
              <h3
                style={{
                  fontSize: "1.6rem",
                  fontWeight: "bold",
                  color: "#007bff",
                }}
              >
                <a
                  href="https://github.com/shubham03062002/Weather-App "
                  style={{ textDecoration: "none" }}
                >
                  Weather App using React
                </a>
              </h3>
              <p style={{ fontSize: "1rem", color: "#333" }}>
                A weather forecasting application that fetches real-time weather
                data using external APIs and displays detailed weather reports
                for multiple locations.
              </p>
            </li>
            <li className="animate__animated animate__fadeInUp">
              <h3
                style={{
                  fontSize: "1.6rem",
                  fontWeight: "bold",
                  color: "#007bff",
                }}
              >
                <a
                  href="https://github.com/shubham03062002/hospital+management"
                  style={{ textDecoration: "none" }}
                >
                  Hospital Management System
                </a>
              </h3>
              <p style={{ fontSize: "1rem", color: "#333" }}>
                A PHP and MySQL-based system designed to manage hospital
                operations, including patient records, appointments, billing,
                and staff management.
              </p>
            </li>
            <li className="animate__animated animate__fadeInUp">
              <h3
                style={{
                  fontSize: "1.6rem",
                  fontWeight: "bold",
                  color: "#007bff",
                }}
              >
                <a
                  href="https://github.com/shubham03062002/Amazone-Shopping-App-Clone"
                  style={{ textDecoration: "none" }}
                >
                  {" "}
                  Amazon Clone
                </a>
              </h3>
              <p style={{ fontSize: "1rem", color: "#333" }}>
                A frontend project showcasing advanced skills in UI/UX design
                and frontend development. Features product listings, shopping
                cart, and order management.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <hr />
    </section>
  );
};

export default Projects;
