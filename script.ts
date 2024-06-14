// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const dueDateInput = document.getElementById('due-date');
    const priorityInput = document.getElementById('priority');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', addTask);

    function addTask(event) {
        event.preventDefault();
        
        const taskText = taskInput.value;
        const dueDate = dueDateInput.value;
        const priority = priorityInput.value;

        if (taskText.trim() === '') return;

        const taskItem = document.createElement('li');
        taskItem.classList.add(`priority-${priority}`);

        const taskContent = document.createElement('span');
        taskContent.textContent = `${taskText} (Due: ${dueDate})`;

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.addEventListener('click', () => {
            taskContent.classList.toggle('task-completed');
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });

        taskItem.appendChild(taskContent);
        taskItem.appendChild(completeButton);
        taskItem.appendChild(deleteButton);

        taskList.appendChild(taskItem);

        taskInput.value = '';
        dueDateInput.value = '';
        priorityInput.value = 'low';
    }
});
