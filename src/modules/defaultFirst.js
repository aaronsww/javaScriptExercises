// import {toDos} from './toDos';

function defaultFirst(){
    const mainContent = document.querySelector(".mainContainer");

    const inboxTitle = document.createElement('div');
    inboxTitle.textContent = "Inbox";
    inboxTitle.setAttribute('id','inbox-title');

    const addToDo = document.createElement('div');
    addToDo.textContent = "+ Add Task"
   addToDo.addEventListener('click', createForm)
    mainContent.appendChild(inboxTitle);
}

function createForm(){
    //take away dsiaplay: none
}

export {defaultFirst};