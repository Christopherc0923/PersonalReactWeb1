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
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const handleMouseEnter1 = () => {
    setIsOpen1(true);
  };

  const handleMouseLeave1 = () => {
    setIsOpen1(false);
  };

  const handleMouseEnter2 = () => {
    setIsOpen2(true);
  };

  const handleMouseLeave2 = () => {
    setIsOpen2(false);
  };

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
                    About Me
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/detail" className="nav-link">
                    Web Detail
                  </Link>
                </li>

                {/* Simple React Projects*/}
                <li
                  className="nav-item dropdown"
                  onMouseEnter={handleMouseEnter1}
                  onMouseLeave={handleMouseLeave1}
                >
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded={isOpen1 ? "true" : "false"}
                  >
                    <Link to="/SimpleReactApp" className="no-color">
                      Simple React Apps
                    </Link>
                  </a>
                  <div
                    className={`dropdown-menu ${isOpen1 ? "show" : ""}`}
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="dropdown-item" href="#">
                      <Link to="/Expense" className="no-color">
                        Expense Tracker
                      </Link>
                    </a>
                    <a className="dropdown-item" href="#">
                      <Link to="/Leetcode" className="no-color">
                        LeetCode Tracker
                      </Link>
                    </a>
                    <a className="dropdown-item" href="#">
                      <Link to="/Weather" className="no-color">
                        Weather App
                      </Link>
                    </a>
                    <a className="dropdown-item" href="#">
                      <Link to="/stockEarnings" className="no-color">
                        Stock App
                      </Link>
                    </a>
                  </div>
                </li>

                {/* Machine Learning Projects*/}
                <li
                  className="nav-item dropdown"
                  onMouseEnter={handleMouseEnter2}
                  onMouseLeave={handleMouseLeave2}
                >
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded={isOpen2 ? "true" : "false"}
                  >
                    <Link to="/MLProj" className="no-color">
                      ML Projects
                    </Link>
                  </a>
                  <div
                    className={`dropdown-menu ${isOpen2 ? "show" : ""}`}
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="dropdown-item" href="#">
                      <Link to="/MLProj" className="no-color">
                        ML Proj 1
                      </Link>
                    </a>
                    <a className="dropdown-item" href="#">
                      <Link to="/MLProj" className="no-color">
                        ML Proj 1
                      </Link>
                    </a>
                    <a className="dropdown-item" href="#">
                      <Link to="/MLProj" className="no-color">
                        ML Proj 1
                      </Link>
                    </a>
                  </div>
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
