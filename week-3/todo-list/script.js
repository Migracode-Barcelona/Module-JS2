let inputField = document.getElementById("input-field")
let buttonAddTodo = document.getElementById("add-todo")
let buttonDeleteLastTodo = document.getElementById("remove-last-todo")
let buttonDeleteAllCompleted = document.getElementById("remove-all-completed")
let list = document.getElementById("todo-list");


buttonAddTodo.addEventListener("click", populateTodoList)


function populateTodoList(event) {

  let inputFieldValue = inputField.value;

  event.preventDefault();
  if (inputFieldValue.trim() === "") {
    // if the input's empty, do nothing
    return;
  }
addNewTodo(inputFieldValue);
}

function addNewTodo(inputFieldValue) {
  event.preventDefault();

  var newTodo = document.createElement("li");
  newTodo.innerHTML = `<p>- ${inputFieldValue}</p> `;
  addStrikeThroughToggle(newTodo);
  list.appendChild(newTodo);

  inputField.value = ""; 
}


function addStrikeThroughToggle(todoItem) {
  todoItem.addEventListener("click", () => {
    todoItem.classList.toggle("completed");
  });
}


function deleteLast(){
  buttonDeleteLastTodo.addEventListener('click', function() {
    list.removeChild(list.lastElementChild)  })
}
deleteLast()


// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  buttonDeleteAllCompleted.addEventListener('click', function () {
    // Get all children of the list
    let todos = list.querySelectorAll("li");
    
    // Loop through the todos and remove those with the 'completed' class
    todos.forEach(todoItem => {
      if (todoItem.classList.contains("completed")) {
        list.removeChild(todoItem);
      }
    });
  });
}

deleteAllCompletedTodos();
