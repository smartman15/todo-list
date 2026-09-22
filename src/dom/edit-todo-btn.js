import { consoleInterface } from "../console-interface.js";
import { loadProjects } from "./project-container.js";

export function editTodo(){
    const contentDiv = document.getElementById('content');

    // create button
    const editBtn = document.getElementById('edit-todo');
    // add click event listener, createTodo() of console interface
    editBtn.addEventListener('click', () =>{
        consoleInterface.editTodo();
        contentDiv.textContent = '';
        loadProjects();
    });
}