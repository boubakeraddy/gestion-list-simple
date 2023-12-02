import Task from "./Task";

function ListItemComponent({ tasks, handleRemoveTask }) {
  const RemoveTask = (i) => {
    handleRemoveTask(i);
  };
  return (
    <>
      <ul>
        {tasks.map((t, i) => (
          <Task key={i} index={i} task={t} handleRemoveTask={RemoveTask} />
        ))}
      </ul>
    </>
  );
}

export default ListItemComponent;
