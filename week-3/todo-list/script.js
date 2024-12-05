let todos = [];
// Populate the todo list
function populateTodoList(todos) {
  const list = document.getElementById("todo-list");
  list.innerHTML = ""; // Clear existing items
  todos.forEach((todo) => {
    const li = document.createElement("li");
    // Wrap the text in a <span>
    const textSpan = document.createElement("span");
    textSpan.textContent = todo.task;
    li.appendChild(textSpan); // Append the text <span> to the <li>
    const completeButton = document.createElement("button");
    completeButton.textContent = "✓";
    completeButton.addEventListener("click", () => {
      textSpan.style.textDecoration = todo.completed ? "none" : "line-through";
      todo.completed = !todo.completed;
    });
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "✗";
    deleteButton.addEventListener("click", () => {
      li.remove();
    });
    li.appendChild(completeButton);
    li.appendChild(deleteButton);
    list.appendChild(li);
  });
}
// Add a new todo
function addNewTodo(event) {
  event.preventDefault(); // Prevent form refresh
  const input = document.getElementById("new-todo");
  const newTask = input.value.trim();
  if (newTask) {
    todos.push({ task: newTask, completed: false });
    populateTodoList(todos);
    input.value = ""; // Reset the input field
  }
}
// Delete all completed todos
function deleteAllCompletedTodos() {
  todos = todos.filter((todo) => !todo.completed);
  populateTodoList(todos);
}
// Initialize with predefined todos
populateTodoList(todos);
