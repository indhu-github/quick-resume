import React from "react";

function PersonalInfo({ personalDetails, setPersonalDetails }) {
  //handle onChange
  const handlePersonalInfo = (e) => {
    const { name, value } = e.target;
    setPersonalDetails({ ...personalDetails, [name]: value });
  };

  //Renders personalInfo Component
  return (
    <div>
      <input
        name="firstName"
        value={personalDetails.firstName}
        placeholder="First name"
        required
        onChange={handlePersonalInfo}
      />
      <input
        name="middleName"
        value={personalDetails.middleName}
        placeholder="Middle name"
        onChange={handlePersonalInfo}
      />
      <input
        name="lastName"
        value={personalDetails.lastName}
        placeholder="Last name"
        required
        onChange={handlePersonalInfo}
      />
      <br />
      <input
        name="PhoneNo"
        value={personalDetails.PhoneNo}
        placeholder="Phone number"
        required
        onChange={handlePersonalInfo}
      />
      <input
        name="EmailId"
        value={personalDetails.EmailId}
        placeholder="Email id"
        required
        onChange={handlePersonalInfo}
      />
      <input
        name="LinkedIn"
        value={personalDetails.LinkedIn}
        placeholder="LinkedIn Id"
        required
        onChange={handlePersonalInfo}
      />
      <br />
      <input
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
