import { projectList } from "../project-list.js";

export function projectContainer(){
    const contentDiv = document.querySelector('#content');
    
    for(let i = 0; i < projectList.getProjects().length; i++){
        const projectContainer = document.createElement('div');
        projectContainer.classList.add("grid");
        projectContainer.classList.add("projectContainer");


        const projectDetails = document.createElement('div');

        // get project name
        let project = projectList.getProjects()[i];
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


        const todoContainer = document.createElement('ul');
        let items = project.items
        for(let j = 0; j < items.length; j++){
            let item = items[j];

            // create container for individual item
            const itemContainer = document.createElement('li');
            // get todo title
            const todoTitle = document.createElement('div');
            todoTitle.textContent = item.title;
            itemContainer.appendChild(todoTitle);

            // get todo dueDate
            const todoDuedate = document.createElement('div');
            todoDuedate.textContent = item.dueDate;
            // display name, dueDate
            itemContainer.appendChild(todoDuedate);

            todoContainer.appendChild(itemContainer);
        }

        projectContainer.appendChild(projectDetails);
        projectContainer.appendChild(todoContainer);
        

        contentDiv.appendChild(projectContainer);
    }
    
}


