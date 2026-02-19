import React from "react";
function DisplayMessage(props) {
  return (
    <div>
      <h3>Message Received:</h3>
      <p>{props.message}</p>
    </div>
  );
}
function App() {
  const sendMessage = (text) => {
    return text;
  };
  return (
    <div>
      <h2>Passing Function Argument to Component</h2>

      <DisplayMessage message={sendMessage("Hello from Parent Component")} />

    </div>
  );
}
export default App;
