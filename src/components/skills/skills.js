import "./skills.css";
import "../../App.css";

const Skills = () => {
  return (
    <div id="skills" className="skills section-separator rn-section-gap">
      <div
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="100"
        className="container"
      >
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <div className="subtitle">Skills</div>
              <div className="title"> My Technical Skills</div>
            </div>
          </div>
        </div>
        <div className="row mt--10">
          <div className="col-lg-6 col-md-12 col-sm-12 mt_experience">
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="100"
              data-aos-once="true"
              className="education-style aos-init aos-animate"
            >
              <div className="content row">
                <div className="social-area">
                  <div className="title">Programming</div>
                  <div className="experience-subtitle my-3 d-flex flex-wrap align-items-center">
                    <span className="tech-stack me-2 mb-2">
                      <span className="icon">
                        <i className="fa-brands fa-html5"></i>
                      </span>
                      <span className="text ms-1 text-uppercase">HTML</span>
                    </span>
                    <span className="tech-stack me-2 mb-2">
                      <span className="icon">
                        <i className="fa-brands fa-css3-alt"></i>
                      </span>
                      <span className="text ms-1 text-uppercase">CSS</span>
                    </span>
                    <span className="tech-stack me-2 mb-2">
                      <span className="icon">
                        <i className="fa-brands fa-square-js"></i>
                      </span>
                      <span className="text ms-1">JavaScript</span>
                    </span>
                    <span className="tech-stack me-2 mb-2">
                      <span className="icon">
                        <i className="fa-brands fa-bootstrap"></i>
                      </span>
                      <span className="text ms-1">Bootstrap</span>
                    </span>
                    <span className="tech-stack me-2 mb-2">
                      <span className="icon">
                        <i class="fa-brands fa-php"></i>
                      </span>
                      <span className="text ms-1">PHP</span>
                    </span>
                    <span className="tech-stack me-2 mb-2">
                      <span className="icon">
                        <img
                          src="./assets/img/mysql-logo.png"
                          alt="MySQL Logo"
                        />
                      </span>
                      <span className="text ms-1">MySQL</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 mt_experience">
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="100"
              data-aos-once="true"
              className="education-style aos-init aos-animate"
            >
              <div className="content row">
                <div className="social-area">
                  <div className="title">Design</div>
                  <div className="experience-subtitle my-3 d-flex flex-wrap align-items-center">
                    <span className="tech-stack me-2 mb-2">
                      <span className="icon">
                        <img
                          src="./assets/img/tech-stack/photoshop.png"
                          alt="Photoshop Logo"
                        />
                      </span>
                      <span className="text ms-1">Adobe Photoshop</span>
                    </span>
                    <span className="tech-stack me-2 mb-2">
                      <span className="icon">
                        <img
                          src="./assets/img/tech-stack/figma.png"
                          alt="Figma Logo"
                        />
                      </span>
                      <span className="text ms-1">Figma</span>
                    </span>
                    <span className="tech-stack me-2 mb-2">
                      <span className="icon">
                        <img
                          src="./assets/img/tech-stack/illustrator.png"
                          alt="Adobe Illustrator Logo"
                        />
                      </span>
                      <span className="text ms-1">Adobe Illustrator</span>
                    </span>
                    <span className="tech-stack me-2 mb-2">
                      <span className="icon">
                        <img
                          src="./assets/img/tech-stack/adobe-xd.png"
                          alt="Adobe Xd Logo"
                        />
                      </span>
                      <span className="text ms-1">Adobe Xd</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 mt_experience">
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="100"
              data-aos-once="true"
              className="education-style aos-init aos-animate"
            >
              <div className="content row">
                <div className="social-area">
                  <div className="title">Office</div>
                  <div className="experience-subtitle my-3 d-flex flex-wrap align-items-center">
                    <span className="tech-stack me-2 mb-2">
                      <span className="icon">
                        <img
                          src="./assets/img/tech-stack/microsoft-office.png"
                          alt="Microsoft Office Logo"
                        />
                      </span>
                      <span className="text ms-1">Microsoft Office Suite</span>
                    </span>
                    <span className="tech-stack me-2 mb-2">
                      <span className="icon">
                        <i class="fa-solid fa-file"></i>
                      </span>
                      <span className="text ms-1">Google Docs</span>
                    </span>
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

export default Skills;
