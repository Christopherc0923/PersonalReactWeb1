import React from "react";
import StockInfo from "./StockearningsPull";

function StockR() {
  return (
    <div
      className="container-fluid spacer layer3"
      style={{ margin: "0px", minHeight: "100vh" }}
      id="dark"
    >
      <div className="container text-center">
        <h1 className>My Stock Website</h1>
      </div>
      <StockInfo />
    </div>
  );
}

export default StockR;
