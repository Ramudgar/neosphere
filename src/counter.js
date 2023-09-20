import React, { useState } from "react";

function Counter() {
  // Initialize state for the count
  const [counts, setCount] = useState(  0);

  // Function to increment the count
  const incrementCount = () => {
    setCount(counts + 1);
  };

  // Function to decrement the count
  const decrementCount = () => {
    setCount(counts - 1);
  };

  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {counts}</p>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
    </div>
  );
}

export default Counter;
