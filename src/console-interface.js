import isValidIndex from "./index-validator";
import logMessage from "./logger";
import { projectList } from "./project-list";
// print out all projects available, along with its todo items (title & dueDate)
// there is one project by default

// menu should have:
// 1. show projects (print projects out using projectList function)
// 2. expand project to see/edit todos
// 3. delete todo from project
const consoleInterface = (() => {
    let option = prompt('please enter option number', 1);

    // 1. show projects (print projects out using projectList function)
    if(option == 1){
        projectList.showProjectNames();
    }

    // 2. expand project to see/edit todos
    else if(option == 2){
        // input index of project
        let index = prompt("Insert index of project");
        // verify if index is valid
        if(isValidIndex(projectList.getProjects(), index)){
            // create variable to store project at index
            let project = projectList.getProjects()[index];

            // print todos of selected project
            project.ShowBasicTodoDetail();

            // input index of todo
            let todoIdx = prompt("Insert index of todo to edit");
            // verify if index is valid
            if(isValidIndex(project.items, todoIdx)){
                let todo = project.items[todoIdx];
                // input title, description, dueDate, priority, complete (set default input as current property values)
                let title = prompt("Insert new title", todo.title);
                let desc = prompt("Insert new description", todo.description);
                let dueDate = prompt("Insert new due date", todo.dueDate);
                let priority = prompt("Insert new priority", todo.priority);
                let complete = prompt("Insert new completion status", todo.complete);
                // at items[i] of project,
                // use setters to set
                // title, description, dueDate, priority, complete
                todo.title = title;
                todo.description = desc;
                todo.dueDate = dueDate;
                todo.priority = priority;
                todo.complete = complete;
                logMessage("Todo successfully updated");
            }
                

            // else
            else logMessage("Invalid index");
                // print index is invalid
        }
    }

    // 3. create new project
        // ask user to input project name and priority
        // create Project with input values

    // 4. add todo to project
        // ask user to input project index to choose which project to add todo
        // verify if index is valid
            // create variable to store project at index
            // ask user to input todo title, description, dueDate, priority
            // create todo item with input values
            // insert todo item into project variable


    // 5. delete todo from project
    else if(option == 5){
        // ask index input from user
        // use index as parameter value to remove todo item function from project.js
        // if index is valid
            // use remove project function from project-list

        // else 
            // print index is invalid
    }
    
})();






