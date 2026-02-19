import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: ""
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const validate = () => {
    let newErrors = {};
    if (!formData.name) {
      newErrors.name = "Name is required";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!formData.email.includes("@")) {
      newErrors.email = "Enter valid email";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter valid 10-digit phone number";
    }
    if (!formData.experience) {
      newErrors.experience = "Experience is required";
    }
    return newErrors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
    }
  };
  return (
    <div>
      <h2>Job Application Form</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <div style={{color:"red"}}>{errors.name}</div>
          <br />
          Email:
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <div style={{color:"red"}}>{errors.email}</div>
          <br />
          Phone:
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <div style={{color:"red"}}>{errors.phone}</div>
          <br />
          Experience (years):
           <input
            type="text"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
          />
          <div style={{color:"red"}}>{errors.experience}</div>
          <br /><br />
          <button type="submit">Apply</button>
        </form>
      ) : (
        <h3>Application Submitted Successfully!</h3>
      )}
    </div>
  );
}
export default App;
