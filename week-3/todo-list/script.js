// The array where our todos are stored
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

// Function to populate the todo list
function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  list.innerHTML = ""; // Clear the list before repopulating

  // Loop through the todos array and create list items
  todos.forEach((todo, index) => {
    let li = document.createElement("li");
    li.classList.add("todo-item");

    // Create a checkbox for toggling completion
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed; // Set the checkbox state based on the completion status
    checkbox.addEventListener("change", () => {
      todo.completed = checkbox.checked; // Update the completed status based on the checkbox
      populateTodoList(todos); // Re-render the list
    });

    // Create a span for the todo text
    let todoText = document.createElement("span");
    todoText.textContent = todo.task;

    // Apply a line-through style if the todo is completed
    if (todo.completed) {
      todoText.style.textDecoration = "line-through"; // Mark as completed
    }

    // Append the checkbox and todo text to the list item
    li.appendChild(checkbox);
    li.appendChild(todoText);

    // Create a trash icon for deleting the todo
    let deleteButton = document.createElement("i");
    deleteButton.classList.add("fa", "fa-trash");
    deleteButton.addEventListener("click", () => {
      todos.splice(index, 1); // Remove the todo from the array
      populateTodoList(todos); // Re-render the list
    });
    li.appendChild(deleteButton);

    // Append the list item to the todo list
    list.appendChild(li);
  });
}

// Function to add a new todo
function addNewTodo(event) {
  event.preventDefault(); // Prevent form submission from reloading the page

  // Get the value from the input field
  let inputField = document.querySelector('input[type="text"]');
  let newTask = inputField.value.trim();

  if (newTask) {
    todos.push({ task: newTask, completed: false }); // Add the new todo to the array
    populateTodoList(todos); // Re-render the list
    inputField.value = ""; // Clear the input field
  }
}

// Function to delete all completed todos
function deleteAllCompletedTodos() {
  todos = todos.filter((todo) => !todo.completed); // Remove completed todos
  populateTodoList(todos); // Re-render the list
}

// Event listener for the form submission (adding new todo)
document.querySelector("form").addEventListener("submit", addNewTodo);

// Event listener for the "Remove all completed" button
document
  .getElementById("remove-all-completed")
  .addEventListener("click", deleteAllCompletedTodos);

// Initial population of the todo list
populateTodoList(todos);
