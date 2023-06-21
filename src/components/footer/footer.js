import "./footer.css";
import "../../App.css";

const Footer = () => {
  return (
    <div id="footer" className="footer section-separator rn-section-gap">
      <div
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="100"
        className="container"
      >
        <div className="row">
          <div className="col-lg-12">
            <div className="footer-area text-center">
              <div className="logo">
                <a href="index.html">
                  <img src="./assets/img/logos-circle.png" alt="CJST Logo" />
                </a>
              </div>
              <div className="description">
                © 2023. All rights reserved. Developed by: Christian Jefferson S. Tamayo
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
