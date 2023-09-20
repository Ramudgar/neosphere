// ChildComponent.js

import React from "react";

function ChildComponent( {person, hello}) {
  // Access the data passed from the parent via props
  console.log(person);
   

  return (
    <div>
      <h2>Child Component</h2>

      {/* ternary operation for checking if person then show data else not */}

      {person ? (<p>Name: {hello.age}</p>
      ) : <p>no data</p>}
    </div>
  );
}

export default ChildComponent;
