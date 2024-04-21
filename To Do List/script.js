document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    const clearBtn = document.getElementById('clear-tasks');

    loadTasks();

    // Event listener for form submission
    taskForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            saveTaskToLocalStorage(taskText);
            taskInput.value = '';
        }
    });

    // Event listener for deleting a task
    taskList.addEventListener('click', function(e) {
        if (e.target.classList.contains('delete-btn')) {
            e.target.parentElement.remove();
            removeTaskFromLocalStorage(e.target.parentElement.textContent);
        }
    });

    // Event listener for clearing all tasks
    clearBtn.addEventListener('click', function() {
        while (taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
        }
        localStorage.clear();
    });

    // Function to add a task
    function addTask(taskText) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="task">${taskText}</span>
            <button class="delete-btn">Delete</button>
        `;
        taskList.appendChild(li);
    }

    // Function to save task to local storage
    function saveTaskToLocalStorage(taskText) {
        let tasks;
        if (localStorage.getItem('tasks') === null) {
            tasks = [];
        } else {
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }
        tasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Function to remove task from local storage
    function removeTaskFromLocalStorage(taskText) {
        let tasks;
        if (localStorage.getItem('tasks') === null) {
            tasks = [];
        } else {
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }
        const index = tasks.indexOf(taskText);
        if (index !== -1) {
            tasks.splice(index, 1);
        }
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Function to load tasks from local storage
    function loadTasks() {
        let tasks;
        if (localStorage.getItem('tasks') === null) {
            tasks = [];
        } else {
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }
        tasks.forEach(function(task) {
            addTask(task);
        });
    }
});
