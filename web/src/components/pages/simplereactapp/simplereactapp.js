import "../../css/background.css";
import React from "react";
import ReactFilter from "./reactFilter";

export default function SimpleReactApp() {
  return (
    <div
      className="container-fluid spacer layer5"
      style={{ padding: "0px" }}
      id="dark"
    >
      <div className="header">
        <h1 className="text-center" style={{ paddingTop: "20px" }}>
          Simple React Applications
        </h1>
      </div>

      <div className="container" style={{ paddingTop: "20px" }}>
        <p>
          The objective of these simples projects is to gain exposure to MERN
          tech stack and pull AP
        </p>
      </div>

      <div>
        <ReactFilter />
      </div>
    </div>
  );
}
