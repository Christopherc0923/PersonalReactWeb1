import React from "react";
import CertItem from "./CertItem";
import { CertList } from "./CertList";

export default function Cert() {
  return (
    <div className="container">
      <h3 className="text-center m-3">Certifications</h3>

      <div className="container">
        {CertList.map((item, index) => (
          <div
            className={`container-fluid row ${index === 0 ? "active" : ""}`}
            key={index}
          >
            <CertItem data={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
