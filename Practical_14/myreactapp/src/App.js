import React, { useState } from "react";

function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <h2>React Form Handling</h2>

      <form onSubmit={handleSubmit}>

        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br /><br />

        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <button type="submit">Submit</button>

      </form>

      <hr />

      <h3>Entered Details</h3>
      <p>Name: {name}</p>
      <p>Email: {email}</p>

    </div>
  );
}

export default App;
