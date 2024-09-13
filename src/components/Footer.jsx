import React from "react";
import "animate.css"; // Import animate.css for animations
import "./Footer.css"; // Import the CSS file for custom styling

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer animate__animated animate__fadeIn">
      <div className="footer-content">
        <p>
          &copy; {currentYear} - {currentYear + 1}. Design and Developed By
          Shubham Asawale, Kolhapur, India.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
