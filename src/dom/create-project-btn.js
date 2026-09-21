 import { consoleInterface } from "../console-interface.js";
 import { loadProjects } from "./project-container.js";

export function createProject(){
    // get content div from template.html
    const contentDiv = document.querySelector('#content');

    const projectContainer = document.createElement('div');
    const createBtn = document.getElementById('create-project');
    createBtn.addEventListener("click", consoleInterface.createProject);
    
    loadProjects();
}