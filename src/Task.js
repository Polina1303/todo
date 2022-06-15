import React from "react";
import { CheckOutlined, CloseOutlined, EditOutlined } from '@ant-design/icons';
import Context from "./context";
import { useContext } from 'react';
import Context2 from "./context2";
function Task({ task, onChange, ...props }) {
  const classes = []

  if (task.done) {
    classes.push('done')
  }
  const ActionBtn = () =>
    <div>{task.done ? <CheckOutlined style={{ color: '#008000' }} /> : <CloseOutlined style={{ color: '#ff0000' }} />}</div>
  const { removeTasks } = useContext(Context)
  const { setUpdate } = useContext(Context2)
  return (
    <div className="task">
      <span className={classes.join(' ')}  >
        <input type='checkbox' checked={task.done} onChange={() => onChange(task.id)} />
      </span>
      <p className="edit"> <input className="edit" type='text' id={task.id} value={task.title} onChange={(e) => setUpdate(e.target.value)} /></p>
      <div><button onClick={() => removeTasks(task.id)} >  <ActionBtn /> </button> <button> <EditOutlined /></button> </div>
    </div>
  )
}

export default Task