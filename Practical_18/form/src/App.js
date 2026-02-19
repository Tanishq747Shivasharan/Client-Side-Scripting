import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };
  return (
    <div>
      <h2>Feedback Form</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <br /><br />
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <br /><br />
          Feedback Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          <br /><br />
          <button type="submit">Submit Feedback</button>
        </form>
      ) : (
        <h3>Thank you for your feedback, {formData.username}!</h3>
      )}
      <hr />
      <h3>Live Preview</h3>
      <p>Username: {formData.username}</p>
      <p>Email: {formData.email}</p>
      <p>Message: {formData.message}</p>

    </div>
  );
}
export default App;
