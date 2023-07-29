import React from "react";

export default function JumpButton({ targetElementId, buttonText }) {
  const handleClick = () => {
    const jumpElement = document.getElementById(targetElementId);
    if (jumpElement) {
      jumpElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      className="btn btn-outline-primary"
      style={{ margin: "5px", width: "135px" }}
      onClick={handleClick}
    >
      {buttonText}
    </button>
  );
}
