import React from "react";
import "./task.css"


const Task = ({name, removeFunction}) => {
    return (
        <div>
            <div className="taskBox">
                <h1>{name}</h1>
                <div onClick={() => removeFunction(name)}>-</div>
            </div>
        </div>
    )
}

export default Task;