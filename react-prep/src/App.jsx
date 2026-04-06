// Import useState Hook to store and update data
import { useState, useEffect } from "react";

// Create main component 
function App() {
  
  // Create state variable userName, initially empty
  const [count, setCount] = useState(0)

  useEffect(function() {
    document.title = `Count: ${count}`
  },[count])

  // Function to handle increment button
  function handleIncrement() {
    setCount(count + 1)
  }
  
  // Function to handle decrement button
  function handleDecrement() {
    if (count == 0){
      setCount(count)
    }
    else{
      setCount(count - 1)
    }
  }
  
  // return statement to return jsx to the page
  return (
    <div>
      <h2>Counter app React States</h2>

      <h1>{count}</h1>
      
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );

}

// export the function App
export default App