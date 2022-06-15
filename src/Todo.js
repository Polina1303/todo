import React from "react";
import Task from "./Task";


function Todo(props) {
    return (
        <div>
            {
                props.tasks.map((task, index) => {
                    return <Task task={task} key={task.id} index={index} onChange={props.onToggle} />
                })
            }
        </div>
    )
}


export default Todo