import { useState, useEffect } from "react";

function App() {

  const [userName, setUserName] = useState("");
  const [programmingLang, setLang] = useState("");
  const [students, setStudents] = useState([]);

  // 🔹 Input Handler
  function handleNameChange(event) {
    setUserName(event.target.value);
  }

  function handleLangChange(e) {
    setLang(e.target.value)
  }

  // 🔹 Add Student
  function addStud() {

    if (userName.trim() === "") {
      alert("Student cannot be empty (Student name is required!)");
      return;
    }

    const newStudent = {
      rollNo: students.length + 1,
      name: userName.trim(),
      lang: programmingLang.trim()
    };

    setStudents([...students, newStudent]);

    setUserName(""); // clear input
    setLang("")
  }

  // 🔹 Delete Student
  function deleteStud(rollNo) {

    const updatedList = students.filter(
      (student) => student.rollNo !== rollNo
    );

    setStudents(updatedList);
  }

  // 🔹 useEffect (Update Title)
  useEffect(() => {
    document.title = `Total Students: ${students.length}`;
  }, [students]);

  return (
    <div>

      <h2>Mini Student Manager App</h2>
      <h3>Enter Student name</h3>
      <input
        type="text"
        placeholder="Enter student name"
        value={userName}
        onChange={handleNameChange}
      />
      <br /><br />
      <h3>Enter your primary programming language</h3>
      <input
        type="text"
        placeholder="Enter primary programming language"
        value={programmingLang}
        onChange={handleLangChange}
      />
      <br /><br />
      <button onClick={addStud}>Add Student</button>
      <br /><br />

      <table border="1" cellPadding="10">

        <thead>
          <tr>
            <th>Roll No</th>
            <th>Name</th>
            <th>Language</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.rollNo}>
              <td>{student.rollNo}</td>
              <td>{student.name}</td>
              <td>{student.lang}</td>
              <td>
                <button onClick={() => deleteStud(student.rollNo)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}

export default App;