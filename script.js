const form = document.querySelector("#to-do-form");
const toDoInput = document.querySelector("#to-do-input");
const toDoList = document.querySelector("#to-do-list");
const toDoCount = document.querySelector("#to-do-count");
const completedToDoList = document.querySelector("#completed-list");
const completedToDoCount = document.querySelector("#completed-count");

let toDos = [];
let completedToDos = [];

form.addEventListener("submit", addToDo);

// 1. ADDING TO-DOS

// add event function
function addToDo(event) {
  // prevents refresh on submit
  event.preventDefault();
  
  let toDo = toDoInput.value;
  
  // if there is a todo push it to array and rerender todos
  if (toDo) {
    toDos.push(toDo);
    renderToDos();
  }
  toDoInput.value = ""; // clear input
}


// render all function
function renderToDos() {
  toDoList.innerHTML = ""; // clear list first
  
  // For each element in array, render that toDo
  for (let i = 0; i < toDos.length; i++) {
    renderToDo(toDos[i]);
  }
  // Can also use for...of loop
  // for (toDo of toDos) {
  //   renderToDo(toDo);
  // }
  toDoCount.innerText = toDos.length;
}


// render single item function 
function renderToDo(itemText) {
  let li = document.createElement("li");
  li.classList.add("to-do-item");
  li.innerText = itemText;
  toDoList.appendChild(li);
  
  li.addEventListener("click", function(){
    completeToDo(itemText);
  })
}

// 2. COMPLETE TO-DOS

// move to complete function
function completeToDo(toDo) {
  completedToDos.push(toDo);
  toDos = toDos.filter(text => text !== toDo);
  // Re-render both lists
  renderToDos();
  renderCompletedToDos();
}

// render all function
function renderCompletedToDos() {
  completedToDoList.innerHTML = "";

  for (completedToDo of completedToDos) {
    renderCompleted(completedToDo);
  }
  completedToDoCount.innerText = completedToDos.length;
}

// render single item function
function renderCompleted(itemText) {
  let li = document.createElement("li");
  li.classList.add("done-item");
  li.innerText = itemText;
  completedToDoList.appendChild(li);
}