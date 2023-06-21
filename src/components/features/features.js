import "./features.css";
import "../../App.css";

const Features = () => {
  return (
    <div id="features" className="features section-separator rn-section-gap">
      <div
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="100"
        className="container"
      >
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-start">
              <div className="subtitle">Features</div>
              <div className="title">What I Do</div>
            </div>
          </div>
        </div>
        <div className="row row--25 mt_md--10 mt_sm--10">
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="100"
            data-aos-once="true"
            className="hover col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30 aos-init aos-animate"
          >
            <div className="service">
              <div className="inner-content">
                <div className="icon">
                  <i className="fa-solid fa-code"></i>
                </div>
                <div className="content">
                  <div className="title">Web Development</div>
                  <div className="description">
                    Implementing the visual and interactive features of a
                    website or application.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="100"
            data-aos-once="true"
            className="hover col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30 aos-init aos-animate"
          >
            <div className="service">
              <div className="inner-content">
                <div className="icon">
                  <i className="fa-solid fa-layer-group"></i>
                </div>
                <div className="content">
                  <div className="title">UI/UX Design</div>
                  <div className="description">
                    Create user-friendly and visually appealing website
                    interfaces.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="100"
            data-aos-once="true"
            className="hover col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30 aos-init aos-animate"
          >
            <div className="service">
              <div className="inner-content">
                <div className="icon">
                  <i className="fa-solid fa-code-branch"></i>
                </div>
                <div className="content">
                  <div className="title">Front-End Frameworks</div>
                  <div className="description">
                    Create dynamic web apps with frameworks such as React.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="100"
            data-aos-once="true"
            className="hover col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30 aos-init aos-animate"
          >
            <div className="service">
              <div className="inner-content">
                <div className="icon">
                  <i className="fa-solid fa-cloud"></i>
                </div>
                <div className="content">
                  <div className="title">API Integration</div>
                  <div className="description">
                    Establishing connections between various services and
                    applications to enable smooth data sharing.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="100"
            data-aos-once="true"
            className="hover col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30 aos-init aos-animate"
          >
            <div className="service">
              <div className="inner-content">
                <div className="icon">
                  <i className="fa-solid fa-mobile-screen-button"></i>
                </div>
                <div className="content">
                  <div className="title">Responsive Web Design</div>
                  <div className="description">
                    Designing websites with automated device and screen size
                    adjustments.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="100"
            data-aos-once="true"
            className="hover col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30 aos-init aos-animate"
          >
            <div className="service">
              <div className="inner-content">
                <div className="icon">
                  <i className="fa-solid fa-globe"></i>
                </div>
                <div className="content">
                  <div className="title">Domain & Hosting Setup</div>
                  <div className="description">
                    Assistance with domain registration and setting up web
                    hosting services.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
