import React from "react";
import ReactItem from "./reactitem";
import { ReactList } from "./reactlist";
import ReactFilter from "./reactFilter";

export default function SimpleReactApp() {
  return (
    <div className="container-fluid">
      <div className="header">
        <h1 className="text-center">Simple React Applications</h1>
      </div>

      <div className="container">
        <p>
          {" "}
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
