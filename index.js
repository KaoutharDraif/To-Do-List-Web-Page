const inputTask = document.getElementById('inputTask');
const buttonAdd = document.getElementById('buttonAdd');
const inputList = document.getElementById('inputList');

let task = [];

function displayList() {

    inputList.innerHTML = '';

    for (let i = 0; i < task.length; i++) {

        const taskList = document.createElement('div');
        taskList.textContent = task[i];
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', function(){
        if (checkbox.checked) {
            taskList.style.textDecoration = 'line-through';
        } else {
            taskList.style.textDecoration = 'none';
        }
    })

        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
        deleteButton.addEventListener('click', function () {
            deleteTask(i);
        })
        taskList.appendChild(deleteButton);
        inputList.appendChild(taskList);
        taskList.appendChild(checkbox);
    }
}



buttonAdd.addEventListener('click', function () {
    const taskAdded = inputTask.value;
    if (taskAdded.trim() !== '') {
        task.push(taskAdded);
    }
    inputTask.value = '';
    displayList();
}
);

function deleteTask(index) {
    task.splice(index, 1);
    displayList();
}


