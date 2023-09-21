import React from "react";
import ChildComponent from "./childComponent";

function AnotherParentComponent(props) {
  const data = {
    name: "Bob",
    age: 40,
  };
  return (
    <>
      <div>
        <h1>Another Parent Component</h1>
        <ChildComponent person={data} />
      </div>
    </>
  );
}

export default AnotherParentComponent;
