document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Initialize tasks array
    let tasks = [];

    // Function to render a single task item
    function renderTask(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove-btn');

        removeBtn.onclick = () => {
            taskList.removeChild(li);
            tasks = tasks.filter(task => task !== taskText);
            localStorage.setItem('tasks', JSON.stringify(tasks));
        };

        li.appendChild(removeBtn);
        taskList.appendChild(li);
    }

    // Load tasks from localStorage and render them
    function loadTasksFromLocalStorage() {
        const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        savedTasks.forEach(taskText => {
            renderTask(taskText);
        });
        return savedTasks;
    }

    // Add a new task
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === '') {
            alert('Please enter a Task.');
            return;
        }

        // Use renderTask here instead of duplicating code
        renderTask(taskText);

        tasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(tasks));

        taskInput.value = '';
    }

    // Load existing tasks when the page loads
    tasks = loadTasksFromLocalStorage();

    // Event listeners for adding tasks
    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    console.log('DOM fully loaded and parsed');
});
