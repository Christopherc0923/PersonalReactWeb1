import React from "react";
import SkillItem from "./SkillItem";

const SkillList = ({ items }) => {
  return (
    <ul className="container text-center list-unstyled">
      {items.map((item, index) => (
        <SkillItem key={index} item={item} />
      ))}
    </ul>
  );
};

export default SkillList;
