//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Functions
const addTodo = (event) => {
    event.preventDefault();  
    console.log('clicked')
}

//Event Listeners
todoButton.addEventListener('click', addTodo);
