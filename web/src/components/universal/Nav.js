import { React, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import { ReactList } from "../pages/simplereactapp/reactlist";
import { MLProjList } from "../pages/mlproj/mlprojlist";

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
    <div className="navAdj">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top m-0 p-2 ">
        <div className="row container-fluid text-center m-0 p-0">
          <div className="col-lg-auto text-lg-center">
            <h4 className="text-light">Christopher Chan</h4>
          </div>

          <div className="col-lg-8 m-0 p-0">
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
                    Resume
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
                      React Apps
                    </Link>
                  </a>
                  <div
                    className={`dropdown-menu ${isOpen1 ? "show" : ""}`}
                    aria-labelledby="navbarDropdown"
                  >
                    {ReactList.map((item) => (
                      <a className="dropdown-item" href="#">
                        {item.isExternal === "true" ? (
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="no-color"
                          >
                            {item.title}
                          </a>
                        ) : (
                          <Link to={`/${item.page}`} className="no-color">
                            {item.title}
                          </Link>
                        )}
                      </a>
                    ))}
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
                    {MLProjList.map((item) => (
                      <a className="dropdown-item" href="#">
                        <Link to={`/${item.page}`} className="no-color">
                          {item.title}
                        </Link>
                      </a>
                    ))}
                  </div>
                </li>

                <li className="nav-item">
                  <Link to="/detail" className="nav-link">
                    About Page
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Icons */}
          <div
            className="col-lg-auto text-center justify-content-end"
            id="collapseNav"
          >
            <a
              href="https://www.linkedin.com/in/chan-christopher-/"
              target="_blank"
              rel="noopener noreferrer"
              class="m-2 navIcon"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://github.com/Christopherc0923"
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
