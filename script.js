const newTaskBtn = document.querySelector(".new-task-btn");
const taksInput = document.querySelector(".task-input");
const tasksList = document.querySelector(".tasks");
const optionSelection = document.querySelector(".lists-select-menu");



//TODO
//disable and enable button when the input field is empty


//add new task on button click
newTaskBtn.addEventListener("click", createTask);
taksInput.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
        createTask();
    }
});


function createTask(){
    const newTask =  taksInput.value;
    if (newTask === '') {
        alert("make sure to type something in.");  
        return;
    } 
    const newListItem = document.createElement('li');
    //TODO
    //add a way to choose groups while creating task
    newListItem.innerHTML = newTask;
    newListItem.classList.add(optionSelection.value);
    newListItem.classList.add("task");
    const removeButton = document.createElement("button");
    removeButton.classList.add("remove-button");
    removeButton.innerHTML = 'x';
    newListItem.appendChild(removeButton);
    tasksList.appendChild(newListItem);
    taksInput.value = '';
}

//add event listeners to tasks that toggles thier state from finished
tasksList.addEventListener("click", (e) => {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("finished"); 
    } 
    if(e.target.tagName === "BUTTON") {
        e.target.parentNode.remove();
    }
});

tasksList.addEventListener("dblclick", (e) => {
    document.removeChild(e.targer);
});


optionSelection.addEventListener("change", (e) => {
    const tasks = document.querySelectorAll('.task');
    console.log('onchange event occured')
    hideAllTasks();
    const currList = e.target.value;
    if(currList === 'none') {
        showAllTasks();
    } else {
        for (const task of tasks) {
            console.log(`inside loop now curr task ${task}`);
            if(task.classList.contains(currList)){
                task.classList.remove('hidden');
            }
        }
    }


});


function hideAllTasks() {
    console.log("hideAllTasks happedned")
    const tasks = document.querySelectorAll('.task');
    for(const task of tasks){
        console.log(`curr task: ${task}`);
        task.classList.add('hidden');
    }
}



function showAllTasks() {
    console.log("showAllTasks happedned")
    const tasks = document.querySelectorAll('.task');
    for(const task of tasks){
        task.classList.remove('hidden');
    }
}
