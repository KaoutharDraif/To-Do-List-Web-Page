const inputTask = document.getElementById('inputTask');
const buttonAdd = document.getElementById('buttonAdd');
const inputList = document.getElementById('inputList');




buttonAdd.addEventListener('click', function () {
    const numberAdded = inputTask.value;
    if (numberAdded.trim() !== '') {
        const taskList = document.createElement('li');
        taskList.textContent = numberAdded;
        inputTask.value = '';
        inputList.appendChild(taskList);
    }
}

)

// let numb = [];

// function myFunction() {
// const numberAdded = inputNumber.value;
// let text;
// if(numberAdded < 1 || numberAdded > 10){
//     text = "Input Not Valid";}
// else {
//     text = "Input Valid"
//     numb.push(numberAdded);
//     document.getElementById("inputValid").innerHTML = numb;
// }
// document.getElementById("validation").innerHTML = text;


// }


