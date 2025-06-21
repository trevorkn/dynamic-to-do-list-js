document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list')

    function addTask() {
        taskText = taskInput.value.trim(); //get and trim the input

        if (taskText === '') {
            alert('Please enter a Task.');
            return;
        }
        const li = document.createElement('li');
        li.textContent = taskText;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'remove';
        removeBtn.className = 'remove-btn';

        removeBtn.onclick = () => {
            taskList.removeChild(li);
        };

        li.appendChild(removeBtn);
        taskList.appendChild(li);

        taskInput.value = '' ;


    }
    // Event listener for Add button
    addButton.addEventListener('click', addTask);

    //Event listener for Enter key in input field
    taskInput.addEventListener('keypress', (event) => {
        if(event.key === 'Enter') {
            addTask();
        }
    })
   
    console.log('DOM fully loaded and parsed')
})