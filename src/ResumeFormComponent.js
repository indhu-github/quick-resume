import React, { useState } from "react";
import "./ResumeFormComponent.css";
import Pdf from "./components/Pdf.js";
import Project from "./components/Project";
import Education from "./components/Education";
import Experience from "./components/Experience";
import PersonalInfo from "./components/PersonalInfo";
import Skill from "./components/Skill";
import Certifications from "./components/Certifications";

//suggestions

//single data
// const personalInfo = {
//   firstName: "",
//   middleName: "",
//   lastName: "",
//   PhoneNo: "",
//   EmailId: "",
//   LinkedIn: "",
//   Github: "",
// };

//many data
// const skills = {
//   skill1: "",
//   skill2: "",
//   skill3: "",
// };

//single data
// const language = {
//   first: "",
//   second: "",
// };

function ResumeFormComponent() {
  const [personalDetails, setPersonalDetails] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    PhoneNo: "",
    EmailId: "",
    LinkedIn: "",
    Github: "",
  });
  const [workExperience, setWorkExperience] = useState([]);
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [educations, setEducations] = useState([]);
  const [certifications, setCertifications] = useState([]);
  const [languages, setLanguages] = useState({ first: "", second: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);

  //console.log(projects);

  // const handlePersonalInfo = (e) => {
  //   const { name, value } = e.target;
  //   setPersonalDetails({ ...personalDetails, [name]: value });
  // };

  const handleSubmit = () => {
    setFormSubmitted({ formSubmitted: true });
  };

  // const handleSkill = (e) => {
  //   const { name, value } = e.target;
  //   setSkill({ ...Skill, [name]: value });
  // };

  const handleLanguages = (e) => {
    const { name, value } = e.target;
    setLanguages({ ...languages, [name]: value });
  };

  console.log(educations);
  return (
    <>
      {!formSubmitted ? (
        <div className="FormComponent">
          <div className="MainForm">
            <form>
              <div className="name_info">
                <h2>Personal Info</h2>
                <PersonalInfo
                  personalDetails={personalDetails}
                  setPersonalDetails={setPersonalDetails}
                />
              </div>

              <div className="experience">
                <h2>Experience</h2>
                <Experience
                  id={1}
                  workExperience={workExperience}
                  setWorkExperience={setWorkExperience}
                />
              </div>

              <div>
                <h2>Projects</h2>
                <Project id={1} projects={projects} setProjects={setProjects} />
                <Project id={2} projects={projects} setProjects={setProjects} />
                {/* <Project projects={projects} setProjects={setProjects} /> */}
              </div>

              <div>
                <h2>Skills:Mention top 3</h2>
                <Skill id={1} skills={skills} setSkills={setSkills} />
                <Skill id={2} skills={skills} setSkills={setSkills} />
                <Skill id={3} skills={skills} setSkills={setSkills} />
              </div>

              <div>
                <h2>Education</h2>
                <Education
                  id={1}
                  educations={educations}
                  setEducations={setEducations}
                />
                <Education
                  id={2}
                  educations={educations}
                  setEducations={setEducations}
                />
                <Education
                  id={3}
                  educations={educations}
                  setEducations={setEducations}
                />
              </div>
              <div>
                <h2>Certifications</h2>
                <Certifications
                  id={1}
                  certifications={certifications}
                  setCertifications={setCertifications}
                />
                <Certifications
                  id={1}
                  certifications={certifications}
                  setCertifications={setCertifications}
                />
                <Certifications
                  id={1}
                  certifications={certifications}
                  setCertifications={setCertifications}
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
