import React, { useState, useEffect } from "react";
import { ReactList } from "./reactlist";
import { FilterSkills } from "./reactlist";
import ReactItem from "./reactitem";

const skills = FilterSkills;

const ProjectList = () => {
  const [filteredProjects, setFilteredProjects] = useState(ReactList);
  const [selectedSkills, setSelectedSkills] = useState([]);

  const handleSkillSelection = (skill) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(
        selectedSkills.filter((selectedSkill) => selectedSkill !== skill)
      );
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  useEffect(() => {
    const filtered = ReactList.filter((project) =>
      selectedSkills.every((skill) => project.skills.includes(skill))
    );
    setFilteredProjects(filtered);
  }, [selectedSkills]);

  return (
    <div className="container-fluid">
      <div className="text-center justify-content-center">
        {skills.map((skill) => (
          <button
            key={skill}
            onClick={() => handleSkillSelection(skill)}
            className={
              selectedSkills.includes(skill)
                ? "btn btn-success active m-1"
                : "btn m-1"
            }
          >
            {skill}
          </button>
        ))}
      </div>

      <div className="row">
        {filteredProjects.map((product, index) => (
          <div className="" key={index}>
            <ReactItem data={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
