import React from "react";
import { Link } from "react-router-dom";

export default function MLProjItem(props) {
  const { title, description, skills, img, page, url, isExternal } = props.data;

  return (
    <div className="container-fluid">
      <hr />
      <div classname="row container">
        <h3>
          {isExternal === "true" ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link text-light"
            >
              {title}
            </a>
          ) : (
            <Link to={`/${page}`} className="nav-link text-light">
              {title}
            </Link>
          )}
        </h3>
      </div>

      <div className="row container">
        <div
          className="container d-flex align-items-center justify-content-center image-container col-lg-6"
          style={{ height: "300px" }}
        >
          <Link to={`/${page}`} className="nav-link">
            <img
              src={img}
              alt={title}
              className="img-fluid"
              style={{ width: "80%" }}
            />
          </Link>
        </div>

        <div className="container-fluid w-100 col-lg-6 d-flex flex-column justify-content-center align-items-center text-light min-vh-100">
          <h3>Objective</h3>
          <p className="text-justify">{description.slice(0, 0)}</p>
          <h3>Skills</h3>

          <ul className="list-unstyled" style={{ textAlign: "center" }}>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
