const todoForm = document.querySelector('form');
const todoInput = document.getElementById('todo-input');
const todoListUL = document.getElementById('todo-list');

let allTodos = [];

todoForm.addEventListener('submit', function(e){
    e.preventDefault();
    addTodo();
})

function addTodo(){
    const todoText = todoInput.value.trim();

    if(todoText.lenght > 0){
        allTodos.push(todoText);
        createTodoItem(todoText);
        todoInput.value = " ";
    }
    // console.log(allTodos);
    // alert(todoText);
}

function createTodoItem(todo){
    const todoLI = document.createElement("li");
    todoLI.innerText = todo;
    todoListUL.append(todoLI);
}