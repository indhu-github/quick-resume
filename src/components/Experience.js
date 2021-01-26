import React, { useState, useEffect } from "react";

function Experience({ id, WorkExperience, setWorkExperience }) {
  //component state
  const [experience, setExperience] = useState({
    JobTitle: "",
    Employer: "",
    StartDate: "",
    EndDate: "",
  });

  //handle onChange
  const handleExperience = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setExperience({ ...experience, [name]: value });
  };

  useEffect(() => {
    setWorkExperience({ ...WorkExperience, [id]: experience });
  }, [experience]);

  //It will render the experience component
  return (
    <div>
      <input
        name="JobTitle"
        value={experience.JobTitle}
        placeholder="Job Title"
        required
        onChange={handleExperience}
      />
      <input
        name="Employer"
        value={experience.Employer}
        placeholder="Employer"
        required
        onChange={handleExperience}
      />
      <input
        name="StartDate"
        value={experience.StartDate}
        placeholder="Start Date"
        required
        onChange={handleExperience}
      />
      <input
        name="EndDate"
        value={experience.EndDate}
        placeholder="End Date"
        required
        onChange={handleExperience}
      />
    </div>
  );
}

export default Experience;
