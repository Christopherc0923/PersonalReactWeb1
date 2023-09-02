import React from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaJs,
  FaBootstrap,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";

function Symbol() {
  const symbolSize = 64;

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col">
          <FaReact size={symbolSize} className="mx-3" />
          <FaHtml5 size={symbolSize} className="mx-3" />
          <FaCss3 size={symbolSize} className="mx-3" />
          <FaJs size={symbolSize} className="mx-3" />
          <FaBootstrap size={symbolSize} className="mx-3" />
          <FaGithub size={symbolSize} className="mx-3" />
          <FaDatabase size={symbolSize} className="mx-3" />
        </div>
      </div>
    </div>
  );
}

export default Symbol;
