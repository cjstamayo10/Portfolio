import "./experience.css";
import "../../App.css";

const Experience = () => {
  return (
    <div id="experience" className="experience section-separator rn-section-gap">
      <div
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="100"
        className="container"
      >
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <div className="subtitle">over 5 months of experience</div>
              <div className="title">My Experience</div>
            </div>
          </div>
        </div>
        <div className="row mt--10">
          <div className="col-12 mt_experience">
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="100"
              data-aos-once="true"
              className="experience-style aos-init aos-animate"
            >
              <div className="left-side">
                <div className="experience-image">
                  <img
                    src="./assets/img/experience/experience-01.jpg"
                    alt="Experience Image"
                  />
                </div>
                <div className="experience-details">
                  <span className="date">January 28,2023-May 8,2023</span>
                  <div className="experience-title">
                    Technical Support (Intern)
                  </div>
                  <div className="experience-subtitle">
                    City of Malabon University
                  </div>
                  <div className="experience-description">
                    • Troubleshooting and fixing issues.
                    <br />
                    • Software and Hardware Installation.
                    <br />
                    • Keeping track of software and hardware assets.
                  </div>
                </div>
              </div>
              <div className="right-side">
                <div className="experience-footer">
                  <a className="contact-btn" href="#">
                    Contact Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
