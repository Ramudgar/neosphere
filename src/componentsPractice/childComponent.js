// ChildComponent.js

import React from 'react';

function ChildComponent(props) {
  // Access the data passed from the parent via props
  const { person } = props;

  return (
    <div>
      <h2>Child Component</h2>
      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>
    </div>
  );
}

export default ChildComponent;
