// Function to format time to AM/PM
// function formatTimeToAMPM(time) {
//     const [hours, minutes] = time.split(":");
//     const date = new Date();
//     date.setHours(hours);
//     date.setMinutes(minutes);
    
//     let hoursFormatted = date.getHours();
//     const minutesFormatted = date.getMinutes();
//     const period = hoursFormatted >= 12 ? "PM" : "AM";
//     hoursFormatted = hoursFormatted % 12 || 12; // Convert 24-hour to 12-hour format
    
//     return `${hoursFormatted}:${minutesFormatted < 10 ? '0' + minutesFormatted : minutesFormatted} ${period}`;
}

// Get current user's todos
function getTodos() {
    // const user = JSON.parse(localStorage.getItem('user'));
    // return JSON.parse(localStorage.getItem(`todos_${user.id}`) || '[]');
}

// Save todos
function saveTodos(todos) {
    // const user = JSON.parse(localStorage.getItem('user'));
    // localStorage.setItem(`todos_${user.id}`, JSON.stringify(todos));
}

// Display todos
function displayTodos() {
    const todos = getTodos();
    const todosList = document.getElementById('todosList');
    todosList.innerHTML = '';

    todos.forEach(todo => {
        const todoCard = document.createElement('div');
        todoCard.className = 'todo-card';
        
        // Format the time
        const formattedTime = formatTimeToAMPM(todo.time);

        // todoCard.innerHTML = `
        //     <h3>${todo.title}</h3>
        //     <p><strong>Location:</strong> ${todo.location}</p>
        //     <p><strong>Description:</strong> ${todo.description}</p>
        //     <p><strong>Date:</strong> ${todo.date}</p>
        //     <p><strong>Time:</strong> ${formattedTime}</p>
        //     <div class="todo-actions">
        //         <button onclick="editTodo(${todo.id})" class="btn-edit">
        //             <i class="fas fa-edit"></i> Edit
        //         </button>
        //         <button onclick="deleteTodo(${todo.id})" class="btn-delete">
        //             <i class="fas fa-trash"></i> Delete
        //         </button>
        //     </div>
        // `;
        todosList.appendChild(todoCard);
    });
}

// Add new todo
function handleAddTodo(event) {
    event.preventDefault();
    
    // const title = document.getElementById('todoTitle').value;
    // const location = document.getElementById('todoLocation').value;
    // const description = document.getElementById('todoDescription').value;
    // const date = document.getElementById('todoDate').value;
    // const time = document.getElementById('todoTime').value;
    
    const todos = getTodos();
    const newTodo = {
        id: Date.now(),
        title,
        location,
        description,
        date,
        time
    };
    
    todos.push(newTodo);
    saveTodos(todos);
    
    // Reset form
    event.target.reset();
    displayTodos();
}

// Delete todo
// function deleteTodo(id) {
//     Swal.fire({
//         title: 'Are you sure?',
//         text: "You won't be able to revert this!",
//         icon: 'warning',
//         showCancelButton: true,
//         confirmButtonColor: '#dc3545',
//         cancelButtonColor: '#6c757d',
//         confirmButtonText: 'Yes, delete it!'
//     }).then((result) => {
//         if (result.isConfirmed) {
//             const todos = getTodos().filter(todo => todo.id !== id);
//             saveTodos(todos);
//             displayTodos();
        }
    });
}

// Edit todo
function editTodo(id) {
    const todo = getTodos().find(todo => todo.id === id);
    if (!todo) return;
    
    // Fill the edit form
    // document.getElementById('editTodoId').value = todo.id;
    // document.getElementById('editTodoTitle').value = todo.title;
    // document.getElementById('editTodoLocation').value = todo.location;
    // document.getElementById('editTodoDescription').value = todo.description;
    // document.getElementById('editTodoDate').value = todo.date;
    // document.getElementById('editTodoTime').value = todo.time;
    
    // Show modal
    document.getElementById('editModal').style.display = 'block';
}

// Handle edit todo submission
function handleEditTodo(event) {
    event.preventDefault();
    
    // const id = parseInt(document.getElementById('editTodoId').value);
    // const title = document.getElementById('editTodoTitle').value;
    // const location = document.getElementById('editTodoLocation').value;
    // const description = document.getElementById('editTodoDescription').value;
    // const date = document.getElementById('editTodoDate').value;
    // const time = document.getElementById('editTodoTime').value;
    
    const todos = getTodos();
    const todoIndex = todos.findIndex(todo => todo.id === id);
    
    if (todoIndex !== -1) {
        todos[todoIndex] = { ...todos[todoIndex], title, location, description, date, time };
        saveTodos(todos);
        displayTodos();
    }
    
    // Close modal
    document.getElementById('editModal').style.display = 'none';
}

// Close modal when clicking the close button or outside the modal
document.addEventListener('DOMContentLoaded', () => {
    // const modal = document.getElementById('editModal');
    // const closeBtn = document.querySelector('.close');
    
    closeBtn.onclick = () => {
        modal.style.display = 'none';
    };
    
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
    
    // Initial display of todos
    displayTodos();
});



// Footer
function year() {
    let date = new Date();
    let year = date.getFullYear();
    document.getElementById('year').innerHTML = year;
}

year();
