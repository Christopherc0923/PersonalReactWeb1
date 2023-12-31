import React from "react";
import "../../css/global.css";
import SkillList from "./SkillList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fab, fas); // Add the required icon packs to the library
export default function Skill() {
  const programmingLanguages = ["C++", "JavaScript", "Python", "R"];
  const webDevelopment = [
    "BootStrap",
    "Django",
    "Express",
    "GitHub",
    "HTML/CSS",
    "NodeJS",
    "ReactJS",
    "Stripe",
  ];
  const dataAnalysis = ["Excel", "JMP", "PowerBI", "STATA"];
  const databases = ["MongoDB", "SQL", "Toad"];

  return (
    <div
      className="container h-100  d-flex align-items-center justify-content-center flex-column"
      style={{ minHeight: "500px" }}
    >
      <div className="row">
        <h3 className="text-center m-5">Skills</h3>
      </div>
      <div className="container row " id="skillList">
        <div className="col-lg-3">
          <div className="row d-flex justify-content-center">
            <h5>Programming Languages</h5>
          </div>
          <div className="row">
            <SkillList items={programmingLanguages} />
          </div>
        </div>
        <div className="col-lg-3">
          <div className="row d-flex justify-content-center">
            <h5>Web Development</h5>
          </div>
          <div className="row">
            <SkillList items={webDevelopment} />
          </div>
        </div>
        <div className="col-lg-3">
          <div className="row d-flex justify-content-center">
            <h5>Data Analysis and Visualization</h5>
          </div>
          <div className="row">
            <SkillList items={dataAnalysis} />
          </div>
        </div>
        <div className="col-lg-3">
          <div className="row d-flex justify-content-center">
            <h5>Databases</h5>
          </div>
          <div className="row">
            <SkillList items={databases} />
          </div>
        </div>
      </div>
    </div>
  );
}
