import React from "react";
import Symbol from "./symbol";

function WebDetail() {
  return (
    <div
      className="container-fluid spacer layer5"
      id="content"
      style={{
        margin: "0px",
        padding: "0px",
        minHeight: "140vh",
        background: "",
        color: "white",
        marginTop: "50px",
      }}
    >
      <div className="">
        <div
          className="container-fluid d-flex align-items-center justify-content-center"
          style={{
            background: "Linear-Gradient(to bottom, #343a40, #212529)",
            margin: "0",
            padding: "0",
            minHeight: "400px",
          }}
        >
          <header className="text-center">
            <h1 className="p-4">Personal Web Project Showcase</h1>
          </header>
        </div>

        <div className="container">
          <img src="" />
        </div>

        <div
          className="container text-center border-bottom border-white"
          style={{ padding: "30px" }}
        >
          <section className="overview">
            <h2 className="p-3">Project Overview</h2>
            <p>
              Introduce your project and provide a brief overview of its
              purpose, goals, and significance. Highlight its unique features
              and what sets it apart.
            </p>
          </section>
        </div>

        <div
          className="container border-bottom border-white"
          style={{ padding: "30px" }}
        >
          <section className="image text-center">
            <h2 className="">Technologies Used</h2>
            <Symbol />
          </section>
        </div>

        <div
          className="container border-bottom border-white"
          style={{ padding: "30px" }}
        >
          <section className="details">
            <h2 className="text-center p-3">Project Details</h2>
            <ul>
              <li>
                <strong>Name:</strong> Example Project
              </li>
              <li>
                <strong>Type:</strong> Web Application
              </li>
              <li>
                <strong>Technologies:</strong> HTML, CSS, JavaScript, Node.js,
                MongoDB
              </li>
              <li>
                <strong>Duration:</strong> 6 months
              </li>
            </ul>
          </section>
        </div>

        <div className="container">
          <section className="features">
            <h2 className="text-center p-3">Key Features</h2>
            <ul>
              <li>
                Feature 1: Describe the first key feature of your project.
              </li>
              <li>
                Feature 2: Describe the second key feature of your project.
              </li>
              <li>
                Feature 3: Describe the third key feature of your project.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default WebDetail;
