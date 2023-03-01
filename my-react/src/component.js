import React from "react";

function Child() {
  return (
    <div>
      <h2>child</h2>
    </div>
  );
}

function Name(props) {
  return <div>name is {props.name}</div>;
}

export default function Fathter(props) {
  return (
    <div>
      <h1>father</h1>
      <Name name="dog" />
      {props.children}
    </div>
  );
}
export { Child };
