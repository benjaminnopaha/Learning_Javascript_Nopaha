const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");


addBtn.addEventListener("click", () => {
  const task = input.value;

  if (!task) return;

  const li = document.createElement("li");

  li.innerHTML = `
    <span>${task}</span>
    <button class="delete">Delete</button>
  `;

  taskList.appendChild(li);
  input.value = "";
});

/* Add eventListener to the parent of the button */
taskList.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});