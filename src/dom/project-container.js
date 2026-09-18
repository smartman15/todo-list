import { projectList } from "../project-list.js";

export function projectContainer(){
    const container = document.querySelector('#content');

    const projectContainer = document.createElement('div');

    // get project name
    let project = projectList.getProjects()[0];
    let projectName = document.createElement('div');
    projectName.textContent = project.name;
    // display 
    projectContainer.appendChild(projectName);

    // get project priority
    // display

    // get todo name
    // get todo deadline
}


