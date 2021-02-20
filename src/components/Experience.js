import React, { useState, useEffect } from "react";

function Experience({ id, WorkExperience, setWorkExperience }) {
  //component state
  const [experience, setExperience] = useState([
    {
      JobTitle: "",
      Employer: "",
      StartDate: "",
      EndDate: "",
    },
  ]);

  console.log(experience);

  //handle onChange
  const handleExperience = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setExperience([{ ...experience }, { [name]: value }]);
  };

  const handleClick = () => {
    let lastExperience = experience;
    var newExperience = {
      JobTitle: "",
      Employer: "",
      StartDate: "",
      EndDate: "",
    };

    lastExperience.push(newExperience);
    setExperience([...lastExperience]);
  };

  //It will render when the Experience state gets updated
  useEffect(() => {
    setWorkExperience({ ...WorkExperience, [id]: experience });
  }, [experience]);

  //It will render the experience component
  return experience.map((experience) => (
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
        Add
      </button>
    </div>
  ));
}

export default Experience;
