function populateTodoList(todos) {
  let list = document.getElementById("list-Container");
  list.innerHTML = "";

  todos.forEach((todo) => {
    const listItem = document.createElement("li");

    // Wrap the text in a span
    const textSpan = document.createElement("span");
    textSpan.textContent = todo.task;

    // Completed Button
    const completedButton = document.createElement("button");
    completedButton.textContent = "✓";
    completedButton.style.marginLeft = "10px";
    completedButton.onclick = () => {
      textSpan.style.textDecoration =
        textSpan.style.textDecoration === "line-through" ? "none" : "line-through";
      todo.completed = !todo.completed;
    };

    // Delete Button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "✗";
    deleteButton.style.marginLeft = "5px";
    deleteButton.onclick = () => {
      listItem.remove();
    };

    // Append everything to the list item
    listItem.appendChild(textSpan);
    listItem.appendChild(completedButton);
    listItem.appendChild(deleteButton);
    list.appendChild(listItem);
  });
}


// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];



// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  const inputText = document.querySelector("input[type='text']");
  const newTodosText = inputText.value.trim();
  if(newTodosText !== ""){
    todos.push({ task: newTodosText, completed: false })
    populateTodoList(todos);
    inputText.value = "";
  }
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  todos = todos.filter((todo) => !todo.completed); // Keep only uncompleted todos
  populateTodoList(todos); // Refresh the list
}

// Event Listeners
document.querySelector("form").addEventListener("submit", addNewTodo);
document
  .getElementById("remove-all-completed")
  .addEventListener("click", deleteAllCompletedTodos);

// Initial population of todos
populateTodoList(todos);
