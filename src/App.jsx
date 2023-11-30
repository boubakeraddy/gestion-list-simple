import { useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import ListTasks from "./components/ListTasks";

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  };

  const handleRemoveTask = (index) => {
    const newTasks = tasks.filter((_, i) => index !== i);
    setTasks(newTasks);
  };

  return (
    <>
      <h1>Gestion des tâches</h1>
      <hr />
      <AddTask handleAddTask={handleAddTask}></AddTask>
      <hr />
      <ListTasks handleRemoveTask={handleRemoveTask} tasks={tasks}></ListTasks>
    </>
  );
}

export default App;
