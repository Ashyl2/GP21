document.addEventListener('DOMContentLoaded', loadTodos);

const addButton = document.getElementById('add-todo');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Event listener for adding a todo
addButton.addEventListener('click', addTodo);

function addTodo() {
    const todoText = todoInput.value.trim();
    
    if (todoText) {
        const todoItem = document.createElement('li');
        todoItem.innerHTML = `${todoText} <span class="delete">X</span>`;
        
        // Toggle completed task
        todoItem.addEventListener('click', () => {
            todoItem.classList.toggle('completed');
        });
        
        // Delete task
        todoItem.querySelector('.delete').addEventListener('click', (e) => {
            e.stopPropagation();
            todoItem.remove();
            saveTodos();
        });
        
        // Append to list
        todoList.appendChild(todoItem);
        
        // Clear input field
        todoInput.value = '';
        
        // Save to localStorage
        saveTodos();
    }
}

// Save todos to localStorage
function saveTodos() {
    const todos = [];
    const todoItems = document.querySelectorAll('#todo-list li');
    
    todoItems.forEach(item => {
        todos.push({
            text: item.firstChild.textContent,
            completed: item.classList.contains('completed')
        });
    });

    localStorage.setItem('todos', JSON.stringify(todos));
}

// Load todos from localStorage
function loadTodos() {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    
    if (storedTodos) {
        storedTodos.forEach(todo => {
            const todoItem = document.createElement('li');
            todoItem.textContent = todo.text;
            if (todo.completed) {
                todoItem.classList.add('completed');
            }
            
            // Add delete button
            const deleteBtn = document.createElement('span');
            deleteBtn.textContent = 'X';
            deleteBtn.classList.add('delete');
            todoItem.appendChild(deleteBtn);
            
            // Append to list
            todoList.appendChild(todoItem);

            // Add event listeners
            todoItem.addEventListener('click', () => {
                todoItem.classList.toggle('completed');
                saveTodos();
            });
            
            deleteBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                todoItem.remove();
                saveTodos();
            });
        });
    }
}
