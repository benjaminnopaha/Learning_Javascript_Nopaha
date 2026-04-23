import { useState } from "react";

const TodoInput = ({ addTask }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(input);
    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a task..."
      />
      <button className="add-btn" type="submit">
        Add
      </button>
    </form>
  );
};

export default TodoInput;
