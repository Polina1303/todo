import React from "react";

function AddTodo({ onCreate }) {
  const [value, setValue] = React.useState("")

  function submitHandler(event) {
    event.preventDefault()

    if (value.trim()) {
      onCreate(value)
      setValue('')
    }

  }

  return (
    <div className="task-input">
      <form className="task-input" onSubmit={submitHandler}>
        <input type='text' onChange={(e) => setValue(e.target.value)} />
        <button type="submit">ADD Todo</button>
      </form>
    </div>
  )
}

export default AddTodo