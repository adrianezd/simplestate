import React from "react";
import StateAge from './components/StateAge'
import StateCount from './components/StateCount'
import StateImage from './components/StateImage'
import StateName from './components/StateName'
import "./App.css";

function App() {

  return (
    <div className="App">
      <header className="App-header">
      <h1>REACT APP</h1>
      <StateCount/>
      <StateName/>
      <StateAge/>
      <StateImage/>
      </header>
    </div>
  );
}

export default App;
