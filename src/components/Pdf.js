import React from "react";
import "./Pdf.css";

function Pdf({
  personalDetails,
  workExperience,
  projects,
  skills,
  educations,
  certifications,
  languages,
}) {
  //console.log(ResumeFormComponent.workExperience.experience);
  return (
    <div className="main_div">
      <div className="header">
        <h1>{personalDetails.firstName}</h1>
        <div className="details_bar">
          <p>{personalDetails.EmailId}</p>
          <p>{personalDetails.LinkedIn}</p>
          <p>{personalDetails.Github}</p>
          <p>{personalDetails.PhoneNo}</p>
        </div>
      </div>
    </div>
  );
}

export default Pdf;
