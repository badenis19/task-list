import React, {useState} from "react";
// import Task from "./Task";

const TaskInput = () => {

    const [task, setTask] = useState("");

    const [tasks, setTasks] = useState([]);

    const addTask = (e) => {
        setTask(task)
    }

    const updateTask = (e) => {
        setTask(e.target.value)
    }

    return (
        <div>
            <input type="text" placeholder="Enter task name" onChange={updateTask}/>
            <input type="button" value="submit" onClick={(e) => addTask(e)}/>
            <p>{task}</p>
        </div>
    );
};

export default TaskInput;