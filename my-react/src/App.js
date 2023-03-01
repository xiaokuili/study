import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Father from "./component";
import { Child } from "./component";
import MyContext from "./context";
function App() {
  return (
    <MyContext.Provider value="hello">
      <div className="App">
        <Father>
          <Child />
        </Father>
      </div>
    </MyContext.Provider>
  );
}

export default App;
