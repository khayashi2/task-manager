import { useState, useEffect } from "react"
import "../Style/app.scss"
import StatusLine from "./StatusLine"

function App() {
  const [tasks, setTasks] = useState([])

  function addEmptyTask(status) {
    // do stuff
  }

  function addTask(taskToAdd) {
    // do stuff
  }

  function deleteTask(taskId) {
    // do stuff
  }

  function moveTask(id, newStatus) {
    // do stuff
  }

  function saveTasksToLocalStorage(tasks) {
    // do stuff
  }

  function loadTasksFromLocalStorage() {
    // do stuff
  }

  return (
      <div className="App">
        <h1>Task Management</h1>
        <main>
          <section>
            <StatusLine
                tasks={tasks}
                addEmptyTask={addEmptyTask}
                addTask={addTask}
                deleteTask={deleteTask}
                moveTask={moveTask}
                status="Backlog"
            />
            <StatusLine
                tasks={tasks}
                addEmptyTask={addEmptyTask}
                addTask={addTask}
                deleteTask={deleteTask}
                moveTask={moveTask}
                status="In Progress"
            />
            <StatusLine
                tasks={tasks}
                addEmptyTask={addEmptyTask}
                addTask={addTask}
                deleteTask={deleteTask}
                moveTask={moveTask}
                status="Done"
            />
          </section>
        </main>
      </div>
  )
}

export default App