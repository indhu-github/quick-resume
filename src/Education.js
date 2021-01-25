import React, { useState } from "react";

function Education({ education, setEducation }) {
  const [qualification, setQualification] = useState("");
  const [institute, setInstitute] = useState("");
  const [year, setYear] = useState("");

  console.log(education);
  const handleSubmit = (e) => {
    e.preventDefault();
    setEducation([
      ...education,
      {
        qualification: qualification,
        institute: institute,
        year: year,
      },
    ]);
  };
  return (
    <div>
      <form onChange={handleSubmit}>
        <input
          name="qualification"
          value={qualification}
          placeholder="Graduation"
          required
          onChange={(e) => {
            setQualification(e.target.value);
          }}
        />
        <input
          name="institute"
          value={institute}
          placeholder="College name"
          required
          onChange={(e) => {
            setInstitute(e.target.value);
          }}
        />
        <input
          name="year"
          value={year}
          placeholder="Year of passing out"
          required
          onChange={(e) => {
            setYear(e.target.value);
          }}
        />
      </form>
    </div>
  );
}

export default Education;
