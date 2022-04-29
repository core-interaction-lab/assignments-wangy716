const addTextarea = document.getElementById("todo-textarea");
const addTodoBtn = document.getElementById("add-todo-btn");
const todoContainer = document.getElementById("todo-container");

const state = {  //keeping track the state of app
    todoItems:[],
};

const setTodoItems = items => {
    state.todoItems = items;
}

const addTodoItem = item => {
    const todoItemsCopy = state.todoItems.slice();
    todoItemsCopy.push(item);
    setTodoItems(todoItemsCopy);
}

const buildTodoItem = item => {
    const todoEl = document.createElement('article');
    todoEl.innerHTML = item;
    return todoEl;
};

const main = () => {
    addTodoBtn.addEventListener('click', evt => {
        const todoValue = addTextarea.value;
        if(todoValue.length > 0){
            addTodoItem(todoValue);
            todoContainer.innerHTML = '';
            const todoItemEls = state.todoItems.map(buildTodoItem);
            todoContainer.append(...todoItemEls);
        }
    });
};

main();