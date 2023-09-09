import "./App.css";
import { useState } from "react";

function App() {


  return (
    <div className="App">
      <h1>To Do List</h1>
      <div>
        <input type="text" placeholder="task...."></input>
        <button>Add Task</button>
      </div>
      <hr/>
    
    </div>
  );
}

export default App;
