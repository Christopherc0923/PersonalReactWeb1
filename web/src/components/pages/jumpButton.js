import React from "react";

export default function JumpButton() {
  const handleClick = () => {
    const jumpElement = document.getElementById("jump");
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
      Contact Me
    </button>
  );
}
