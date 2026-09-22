import { consoleInterface } from "../console-interface.js";
import { loadProjects } from "./project-container.js";

export function createTodoBtn(){
    const contentDiv = document.getElementById('content');

    // create button
    const todoBtn = document.getElementById('create-todo');
    todoBtn.textContent = "Create Todo";
    // add click event listener, createTodo() of console interface
    todoBtn.addEventListener('click', () =>{
        consoleInterface.createTodo();
        contentDiv.textContent = '';
        loadProjects();
    });
}