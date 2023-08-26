import "../../css/background.css";
import React from "react";

import MLProjFilter from "./mlprojfilter";

export default function MLProj() {
  return (
    <div
      className="container-fluid spacer layer5 text-light m-0 p-0"
      style={{ minHeight: "100vh" }}
    >
      <div className="container-fluid" style={{}}>
        <h1 className="text-center">Machine Learning Projects</h1>
      </div>

      <div className="container">
        <p>
          The objective of these machine learning projects is to develop and
          optimize different machine learning models to accuartely predict the
          labels for a dataset
        </p>
      </div>

      <div className="container-fluid">
        <MLProjFilter />
      </div>
    </div>
  );
}
