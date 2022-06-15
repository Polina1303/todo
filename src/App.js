import React from "react";
import Todo from './Todo'
import Context from "./context";
import Context2 from './context2'
import AddTodo from "./AddTodo";


function App() {
  let [tasks, setTasks] = React.useState([
    { id: 0, title: 'Create todo-react app', done: false },
    { id: 1, title: 'Learn react', done: true },
    { id: 2, title: 'Read book', done: false },
  ])

  function toggleTodo(id) {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        task.done = !task.done
      }
      return task
    }))
  }
  function removeTasks(id) {
    setTasks(tasks.filter(task => task.id != id))
  }

  function addTodo(title) {
    setTasks(tasks.concat([{
      title,
      id: Date.now(),
      done: false,
    }]))
    return tasks
  }

  function setUpdate(tasks, id) {
    const task = task
    task.map(item => {
      if (item.id === id) {
        item.tasks = tasks
      }
    })
  }
  return (
    <Context.Provider value={{ removeTasks }}  >
      <Context2.Provider value={{ setUpdate }} >
        <div className="App">
          <h1 className="top">What's the plan for today</h1>
          <AddTodo onCreate={addTodo} />
          {tasks.length ? <Todo tasks={tasks} onToggle={toggleTodo} /> : <p>No todo</p>}
        </div>
      </Context2.Provider>
    </Context.Provider>
  )

}


export default App;



