import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Project({ projects, setProjects, id }) {
  //component state
  const [project, setProject] = useState([
    {
      title: "",
      description: "",
      startDate: "",
      endDate: "",
    },
  ]);
  //console.log("Start date", project.startDate);
  //console.log(projects);
  //handle onChange
  const handleProject = (e) => {
    //console.log(e.target);
    const { name, value } = e.target;
    setProject({ ...project, [name]: value });
  };
  //It will run when the project state gets updated
  useEffect(() => {
    setProjects({ ...projects, [id]: project });
  }, [project]);
  //It will render the project component
  return (
    <div>
      <form>
        <input
          className="form-control mb-3"
          name="title"
          value={project.title}
          placeholder="projectect Title"
          required
          onChange={handleProject}
        />
        <input
          className="form-control mb-3"
          name="description"
          value={project.description}
          placeholder="Description"
          required
          onChange={handleProject}
        />
        <DatePicker
          required
          name="startDate"
          value={project.startDate}
          selected={project.startDate}
          className="form-control mb-3"
          onChange={(date) =>
            setProject((prevState) => ({ ...prevState, startDate: date }))
          }
          placeholderText="start date"
        />
        <DatePicker
          required
          name="endDate"
          value={project.endDate}
          className="form-control mb-3"
          selected={project.endDate}
          onChange={(date) =>
            setProject((prevState) => ({ ...prevState, endDate: date }))
          }
          placeholderText="end date"
        />
      </form>
    </div>
  );
}
export default Project;
