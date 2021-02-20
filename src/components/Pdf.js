import React from "react";
import ResumeFormComponent from "../ResumeFormComponent";

function Pdf() {
  console.log(ResumeFormComponent.workExperience.experience);
  return (
    <div>
      <h2>
        You have successfully submitted the form.You can download it as PDF
      </h2>
    </div>
  );
}

export default Pdf;
