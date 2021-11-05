window.onload = function (){
    firstTimeLoadingSite();
}

function firstTimeLoadingSite(){
    let typeTasksHere = document.createElement("input");
    typeTasksHere.setAttribute("type", "text");
    typeTasksHere.className = "addTasks";

    document.body.appendChild(typeTasksHere);
}