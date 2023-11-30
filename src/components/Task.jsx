function Task({ index, task, handleRemoveTask }) {
  return (
    <>
      <li key={index}>
        {task}
        <button onClick={() => handleRemoveTask(index)}>Supprimer</button>
      </li>
    </>
  );
}

export default Task;
