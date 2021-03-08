import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";

function Experience({ id, WorkExperience, setWorkExperience }) {
  //component state
  const [experience, setExperience] = useState({
    JobTitle: "",
    Employer: "",
    StartDate: new Date(),
    EndDate: new Date(),
  });

  // //handle onChange
  const handleExperience = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setExperience({ ...experience, [name]: value });
  };

  const handleSave = () => {
    // console.log(experience);
    setWorkExperience([...WorkExperience, experience]);
    setExperience({
      JobTitle: "",
      Employer: "",
      StartDate: new Date(),
      EndDate: new Date(),
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
      {/* <DatePicker
        required
        name="StartDate"
        value={experience.StartDate}
        selected={experience.StartDate}
        className="form-control mb-3"
        onChange={(date) =>
          setExperience((prevState) => ({ ...prevState, StartDate: date }))
        }
        placeholderText="start date"
      />
      <DatePicker
        required
        name="EndDate"
        value={experience.EndDate}
        selected={experience.EndDate}
        className="form-control mb-3"
        onChange={(date) =>
          setExperience((prevState) => ({ ...prevState, EndDate: date }))
        }
        placeholderText="start date"
      /> */}
      <input
        type="date"
        name="StartDate"
        className="form-control mb-3"
        value={experience.StartDate}
        onChange={handleExperience}
      />
      <input
        type="date"
        name="EndDate"
        className="form-control mb-3"
        value={experience.EndDate}
        onChange={handleExperience}
      />
      <button className="btn btn-success w-100" onClick={handleSave}>
        Save and add another
      </button>
    </div>
  );
}

export default Experience;
