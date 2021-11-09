// Functions to load on site load
window.onload = function (){
    onFirstTimeLoadingSite();
}

// Eventlisteners

// Functions
function onFirstTimeLoadingSite (){
    // Title for header on site
    let headerTitle = document.createElement("h3");
    headerTitle.className = "header-title";
    headerTitle.innerText = "My To-Do List";
    document.body.appendChild(headerTitle);

    // Form to hold "add item input" and "add item button"
    let formContainer = document.createElement("form");
    formContainer.className = "form-container";
    document.body.appendChild(formContainer);

    // Box to add items to list
    let inputToAddItemsToList = document.createElement("input");
    inputToAddItemsToList.setAttribute("type", "text");
    inputToAddItemsToList.className = "add-items-input";
    formContainer.appendChild(inputToAddItemsToList);

    // Button to add items to list
    let buttonToAddItemsToList = document.createElement("button");
    buttonToAddItemsToList.setAttribute("type", "submit");
    buttonToAddItemsToList.className = "add-items-btn";
    buttonToAddItemsToList.innerHTML = "<i class='fas fa-plus'></i>";
    formContainer.appendChild(buttonToAddItemsToList);
}