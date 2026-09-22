import { consoleInterface } from "../console-interface.js";
import { loadProjects } from "./project-container.js";

export function deleteProject(){
    const contentDiv = document.getElementById('content');

    // select delete button from template.html
    const deleteBtn = document.getElementById('delete-project');
    // addeventlistener for delete button
    deleteBtn.addEventListener('click', () => {
        consoleInterface.deleteProject();
        // empty div textcontent
        contentDiv.textContent = '';
        // load projects
        loadProjects();
    });
    
}