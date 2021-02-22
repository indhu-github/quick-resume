import React, { useState, useEffect } from "react";

function Skill({ skills, setSkills, id }) {
  //component state
  const [skill, setSkill] = useState("");

  //handle change
  const handleSkill = (e) => {
    setSkill(e.target.value);
  };

  const handleSave = () => {
    if (skill !== "") {
      setSkills([...skills, skill]);
    } else {
      alert("Please enter the data");
    }
    setSkill("");
  };

  //It will render the component
  return (
    <div>
      <input
        className="form-control mb-3"
        name="skill1"
        value={Skill.skill1}
        placeholder="1st Skill"
        required
        onChange={handleSkill}
      />
      <button className="btn btn-success w-100" onClick={handleSave}>
        Save and add another
      </button>
    </div>
  );
}

export default Skill;
