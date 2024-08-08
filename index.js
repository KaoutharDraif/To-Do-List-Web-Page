const inputTask = document.getElementById('inputTask');
const buttonAdd = document.getElementById('buttonAdd');
const inputList = document.getElementById('inputList');

let task = [];

function displayList() {

    inputList.innerHTML = '';

    for (let i = 0; i < task.length; i++) {

        const taskList = document.createElement('div');
        taskList.textContent = task[i];
        const markAsdone = document.createElement('checkbox')
        markAsdone.addEventListener('click', function () {
            if (markAsdone.checked) {
                taskList.className = '';
            }
        })
        const deleteButton = document.createElement('button');
        deleteButton.classsName = '<i class="fa-solid fa-trash"></i>';
        deleteButton.addEventListener('click', function () {
            deleteTask(i);
        })
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
}
);

function deleteTask(index) {
    task.splice(index, 1);
    displayList();
}


