// Function to populate the todo list with tasks, marking completed ones and adding delete buttons
function populateTodoList(todos) {
  let list = document.getElementById("todo-list");

  // Remove any existing todo list items (to avoid duplication)
  list.innerHTML = "";

  // Loop through the todos array and create a list item (li) for each todo
  todos.forEach((todo) => {
    // Create a new <li> element
    const newTodo = document.createElement("li");

    // Create a <span> to hold the todo text
    const todoSpan = document.createElement("span");
    todoSpan.textContent = todo.task;

    // If the todo is completed, add the strikethrough style
    if (todo.completed) {
      newTodo.style.textDecoration = "line-through";
    }

    // Add the tick icon (for toggling completion)
    const tickIcon = document.createElement("i");
    tickIcon.classList.add("fa", "fa-check");
    tickIcon.addEventListener("click", toggleCompleted);

    // Add the delete icon (for removing the todo)
    const deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fa", "fa-trash");
    deleteIcon.addEventListener("click", () => {
      list.removeChild(newTodo); // Remove the todo item from the list
    });

    // Append the span, tick icon, and delete icon to the <li>
    newTodo.appendChild(todoSpan);
    newTodo.appendChild(tickIcon);
    newTodo.appendChild(deleteIcon);

    // Append the new todo item to the list
    list.appendChild(newTodo);
  });
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

// Populate the todo list with initial todos
populateTodoList(todos);

// Function to toggle the completion status of a todo
function toggleCompleted(event) {
  const todoItem = event.target.closest("li");

  // Toggle the line-through style based on completion
  if (todoItem.style.textDecoration === "line-through") {
    todoItem.style.textDecoration = "none"; // Undo strikethrough
  } else {
    todoItem.style.textDecoration = "line-through"; // Apply strikethrough
  }
}

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list.
// These new todos will need the completed and delete buttons added like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();

  // Get the value of the input field (todo text)
  const todoText = document.querySelector("input[type='text']").value;

  if (todoText) {
    // Create a new todo object and add it to the todos array
    const newTodo = { task: todoText, completed: false };
    todos.push(newTodo);

    // Add the new todo to the DOM (the list of todos)
    populateTodoList(todos);

    // Reset the input field after adding the todo
    document.querySelector("input[type='text']").value = "";
  }
}

// Advanced challenge: Write a function that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  const todoList = document.getElementById("todo-list");
  const todos = [...todoList.querySelectorAll("li")];

  todos.forEach((todo) => {
    // Remove the todo if it is completed (i.e., has line-through style)
    if (todo.style.textDecoration === "line-through") {
      todoList.removeChild(todo); // Remove completed todos
    }
  });

  // Update the todos array to reflect the removal
  todos = todos.filter((todo) => todo.style.textDecoration !== "line-through");
}

// Add event listener to the 'Add Todo' form submit button
document.querySelector("form").addEventListener("submit", addNewTodo);

// Add event listener for the "Remove all completed" button
document
  .getElementById("remove-all-completed")
  .addEventListener("click", deleteAllCompletedTodos);
