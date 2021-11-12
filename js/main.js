class Task {
    constructor(isDone, taskItem){
        this.isDone = isDone;
        this.taskItem = taskItem;
    }
}

window.onload = function (){
    addTasktoList();
    createHtml();
}

let listOfTasks = [];

let inputField = document.querySelector("#add-items-input-id");

let toDoLocalStorage = localStorage.getItem("toDoLocalStorage");

if (toDoLocalStorage === null){
    listOfTasks = [];
    firstTimeLoadingSite();
}
else {
    listOfTasks = JSON.parse(toDoLocalStorage);
}

//
// FUNCTIONS
//
function firstTimeLoadingSite(){
    let firstTask = new Task(true, "Wake Up");
    let secondTask = new Task(false, "Eat Something");
    let thirdTask = new Task(false, "Go Workout");
    let fourthTask = new Task(false, "Eat Something Again");

    listOfTasks.push(firstTask, secondTask, thirdTask, fourthTask);
}

function addTasktoList(){
    // get button to add tasks
    const addItemButton = document.querySelector("#add-items-button-id");

    // create eventlistener to add button
    addItemButton.addEventListener("click", clickToAdd);
}

function createHtml (){
    localStorage.setItem("toDoLocalStorage", JSON.stringify(listOfTasks));

    let parentContainer = document.getElementById("task-container-id");
    let listParentUl = document.getElementById("list-parent");
    listParentUl.innerHTML = "";

    for (let i = 0; i < listOfTasks.length; i++) {
        console.log(i);
 
        // create div for added tasks
        let addedListContainer = document.createElement("div");
        addedListContainer.className = "list-container";
        
        // create checked button for task
        let checkedButton = document.createElement("button");
        checkedButton.innerHTML = "<i class='fas fa-check'></i>";
        checkedButton.className = "checked-btn";
        checkedButton.addEventListener("click", () => { ifTaskIsComplete(listOfTasks[i]) });
        addedListContainer.appendChild(checkedButton);
        
        if(listOfTasks[i].isDone === true){
            addedListContainer.classList.add("checked-btn-complete");
        }

        // create li-task
        let addedTask = document.createElement("li");
        addedTask.innerText = listOfTasks[i].taskItem;
        addedListContainer.appendChild(addedTask);
        
        
        // create remove button for task
        let removeButton = document.createElement("button");
        removeButton.innerHTML = "<i class='fas fa-trash-alt'></i>";
        removeButton.className = "remove-btn";
        removeButton.addEventListener("click", () => { removeClickedTask(i) });
        addedListContainer.appendChild(removeButton);
        
        // get parent containers and append the list container
        //let parentContainer = document.getElementById("task-container");
        listParentUl.appendChild(addedListContainer);
        parentContainer.appendChild(listParentUl);
    }
}

//
// EVENTLISTENERS
//
function clickToAdd(e){
    e.preventDefault();

    let inputField = document.querySelector("#add-items-input-id");
    
    let newTask = new Task(false, inputField.value);
    
    listOfTasks.push(newTask);

    if(inputField.value === ""){
        return false;
    }

    inputField.value = "";

    createHtml();
}

function ifTaskIsComplete(taskClicked){
    taskClicked.isDone = !taskClicked.isDone;
    createHtml();
}

function removeClickedTask(i){
    listOfTasks.splice(i, 1);
    createHtml();
}