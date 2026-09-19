import { projectList } from "../project-list.js";

export function projectContainer(){
    const contentDiv = document.querySelector('#content');
    const projectContainer = document.createElement('div');


    const projectDetails = document.createElement('div');

    // get project name
    let project = projectList.getProjects()[0];
    const projectName = document.createElement('div');
    projectName.textContent = project.name;
    // display 
    projectDetails.appendChild(projectName);

    // get project priority
    const projectPriority = document.createElement('div');
    projectPriority.textContent = project.priority;
    // display
    projectDetails.appendChild(projectPriority);
    const todoHeader = document.createElement('div');
    todoHeader.textContent = 'items:';
    projectDetails.appendChild(todoHeader);


    const todoContainer = document.createElement('li');
    let items = project.items
    for(let i = 0; i < items.length; i++){
        let item = items[i];
        // get todo title
        const todoTitle = document.createElement('ul');
        todoTitle.textContent = item.title;
        todoContainer.appendChild(todoTitle);

        // get todo dueDate
        const todoDuedate = document.createElement('ul');
        todoDuedate.textContent = item.dueDate;
        // display name, dueDate
        todoContainer.appendChild(todoDuedate);
    }

    projectContainer.appendChild(projectDetails);
    projectContainer.appendChild(todoContainer);
    

    contentDiv.appendChild(projectContainer);
}


