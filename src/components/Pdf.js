import React from "react";
import "./Pdf.css";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const PDF = ({
  personalDetails,
  workExperience,
  projects,
  skills,
  educations,
  certifications,
  languages,
}) => {
  //console.log(ResumeFormComponent.workExperience.experience);
  return (
    <div className="main_div">
      <div className="header" ref={ref}>
        <h1>{personalDetails.firstName}</h1>
        <div className="details_bar">
          <p>{personalDetails.EmailId}</p>
          <p>{personalDetails.LinkedIn}</p>
          <p>{personalDetails.Github}</p>
          <p>{personalDetails.PhoneNo}</p>
        </div>
      </div>

      <Pdf targetRef={ref} filename="resume.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Capture as PDF</button>}
      </Pdf>
    </div>
  );
};

export default PDF;
