import React, { useState, useEffect } from "react";

function Project({ projects, setProjects, id }) {
  //component state
  const [project, setProject] = useState({
    title: "",
    description: "",
    startDate: "",
    endDate: "",
  });

  //console.log(projects);

  //handle onChange
  const handleProject = (e) => {
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
          name="title"
          value={project.title}
          placeholder="Project Title"
          required
          onChange={handleProject}
        />
        <input
          name="description"
          value={project.description}
          placeholder="Description"
          required
          onChange={handleProject}
        />
        <input
          name="startDate"
          value={project.startDate}
          placeholder="Start Date"
          required
          onChange={handleProject}
        />
        <input
          name="endDate"
          value={project.endDate}
          placeholder="End Date"
          required
          onChange={handleProject}
        />
      </form>
    </div>
  );
}

export default Project;
