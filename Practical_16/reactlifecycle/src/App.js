import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = { message: "Component Mounted!" };
  }
  componentDidMount() {
    console.log("Component Mounted");
  }
  componentDidUpdate() {
    console.log("Component Updated");
  }
  componentWillUnmount() {
    console.log("Component Removed");
  }
  changeMessage = () => {
    this.setState({ message: "Component Updated!" });
  };
  render() {
    return (
      <div>
        <h2>React Lifecycle Demo</h2>

        <h3>{this.state.message}</h3>

        <button onClick={this.changeMessage}>
          Update Message
        </button>
      </div>
    );
  }
}
export default App;