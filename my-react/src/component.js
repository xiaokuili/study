import React, { useEffect } from "react";
import { useState } from "react";
import MyContext from "./context";

function Child() {
  const value = React.useContext(MyContext);
  const [name, setname] = useState("child-dog");
  useEffect(() => {
    document.title = name;
  }, [name]);
  return (
    <div>
      <h2>child</h2>
      <button onClick={() => setname("child-cat")}>change name</button>

      <div>
        {name} {value}
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
