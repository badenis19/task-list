import React from 'react';
import TaskInput from "./TaskInput";
// import Task from "./Task";


function App() {
  return (
    <div className="App">

      <div className="header">
        <div><h3>Simple task-list</h3></div>
      </div>
      
      <h3 className="title">Enter as task:</h3>
      <div className="main-container">

        <div className="inside-main">
          <div>
            < TaskInput />
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
