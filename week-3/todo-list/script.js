let todos = [];

// Populate the todo list
function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  list.innerHTML = ""; // Clear existing todos

  todos.forEach((todo) => {
    const listItem = document.createElement("li");
    listItem.className =
      "list-group-item d-flex justify-content-between align-items-center";

    const textSpan = document.createElement("span"); // Wrap text in a span
    textSpan.textContent = todo.task;
    if (todo.completed) {
      textSpan.style.textDecoration = "line-through";
    }

    const checkButton = document.createElement("button");
    checkButton.innerHTML = "✔️";
    checkButton.className = "btn btn-primary";
    checkButton.addEventListener("click", () => {
      todo.completed = !todo.completed;
      textSpan.style.textDecoration = todo.completed ? "line-through" : "none";
    });

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "❌";
    deleteButton.className = "btn btn-danger";
    deleteButton.addEventListener("click", () => {
      list.removeChild(listItem);
    });

    listItem.appendChild(textSpan); // Append the text span
    listItem.appendChild(checkButton);
    listItem.appendChild(deleteButton);
    list.appendChild(listItem);
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
