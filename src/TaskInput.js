import React, {useState} from "react";
import Task from "./Task";
import uuid from "uuid/v1"; // use to auto-generate unique ids (IMPORTANT - npm install uuid AND yarn install )

const TaskInput = () => {

    const [task, setTask] = useState("");

    //Todo
    // const [task, setTask] = useState({
    //     description: "",
    //     id: uuid()
    // });

    const [tasks, setTasks] = useState([]);

    const addTask = () => {
        setTasks([...tasks, task ]) // adding the task in the task list 
        setTask(''); // resetting the input to empty 
    }

    const updateTask = (e) => {
        setTask(e.target.value)
    }

    const removeTask = (taskToDelete) => {
        // console.log("REMOVED")
        setTasks(tasks.filter((task) => {
            return task != taskToDelete
        }))
    }

    return (
        <div>
            <input type="text" value={task} placeholder="Enter task name" onChange={updateTask}/>
            <input type="button" value="submit" onClick={(e) => addTask(e)}/>
            {/* <p>{tasks}</p> */}
            {/* <h1 onClick={() => removeTask()}>Test</h1> */}
            {tasks.map((task)=> (
                // <li>{task}</li>
                <div>
                    < Task name={task} removeFunction={removeTask}/> 
                </div>
            )) }
        </div>
    );
};

export default TaskInput;