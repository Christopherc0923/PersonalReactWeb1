import React from "react";
import ProjectItem from "./ProjectItem";
import { ProjectList } from "./ProjectList";
import "./Project.css";

export default function Project() {
  return (
    <div className="container">
      <h3 className="text-center m-3">My Personal Projects</h3>

      <div
        id="projectCarousel"
        className="carousel slide row"
        data-ride="carousel"
      >
        <div className="col-sm-1 p-1">
          <a
            class="carousel-control-prev"
            href="#projectCarousel"
            role="button"
            data-slide="prev"
          >
            <span
              class="carousel-control-prev-icon bg-dark"
              aria-hidden="true"
            ></span>
            <span class="sr-only">Previous</span>
          </a>
        </div>
        <div className="carousel-inner col-sm-10">
          {ProjectList.map((product, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={index}
            >
              <ProjectItem data={product} />
            </div>
          ))}
        </div>
        <div className="col-sm-1 p-1">
          <a
            class="carousel-control-next "
            href="#projectCarousel"
            role="button"
            data-slide="next"
          >
            <span
              class="carousel-control-next-icon bg-dark"
              aria-hidden="true"
            ></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
}
