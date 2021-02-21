import React, { useState, useEffect } from "react";

function Experience({ id, WorkExperience, setWorkExperience }) {
  //component state
  const [experience, setExperience] = useState({
    JobTitle: "",
    Employer: "",
    StartDate: "",
    EndDate: "",
  });

  //const [expCount, setExpCount] = useState(0);
  //console.log(experience);

  //handle onChange
  const handleExperience = (e) => {
    //console.log(e.target);
    const { name, value } = e.target;
    setExperience({ ...experience, [name]: value });
  };

  const handleClick = () => {
    setWorkExperience([...WorkExperience, experience]);
    setExperience({
      JobTitle: "",
      Employer: "",
      StartDate: "",
      EndDate: "",
    });
  };

  //It will render the experience component
  return (
    <div>
      <input
        className="form-control mb-3"
        name="JobTitle"
        value={experience.JobTitle}
        placeholder="Job Title"
        required
        onChange={handleExperience}
      />
      <input
        className="form-control mb-3"
        name="Employer"
        value={experience.Employer}
        placeholder="Employer"
        required
        onChange={handleExperience}
      />
      <input
        className="form-control mb-3"
        name="StartDate"
        value={experience.StartDate}
        placeholder="Start Date"
        required
        onChange={handleExperience}
      />
      <input
        className="form-control mb-3"
        name="EndDate"
        value={experience.EndDate}
        placeholder="End Date"
        required
        onChange={handleExperience}
      />
      <button className="btn btn-info w-100" onClick={handleClick}>
        Add Another
      </button>
    </div>
  );
}

export default Experience;
