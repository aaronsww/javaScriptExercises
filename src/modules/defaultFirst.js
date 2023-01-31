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

    //addToDo.addEventListener('click', createForm) to display form to be entered

    console.log("hey1")
}

let a = [];
// const toDOTitle = document.querySelector(".to-do-title");

function getDetails(){
    const toDoTitle = document.getElementById("to-do-title");
    a.push(generate(toDoTitle.value));
    toDoTitle.value = '';
    console.log(a)
}

function generate(title){
    return {
        title
    }
}

export {defaultFirst, getDetails};
