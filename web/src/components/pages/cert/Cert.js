import React from "react";
import CertItem from "./CertItem";
import { CertList } from "./CertList";

export default function Cert() {
  return (
    <div className="container-fluid w-100 m-0 p-0">
      <h3 className="text-center m-3">Certifications</h3>

      <div className="container">
        {CertList.map((item, index) => (
          <div className="container-fluid row m-0 p-0" key={index}>
            <CertItem data={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
