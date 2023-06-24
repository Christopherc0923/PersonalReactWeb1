import React from "react";
import Resume from "../../media/Resume.pdf";

export default function DownloadButton() {
  const handleDownload = () => {
    const fileUrl = Resume;
    const fileName = "Christopher Chan Resume.pdf";

    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    link.click();
  };

  return (
    <button className="btn btn-success" onClick={handleDownload}>
      Download
    </button>
  );
}
