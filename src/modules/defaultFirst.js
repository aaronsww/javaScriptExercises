// import {getDetails} from './toDos';

function defaultFirst(){
    const mainContent = document.querySelector(".mainContainer");

    const inboxTitle = document.createElement('div');
    inboxTitle.textContent = "Inbox";
    inboxTitle.setAttribute('id','inbox-title');

    const addToDo = document.createElement('div');
    addToDo.textContent = "+ Add Task"

    mainContent.appendChild(inboxTitle);
    mainContent.appendChild(addToDo);

    addToDo.addEventListener('click', createForm)

    console.log("hey1")
}

function getDetails(){
    const toDoTitle = document.getElementById("to-do-title");
    const a = generate(toDoTitle.value);
}

function generate(title){
    return {
        title
    }
}

function createForm(){
    //take away display: none
    // const takeInput = document.getElementById("#whee");
    // takeInput.classList.remove("take-input")
    console.log("hey2")
}

export {defaultFirst, getDetails};