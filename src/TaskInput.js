import React, {useState, useEffect } from "react";
import Task from "./Task";
import uuid from "uuid/v1"; // use to auto-generate unique ids (IMPORTANT - npm install uuid AND yarn install )

const TaskInput = () => {

    // the input value the current task, empty by default
    const [inputValue, setInputValue] = useState("");

    // tasks is an array of objects.
    /* setting the default value to be what is stored in local storage if not empty,
    if empty set it an empty array*//
    const [tasks, setTasks] = useState( () => {
        const localData = localStorage.getItem("tasks");
        return localData ? JSON.parse(localData) : [];
    });
    

    // the second paramater [tasks] means whenever the tasks array changes, run this hook (useEffect)
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks])

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

    // To remove task from the list (onclick)
    const removeTask = (taskToDelete) => {
        // removes tasks from the list when the task id is equal to the one we want to delete
        setTasks(tasks.filter((task) => {
            return task.id !== taskToDelete.id
        }))
    }

    return (
        <div>
            <input type="text" value={inputValue} placeholder="Enter task name" onChange={updateInputValue}/>
            <input type="button" value="submit" onClick={(e) => addTask(e)}/>
            {tasks.map((task)=> (
                // rendering each task on the page, passing the task OBJECT
                <div key={task.id}>
                    < Task mytask={task} removeTask={removeTask}/> 
                </div>
            )) }
        </div>
    );
};

export default TaskInput;


// local storage: https://www.youtube.com/watch?v=SOnMln3W0U8
