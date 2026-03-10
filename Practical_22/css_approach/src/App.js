import React from "react";
import "./App.css";
import styles from "./App.module.css";

function App() {
  return (
    <div style={{padding:"20px"}}>

      <h1>React CSS Styling Methods</h1>

      {/* Inline Styling */}
      <h2 style={{color:"blue", backgroundColor:"lightgray", padding:"10px"}}>
        Inline Styling Example
      </h2>

      {/* Stylesheet Styling */}
      <h2 className="heading">Stylesheet Styling Example</h2>
      <p className="paragraph">
        This paragraph is styled using external CSS file.
      </p>
      <button className="button">Click Me</button>

      {/* CSS Module Styling */}
      <h2 className={styles.title}>CSS Module Styling Example</h2>
      <p className={styles.text}>
        This paragraph uses CSS Module styling.
      </p>

    </div>
  );
}

export default App;