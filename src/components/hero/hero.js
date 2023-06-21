import "./hero.css";

const Hero = () => {
  return (
    <div
      id="hero"
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-delay="100"
      className="hero"
    >
      <div className="container">
        <div className="row hero-content">
          <div className="left-hero order-2 order-xl-1 col-lg-12 col-xl-5 mt_lg--50 mt_md--50 mt_sm--50">
            <div className="slider-info">
              <div className="row">
                <div className="col-p col-xl-12 col-lg-12 col-12">
                  <div className="left-content user-info-top">
                    <div className="user-info-container">
                      <div className="user-icon">
                        <div className="user">
                          <i className="fa-regular fa-user"></i>
                        </div>
                      </div>
                      <div className="user-name">
                        <span className="fw-bold">
                          Hi, Im <span className="name">Christian!</span>
                        </span>
                      </div>
                      <div className="user-info">
                        Front-end Web Developer residing in Malabon City.
                      </div>
                    </div>
                    <div className="contact-details">
                      <div className="info">
                        <span className="icon">
                          <i className="fa-solid fa-file"></i>
                        </span>
                        <span className="title">Front-end Web Developer</span>
                      </div>
                      <div className="info">
                        <span className="icon">
                          <i className="fa-solid fa-envelope"></i>
                        </span>
                        <span className="title">
                          tamayochristianj2@gmail.com
                        </span>
                      </div>
                      <div className="info">
                        <span className="icon">
                          <i className="fa-solid fa-location-dot"></i>
                        </span>
                        <span className="title">Malabon City, Philippines</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-p col-xl-12 col-lg-12 col-12">
                  <div className="left-content user-info-bottom">
                    <div className="download-text">
                      Download my curriculum vitae
                    </div>
                    <div className="btn-container">
                      <div className="btn-wrapper d-flex">
                        <button className="btn download text-uppercase">
                          Download CV
                        </button>
                        <button className="btn contact text-uppercase">
                          Contact Me
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right-hero order-1 order-xl-2 col-lg-12 col-xl-7">
            <div className="right-content">
              <div className="thumbnail-image">
                <img
                  className="img"
                  src="./assets/img/slider/banner-02.png"
                  alt="Personal Image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
