//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Functions
const addTodo = (event) => {
    event.preventDefault(); //prevent form from submitting 
    console.log('clicked')

    //todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //create li
    const newTodo = document.createElement("li");
    newTodo.innerText=todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //checked button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>' ;
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>' ;
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    
    //append to list
    todoList.appendChild(todoDiv);

    //clear todoInput value
    todoInput.value = ""
}

const deleteCheck = (e) => {
    const item = e.target;

    //delete todo
    if(item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        todo.remove()
    }
}


//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck)
