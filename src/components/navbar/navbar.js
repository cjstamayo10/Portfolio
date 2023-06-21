import "./navbar.css";
const Navbar = () => {
  window.addEventListener("scroll", function () {
    var navbar = document.getElementById("navbar");
    var scrollPosition = window.scrollY;
    if (scrollPosition > 0) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  });
  window.addEventListener("scroll", function () {
    var scrollTopButton = document.getElementById("scroll-top-button");
    var scrollPosition = window.scrollY;
    if (scrollPosition > 200) {
      scrollTopButton.style.display = "block";
    } else {
      scrollTopButton.style.display = "none";
    }
  });
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      duration: 700,
    });
  };
  return (
    <header className="nav-header">
      <div className="nav-menu">
        <nav
          id="navbar"
          className="navbar-container sticky fw-bold navbar navbar-expand-lg fixed-top"
        >
          <div className="col-lg-2 col-6">
            <a className="navbar-brand" href="#hero">
              <img
                className="img"
                src="./assets/img/logo.png"
                alt="CJST Logo"
              />
            </a>
          </div>
          <div className="col-lg-10 col-6 d-flex align-items-center justify-content-end">
            <button
              className="navbar-toggler off-canvas-end"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <i className="fa-solid fa-bars"></i>
            </button>
            <div
              className="offcanvas offcanvas-start"
              tabIndex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                  <a className="navbar-brand" href="#hero">
                    <img
                      className="img"
                      src="./assets/img/logos-circle.png"
                      alt="CJST Logo"
                    />
                  </a>
                </h5>
                <div className="close">
                  <button
                    type="button"
                    className="btn-close close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  >
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                </div>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 text-uppercase">
                  <li className="nav-item px-2">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="#hero"
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item px-2">
                    <a className="nav-link not-active" href="#features">
                      Features
                    </a>
                  </li>
                  <li className="nav-item px-2">
                    <a className="nav-link not-active" href="#experience">
                      Experience
                    </a>
                  </li>
                  <li className="nav-item px-2">
                    <a className="nav-link not-active" href="#education">
                      Education
                    </a>
                  </li>
                  <li className="nav-item px-2">
                    <a className="nav-link not-active" href="#projects">
                      Projects
                    </a>
                  </li>
                  <li className="nav-item px-2">
                    <a className="nav-link not-active" href="#skills">
                      Skills
                    </a>
                  </li>
                  <li className="nav-item ps-2">
                    <a className="nav-link not-active" href="#contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <button id="scroll-top-button" onClick={scrollToTop}>
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </header>
  );
};
export default Navbar;
