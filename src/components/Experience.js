import React, { useState, useEffect } from "react";

function Experience({ id, WorkExperience, setWorkExperience }) {
  //component state
  const [JobTitle, setJobTitle] = useState("");
  const [Employer, setEmployer] = useState("");
  const [StartDate, setStartDate] = useState("");
  const [EndDate, setEndDate] = useState("");
  const [totalData, setTotalData] = useState([]);

  const handleClick = () => {
    //console.log(JobTitle, Employer, StartDate, EndDate);
    setTotalData([
      ...(JobTitle + JobTitle),
      ...(Employer + Employer),
      ...(StartDate + StartDate),
      ...(EndDate + EndDate),
    ]);
    setJobTitle("");
    setEmployer("");
    setStartDate("");
    setEndDate("");
  };
  console.log(totalData);
  //It will render the experience component
  return (
    <div>
      <input
        className="form-control mb-3"
        name="JobTitle"
        value={JobTitle}
        placeholder="Job Title"
        required
        onChange={(e) => setJobTitle(e.target.value)}
      />
      <input
        className="form-control mb-3"
        name="Employer"
        value={Employer}
        placeholder="Employer"
        required
        onChange={(e) => setEmployer(e.target.value)}
      />
      <input
        className="form-control mb-3"
        name="StartDate"
        value={StartDate}
        placeholder="Start Date"
        required
        onChange={(e) => setStartDate(e.target.value)}
      />
      <input
        className="form-control mb-3"
        name="EndDate"
        value={EndDate}
        placeholder="End Date"
        required
        onChange={(e) => setEndDate(e.target.value)}
      />
      <button className="btn btn-info w-100" onClick={handleClick}>
        Add
      </button>
      {totalData.map((data) => (
        <p>{data}</p>
      ))}
    </div>
  );
}

export default Experience;
