import { Container } from "react-bootstrap";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="row hero-content">
          <div className="left-hero col-sm-6">
            <div className="left-content user-info-top mb-4">
              <div className="user-icon">
                user-icon
              </div>
              <div className="user-name"></div>
            </div>
            <div className="left-content user-info-bottom">
              <h1>Content 2</h1>
            </div>
          </div>
          <div className="right-hero col-sm-6">
            <h1>Right Hero</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
