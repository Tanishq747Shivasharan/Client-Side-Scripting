import styles from "./styles.module.css"
import "./App.css"

function App() {
  
  // Create inline style object
  const inlineStyle = {
    color: "white",
    backgroundColor: "blue",
    padding: "10px"
  }

  return (
    <div>

      <h2>inline style</h2>
      <p style={inlineStyle}>This is inline styled text</p>

      <h2>External CSS</h2>
      <p className="externalStyle">This is external CSS</p>

      <h2>CSS Module</h2>
      <p className={styles.moduleStyle}>This is module CSS</p>

    </div>
  );

}

export default App