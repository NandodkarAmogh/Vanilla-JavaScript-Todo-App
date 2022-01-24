//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

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

    //add todo to localstorage
    saveLocalTodos(todoInput.value)

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
        
        //animation
        todo.classList.add("fall")
        removeLocalTodos(todo);
        todo.addEventListener("transitionend", () =>{
            todo.remove()
        })
        
    }

    //checked
    if(item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle("completed")
    }
}

//filter todo 
const filterTodo = (e) => {
    const todos = todoList.childNodes;
    todos.forEach((todo) => {
        switch(e.target.value){
            case "all":
                todo.style.display = 'flex';
                break;
            case "completed":
                if(todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
        }

    });

}

//local storage
const saveLocalTodos = (todo) => {
    //check for an existing todo
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    //push todo into todos
    todos.push(todo);

    //set todos in local storage
    localStorage.setItem('todos', JSON.stringify(todos));
}

//get todos from local storage 
const getTodos = () => {
    //check for an existing todo
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach((todo) => {
        //todo div
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");

        //create li
        const newTodo = document.createElement("li");
        newTodo.innerText=todo;
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
    })
}

//remove todos from local storage 
const removeLocalTodos = (todo) => {
    //check for an existing todo
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    console.log(todos.indexOf(todo.children[0].innerText))
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
}


//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);
document.addEventListener('DOMContentLoaded', getTodos);

