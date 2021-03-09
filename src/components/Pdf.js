import React from "react";
import "./Pdf.css";

const Pdf = ({
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
        <div class="zone-1">
          <div class="toCenter">
            <div class="profile"></div>
          </div>
          <div class="contact-box">
            <div class="title">
              <h2>Contact</h2>
            </div>
            <div class="call">
              <i class="fas fa-phone-alt"></i>
              <div class="text">(+66) 987654321</div>
            </div>
            <div class="home">
              <i class="fas fa-home"></i>
              <div class="text">Thailand</div>
            </div>
            <div class="website">
              <i class="fas fa-globe"></i>
              <div class="text">https://codepen.io/MiniMark</div>
            </div>
            <div class="email">
              <i class="fas fa-envelope"></i>
              <div class="text">info@gmail.com</div>
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
          <div class="hobbies-box">
            <div class="title">
              <h2>Hobbies</h2>
            </div>
            <div class="logo">
              <div class="logo-1">
                <i class="fas fa-gamepad"></i>
              </div>
              <div class="logo-2">
                <i class="fas fa-tv"></i>
              </div>
              <div class="logo-3">
                <i class="fas fa-camera"></i>
              </div>
              <div class="logo-4">
                <i class="fas fa-lightbulb"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="zone-2">
          <div class="headTitle">
            <h1>{personalDetails.fullName}</h1>
          </div>
          <div class="subTitle">
            <h1>Architect</h1>
          </div>
          <div class="group-1">
            <div class="title">
              <div class="box">
                <h2>About Me</h2>
              </div>
            </div>
            <div class="desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
              deserunt excepturi numquam obcaecati doloribus ab quisquam
              sapiente quidem officiis aspernatur. A quae totam provident
              accusamus iure esse earum magnam adipisci, odit libero inventore
              laborum, rerum laudantium maxime corporis consequatur repellendus.
            </div>
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
  );
};

export default Pdf;
