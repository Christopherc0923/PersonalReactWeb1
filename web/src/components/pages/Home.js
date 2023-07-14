import React from "react";
import Project from "./project/Project";
import Contact from "./contactform/Contact";
import { Link } from "react-router-dom";
import Skill from "./skills/Skill";
import WordChange from "./misc/wordChange";
import Cert from "./cert/Cert";
import JumpButton from "./jumpButton";
import Timeline from "./timeline/timeline";

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

          <h3 className="m-1">I'm Christopher Chan</h3>
          <h3 className="m-1">Process Engineer at Intel</h3>
          <p className="m-1">
            I am open to opportunities in data science and backend software
            development
          </p>
          <div className="container-fluid text-center">
            <button
              className="btn btn-outline-primary"
              style={{ margin: "3px", width: "135px" }}
            >
              <Link to="/about" className="no-color">
                About Me
              </Link>
            </button>

            <JumpButton />
          </div>
        </div>
      </div>
      <hr />
      <Skill />
      <hr />
      <Project />
      <hr />
      <Cert />
      <hr />
      <Contact />
    </div>
  );
}
