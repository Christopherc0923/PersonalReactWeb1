import React from "react";
import Project from "./project/Project";
import Contact from "./contactform/Contact";
import { Link } from "react-router-dom";
import Skill from "./skills/Skill";
import WordChange from "./misc/wordChange";
import Cert from "./cert/Cert";
import JumpButton from "./jumpButton";
import IntersectionObserverComponent from "./misc/intersectionobserver";
import JumpNav from "./JumpNav";
import "../css/jumpnav.css";
import "../css/background.css";

export default function About() {
  return (
    <div
      className="container-fluid spacer layer5 text-light"
      style={{ padding: "0px" }}
    >
      {/* https://app.haikei.app/ change background*/}
      {/* Left Nav */}
      <div
        className="container-fluid jump-circles-container col-sm-1  h-100 position-fixed d-flex flex-column align-items-center justify-content-center"
        id="jumpNav"
        style={{ background: "transpa" }}
      >
        <JumpNav targetElementId="Intro" />
        <JumpNav targetElementId="Skills" />
        <JumpNav targetElementId="Projs" />
        <JumpNav targetElementId="Cert" />
        <JumpNav targetElementId="Contact" />
      </div>

      {/* Name, About Me, Contact Me*/}
      <div
        className="container-fluid"
        id="content"
        style={{ padding: "0", margin: "0" }}
      >
        <div
          className="container-fluid "
          id="Intro"
          style={{ padding: "0", minHeight: "100vh" }}
        >
          <IntersectionObserverComponent>
            <div
              className="container-fluid d-flex flex-column align-items-center justify-content-center h-100"
              style={{ padding: "0" }}
            >
              <WordChange />

              <h3 className="m-1">I'm Christopher Chan</h3>
              <h3 className="m-1">Process Engineer at Intel</h3>
              <p className="m-3">
                I am looking for an exciting opportunities in{" "}
                <strong>data science</strong> and{" "}
                <strong>full-stack development</strong>
              </p>
              <div className="container-fluid text-center">
                <button
                  className="btn btn-dark"
                  style={{ margin: "3px", width: "135px" }}
                >
                  <Link to="/about" className="no-color">
                    About Me
                  </Link>
                </button>

                <JumpButton targetElementId="Contact" buttonText="Contact Me" />
              </div>
            </div>
          </IntersectionObserverComponent>
        </div>

        {/* Skills */}
        <div className="" id="Skills">
          <IntersectionObserverComponent>
            <div className="container-fluid">
              <Skill />
            </div>
          </IntersectionObserverComponent>
        </div>

        {/* Personal Projects */}
        <div
          className="d-flex align-items-center justify-content-center"
          id="Projs"
          style={{ padding: "0", minHeight: "125vh" }}
        >
          <IntersectionObserverComponent>
            <div className="container-fluid">
              <Project />
            </div>
          </IntersectionObserverComponent>
        </div>

        {/* Certification */}
        <div className="" id="Cert">
          <IntersectionObserverComponent>
            <div className="container-fluid">
              <Cert />
            </div>
          </IntersectionObserverComponent>
        </div>

        {/* Contact Me */}
        <div
          className="spacer layer5 d-flex align-items-center text-light"
          id="Contact"
          style={{ padding: "0", minHeight: "100vh" }}
        >
          <IntersectionObserverComponent>
            <div className="container-fluid d-flex align-items-center justify-content-center text-center">
              <Contact />
            </div>
          </IntersectionObserverComponent>
        </div>
      </div>
    </div>
  );
}
