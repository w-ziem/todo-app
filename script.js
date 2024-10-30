const newTaskBtn = document.querySelector(".new-task-btn");
const taksInput = document.querySelector(".task-input");
const tasksList = document.querySelector(".tasks");
const tasks = document.querySelectorAll("li");



//TODO
//disable and enable button when the input field is empty


//add new task on button click
newTaskBtn.addEventListener("click", () => {
    const newTask =  taksInput.value;
    if (newTask === '') {
        alert("make sure to type something in.");  
        return;
    } 
    const newListItem = document.createElement('li');
    //TODO
    //add a way to choose groups while creating task
    newListItem.innerHTML = newTask;
    tasksList.appendChild(newListItem);
    taksInput.value = '';
});


//add event listeners to all tasks