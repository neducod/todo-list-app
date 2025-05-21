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
        // createTodoItem(todoText);
        updateTodoList();
        todoInput.value = "";
    }
    // console.log(allTodos);
    // alert(todoText);
}

function updateTodoList (){
    todoListUL.innerHTML = "";
    allTodos.forEach((todo, todoIndex)=>{
        todoItem = createTodoItem(todo, todoIndex);
        todoListUL.append(todoItem);
    })
}
function createTodoItem(todo){
    const todoLI = document.createElement("li");
    todoLI.innerText = todo;
    return todoLI;
    // todoListUL.append(todoLI);
}