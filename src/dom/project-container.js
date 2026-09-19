import { projectList } from "../project-list.js";

export function projectContainer(){
    const contentDiv = document.querySelector('#content');

    const projectContainer = document.createElement('div');

    // get project name
    let project = projectList.getProjects()[0];
    let projectName = document.createElement('div');
    projectName.textContent = project.name;
    // display 
    projectContainer.appendChild(projectName);

    // get project priority
    let projectPriority = document.createElement('div');
    projectPriority.textContent = project.priority;
    // display
    projectContainer.appendChild(projectPriority);
    let todoHeader = document.createElement('div');
    todoHeader.textContent = 'items:';
    projectContainer.appendChild(todoHeader);

    let items = project.items
    for(let i = 0; i < items.length; i++){
        let item = items[i];
        // get todo title
        let todoTitle = document.createElement('div');
        todoTitle.textContent = item.title;
        projectContainer.appendChild(todoTitle);

        // get todo dueDate
        let todoDuedate = document.createElement('div');
        todoDuedate.textContent = item.dueDate;
        // display name, dueDate
        projectContainer.appendChild(todoDuedate);
    }
    

    contentDiv.appendChild(projectContainer);
}


