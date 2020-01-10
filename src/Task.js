import React from "react";
import "./task.css"

// my task is the task object
const Task = ({mytask, removeTask}) => {
    return (
        <div>
            <div className="taskBox">
                <div><h3>{mytask.description}</h3></div>
                {/* <div onClick={() => removeTask(mytask)}>-</div> */}
                <div className="btn btn-danger"  onClick={() => removeTask(mytask)}>-</div>
            </div>
        </div>
    )
}

export default Task;