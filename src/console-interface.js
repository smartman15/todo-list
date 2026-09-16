import isValidIndex from "./index-validator.js";
import logMessage from "./logger.js";
import { projectList } from "./project-list.js";
import { Project } from "./project.js";
import { TodoItem } from "./todo-item.js";
import { jsonConverter } from "./json-converter.js";
// print out all projects available, along with its todo items (title & dueDate)
// there is one project by default

// menu should have:
// 1. show projects (print projects out using projectList function)
// 2. expand project to see/edit todos
// 3. delete todo from project
export const consoleInterface = (() => {
    const startInterface = (() => {
        while (true){
            logMessage("Options:");
            logMessage("0. Exit");
            logMessage("1. show projects");
            logMessage("2. Edit project todos");
            logMessage("3. Create new projects");
            logMessage("4. Add todo to project");
            logMessage("5. Delete todo from project");
            let option = prompt('please enter option number', 1);
    
            // 0. exit
            if(option == 0){
                logMessage('goodbye');
                break;
            }
    
            // 1. show projects (print projects out using projectList function)
            else if(option == 1){
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
                    project.showBasicTodoDetail();
    
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
                        jsonConverter.storeLocalStorage();
                    }
                        
    
                    // else
                    else logMessage("Invalid index");
                        // print index is invalid
                }
            }
    
            // 3. create new project
            else if(option == 3){
                // ask user to input project name and priority
                let projectName = prompt("Enter project name", "College");
                let projectPriority = prompt("Enter project priority", "not urgent");
                // create Project with input values
                let project = new Project(projectName, projectPriority);
                // insert project into project list
                projectList.getProjects().push(project);
                jsonConverter.storeLocalStorage();
            }
                
    
            // 4. add todo to project
            else if(option == 4){
                // ask user to input project index to choose which project to add todo
                let projectIdx = prompt("Insert index of project to add todo to");
                // verify if index is valid
                if(isValidIndex(projectList.getProjects(), projectIdx)){
                    // create variable to store project at index
                    let project = projectList.getProjects()[projectIdx];
                    // ask user to input todo title, description, dueDate, priority
                    let title = prompt("Insert title of todo", "water the plants");
                    let description = prompt("Insert description of todo", "water all plants that are in the garden");
                    let dueDate = prompt("Insert due date of todo");
                    let priority = prompt("Insert urgency of todo", "not urgent");
                    // create todo item with input values
                    // let todo = new TodoItem(title, description, dueDate, priority);
                    // insert todo item into project variable
                    project.addTodo(title, description, dueDate, priority);
                    jsonConverter.storeLocalStorage();
                }
    
                else logMessage("Invalid index");
                    
            }
                
    
    
            // 5. delete todo from project
            else if(option == 5){
                // print all projects
                projectList.showProjectNames();
                // ask user to input project index
                let projectIdx = prompt("Insert project index to delete todo from");
                // if index is valid
                if(isValidIndex(projectList.getProjects(), projectIdx)){
                    // create variable to store project at index
                    let project = projectList.getProjects()[projectIdx];
                    // print todo items of project variable
                    project.showBasicTodoDetail();
                    // ask user to input todo index to delete
                    let todoIdx = prompt("Insert index of todo to delete");
                    // if index is valid
                    if(isValidIndex(project.items, todoIdx)){
                        // use index as parameter value to remove todo item from project
                        project.removeTodo(todoIdx);
                        jsonConverter.storeLocalStorage();
                    }
                        
                    
                    // else
                    else logMessage("Invalid index");
                        // print index is invalid
                }
                    
                    
    
                // else 
                else logMessage("Invalid index");
                    // print index is invalid
            }
        }
    })();

    
    
    
})();






