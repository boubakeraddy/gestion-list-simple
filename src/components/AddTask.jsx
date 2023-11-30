import { useState } from "react";

function AddTask(props) {
  const [task, setTask] = useState("");
  return (
    <>
      <input
        type="text"
        name="task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        id="task"
        placeholder="Ajouter une tâche"
      />
      <button
        onClick={() => {
          props.handleAddTask(task);
          setTask("");
        }}
      >
        Ajouter
      </button>
    </>
  );
}

export default AddTask;
