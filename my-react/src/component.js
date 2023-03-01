import React from "react";

function Child() {
  return (
    <div>
      <h2>child</h2>
    </div>
  );
}

function Name(props) {
  const handle = () => {
    props.ondata("cat");
  };
  return (
    <div>
      <button onClick={handle}>click me</button>
      <div>name is {props.name}</div>
    </div>
  );
}

export default function Fathter(props) {
  const handle = (data) => {
    console.log(data);
  };
  return (
    <div>
      <h1>father</h1>
      <Name name="dog" ondata={handle} />
      {props.children}
    </div>
  );
}
export { Child };
