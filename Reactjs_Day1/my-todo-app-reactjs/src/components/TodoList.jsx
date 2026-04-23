import TodoItem from "./TodoItem";

const TodoList = ({ tasks, deleteTask, toggleTask }) => {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
        />
      ))}
    </ul>
  );
};

export default TodoList;
