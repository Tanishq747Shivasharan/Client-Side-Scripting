import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    course: ""
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
    if (!formData.age) {
      newErrors.age = "Age is required";
    } else if (isNaN(formData.age)) {
      newErrors.age = "Age must be a number";
    } else if (formData.age < 18 || formData.age > 30) {
      newErrors.age = "Age must be between 18 and 30";
    }
    if (!formData.course) {
      newErrors.course = "Please select a course";
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
      <h2>Student Enrollment Form</h2>
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
          Age:
          <input
            type="text"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
          <div style={{color:"red"}}>{errors.age}</div>
          <br />
          Course:
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
          >
            <option value="">Select Course</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Information Technology">Information Technology</option>
            <option value="Mechanical">Mechanical</option>
            <option value="Civil">Civil</option>
          </select>
          <div style={{color:"red"}}>{errors.course}</div>
          <br /><br />
          <button type="submit">Enroll</button>
        </form>
      ) : (
        <h3>Enrollment Successful!</h3>
      )}
    </div>
  );
}
export default App;
