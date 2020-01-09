import React from "react";
import "./task.css"

// my task is the task object
const Task = ({mytask, removeTask}) => {
    return (
        <div>
            <div className="taskBox">
                <h1>{mytask.description}</h1>
                <div onClick={() => removeTask(mytask)}>-</div>
            </div>
        </div>
    )
}

export default Task;