import React from "react";
import { Link } from "react-router-dom";
import "../../css/global.css";

export default function ProjectItem(props) {
  const itemStyle = {
    height: "AUTO",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    marginBottom: "20px",
    textAlign: "center",
  };

  const { title, description, skill, img, page, url, isExternal } = props.data;

  return (
    <div className="container-fluid" style={itemStyle}>
      <div className="container d-flex flex-column h-100 text-center">
        <h3
          className="flex-fill  d-flex align-items-center justify-content-center"
          style={{ minHeight: "80px" }}
        >
          {isExternal === "true" ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link no-color d-flex align-items-center"
            >
              {title}
            </a>
          ) : (
            <Link
              to={`/${page}`}
              className="nav-link no-color d-flex align-items-center"
            >
              {title}
            </Link>
          )}
        </h3>
      </div>
      <hr />
      <div
        className="container d-flex align-items-center justify-content-center image-container"
        style={{ minHeight: "325px" }}
      >
        <Link to={`/${page}`} className="nav-link no-color">
          <img
            src={img}
            alt={title}
            className="img-fluid mw-100"
            style={{ maxHeight: "300px" }}
          />
        </Link>
      </div>

      <hr />

      <div className="container d-flex flex-column align-items-center justify-content-center h-100">
        <p
          className="d-flex flex-column align-items-center justify-content-center text-justify"
          style={{ minHeight: "200px" }}
        >
          {description.slice(0, 300)}
        </p>
      </div>
      <div className="container text-center h-100">
        <hr />
        <p style={{ height: "50px" }}>{skill}</p>
      </div>
    </div>
  );
}
