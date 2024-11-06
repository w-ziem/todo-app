const newTaskBtn = document.querySelector(".new-task-btn");
const taksInput = document.querySelector(".task-input");
const tasksList = document.querySelector(".tasks");
const optionSelection = document.querySelector(".lists-select-menu");
const emptyImage = document.querySelector(".empty-list-icon");





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
    const taskText = document.createElement('span');
    taskText.classList.add("task-text");
    taskText.innerHTML = newTask;
    newListItem.appendChild(taskText);
    newListItem.classList.add(optionSelection.value);
    newListItem.classList.add("task");
    // dodac checkboxy do zadan
    const removeButton = document.createElement("button");
    removeButton.classList.add("remove-button");
    removeButton.innerHTML = 'x';
    newListItem.appendChild(removeButton);
    tasksList.appendChild(newListItem);
    newListItem.classList.toggle("hidden");
    emptyImage.classList.add("hidden");
    newListItem.classList.toggle("hidden");
    taksInput.value = '';
}

//add event listeners to tasks that toggles thier state from finished
tasksList.addEventListener("click", (e) => {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("finished");
    } 
    if(e.target.tagName === "SPAN") {
        e.target.parentNode.classList.toggle("finished");
    }
    if(e.target.tagName === "BUTTON") {
        if(e.target.parentNode.classList.contains("finished")){
            e.target.parentNode.remove();
            if (checkEmptyList()) {
                emptyImage.classList.remove('hidden');
            }
        } else {
            const choice = confirm("Are you sure you want to delete unfinished task?");
            if(choice){
                e.target.parentNode.remove();
                if(checkEmptyList()) {
                    emptyImage.classList.remove("hidden");
                }
            }
        }
    }
});




optionSelection.addEventListener("change", (e) => {
    const tasks = document.querySelectorAll('.task');
    hideAllTasks();
    const currList = e.target.value;
    if(currList === 'none') {
        showAllTasks();
        if(checkEmptyList()){
            emptyImage.classList.remove('hidden');
        } else{
            emptyImage.classList.add("hidden"); 
        }
//dodac zeby pokazywalo z jakiej sa grupy przy ogolnym wyswietlaniu
    } else {
        let shownTask = 0;
        for (const task of tasks) {
            if(task.classList.contains(currList)){
                shownTask += 1;
                task.classList.remove('hidden');
            }
        }
        if(shownTask === 0){
            emptyImage.classList.remove("hidden");
        } else {
            emptyImage.classList.add("hidden");
        }
    }


});


function hideAllTasks() {
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


function checkEmptyList() {
    if (tasksList.children.length === 0) {
        return true;
    } else {
        return false;
    }
}
