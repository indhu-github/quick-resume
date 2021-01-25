import React, { useState } from "react";
import "./ResumeFormComponent.css";
import Pdf from "./Pdf.js";
import Project from "./Project";
import Education from "./Education";

const personalInfo = {
  firstName: "",
  middleName: "",
  lastName: "",
  PhoneNo: "",
  EmailId: "",
  LinkedIn: "",
  Github: "",
};
const experience = {
  JobTitle: "",
  Employer: "",
  StartDate: "",
  EndDate: "",
};

const skills = {
  skill1: "",
  skill2: "",
  skill3: "",
};
const language = {
  first: "",
  second: "",
};
function ResumeFormComponent() {
  const [personalDetails, setPersonalDetails] = useState(personalInfo);
  const [WorkExperience, setWorkExperience] = useState(experience);
  const [Skill, setSkill] = useState(skills);
  const [projects, setProjects] = useState([]);
  const [education, setEducation] = useState([]);
  const [languages, setLanguages] = useState(language);
  const [formSubmitted, setFormSubmitted] = useState(false);

  //console.log(projects);

  const handlePersonalInfo = (e) => {
    const { name, value } = e.target;
    setPersonalDetails({ ...personalDetails, [name]: value });
  };

  const handleExperience = (e) => {
    const { name, value } = e.target;
    setWorkExperience({ ...WorkExperience, [name]: value });
  };

  const handleSubmit = () => {
    setFormSubmitted({ formSubmitted: true });
  };

  const handleSkill = (e) => {
    const { name, value } = e.target;
    setSkill({ ...Skill, [name]: value });
  };

  const handleLanguages = (e) => {
    const { name, value } = e.target;
    setLanguages({ ...languages, [name]: value });
  };

  //console.log(education);
  return (
    <>
      {!formSubmitted ? (
        <div className="FormComponent">
          <div className="MainForm">
            <form>
              <div className="name_info">
                <h2>Personal Info</h2>
                <input
                  name="firstName"
                  value={personalDetails.firstName}
                  placeholder="First name"
                  required
                  onChange={handlePersonalInfo}
                />
                <input
                  name="middleName"
                  value={personalDetails.middleName}
                  placeholder="Middle name"
                  onChange={handlePersonalInfo}
                />
                <input
                  name="lastName"
                  value={personalDetails.lastName}
                  placeholder="Last name"
                  required
                  onChange={handlePersonalInfo}
                />
                <br />
                <input
                  name="PhoneNo"
                  value={personalDetails.PhoneNo}
                  placeholder="Phone number"
                  required
                  onChange={handlePersonalInfo}
                />
                <input
                  name="EmailId"
                  value={personalDetails.EmailId}
                  placeholder="Email id"
                  required
                  onChange={handlePersonalInfo}
                />
                <input
                  name="LinkedIn"
                  value={personalDetails.LinkedIn}
                  placeholder="LinkedIn Id"
                  required
                  onChange={handlePersonalInfo}
                />
                <br />
                <input
                  name="Github"
                  value={personalDetails.Github}
                  placeholder="Github URL"
                  required
                  onChange={handlePersonalInfo}
                />
              </div>
              <div className="experience">
                <h2>Experience</h2>
                <input
                  name="JobTitle"
                  value={WorkExperience.JobTitle}
                  placeholder="Job Title"
                  required
                  onChange={handleExperience}
                />
                <input
                  name="Employer"
                  value={WorkExperience.Employer}
                  placeholder="Employer"
                  required
                  onChange={handleExperience}
                />
                <input
                  name="StartDate"
                  value={WorkExperience.StartDate}
                  placeholder="Start Date"
                  required
                  onChange={handleExperience}
                />
                <input
                  name="EndDate"
                  value={WorkExperience.EndDate}
                  placeholder="End Date"
                  required
                  onChange={handleExperience}
                />
              </div>
              <div>
                <h2>Projects</h2>
                <Project projects={projects} setProjects={setProjects} />
                <Project projects={projects} setProjects={setProjects} />
              </div>
              <div>
                <h2>Skills:Mention top 3</h2>
                <ol type="1">
                  1.
                  <input
                    name="skill1"
                    value={Skill.skill1}
                    placeholder="1st Skill"
                    required
                    onChange={handleSkill}
                  />
                  <br />
                  2.
                  <input
                    name="skill2"
                    value={skills.skill2}
                    placeholder="2nd Skill"
                    required
                    onChange={handleSkill}
                  />
                  <br />
                  3.
                  <input
                    name="skill3"
                    value={skills.skill3}
                    placeholder="3rd Skill"
                    required
                    onChange={handleSkill}
                  />
                </ol>
              </div>

              <div>
                <h2>Education</h2>
                <Education education={education} setEducation={setEducation} />
                <Education education={education} setEducation={setEducation} />
                <Education education={education} setEducation={setEducation} />
              </div>
              <div>
                <h2>Certifications</h2>
                <input
                  name="skill3"
                  value={skills.skill3}
                  placeholder="Certification"
                  required
                  onChange={handleLanguages}
                />
                <input
                  name="skill3"
                  value={skills.skill3}
                  placeholder="Issued by"
                  required
                  onChange={handleLanguages}
                />
              </div>
              <div>
                <h2>Languages</h2>
                <input
                  name="first"
                  value={languages.first}
                  placeholder="Your primary language"
                  required
                  onChange={handleLanguages}
                />
                <input
                  name="second"
                  value={languages.second}
                  placeholder="Another language"
                  required
                  onChange={handleLanguages}
                />
              </div>
              <div>
                <button className="submit" onClick={handleSubmit}>
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="DownloadButton">
            <button className="download" onClick="">
              Download as PDF
            </button>
          </div>
        </div>
      ) : (
        <Pdf />
      )}
    </>
  );
}
export default ResumeFormComponent;
