import React from "react";

function ListExample() {

  const subjects = ["English", "Mathematics", "Science", "History", "Computer"];

  const students = ["Amit", "Rahul", "Anita", "Priya", "Akash"];

  return (
    <div style={{padding:"20px"}}>

      <h1>React map() Function Example</h1>

      <h2>Subject List with Index</h2>
      <ul>
        {subjects.map((subject, index) => (
          <li key={index}>
            {index + 1}. {subject}
          </li>
        ))}
      </ul>

      <h2>Students Starting With Letter A</h2>
      <ul>
        {students
          .filter(name => name.startsWith("A"))
          .map((name, index) => (
            <li key={index}>{name}</li>
          ))}
      </ul>

    </div>
  );
}

export default ListExample;