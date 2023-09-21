// ParentComponent.js

import React from 'react';
import ChildComponent from './childComponent'

function ParentComponent() {
  // Define data to be passed to the child component
  const data = {
    name: 'Alice',
    age: 30,
  };

  return (
    <div>
      <h1>Parent Component</h1>
      {/* Pass the data to the ChildComponent using props */}
      <ChildComponent person={data}   />
    </div>
  );
}

export default ParentComponent;
