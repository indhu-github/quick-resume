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
  return (
    <div>
      <div class="grid-container">
        <div class="grid-container" ref={ref}>
          <div class="zone-1">
            <div class="contact-box">
              <div class="title">
                <h2>Contact</h2>
              </div>
              <div class="call">
                <i class="fas fa-phone-alt"></i>
                <div class="text">Phone:{personalDetails.PhoneNo}</div>
              </div>
              <div class="home">
                <i class="fas fa-home"></i>
                <div class="text">Github:{personalDetails.Github}</div>
              </div>
              <div class="website">
                <i class="fas fa-globe"></i>
                <div class="text">LinkedIn:{personalDetails.LinkedIn}</div>
              </div>
              <div class="email">
                <i class="fas fa-envelope"></i>
                <div class="text">Email:{personalDetails.EmailId}</div>
              </div>
            </div>
            <div class="personal-box">
              <div class="title">
                <h2>Skills</h2>
              </div>
              <div class="skill-1">
                {skills.map((skill) => (
                  <p>{skill}</p>
                ))}
              </div>
            </div>
            <div class="certifications-box">
              <div class="title">
                <h2>Certifications</h2>
              </div>
              <div class="desc">
                {certifications.map((certf) => (
                  <ul>
                    <li>
                      <p>
                        {certf.certificate} - {certf.issuedBy}
                      </p>
                    </li>
                  </ul>
                ))}
              </div>
            </div>
            <div class="hobbies-box">
              <div class="title">
                <h2>Languages</h2>
              </div>
              <div class="logo">
                <p>{languages.first} </p>
                <p>{languages.second}</p>
              </div>
            </div>
          </div>
          <div class="zone-2">
            <div class="headTitle">
              <h1>{personalDetails.fullName}</h1>
            </div>
            <div class="subTitle">
              <h1>{personalDetails.position}</h1>
            </div>
            <div class="group-1">
              <div class="title">
                <div class="box">
                  <h2>About Me</h2>
                </div>
              </div>
              <div class="desc">{personalDetails.about}</div>
            </div>
            <div class="group-2">
              <div class="title">
                <div class="box">
                  <h2>Experience</h2>
                </div>
              </div>
              <div class="desc">
                {workExperience.map((work) => (
                  <ul>
                    <li>
                      <div class="msg-1">
                        {work.StartDate} -{work.EndDate} {work.JobTitle}
                      </div>
                      <div class="msg-2">{work.Employer}</div>
                    </li>
                  </ul>
                ))}
              </div>
            </div>
            <div class="group-2">
              <div class="title">
                <div class="box">
                  <h2>Projects</h2>
                </div>
              </div>
              <div class="desc">
                {projects.map((proj) => (
                  <ul>
                    <li>
                      <div class="msg-1">
                        {proj.startDate} -{proj.endDate} {proj.title}
                      </div>
                      <div class="msg-2">{proj.description}</div>
                    </li>
                  </ul>
                ))}
              </div>
            </div>
            <div class="group-3">
              <div class="title">
                <div class="box">
                  <h2>Education</h2>
                </div>
              </div>
              <div class="desc">
                {educations.map((edu) => (
                  <ul>
                    <li>
                      <div class="msg-1">
                        {edu.year} | {edu.qualification}
                      </div>
                      <div class="msg-2">{edu.institute}</div>
                    </li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Pdf targetRef={ref} filename="post.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Capture as PDF</button>}
      </Pdf>
    </div>
  );
};

export default PDF;
