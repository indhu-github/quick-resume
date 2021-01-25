import React, { useState } from "react";

function Project({ projects, setProjects }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  console.log(projects);
  const handleSubmit = (e) => {
    e.preventDefault();
    setProjects([
      ...projects,
      {
        title: title,
        description: description,
      },
    ]);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="Title"
          value={title}
          placeholder="Project Title"
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          name="Description"
          value={description}
          placeholder="Description"
          required
          onChange={(e) => setDescription(e.target.value)}
        />
      </form>
    </div>
  );
}

export default Project;
