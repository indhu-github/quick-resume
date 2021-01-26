import React, { useState, useEffect } from "react";

function Skill({ skills, setSkills, id }) {
  //component state
  const [skill, setSkill] = useState("");

  //handle change
  const handleSkill = (e) => {
    setSkill(e.target.value);
  };

  //It will run when the skill state gets updated
  useEffect(() => {
    setSkills({ ...skills, [id]: skill });
  }, [skill]);

  //It will render the component
  return (
    <div>
      <input
        name="skill1"
        value={Skill.skill1}
        placeholder="1st Skill"
        required
        onChange={handleSkill}
      />
    </div>
  );
}

export default Skill;
