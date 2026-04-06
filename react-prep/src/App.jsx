// Import useState Hook to store and update data
import { useState } from "react";

// Create main component 
function App() {
  
  // Create state variable userName, initially empty
  const [userName, setUserName] = useState("")

  // Function to handle input change
  function handleInputChange() {
    setUserName(event.target.value)
  }
  
  // return statement to return jsx to the page
  return (
    <div>
      <h2>React Form Example Pr14</h2>
      
      <input 
        type="text"
        value={userName}
        onChange={handleInputChange}
        placeholder="Enter your name"  
      />

      <br /><br />

      <p>Hello, {userName}</p>
    </div>
  );

}

// export the function App
export default App