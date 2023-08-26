import React from "react";
import Symbol from "./symbol";

function WebDetail() {
  return (
    <div
      className="container-fluid spacer layer5 w-100"
      id="content"
      style={{
        margin: "0px",
        padding: "0px",
        minHeight: "180vh",
        color: "white",
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
            <ul className="m-0">
              <li>
                <strong>Responsive Design for Any Device:</strong> Experience a
                website designed to fit your screen, whether it's a desktop
                monitor, tablet, or smartphone. Our site's responsive design
                ensures a consistent and comfortable browsing experience across
                different devices.
              </li>
              <li>
                <strong>Component-Driven Interactivity:</strong> Navigate
                through a web structure built on React's component-based
                approach. From interactive forms to animated transitions, each
                piece is designed as a modular unit, resulting in a smooth and
                interactive interface that adapts to your actions.
              </li>
              <li>
                <strong>Enhanced User Engagement:</strong> Immerse yourself in
                an online journey that emphasizes interaction. Our website is
                more than just information – it's a dynamic experience. Engage
                with captivating visuals, effortless navigation, and a user
                interface that responds to your clicks and input. Explore the
                possibilities of an engaging and interactive web environment.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default WebDetail;
