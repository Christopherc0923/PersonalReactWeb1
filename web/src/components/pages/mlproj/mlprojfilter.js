import React, { useState, useEffect } from "react";
import { MLProjList } from "./mlprojlist";
import { MLFilterSkills } from "./mlprojlist";
import MLProjItem from "./mlprojitem";

const skills = MLFilterSkills;

export default function MLProjFilter() {
  const [filteredProjects, setFilteredProjects] = useState(MLProjList);
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
    const filtered = MLProjList.filter((project) =>
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
        {filteredProjects.map((product, id) => (
          <div className="container-fluid w-100 m-0 p-0" key={id}>
            <MLProjItem data={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
