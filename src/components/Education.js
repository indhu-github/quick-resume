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

  //It will run when education state gets updated
  useEffect(() => {
    setEducations({ ...educations, [id]: education });
  }, [education]);

  //it will render the education component
  return (
    <div>
      <form>
        <input
          name="qualification"
          value={education.qualification}
          placeholder="Qualification"
          required
          onChange={handleEducation}
        />
        <input
          name="institute"
          value={education.institute}
          placeholder="College name"
          required
          onChange={handleEducation}
        />
        <input
          name="year"
          value={education.year}
          placeholder="Year of passing out"
          required
          onChange={handleEducation}
        />
      </form>
    </div>
  );
}

export default Education;
