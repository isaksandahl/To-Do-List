// Functions to load on site load
window.onload = function (){
    firstTimeLoadingSite();
}

// Functions
function firstTimeLoadingSite(){
    // get button to add tasks to list
    let addTaskButton = document.getElementById("add-items-button");
    addTaskButton.addEventListener("click", clickToAdd);
}

// Eventlistener functions
function clickToAdd(e){
    e.preventDefault();

    // get the input-field
    let inputField = document.getElementById("add-items-input");
    
    // create div for added tasks
    let addedListContainer = document.createElement("div");
    addedListContainer.className = "list-container";
    
    // create checked button for task
    let checkedButton = document.createElement("button");
    checkedButton.innerHTML = "<i class='fas fa-check'></i>";
    checkedButton.className = "checked-btn";
    addedListContainer.appendChild(checkedButton);
    
    // create li-task
    let addedTask = document.createElement("li");
    addedTask.innerText = inputField.value;
    addedListContainer.appendChild(addedTask);
    
    
    // create remove button for task
    let removeButton = document.createElement("button");
    removeButton.innerHTML = "<i class='fas fa-trash-alt'></i>";
    removeButton.className = "remove-btn";
    addedListContainer.appendChild(removeButton);
    
    // get parent containers and append the list container
    let listParentUl = document.getElementById("list-parent");
    let parentContainer = document.getElementById("task-container");
    listParentUl.appendChild(addedListContainer);
    parentContainer.appendChild(listParentUl);
    
    // remove value of input field after click
    inputField.value = "";
}




