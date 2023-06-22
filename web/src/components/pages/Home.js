import React from "react";
import Project from "./project/Project";
import Contact from "./contactform/Contact";
import { Link } from "react-router-dom";
import Skill from "./skills/Skill";
import WordChange from "./misc/wordChange";

export default function About() {
  return (
    <div className="container">
      <div
        className="d-flex align-items-center text-center"
        style={{ height: "100vh" }}
      >
        <div
          className="container d-flex flex-column align-items-center justify-content-center h-100"
          id=""
        >
          <WordChange />

          <h3>I'm Christopher Chan a Process Engineer at Intel</h3>
          <p>
            I am open to opportunities in data science and backend software
            development
          </p>
          <div className="container-fluid text-center">
            <button
              className="btn btn-outline-primary"
              style={{ margin: "3px", width: "135px" }}
            >
              <Link to="/about" className="nav-link">
                About Me
              </Link>
            </button>

            <button
              className="btn btn-outline-primary"
              style={{ margin: "5px", width: "135px" }}
            >
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </button>
          </div>
        </div>
      </div>
      <hr />
      <Skill />
      <hr />
      <Project />
      <hr />
      <Contact />
    </div>
  );
}
