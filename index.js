const inputTask = document.getElementById('inputTask');
const buttonAdd = document.getElementById('buttonAdd');
const inputList = document.getElementById('inputList');

let task = JSON.parse(localStorage.getItem('task')) || [];

function displayList() {

    inputList.innerHTML = '';

    for (let i = 0; i < task.length; i++) {

        const taskList = document.createElement('div');
        taskList.textContent = task[i];

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', function () {
            if (checkbox.checked) {
                taskList.style.textDecoration = 'line-through';
            } else {
                taskList.style.textDecoration = 'none';
            }
        })
        const editButton = document.createElement('button');
        editButton.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
        editButton.addEventListener('click', function () {
            editTask(i);
        })

        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
        deleteButton.addEventListener('click', function () {
            deleteTask(i);
        })
        taskList.appendChild(checkbox);
        taskList.appendChild(editButton);
        taskList.appendChild(deleteButton);
        inputList.appendChild(taskList);

    }
}

buttonAdd.addEventListener('click', function () {
    const taskAdded = inputTask.value;
    if (taskAdded.trim() !== '') {
        task.push(taskAdded);
    }
    inputTask.value = '';
    displayList();
    savetask();
}
);

function editTask(index) {
    const thenewText = prompt('Edit your task', task[index]);
    if (thenewText !== null && thenewText !== '') {
        task[index] = thenewText;
    }
    displayList();
    savetask();
}

function deleteTask(index) {
    task.splice(index, 1);
    displayList();
    savetask();
}

function savetask() {
    localStorage.setItem('task', JSON.stringify(task));
}

displayList();
