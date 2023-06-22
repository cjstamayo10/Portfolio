import "./projects.css";
import "../../App.css";

const Projects = () => {
  return (
    <div id="projects" className="projects section-separator rn-section-gap">
      <div
        className="modal fade"
        id="portfolioModal"
        tabindex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="modal-body">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-6">
                  <div
                    id="carouselExampleAutoplaying"
                    class="carousel carousel-dark slide"
                    data-bs-ride="carousel"
                  >
                    <div class="carousel-indicators">
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="0"
                        class="active"
                        aria-current="true"
                        aria-label="Slide 1"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="3"
                        aria-current="true"
                        aria-label="Slide 4"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="4"
                        aria-label="Slide 5"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="5"
                        aria-label="Slide 6"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="6"
                        aria-label="Slide 7"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="7"
                        aria-label="Slide 8"
                      ></button>
                    </div>
                    <div class="carousel-inner">
                      <div class="carousel-item active project-popup-thumbnail">
                        <img
                          src="./assets/img/projects/project-01.jpg"
                          class="d-block w-100"
                          alt="Portfolio Project Image"
                        />
                      </div>
                      <div class="carousel-item project-popup-thumbnail">
                        <img
                          src="./assets/img/projects/project-01-1.jpg"
                          class="d-block w-100"
                          alt="Portfolio Project Image"
                        />
                      </div>
                      <div class="carousel-item project-popup-thumbnail">
                        <img
                          src="./assets/img/projects/project-01-2.jpg"
                          class="d-block w-100"
                          alt="Portfolio Project Image"
                        />
                      </div>
                      <div class="carousel-item project-popup-thumbnail">
                        <img
                          src="./assets/img/projects/project-01-3.jpg"
                          class="d-block w-100"
                          alt="Portfolio Project Image"
                        />
                      </div>
                      <div class="carousel-item project-popup-thumbnail">
                        <img
                          src="./assets/img/projects/project-01-4.jpg"
                          class="d-block w-100"
                          alt="Portfolio Project Image"
                        />
                      </div>
                      <div class="carousel-item project-popup-thumbnail">
                        <img
                          src="./assets/img/projects/project-01-5.jpg"
                          class="d-block w-100"
                          alt="Portfolio Project Image"
                        />
                      </div>
                      <div class="carousel-item project-popup-thumbnail">
                        <img
                          src="./assets/img/projects/project-01-6.jpg"
                          class="d-block w-100"
                          alt="Portfolio Project Image"
                        />
                      </div>
                      <div class="carousel-item project-popup-thumbnail">
                        <img
                          src="./assets/img/projects/project-01-7.jpg"
                          class="d-block w-100"
                          alt="Portfolio Project Image"
                        />
                      </div>
                    </div>
                    <button
                      class="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselExampleAutoplaying"
                      data-bs-slide="prev"
                    >
                      <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                      class="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselExampleAutoplaying"
                      data-bs-slide="next"
                    >
                      <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="text-content">
                    <div className="project-header">
                      <span className="project-title">My Project</span>
                      <span className="project-name">Personal Portfolio</span>
                    </div>
                    <div className="project-body mb--30">
                      <span>
                        My portfolio project demonstrates a seamless integration
                        of current UI components and responsive design concepts
                        to offer a visually beautiful and user-friendly
                        experience using React JS and Bootstrap.
                      </span>
                    </div>
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
                          <i className="fa-brands fa-react"></i>
                        </span>
                        <span className="text ms-1">React JS</span>
                      </span>
                    </div>
                    <div className="project-footer mt--20">
                      <a target="_blank" href="https://christiantamayo.tech">
                        <button className="contact-btn">
                          <span className="me-2">View Project</span>
                          <span className="icon">
                            <i className="fa-solid fa-chevron-right"></i>
                          </span>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="capstoneModal"
        tabindex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="modal-body">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-6">
                  <div
                    id="carouselCapstone"
                    class="carousel carousel-dark slide"
                    data-bs-ride="carousel"
                  >
                    <div class="carousel-indicators">
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="0"
                        class="active"
                        aria-current="true"
                        aria-label="Slide 1"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="3"
                        aria-current="true"
                        aria-label="Slide 4"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="4"
                        aria-label="Slide 5"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="5"
                        aria-label="Slide 6"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="6"
                        aria-label="Slide 7"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="7"
                        aria-label="Slide 8"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="8"
                        aria-label="Slide 9"
                      ></button>
                    </div>
                    <div class="carousel-inner">
                      <div class="carousel-item active project-popup-thumbnail">
                        <img
                          src="./assets/img/projects/project-02.jpg"
                          class="d-block w-100"
                          alt="Portfolio Project Image"
                        />
                      </div>
                      <div class="carousel-item project-popup-thumbnail">
                        <img
                          src="./assets/img/projects/project-02-1.jpg"
                          class="d-block w-100"
                          alt="Portfolio Project Image"
                        />
                      </div>
                      <div class="carousel-item project-popup-thumbnail">
                        <img
                          src="./assets/img/projects/project-02-2.jpg"
                          class="d-block w-100"
                          alt="Portfolio Project Image"
                        />
                      </div>
                      <div class="carousel-item project-popup-thumbnail">
                        <img
                          src="./assets/img/projects/project-02-3.jpg"
                          class="d-block w-100"
                          alt="Portfolio Project Image"
                        />
                      </div>
                      <div class="carousel-item project-popup-thumbnail">
                        <img
                          src="./assets/img/projects/project-02-4.jpg"
                          class="d-block w-100"
                          alt="Portfolio Project Image"
                        />
                      </div>
                      <div class="carousel-item project-popup-thumbnail">
                        <img
                          src="./assets/img/projects/project-02-5.jpg"
                          class="d-block w-100"
                          alt="Portfolio Project Image"
                        />
                      </div>
                      <div class="carousel-item project-popup-thumbnail">
                        <img
                          src="./assets/img/projects/project-02-6.jpg"
                          class="d-block w-100"
                          alt="Portfolio Project Image"
                        />
                      </div>
                      <div class="carousel-item project-popup-thumbnail">
                        <img
                          src="./assets/img/projects/project-02-7.jpg"
                          class="d-block w-100"
                          alt="Portfolio Project Image"
                        />
                      </div>
                      <div class="carousel-item project-popup-thumbnail">
                        <img
                          src="./assets/img/projects/project-02-8.jpg"
                          class="d-block w-100"
                          alt="Portfolio Project Image"
                        />
                      </div>
                    </div>
                    <button
                      class="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselCapstone"
                      data-bs-slide="prev"
                    >
                      <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                      class="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselCapstone"
                      data-bs-slide="next"
                    >
                      <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="text-content">
                    <div className="project-header">
                      <span className="project-title">My Project</span>
                      <span className="project-name">Capstone Project</span>
                    </div>
                    <div className="project-body mb--30">
                      <span>
                        As a requirement for my capstone subject, my project for
                        Malabon City showcases my knowledge in PHP, MySQL, and
                        Bootstrap, resulting in a solid and efficient web
                        application. I was able to demonstrate my abilities to
                        contribute to real-world projects effectively by
                        successfully integrating these technologies.
                      </span>
                    </div>
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
                    <div className="project-footer mt--20">
                      <a
                        target="_blank"
                        href="https://floodify.infinityfreeapp.com"
                      >
                        <button className="contact-btn">
                          <span className="me-2">View Project</span>
                          <span className="icon">
                            <i className="fa-solid fa-chevron-right"></i>
                          </span>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="weatherModal"
        tabindex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="modal-body">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                  <div
                    id="carouselWeather"
                    class="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div class="carousel-indicators">
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="0"
                        class="active"
                        aria-current="true"
                        aria-label="Slide 1"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                      ></button>
                    </div>
                    <div class="carousel-inner">
                      <div class="carousel-item active project-popup-thumbnail">
                        <img
                          src="./assets/img/projects/project-03.jpg"
                          class="d-block w-100"
                          alt="Portfolio Project Image"
                        />
                      </div>
                      <div class="carousel-item project-popup-thumbnail">
                        <img
                          src="./assets/img/projects/project-03-1.jpg"
                          class="d-block w-100"
                          alt="Portfolio Project Image"
                        />
                      </div>
                    </div>
                    <button
                      class="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselWeather"
                      data-bs-slide="prev"
                    >
                      <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                      class="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselWeather"
                      data-bs-slide="next"
                    >
                      <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="text-content">
                    <div className="project-header">
                      <span className="project-title">My Project</span>
                      <span className="project-name">Weather App</span>
                    </div>
                    <div className="project-body mb--30">
                      <span>
                        My weather app, created using React JS and powered by
                        the OpenWeatherMap API, offers users with accurate and
                        real-time weather data. The application, which has a
                        simple and clear user interface, obtains and shows
                        current weather conditions, predictions, and important
                        data, increasing the user's experience and keeping them
                        informed about the weather in their region.
                      </span>
                    </div>
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
                          <i className="fa-brands fa-react"></i>
                        </span>
                        <span className="text ms-1">React JS</span>
                      </span>
                    </div>
                    <div className="project-footer mt--20">
                      <a
                        target="_blank"
                        href="https://cjstamayo-weather-app.onrender.com"
                      >
                        <button className="contact-btn">
                          <span className="me-2">View Project</span>
                          <span className="icon">
                            <i className="fa-solid fa-chevron-right"></i>
                          </span>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="formModal"
        tabindex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="modal-body">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                  <div
                    id="carouselForm"
                    class="carousel carousel-dark slide"
                    data-bs-ride="carousel"
                  >
                    <div class="carousel-indicators">
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="0"
                        class="active"
                        aria-current="true"
                        aria-label="Slide 1"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                      ></button>
                    </div>
                    <div class="carousel-inner">
                      <div class="carousel-item active project-popup-thumbnail">
                        <img
                          src="./assets/img/projects/project-04.jpg"
                          class="d-block w-100"
                          alt="Portfolio Project Image"
                        />
                      </div>
                      <div class="carousel-item project-popup-thumbnail">
                        <img
                          src="./assets/img/projects/project-04-1.jpg"
                          class="d-block w-100"
                          alt="Portfolio Project Image"
                        />
                      </div>
                    </div>
                    <button
                      class="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselForm"
                      data-bs-slide="prev"
                    >
                      <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                      class="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselForm"
                      data-bs-slide="next"
                    >
                      <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="text-content">
                    <div className="project-header">
                      <span className="project-title">My Project</span>
                      <span className="project-name">Login & Signup Form</span>
                    </div>
                    <div className="project-body mb--30">
                      <span>
                        My responsive login and sign-up form demonstrates my
                        HTML and CSS skills by creating a visually beautiful and
                        user-friendly experience. The form's seamless
                        responsiveness across several platforms offers an easy
                        and safe user authentication procedure while sticking to
                        current design standards.
                      </span>
                    </div>
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
                    </div>
                    <div className="project-footer mt--20">
                      <a
                        target="_blank"
                        href="https://cjstamayo-login-signup-form.onrender.com"
                      >
                        <button className="contact-btn">
                          <span className="me-2">View Project</span>
                          <span className="icon">
                            <i className="fa-solid fa-chevron-right"></i>
                          </span>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
                Visit My Projects and Keep Your Feedback
              </div>
              <div className="title">My Projects</div>
            </div>
          </div>
        </div>
        <div className="row row--25 mt-30 mt_md--10 mt_sm--10">
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="100"
            data-aos-once="true"
            className="col-lg-6 col-xl-6 mt--30 col-md-12 col-sm-12 col-12 aos-init aos-animate"
          >
            <div className="rn-project">
              <div className="inner-content">
                <div className="thumbnail">
                  <a
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#portfolioModal"
                  >
                    <img
                      src="./assets/img/projects/project-01.jpg"
                      alt="Project 01 Image"
                    />
                  </a>
                </div>
                <div className="content">
                  <div className="category-info">
                    <div className="category-list">
                      <span>Personal Portfolio</span>
                    </div>
                    <div className="meta">
                      <span className="date">
                        <span>
                          <i className="fa-solid fa-clock"></i>
                        </span>
                        10 day(s)
                      </span>
                    </div>
                  </div>
                  <div className="title">
                    My portfolio project demonstrates a seamless integration of
                    current UI components and responsive design concepts to
                    offer a visually beautiful and user-friendly experience
                    using React JS and Bootstrap.
                  </div>
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
                        <i className="fa-brands fa-react"></i>
                      </span>
                      <span className="text ms-1">React JS</span>
                    </span>
                  </div>
                  <div className="link">
                    <button
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#portfolioModal"
                      className="contact-btn me-4"
                    >
                      <span className="me-2">View Details</span>
                      <span className="icon">
                        <i className="fa-solid fa-circle-info"></i>
                      </span>
                    </button>
                    <a href="">
                      <button className="contact-btn">
                        <span className="me-2">View Project</span>
                        <span className="icon">
                          <i className="fa-solid fa-chevron-right"></i>
                        </span>
                      </button>
                    </a>
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
            className="col-lg-6 col-xl-6 mt--30 col-md-12 col-sm-12 col-12 aos-init aos-animate"
          >
            <div className="rn-project">
              <div className="inner-content">
                <div className="thumbnail">
                  <a
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#capstoneModal"
                  >
                    <img
                      src="./assets/img/projects/project-02.jpg"
                      alt="Project 01 Image"
                    />
                  </a>
                </div>
                <div className="content">
                  <div className="category-info">
                    <div className="category-list">
                      <span>Capstone Project</span>
                    </div>
                    <div className="meta">
                      <span className="date">
                        <span>
                          <i className="fa-solid fa-clock"></i>
                        </span>
                        4 month(s)
                      </span>
                    </div>
                  </div>
                  <div className="title">
                    As a requirement for my capstone subject, my project for
                    Malabon City showcases my knowledge in PHP, MySQL, and
                    Bootstrap, resulting in a solid and efficient web
                    application.
                  </div>
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
                  <div className="link">
                    <button
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#capstoneModal"
                      className="contact-btn me-4"
                    >
                      <span className="me-2">View Details</span>
                      <span className="icon">
                        <i className="fa-solid fa-circle-info"></i>
                      </span>
                    </button>
                    <a
                      target="_blank"
                      href="https://floodify.infinityfreeapp.com"
                    >
                      <button className="contact-btn">
                        <span className="me-2">View Project</span>
                        <span className="icon">
                          <i className="fa-solid fa-chevron-right"></i>
                        </span>
                      </button>
                    </a>
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
            className="col-lg-6 col-xl-6 mt--30 col-md-12 col-sm-12 col-12 aos-init aos-animate"
          >
            <div className="rn-project">
              <div className="inner-content">
                <div className="thumbnail">
                  <a
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#weatherModal"
                  >
                    <img
                      src="./assets/img/projects/project-03.jpg"
                      alt="Project 01 Image"
                    />
                  </a>
                </div>
                <div className="content">
                  <div className="category-info">
                    <div className="category-list">
                      <span>Weather App</span>
                    </div>
                    <div className="meta">
                      <span className="date">
                        <span>
                          <i className="fa-solid fa-clock"></i>
                        </span>
                        3 day(s)
                      </span>
                    </div>
                  </div>
                  <div className="title">
                    My weather app, created using React JS and powered by the
                    OpenWeatherMap API, offers users with accurate and real-time
                    weather data.
                  </div>
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
                        <i className="fa-brands fa-react"></i>
                      </span>
                      <span className="text ms-1">React JS</span>
                    </span>
                  </div>
                  <div className="link">
                    <button
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#weatherModal"
                      className="contact-btn me-4"
                    >
                      <span className="me-2">View Details</span>
                      <span className="icon">
                        <i className="fa-solid fa-circle-info"></i>
                      </span>
                    </button>
                    <a
                      target="_blank"
                      href="https://cjstamayo-weather-app.onrender.com"
                    >
                      <button className="contact-btn">
                        <span className="me-2">View Project</span>
                        <span className="icon">
                          <i className="fa-solid fa-chevron-right"></i>
                        </span>
                      </button>
                    </a>
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
            className="col-lg-6 col-xl-6 mt--30 col-md-12 col-sm-12 col-12 aos-init aos-animate"
          >
            <div className="rn-project">
              <div className="inner-content">
                <div className="thumbnail">
                  <a
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#formModal"
                  >
                    <img
                      src="./assets/img/projects/project-04.jpg"
                      alt="Project 01 Image"
                    />
                  </a>
                </div>
                <div className="content">
                  <div className="category-info">
                    <div className="category-list">
                      <span>Responsive Form</span>
                    </div>
                    <div className="meta">
                      <span className="date">
                        <span>
                          <i className="fa-solid fa-clock"></i>
                        </span>
                        1 day(s)
                      </span>
                    </div>
                  </div>
                  <div className="title">
                    My responsive login and sign-up form demonstrates my HTML
                    and CSS skills by creating a visually beautiful and
                    user-friendly experience.
                  </div>
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
                  </div>
                  <div className="link">
                    <button
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#formModal"
                      className="contact-btn me-4"
                    >
                      <span className="me-2">View Details</span>
                      <span className="icon">
                        <i className="fa-solid fa-circle-info"></i>
                      </span>
                    </button>
                    <a
                      target="_blank"
                      href="https://cjstamayo-login-signup-form.onrender.com"
                    >
                      <button className="contact-btn">
                        <span className="me-2">View Project</span>
                        <span className="icon">
                          <i className="fa-solid fa-chevron-right"></i>
                        </span>
                      </button>
                    </a>
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

export default Projects;
