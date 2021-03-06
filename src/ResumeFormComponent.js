import React, { useState } from "react";
import "./ResumeFormComponent.css";
import PDF from "./components/PDF.js";
import Project from "./components/Project";
import Education from "./components/Education";
import Experience from "./components/Experience";
import PersonalInfo from "./components/PersonalInfo";
import Skill from "./components/Skill";
import Certifications from "./components/Certifications";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { IconButton } from "@material-ui/core";

function ResumeFormComponent() {
  const [personalDetails, setPersonalDetails] = useState({
    fullName: "",
    PhoneNo: "",
    EmailId: "",
    LinkedIn: "",
    Github: "",
    position: "",
    about: "",
  });

  const [currentPage, setCurrentPage] = useState(1);

  const [workExperience, setWorkExperience] = useState([]);
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [educations, setEducations] = useState([]);
  const [certifications, setCertifications] = useState([]);
  const [languages, setLanguages] = useState({ first: "", second: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = () => {
    if (
      personalDetails.fullName &&
      personalDetails.PhoneNo &&
      personalDetails.EmailId &&
      personalDetails.LinkedIn &&
      personalDetails.Github &&
      workExperience.length &&
      skills.length &&
      projects.length &&
      educations.length &&
      certifications.length &&
      languages.first &&
      languages.second
    ) {
      setFormSubmitted({ formSubmitted: true });
    } else {
      alert("Please fill all the fields");
    }
  };

  console.log("Experience", workExperience);
  //console.log("start date:", workExperience[0].StartDate);
  console.log("projects", projects);
  console.log("Skills", skills);
  console.log("Education", educations);
  console.log("certifications", certifications);

  const handleLanguages = (e) => {
    const { name, value } = e.target;
    setLanguages({ ...languages, [name]: value });
  };

  const handleDecrement = () => {
    console.log("clicked");

    document.getElementById(String(currentPage - 1)).classList.add("show");
    document.getElementById(String(currentPage - 1)).classList.remove("hide");

    document.getElementById(String(currentPage)).classList.add("hide");
    document.getElementById(String(currentPage)).classList.remove("show");

    setCurrentPage(currentPage - 1);
  };

  const handleIncrement = () => {
    console.log("clicked");
    console.log(personalDetails);

    if (
      (currentPage === 1 &&
        personalDetails.fullName &&
        personalDetails.PhoneNo &&
        personalDetails.EmailId &&
        personalDetails.LinkedIn &&
        personalDetails.Github) ||
      (currentPage === 2 && workExperience.length) ||
      (currentPage === 3 && projects.length) ||
      (currentPage === 4 && skills.length) ||
      (currentPage === 5 && educations.length) ||
      (currentPage === 6 && certifications.length)
    ) {
      document.getElementById(String(currentPage + 1)).classList.add("show");
      document.getElementById(String(currentPage + 1)).classList.remove("hide");

      document.getElementById(String(currentPage)).classList.add("hide");
      document.getElementById(String(currentPage)).classList.remove("show");

      setCurrentPage(currentPage + 1);
    } else {
      alert("Please fill all the fields");
    }
  };

  //this is the form we get first after submitting it , we will get the template which is pdf component\
  //Is this the current form renydesering inbrowser?yes,then where your calling this component in PDF component
  //first in app.js this componen twill be caled and when we submit it,pdf component will be displayed
  return (
    <>
      {!formSubmitted ? (
        <>
          <div>
            <h1 className="text-center p-3">Quick Resume</h1>
            <h3 className="text-center text-warning p-3">
              Build your own resume by filling the details and download it!!!
            </h3>
          </div>
          <div className="MainForm">
            {currentPage > 1 ? (
              <IconButton
                onClick={handleDecrement}
                className="pl-3 pr-2 backArrow"
              >
                <ArrowBackIosIcon />
              </IconButton>
            ) : (
              ""
            )}

            <form className="form">
              <div className="name_info show" id="1">
                <h2 className="text-center pb-4">Personal Info</h2>
                <PersonalInfo
                  personalDetails={personalDetails}
                  setPersonalDetails={setPersonalDetails}
                />
              </div>
              <div className="experience hide" id="2">
                <h2 className="text-center pb-4">Experience</h2>
                <Experience
                  id
                  WorkExperience={workExperience}
                  setWorkExperience={setWorkExperience}
                />
              </div>

              <div className="projects hide" id="3">
                <h2 className="text-center pb-4">Projects</h2>
                <Project id projects={projects} setProjects={setProjects} />
              </div>

              <div className="skills hide" id="4">
                <Skill id skills={skills} setSkills={setSkills} />
              </div>

              <div className="educations hide" id="5">
                <h2 className="text-center pb-4">Education</h2>
                <Education
                  id={1}
                  educations={educations}
                  setEducations={setEducations}
                />
              </div>

              <div className="certifications hide" id="6">
                <h2 className="text-center pb-4">Certifications</h2>
                <Certifications
                  id
                  certifications={certifications}
                  setCertifications={setCertifications}
                />
              </div>
              <div className="languages hide" id="7">
                <h2 className="text-center pb-4">Languages</h2>
                <input
                  className="form-control mb-3"
                  name="first"
                  value={languages.first}
                  placeholder="Your primary language"
                  required
                  onChange={handleLanguages}
                />
                <input
                  className="form-control mb-3"
                  name="second"
                  value={languages.second}
                  placeholder="Another language"
                  required
                  onChange={handleLanguages}
                />
                <button
                  className="btn btn-success w-100"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </form>
            {currentPage < 7 ? (
              <IconButton
                onClick={handleIncrement}
                className="pl-3 pr-3 nextArrow"
              >
                <ArrowForwardIosIcon />
              </IconButton>
            ) : (
              ""
            )}
          </div>
        </>
      ) : (
        <PDF
          personalDetails={personalDetails}
          workExperience={workExperience}
          projects={projects}
          skills={skills}
          educations={educations}
          certifications={certifications}
          languages={languages}
        />
      )}
    </>
  );
}

export default ResumeFormComponent;
