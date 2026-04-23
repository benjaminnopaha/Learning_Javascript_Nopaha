const TodoItem = ({ task, deleteTask, toggleTask }) => {
  return (
    <li className="todo-item">
      <span
        className={task.completed ? "completed" : ""}
        onClick={() => toggleTask(task.id)}
      >
        {task.text}
      </span>

      <button
        className="delete-btn"
        onClick={() => deleteTask(task.id)}
      >
        ✕
      </button>
    </li>
  );
};

export default TodoItem;
