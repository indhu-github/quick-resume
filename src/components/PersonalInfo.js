import React from "react";

function PersonalInfo({ personalDetails, setPersonalDetails }) {
  //handle onChange
  const handlePersonalInfo = (e) => {
    const { name, value } = e.target;
    setPersonalDetails({ ...personalDetails, [name]: value });
  };

  //Renders personalInfo Component
  return (
    <div className="personal_info">
      <input
        className="form-control mb-3"
        name="fullName"
        value={personalDetails.fullName}
        placeholder="Full Name"
        required
        onChange={handlePersonalInfo}
      />
      <input
        className="form-control mb-3"
        name="PhoneNo"
        value={personalDetails.PhoneNo}
        placeholder="Phone number"
        required
        onChange={handlePersonalInfo}
      />
      <input
        className="form-control mb-3"
        name="EmailId"
        value={personalDetails.EmailId}
        placeholder="Email id"
        required
        onChange={handlePersonalInfo}
      />
      <input
        className="form-control mb-3"
        name="LinkedIn"
        value={personalDetails.LinkedIn}
        placeholder="LinkedIn Id"
        required
        onChange={handlePersonalInfo}
      />
      <input
        className="form-control mb-3"
        name="Github"
        value={personalDetails.Github}
        placeholder="Github URL"
        required
        onChange={handlePersonalInfo}
      />
    </div>
  );
}

export default PersonalInfo;
