// import "./index.css";

// function App() {
//   return (
//     <>
//       <div className="App">
//         <h1>React App</h1>
//       </div>
//     </>
//   );
// }

// export default App;
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  // code for increment button
  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  // code for decrement button
  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <>
        <div className="App">
          <h1>Counter App</h1>
          <h2>{this.state.count}</h2>
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
        </div>
      </>
    );
  }
}

export default App;
