import React from "react";
import ReactItem from "./reactitem";
import { ReactList } from "./reactlist";

export default function SimpleReactApp() {
  return (
    <div className="container-fluid">
      <div className="header">
        <h1 className="text-center">Simple React Applications</h1>
      </div>
      <div className="">
        <p>
          The objective of these simple projects to gain exposure of MERN and
          API requests
        </p>
      </div>

      <div className="row">
        {ReactList.map((product, index) => (
          <div className="" key={index}>
            <ReactItem data={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
