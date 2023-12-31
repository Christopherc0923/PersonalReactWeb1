import React from "react";
import { Link } from "react-router-dom";
import "../../css/global.css";

export default function CertItem(props) {
  const itemStyle = {
    height: "AUTO",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    marginBottom: "20px",
    textAlign: "center",
  };

  const { title, completion, img, page, url, isExternal } = props.data;

  return (
    <div className="container  row d-flex vertical-align align-items-center">
      <div className="container-fluid col-lg-6">
        <h4 className="">
          {isExternal === "true" ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link no-color d-flex align-items-center justify-content-center justify-content-lg-start"
            >
              {title}
            </a>
          ) : (
            <Link
              to={`/${page}`}
              className="nav-link no-color d-flex align-items-center justify-content-center justify-content-lg-start"
            >
              {title}
            </Link>
          )}
        </h4>
      </div>
      <div className="container-fluid   col-lg-6 d-flex justify-content-center justify-content-lg-end">
        <p>{completion}</p>
      </div>
    </div>
  );
}
