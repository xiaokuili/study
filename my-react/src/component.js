import React, { useEffect } from "react";
import { useState } from "react";
import MyContext from "./context";
import { useContext } from "react";

function Child() {
  const { context, setContext } = useContext(MyContext);
  const [name, setname] = useState("child-dog");
  const handle = () => {
    setname("child-cat");
    setContext("hello world");
  };
  useEffect(() => {
    document.title = name;
  }, [name]);
  return (
    <div>
      <h2>child</h2>
      <button onClick={handle}>change name</button>

      <div>
        {name} {context}
      </div>
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
