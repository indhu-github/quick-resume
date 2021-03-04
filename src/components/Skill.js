import React, { useState } from "react";

function Skill({ skills, setSkills, id }) {
  //component state
  const [skill, setSkill] = useState("");
  console.log("skills", skill);

  //handle change
  const handleSkill = (e) => {
    setSkill(e.target.value);
  };

  const handleSave = () => {
    if (skill) {
      setSkills([...skills, skill]);
    }
    setSkill("");
  };
  //It will render the ..
  return (
    <div>
      <input
        className="form-control mb-3"
        name="skill1"
        value={skill}
        placeholder="1st Skill"
        required
        onChange={(e) => setSkill(e.target.value)}
      />
      <button className="btn btn-success w-100" onClick={handleSave}>
        Save and add another
      </button>
    </div>
  );
}

export default Skill;
