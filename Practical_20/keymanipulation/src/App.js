import React, { useState } from "react";

function StudentList() {

  const [students, setStudents] = useState([
    { id: 1, name: "Amit" },
    { id: 2, name: "Riya" },
    { id: 3, name: "Neha" },
    { id: 4, name: "Karan" }
  ]);

  const deleteStudent = (id) => {
    const updatedList = students.filter(student => student.id !== id);
    setStudents(updatedList);
  };

  const updateStudent = (id) => {
    const updatedList = students.map(student => {
      if (student.id === id) {
        return { ...student, name: student.name + " (Updated)" };
      }
      return student;
    });
    setStudents(updatedList);
  };

  return (
    <div style={{padding:"20px"}}>

      <h1>React List Manipulation Example</h1>

      <h2>List Without Key</h2>
      <ul>
        {students.map(student => (
          <li>{student.name}</li>
        ))}
      </ul>

      <h2>List With Key and Manipulation</h2>
      <ul>
        {students.map(student => (
          <li key={student.id}>
            {student.name}

            <button
              onClick={() => updateStudent(student.id)}
              style={{marginLeft:"10px"}}
            >
              Update
            </button>

            <button
              onClick={() => deleteStudent(student.id)}
              style={{marginLeft:"10px"}}
            >
              Delete
            </button>

          </li>
        ))}
      </ul>

    </div>
  );
}

export default StudentList;