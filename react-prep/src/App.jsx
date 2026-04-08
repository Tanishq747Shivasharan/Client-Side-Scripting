import Student from "./Student"
import { useState, useEffect } from "react";


function App() {

  const showmsg = () => {
    alert("Message from parent!")
  }

  return (
    <div>

      <h1>Parent to Child instruction passing using props the instructors</h1>

      <Student sendData={showmsg}></Student>

    </div>
  );

}

export default App