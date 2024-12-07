function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  list.innerHTML = "";
  todos.forEach((todo) => {
    const listItem = document.createElement("li");
    listItem.className =
      "list-group-item d-flex justify-content-between align-items-center";
    listItem.textContent = todo.task;
    if (todo.completed) {
      listItem.style.textDecoration = "line-through";
    }
    const badge = document.createElement("span");
    badge.className = "badge bg-primary rounded-pill";

    // Create a button to mark the task as completed
    const checkButton = document.createElement("i");
    checkButton.className = "fa fa-check";
    checkButton.style.cursor = "pointer";
    checkButton.addEventListener("click", () => {
      todo.completed = !todo.completed; // Toggle the completed status
      listItem.style.textDecoration = todo.completed ? "line-through" : "none"; // Update the style
    });

    // Create a button to delete the task
    const deleteButton = document.createElement("i");
    deleteButton.className = "fa fa-trash";
    deleteButton.style.cursor = "pointer";
    deleteButton.addEventListener("click", () => {
      listItem.remove(); // Remove the task from the DOM
    });

    // Append the buttons to the badge
    badge.appendChild(checkButton);
    badge.appendChild(deleteButton);

    // Append the badge to the list item
    listItem.appendChild(badge);

    // Append the list item to the todo list
    list.appendChild(listItem);
  });
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  const inputField = document.querySelector("input[type='text']");
  const newTodoTask = inputField.value.trim();
  if (newTodoTask === "") {
    alert("Please enter a valid task.");
    return;
  }

  todos.push({ task: newTodoTask, completed: false });
  populateTodoList(todos);
  inputField.value = "";
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
  todos = todos.filter((todo) => !todo.completed);
  populateTodoList(todos);
}

// Add an event listener to the form's submit button to add a new todo
const addButton = document.querySelector('button[type="submit"]');
addButton.addEventListener("click", addNewTodo);

// Add an event listener to the "Remove all completed" button
const removeCompletedButton = document.getElementById("remove-all-completed");
removeCompletedButton.addEventListener("click", deleteAllCompletedTodos);
