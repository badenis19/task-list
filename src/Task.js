import React from "react";
import "./task.css";

const Task = ({mytask, removeTask}) => {
    return (
        <div>
            <div className="taskBox">
                <div><h3>{mytask.description}</h3></div>
                <div className="btn btn-danger"  onClick={() => removeTask(mytask)}>-</div>
            </div>
        </div>
    )
}

export default Task;