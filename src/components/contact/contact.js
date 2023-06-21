import "./contact.css";
import "../../App.css";

const Contact = () => {
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
                <span className="phone">
                  <span className="title me-1">Phone:</span>
                  <a href="tel:+639614607967">+639614607967</a>
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
                      <i class="fa-brands fa-facebook-f"></i>
                    </button>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/christian-jefferson-tamayo-30bb77262/"
                  >
                    <button className="contact-btn social-btn me-3">
                      <i class="fa-brands fa-linkedin-in"></i>
                    </button>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/cjstamayo/"
                  >
                    <button className="contact-btn social-btn me-3">
                      <i class="fa-brands fa-instagram"></i>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div data-aos-delay="600" className="col-lg-7 contact-input">
            <div className="contact-form-wrapper">
              <div className="introduce">
                <form
                  className="contact-form rwt-dynamic-form row"
                  id="contact-form"
                  method="POST"
                >
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label for="contact-name">Your Name</label>
                      <input
                        className="form-control form-control-lg"
                        name="contact-name"
                        id="contact-name"
                        type="text"
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
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <button
                      type="submit"
                      name="submit"
                      id="submit"
                      className="contact-btn"
                    >
                      <span className="text me-2">SEND MESSAGE</span>
                      <span className="icon">
                        <i class="fa-solid fa-arrow-right"></i>
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
