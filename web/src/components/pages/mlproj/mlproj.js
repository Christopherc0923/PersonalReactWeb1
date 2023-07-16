import React from "react";

import MLProjFilter from "./mlprojfilter";

export default function MLProj() {
  return (
    <div className="container-fluid">
      <div className="header">
        <h1 className="text-center">Mahcine Learning Projects</h1>
      </div>

      <div className="container">
        <p>
          The objective of these machine learning projects is to develop and
          optimize different machine learning models to accuartely predict the
          labels for a dataset
        </p>
      </div>

      <MLProjFilter />
    </div>
  );
}
