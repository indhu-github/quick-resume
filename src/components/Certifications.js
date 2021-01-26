import React, { useState, useEffect } from "react";

function Certifications({ id, certifications, setCertifications }) {
  //component state
  const [certification, setCertification] = useState({
    certificate: "",
    issuedBy: "",
  });

  //handle onChange
  const handleCertfication = (e) => {
    const { name, value } = e.target;
    setCertification({ ...certification, [name]: value });
  };

  //
  useEffect(() => {
    setCertifications({ ...certifications, [id]: certification });
  }, [certification]);

  //It will render the component
  return (
    <div>
      <input
        name="certificate"
        value={certification.certificate}
        placeholder="Certification"
        required
        onChange={handleCertfication}
      />
      <input
        name="issuedBy"
        value={certification.issuedBy}
        placeholder="Issued by"
        required
        onChange={handleCertfication}
      />
    </div>
  );
}

export default Certifications;
