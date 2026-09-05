import isValidIndex from "./index-validator";
import logMessage from "./logger";
import { Project } from "./project";

// project list is where all projects are stored
const projectList = (() => {
    // array to store projects
    let projects = [];


    // function to create projec
    // takes in name, priority as parameters
    const createProject = (name, priority) => {
        // using project constructor, create project
        let project = new Project(name, priority);
        // store project in projects array
        projects.push(project);
    };
    

    // function to show all project names
    const showProjectNames = () => {
        // loop through projects array
        for(let i = 0; i < projects.length; i++){
            // print project name
            logMessage(`Project name: ${projects[i].name}`);
        }
            
    }
        


    // function to show all projects and brief details of todo items
    const showProjectDetails = () => {
        // loop through projects array
        for(let i = 0 ; i < projects; i++){
            // print index, project name and priority
            logMessage("index  project name  priority");
            logMessage(`${i}.  ${projects[i].name}  ${projects[i].priority}`);
            logMessage(`Details: `)
            // print basic details of todo items (title, duedate, priority)
            projects[i].ShowBasicTodoDetail();
        }
            
    }
        
    

    // function to show details of project at specific index
    // takes in index i as parameter
    const showProjectTodos = (index) => {
        // print details of project at array[i] using project function
        projects[index].ShowAllTodoDetail();
    } 
        

        
    // function to edit project name and priority at index
    // function takes in index as parameter
    const editProject = (index) => {
        // if index is valid
        if(isValidIndex(array, index)){
            // ask input for name
            let name = prompt("Enter new project name", "coolest project ever");
            // ask input for priority
            let priority = prompt("Enter priority (urgent/not urgent)", "urgent");

            // set project name at index to input using project function
            projects[index].name = name;
            // set project priority at index to input using project function
            projects[index].priority = priority;
        }
            

        // if index is invalid
        else logMessage("invalid index");
            // log index invalid
    }
        


    // function to remove project
    // function takes in index as parameter
    const removeProject = (index) => {
        // if index is valid 
        if(isValidIndex(index)){
            // remove project at index i in array of project list
            projects.splice(index, 1);
            // log success
            logMessage('project successfully deleted');
        }
              
        
        // else 
        else logMessage("invalid index");
            // log invalid index
    }
        
})();
    