import "./contact.css";
import "../../App.css";
import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    if (!email || !name || !contact || !subject || !message) {
      setStatusMessage("Please fill in all fields.");
      return;
    }

    emailjs
      .send(
        "service_6h0iwi8",
        "template_iluj5d4",
        {
          to_email: "tamayochristianj2@gmail.com",
          from_email: email,
          from_name: name,
          from_contact: contact,
          subject: subject,
          message: message,
        },
        "CYPSM3du_JvJ65bpA"
      )
      .then(() => {
        setStatusMessage("Email sent successfully!");
        // Reset form fields
        setName("");
        setContact("");
        setEmail("");
        setSubject("");
        setMessage("");
      })
      .catch(() => {
        setStatusMessage("Error sending email. Please try again.");
      });
  };

  const handleKeyDown = (e) => {
    if (
      !(
        e.key === "Backspace" ||
        e.key === "Delete" ||
        e.key === "Tab" ||
        e.key === "ArrowLeft" ||
        e.key === "ArrowRight" ||
        e.key === "Home" ||
        e.key === "End" ||
        (e.key >= "0" && e.key <= "9")
      )
    ) {
      e.preventDefault();
    }
  };

  return (
    <div id="contact" className="contact section-separator rn-section-gap">
      <div
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="100"
        className="container"
      >
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <div className="subtitle">Contact</div>
              <div className="title">Contact With Me</div>
            </div>
          </div>
        </div>
        <div className="row mt--50 mt_md--40 mt_sm--40 mt-contact-sm">
          <div className="col-lg-5">
            <div className="contact-about-area">
              <div className="thumbnail">
                <img
                  src="./assets/img/slider/contact-01.png"
                  alt="Contact Image"
                />
              </div>
              <div className="title-area row">
                <span className="title">Christian Jefferson S. Tamayo</span>
                <span className="subtitle">Front-end Web Developer</span>
              </div>
              <div className="description">
                <span className="available">
                  I am available for work. Connect with me via and call in to my
                  account.
                </span>
                <span className="mail">
                  <span className="title me-1">Email:</span>
                  <a href="mailto:tamayochristianj2@gmail.com">
                    tamayochristianj2@gmail.com
                  </a>
                </span>
              </div>
              <div className="social-area">
                <div className="title">FIND WITH ME</div>
                <div className="social-icon">
                  <a target="_blank" href="https://www.facebook.com/cjstamayo">
                    <button className="contact-btn social-btn me-3">
                      <i className="fa-brands fa-facebook-f"></i>
                    </button>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/christian-jefferson-tamayo-30bb77262/"
                  >
                    <button className="contact-btn social-btn me-3">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </button>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/cjstamayo/"
                  >
                    <button className="contact-btn social-btn me-3">
                      <i className="fa-brands fa-instagram"></i>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div data-aos-delay="600" className="col-lg-7 contact-input">
            <div className="contact-form-wrapper">
              {statusMessage && (
                <div
                  className="alert alert-dismissible d-flex align-items-center justify-content-center"
                  role="alert"
                >
                  <div className="contact-btn d-flex align-items-center justify-content-between w-100">
                    <span>{statusMessage}</span>
                    <span
                      type="button"
                      className="close"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                    >
                      <i className="fa-solid fa-xmark"></i>
                    </span>
                  </div>
                </div>
              )}
              <div className="introduce">
                <form
                  className="contact-form rwt-dynamic-form row"
                  id="contact-form"
                  onSubmit={sendEmail}
                >
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label for="contact-name">Your Name</label>
                      <input
                        className="form-control form-control-lg"
                        name="contact-name"
                        id="contact-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label for="contact-phone">Phone Number</label>
                      <input
                        className="form-control form-control-lg"
                        name="contact-phone"
                        id="contact-phone"
                        type="text"
                        onKeyDown={handleKeyDown}
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label for="contact-email">Email</label>
                      <input
                        className="form-control form-control-lg"
                        name="contact-email"
                        id="contact-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label for="subject">Subject</label>
                      <input
                        className="form-control form-control-lg"
                        name="subject"
                        id="subject"
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label for="contact-message">Your Message</label>
                      <textarea
                        className="form-control form-control-lg"
                        name="contact-message"
                        id="contact-message"
                        cols="30"
                        rows="10"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <button
                      type="submit"
                      name="submit"
                      id="submit"
                      className="contact-btn"
                      onClick={sendEmail}
                      required
                    >
                      <span className="text me-2">SEND MESSAGE</span>
                      <span className="icon">
                        <i className="fa-solid fa-arrow-right"></i>
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
