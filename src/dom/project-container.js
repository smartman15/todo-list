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
        projectName.textContent = `Project: ${project.name}`;
        // display 
        projectDetails.appendChild(projectName);

        // get project priority
        const projectPriority = document.createElement('div');
        projectPriority.textContent = `Priority: ${project.priority}`;
        // display
        projectDetails.appendChild(projectPriority);
        const todoHeader = document.createElement('div');
        todoHeader.textContent = 'items:';
        projectDetails.appendChild(todoHeader);


        const todosContainer = document.createElement('ul');
        todosContainer.classList.add("todos-container");
        let items = project.items
        for(let j = 0; j < items.length; j++){
            let item = items[j];

            // create container for individual item
            const itemContainer = document.createElement('li');
            // get todo title
            const todoTitle = document.createElement('div');
            todoTitle.textContent = `Title: ${item.title}`;
            itemContainer.appendChild(todoTitle);

            // get todo dueDate
            const todoDuedate = document.createElement('div');
            todoDuedate.textContent = `Due date: ${item.dueDate}`;
            // display name, dueDate
            itemContainer.appendChild(todoDuedate);

            // get todo description
            const todoDesc = document.createElement('div');
            todoDesc.textContent = `Description: ${item.description}`;
            itemContainer.appendChild(todoDesc);

            // get todo priority
            const todoPriority = document.createElement('div');
            todoPriority.textContent = `Priority: ${item.priority}`;
            itemContainer.appendChild(todoPriority);

            // get todo completion status
            const todoCompletion = document.createElement('div');
            todoCompletion.textContent = `Complete: ${item.complete}`;
            itemContainer.appendChild(todoCompletion);


            todosContainer.appendChild(itemContainer);

            // create button to show details of todo element
            // append to itemContainer
            const showDetails = document.createElement('button');
            showDetails.classList.add('show-details');
            showDetails.textContent = 'Show Details';
            itemContainer.appendChild(showDetails);
        }

        projectContainer.appendChild(projectDetails);
        projectContainer.appendChild(todosContainer);
        

        contentDiv.appendChild(projectContainer);
    }
    
}


