import { React, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Nav() {
  {
    /*

  const toggleHandler = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
  };

  */
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top ">
        <div className="row container-fluid text-center ">
          <div className="col-lg-2">
            <h4 className="text-light">Personal Web</h4>
          </div>

          <div className="col-lg-8">
            <button
              className="navbar-toggler justify-content-center"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse justify-content-center"
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link">
                    About
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/SimpleReactApp" className="nav-link">
                    Simple React Apps
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/MLProj" className="nav-link">
                    ML Projects
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div
            className="col-lg-2 text-center justify-content-end m-2"
            id="collapseNav"
          >
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              class="m-2 navIcon"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              class="m-2 navIcon"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              class="m-2 navIcon"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              class="m-2 navIcon"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
