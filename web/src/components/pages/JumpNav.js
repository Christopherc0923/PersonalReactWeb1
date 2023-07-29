import React from "react";
import "../css/jumpnav.css";

export default function JumpNav({ targetElementId }) {
  const handleClick = () => {
    console.log("clicked");
    const jumpElement = document.getElementById(targetElementId);
    if (jumpElement) {
      jumpElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return <div className="jump-circle" onClick={handleClick} />;
}
