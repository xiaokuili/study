import logo from './logo.svg';
import './App.css';
import React from 'react';
import Father from './component';
import {Child} from './component';

function App() {
  return (
    <div className="App">
      <Father>
        <Child/>
      </Father>
    </div>
  );
}

export default App;
