import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Project({ projects, setProjects, id }) {
  //component state
  const [project, setProject] = useState({
    title: "",
    description: "",
    startDate: new Date(),
    endDate: new Date(),
  });

  //handle onChange
  const handleProject = (e) => {
    //console.log(e.target);
    const { name, value } = e.target;
    setProject({ ...project, [name]: value });
  };

  const handleSave = () => {
    setProjects([...projects, project]);
    setProject({
      title: "",
      description: "",
      startDate: "",
      endDate: "",
    });
  };

  //It will render the project component
  return (
    <div>
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
      <input
        type="date"
        name="startDate"
        className="form-control mb-3"
        value={project.startDate}
        onChange={handleProject}
      />
      <input
        type="date"
        name="endDate"
        className="form-control mb-3"
        value={project.endDate}
        onChange={handleProject}
      />
      {/* <DatePicker
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
      /> */}
      <button className="btn btn-success w-100" onClick={handleSave}>
        Save and add another
      </button>
    </div>
  );
}
export default Project;
