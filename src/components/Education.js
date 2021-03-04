import React, { useState, useEffect } from "react";

function Education({ educations, setEducations, id }) {
  //component state
  const [education, setEducation] = useState({
    qualification: "",
    institute: "",
    year: "",
  });

  //console.log(education);

  //handle onChange
  const handleEducation = (e) => {
    const { name, value } = e.target;
    setEducation({ ...education, [name]: value });
  };

  const handleSave = () => {
    setEducations([...educations, education]);
    console.log(education);
    setEducation({
      qualification: "",
      institute: "",
      year: "",
    });
    console.log(education);
  };

  //it will render the education component
  return (
    <div>
      <form>
        <input
          className="form-control mb-3"
          name="qualification"
          value={education.qualification}
          placeholder="Qualification"
          required
          onChange={handleEducation}
        />
        <input
          className="form-control mb-3"
          name="institute"
          value={education.institute}
          placeholder="College name"
          required
          onChange={handleEducation}
        />
        <input
          className="form-control mb-3"
          name="year"
          value={education.year}
          placeholder="Year of passing out"
          required
          onChange={handleEducation}
        />
        <button className="btn btn-success w-100" onClick={handleSave}>
          Save and add another
        </button>
      </form>
    </div>
  );
}

export default Education;
