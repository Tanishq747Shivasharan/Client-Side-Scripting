import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    username: "",
    email: ""
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

    if (!formData.username) {
      newErrors.username = "Username is required";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!formData.email.includes("@")) {
      newErrors.email = "Enter valid email";
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
      <h2>React Form Validation</h2>

      {!submitted ? (
        <form onSubmit={handleSubmit}>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <div style={{ color: "red" }}>{errors.username}</div>
          <br />
          Email:
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <div style={{ color: "red" }}>{errors.email}</div>
         <br /><br />
           <button type="submit">Submit</button>
        </form>
      ) : (
        <h3>Form Submitted Successfully!</h3>
      )}

    </div>
  );
}
export default App;