let inputField = document.getElementById("input-field")
let buttonAddTodo = document.getElementById("add-todo")
let buttonDeleteLastTodo = document.getElementById("remove-last-todo")
let buttonDeleteAllCompleted = document.getElementById("remove-all-completed")
let list = document.getElementById("todo-list");

buttonAddTodo.addEventListener("click", populateTodoList)

function populateTodoList() {
  let inputFieldValue  = inputField.value;
  var newTodo = document.createElement('li');
  newTodo.innerHTML = `- ${inputFieldValue}

  `
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
// let todos = [
//   { task: "Wash the dishes", completed: false },
//   { task: "Do the shopping", completed: false },
// ]; this is commented out because i do not really see the point of keeping this instead of using the inputfield, it was in the original CYF template but I took it out






// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
