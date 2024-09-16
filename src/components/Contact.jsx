import React, { useState } from "react";
import emailjs from "emailjs-com";
import "animate.css"; // Import animate.css for animations
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ToastContainer, toast } from "react-toastify"; // Import react-toastify
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css"; // Import the custom CSS for styling

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "", // Matches {{from_name}} in EmailJS template
    reply_to: "", // Matches {{reply_to}} for email
    subject: "",
    message: "", // Matches {{message}} in EmailJS template
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_csl5s8h", // Your EmailJS service ID
        "template_7wucrbd", // Your EmailJS template ID
        e.target,
        "ulNko5dyYPV15Iiwd" // Your EmailJS user ID
      )
      .then(
        (result) => {
          toast.success(
            "Message sent successfully! , Thank You for Contacting Us we'll reach you quickly."
          ); // Success toast
          setFormData({
            from_name: "",
            reply_to: "",
            subject: "",
            message: "",
          }); // Reset form
        },
        (error) => {
          toast.error("Message failed to send. Please try again."); // Error toast
        }
      );
  };

  return (
    <div style={{}}>
      <section id="contact" className="contact">
        <div className="section-heading text-center animate__animated animate__fadeInDown">
          <h2 className="contact-title">CONTACT ME</h2>
        </div>
        <hr />
        <div className="container" style={{ marginTop: "30px" }}>
          <div className="contact-content">
            <div
              className="row"
              style={{ display: "flex", justifyContent: "space-evenly" }}
            >
              <div className="col-md-offset-1 col-md-5 col-sm-6 animate__animated animate__fadeInLeft animate__delay-1s">
                <div className="single-contact-box">
                  <div className="contact-form">
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-sm-6 col-xs-12">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              id="from_name"
                              placeholder="Name*"
                              name="from_name" // Updated to match EmailJS template
                              value={formData.from_name}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-sm-6 col-xs-12">
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control"
                              id="reply_to"
                              placeholder="Email*"
                              name="reply_to" // Updated to match EmailJS template
                              value={formData.reply_to}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              id="subject"
                              placeholder="Subject"
                              name="subject"
                              value={formData.subject}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="form-group">
                            <textarea
                              className="form-control"
                              rows="8"
                              id="message"
                              placeholder="Message"
                              name="message" // Updated to match EmailJS template
                              value={formData.message}
                              onChange={handleChange}
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="single-contact-btn">
                            <button
                              type="submit"
                              className="contact-btn"
                              style={{
                                width: "100%",
                                border: "none",
                                gap: "25px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              Send{"    "}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="23"
                                height="23"
                                fill="currentColor"
                                class="bi bi-send"
                                viewBox="0 0 16 16"
                              >
                                <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                    {/* Toast Container */}
                    <ToastContainer />
                  </div>
                </div>
              </div>
              <div
                className="col-md-offset-1 col-md-5 col-sm-6 animate__animated animate__fadeInRight animate__delay-1s"
                style={{ marginTop: "12px" }}
              >
                <div className="single-contact-box">
                  <div className="contact-address">
                    <div className="contact-add-head">
                      <h3 className="contact-name">Shubham Asawale</h3>
                      <p className="contact-role">
                        Full Stack Web developer | Android developer
                      </p>
                    </div>
                    <div className="contact-add-info">
                      <div className="single-contact-add-info">
                        <h3 className="contact-info-title">Phone</h3>
                        <p className="contact-info-detail">+91-78877-64390</p>
                      </div>
                      <div className="single-contact-add-info">
                        <h3 className="contact-info-title">Email</h3>
                        <p className="contact-info-detail">
                          <a href="mailto:shubhamasawale9@gmail.com">
                            shubhamasawale9@gmail.com
                          </a>
                        </p>
                      </div>
                      <div className="single-contact-add-info">
                        <h3 className="contact-info-title">Website</h3>
                        <p className="contact-info-detail">
                          <a href="#" target="_blank" rel="noopener noreferrer">
                            www.example.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="social-icons">
                    <a
                      href="https://github.com/shubham03062002"
                      target="_blank"
                      title="GitHub"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/shubham-asawale-67a70b299/"
                      target="_blank"
                      title="LinkedIn"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a
                      href="mailto:shubhamasawale9@gmail.com"
                      target="_blank"
                      title="Gmail"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-envelope"></i>
                    </a>
                    <a
                      href="https://wa.me/7887764390"
                      target="_blank"
                      title="Whatsapp"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="31"
                        height="31"
                        fill="currentColor"
                        class="bi bi-whatsapp"
                        viewBox="0 0 16 16"
                        style={{ marginBottom: "10px" }}
                      >
                        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                      </svg>
                    </a>

                    <a
                      href="https://shubhamasawale9.blogspot.com/"
                      title="blogspot"
                      target="_blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="34"
                        height="34"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        style={{ marginBottom: "6px" }}
                      >
                        <path d="M6 3h12v2H6V3z"></path>
                        <path d="M4 7h16v13H4V7z"></path>
                        <path d="M8 12h8"></path>
                        <path d="M8 16h8"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
