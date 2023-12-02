import { useState } from "react";
import ListAddItemComponent from "./components/ListAddItemComponent";
import ListItemComponent from "./components/ListItemComponent";

function ListParentComponent() {
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
      <ListAddItemComponent handleAddTask={handleAddTask}></ListAddItemComponent>
      <hr />
      <ListItemComponent handleRemoveTask={handleRemoveTask} tasks={tasks}></ListItemComponent>
    </>
  );
}

export default ListParentComponent;
