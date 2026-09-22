import { projectList } from "../project-list.js";

export function loadProjects(){
    const contentDiv = document.querySelector('#content');
    
    for(let i = 0; i < projectList.getProjects().length; i++){
        const projectContainer = document.createElement('div');
        projectContainer.classList.add("grid");
        projectContainer.classList.add("project-container");


        const projectDetails = document.createElement('div');
        projectDetails.classList.add('project-details');


        const projectIdx = document.createElement('div');
        projectIdx.textContent = `${i}.`;
        projectDetails.appendChild(projectIdx);

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

            const itemIdx = document.createElement('div');
            itemIdx.textContent = `${j}.`;
            itemContainer.appendChild(itemIdx);


            // get todo title
            const todoTitle = document.createElement('div');
            todoTitle.textContent = `Title: ${item.title}`;
            itemContainer.appendChild(todoTitle);

            // get todo dueDate
            const todoDuedate = document.createElement('div');
            todoDuedate.textContent = `Due date: ${item.dueDate}`;
            // display name, dueDate
            itemContainer.appendChild(todoDuedate);


            // create container to store hidden todo details
            const todoDetails = document.createElement('div');
            todoDetails.classList.add('todo-details');
            // on the press of button, show/hide details

            // get todo description
            const todoDesc = document.createElement('div');
            todoDesc.textContent = `Description: ${item.description}`;
            todoDetails.appendChild(todoDesc);

            // get todo priority
            const todoPriority = document.createElement('div');
            todoPriority.textContent = `Priority: ${item.priority}`;
            todoDetails.appendChild(todoPriority);

            // get todo completion status
            const todoCompletion = document.createElement('div');
            todoCompletion.textContent = `Complete: ${item.complete}`;
            todoDetails.appendChild(todoCompletion);

            itemContainer.appendChild(todoDetails);

            todosContainer.appendChild(itemContainer);

            // create button to show details of todo element
            // append to itemContainer
            const showDetails = document.createElement('button');
            showDetails.classList.add('show-details');
            showDetails.textContent = 'Hide Details';
            showDetails.addEventListener("click", (e) => {
                if(todoDetails.style.display === 'none'){
                    // show todo details
                    todoDetails.style.display = 'block';
                    showDetails.textContent = 'Hide Details';
                }
                    
                // else if todo details are visible
                else{
                // set todo details to hidden
                    todoDetails.style.display = 'none'
                    showDetails.textContent = 'Show Details';
                }
            });
            itemContainer.appendChild(showDetails);
        }

        projectContainer.appendChild(projectDetails);
        projectContainer.appendChild(todosContainer);
        

        contentDiv.appendChild(projectContainer);
    }
    
}


