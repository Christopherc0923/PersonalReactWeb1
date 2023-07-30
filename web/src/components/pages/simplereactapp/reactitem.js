import React from "react";
import { Link } from "react-router-dom";

export default function ReactItem(props) {
  const { title, description, skills, img, page, url, isExternal } = props.data;

  return (
    <div className="container-fluid spacer layer3" style={{ padding: "0px" }}>
      <hr />
      <div classname="row container">
        <h3 className="" style={{ marginLeft: "30px" }}>
          {isExternal === "true" ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              {title}
            </a>
          ) : (
            <Link
              to={`/${page}`}
              className="text-light
            "
            >
              {title}
            </Link>
          )}
        </h3>
      </div>

      <div className="row container">
        <div
          className="container d-flex align-items-center justify-content-center image-container col-lg-6"
          style={{ height: "auto", minHeight: "300px" }}
        >
          <Link to={`/${page}`} className="nav-link ">
            <img
              src={img}
              alt={title}
              className="img-fluid"
              style={{ width: "80%" }}
            />
          </Link>
        </div>

        <div className="col-lg-6 d-flex flex-column justify-content-center">
          <h5> Objective </h5>
          <p className="text-justify">{description.slice(0, 300)}</p>
          <h5> Skills </h5>

          {skills.map((skill) => (
            <li>{skill}</li>
          ))}
        </div>
      </div>
    </div>
  );
}
