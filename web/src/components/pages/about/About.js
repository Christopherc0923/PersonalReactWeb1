import "../../css/background.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Document, pdfjs, Page } from "react-pdf";
import DownloadButton from "./Download";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function About() {
  const pgheight = 1000;
  const pdfPath = process.env.PUBLIC_URL + "/Resume.pdf";

  return (
    <div
      className="container-fluid text-center spacer layer5"
      style={{ padding: "0px", minHeight: "120vh" }}
    >
      <div style={{ paddingTop: "20px" }}>
        <h2 className="text-light">My Resume</h2>
      </div>
      <div className="container-fluid" style={{ padding: "20px" }}>
        <DownloadButton />
        <button className="btn btn-success m-3">
          <Link to="/" className="no-color">
            Contact Me
          </Link>
        </button>
      </div>
      <div style={{ padding: "20px" }}>
        <Document
          className="d-flex justify-content-center"
          file={pdfPath}
          onLoadError={(error) =>
            console.error("Error while loading PDF:", error)
          }
          options={{ textLayer: false }}
          height={pgheight}
        >
          <Page
            pageNumber={1}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            height={pgheight}
          />
        </Document>
      </div>
    </div>
  );
}
