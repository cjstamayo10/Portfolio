import "./education.css";
import "../../App.css";

const Education = () => {
  return (
    <div id="education" className="education section-separator rn-section-gap">
      <div
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="100"
        className="container"
      >
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <div className="subtitle">
                Bachelor's Degree and Senior High School
              </div>
              <div className="title">Education</div>
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
              className="education-style aos-init aos-animate"
            >
              <div className="left-side">
                <div className="education-image">
                  <img
                    src="./assets/img/education/education-01.png"
                    alt="education Image"
                  />
                </div>
                <div className="education-details">
                  <span className="date">2019-2023</span>
                  <div className="education-title">
                    City of Malabon University
                  </div>
                  <div className="education-subtitle">
                    Bachelor of Science in Information Technology
                  </div>
                  <div className="education-description">
                    Successfully completed a bachelor's degree, eager for new
                    chances and professional progress.
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="100"
              data-aos-once="true"
              className="education-style aos-init aos-animate"
            >
              <div className="left-side">
                <div className="education-image">
                  <img
                    src="./assets/img/education/education-02.png"
                    alt="education Image"
                  />
                </div>
                <div className="education-details">
                  <span className="date">2017-2019</span>
                  <div className="education-title">
                    Arellano University — Jose Rizal High School
                  </div>
                  <div className="education-subtitle">
                    Information and Communications Technology
                  </div>
                  <div className="education-description">
                    Successfully earned a senior high school diploma and is
                    prepared for the upcoming challenges and possibilities.
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

export default Education;
