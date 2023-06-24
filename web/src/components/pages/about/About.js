import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import DownloadButton from "./Download";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function About() {
  const pgheight = 1000;

  return (
    <div className="container text-center">
      <h1>Resume</h1>
      <hr />
      <div className="container">
        <DownloadButton />
      </div>
      <div>
        <Document
          className="d-flex justify-content-center"
          file="Resume.pdf"
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
