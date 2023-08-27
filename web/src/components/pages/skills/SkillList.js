import React from "react";
import SkillItem from "./SkillItem";

const SkillList = ({ items }) => {
  const sortedItems = items.slice().sort();

  return (
    <ul className="container text-center list-unstyled">
      {sortedItems.map((sortedItems, index) => (
        <SkillItem key={index} item={sortedItems} />
      ))}
    </ul>
  );
};

export default SkillList;
