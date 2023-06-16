import "./navbar.css";

const Navbar = () => {
  return (
    <header className="nav-header mb-3">
      <div className="nav-menu">
        <nav className="navbar-container fw-bold navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img
                className="img"
                src="./assets/img/logos-circle.png"
                alt=""
                srcset=""
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="offcanvas offcanvas-end"
              tabIndex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                  Offcanvas
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 text-uppercase">
                  <li className="nav-item px-2">
                    <a className="nav-link active" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item px-2">
                    <a className="nav-link" href="#">
                      Features
                    </a>
                  </li>
                  <li className="nav-item px-2">
                    <a className="nav-link" href="#">
                      Experience
                    </a>
                  </li>
                  <li className="nav-item px-2">
                    <a className="nav-link" href="#">
                      Education
                    </a>
                  </li>
                  <li className="nav-item px-2">
                    <a className="nav-link" href="#">
                      Projects
                    </a>
                  </li>
                  <li className="nav-item ps-2">
                    <a className="nav-link" href="#">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
