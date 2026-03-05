import { useEffect, useState } from "react";
import Child from "./components/Child"

function App() {
  const [count, setCount] = useState(0);

  function showMessage() {
    alert("Function executed from Parent Component");
  }

  useEffect(() => {
    console.log("Component Mounted");

    return () => {
      console.log("Component Unmounted")
    };
  }, []);
  return (
    <div>
      <h2>React Hooks State Example</h2>

      <h3>Counter: {count}</h3>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      <Child sendMessage={showMessage} />
    </div>
  )
}

export default App;