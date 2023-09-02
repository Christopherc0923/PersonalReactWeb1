import React from "react";
import Symbol from "./symbol";

function WebView() {
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
            <h1 className="p-4">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link no-color d-flex align-items-center"
              >
                Web View
              </a>
            </h1>
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
            <h2 className="p-3">Website Overview</h2>
            <p className="text-left">
              "Web View" is a sophisticated web application engineered to
              enhance multitasking capabilities. It offers users the unique
              advantage of simultaneously viewing multiple web pages within a
              single, cohesive interface. Beyond this innovative feature, the
              application seamlessly integrates with an SQL database, extracting
              and tabulating data, thereby enabling users to access information
              efficiently and systematically. Users can conveniently select
              specific links of interest, ensuring a focused browsing
              experience. In instances where a desired page isn't readily
              available, the application facilitates manual link insertion via
              user-friendly input boxes, eliminating any barriers to accessing
              desired content. To maintain up-to-date information, the
              application allows users to manually refresh pages with a simple
              click, ensuring that the displayed content is always current.
              Furthermore, when a page is no longer relevant, it can be swiftly
              cleared from the interface, maintaining a clutter-free workspace
              and streamlining online tasks.
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
                <strong>Type:</strong> Web Application
              </li>

              <li>
                <strong>Duration:</strong> 2 Weeks
              </li>
            </ul>
          </section>
        </div>

        <div className="container">
          <section className="features">
            <h2 className="text-center p-3">Key Features</h2>
            <ul className="m-0">
              <li>
                <strong>Responsive Design for Any Device</strong>
              </li>
              <li>
                <strong>Component-Driven Interactivity</strong>
              </li>
              <li>
                <strong>Refresh Functionality</strong>
              </li>
              <li>
                <strong>Enhanced User Productivity and Clarity</strong>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default WebView;
