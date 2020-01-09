import React, {useState} from "react";
import Task from "./Task";
import uuid from "uuid/v1"; // use to auto-generate unique ids (IMPORTANT - npm install uuid AND yarn install )

const TaskInput = () => {

    // the input value the current task, empty by default
    const [inputValue, setInputValue] = useState("");

    // tasks is an array of objects
    const [tasks, setTasks] = useState([]);

    // to add task into task lists array
    const addTask = () => {
        setTasks([...tasks, { // getting the current tasks array and adding the description and id 
            description: inputValue,
            id: uuid()
        } ]) 
        setInputValue(""); // resetting the input to be empty
    }

    // function to update the value of the input 
    const updateInputValue = (e) => {
        setInputValue(e.target.value)
    }

    const removeTask = (taskToDelete) => {
        setTasks(tasks.filter((task) => {
            return task.id !== taskToDelete.id
        }))
    }

    return (
        <div>
            <input type="text" value={inputValue} placeholder="Enter task name" onChange={updateInputValue}/>
            <input type="button" value="submit" onClick={(e) => addTask(e)}/>
            {tasks.map((task)=> (
                <div key={task.id}>
                    < Task mytask={task} removeTask={removeTask}/> 
                </div>
            )) }
        </div>
    );
};

export default TaskInput;