import React from "react";
import ChildComponent from "./childComponent";

function AnotherParentComponent(props) {
  const datas = {
    name: "Bob",
    age: 40,
  };
  return (
    <>
      <div>
        <h1>Another Parent Component</h1>
        <ChildComponent person={datas} />
      </div>
    </>
  );
}

export default AnotherParentComponent;
