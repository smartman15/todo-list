// this module converts values to json and json back to their original values
// the purpose of this is to be able to use localStorage API

import { Project } from "./project";
import { projectList } from "./project-list"
import { TodoItem } from "./todo-item";

export const jsonConverter = (() => {
    // STORE IN LOCALSTORAGE
    const storeLocalStorage = () => {
        // take in projectList array
        // converts to json
        // store into localStorage
        localStorage.setItem("array", JSON.stringify(projectList.getProjects()));
    }
        


    // LOAD FROM LOCALSTORAGE
    const loadLocalStorage = () => {
        // take projectList array from localStorage
        // convert projectList array back to array of objects (use json parse())
        // store into projectList array in code
        projectList.getProjects().push(JSON.parse(localStorage.getItem("array")));
        // execute convertToProject() function
        convertToProject();
        // loop through projectList array
        projectListArray = projectList.getProjects();
        for(let i = 0; i < projectListArray.length; i++){
            // execute convertToTodo() and pass projectList array[i] as parameter value
            convertToTodo(projectListArray[i]);
        }
            
    }
        


    // function to stringify projectList array and store into localStorage
        // json stringify projectList array
        // store into localStorage by using localStorage setItem() function


    // function convertToProject() to turn parsed json into Project Object
    const convertToProject = () => {
        // loop through projectList array
        // for every project element in projectList array
        let array = projectList.getProjects();
        for(let i = 0; i < array.length; i++){
            // create jsonProject variable
            // json.parse() the project element and assign it to jsonProject variable
            let jsonProject = JSON.parse(array[i]);
            // create new Project object and assign it to project variable (leave parameters empty)
            let project = new Project();
            // set project.data to the parsed json project
            project.data = jsonProject._data;
            // replace element at current index with project variable
            array[i] = project;
        }
            
    }
        


    // function convertToTodo() to turn parsed json into TodoItem Object
    // parameter takes in Project object
    const convertToTodo = (project) => {
        // for every todo element in Project items array
        let projectItems = project.items;
        for(let i = 0; i < projectItems.length; i++){
            // create jsonTodo variable
            // json.parse() the todo element and store it in jsonTodo variable
            let jsonTodo = JSON.parse(projectItems[i]);
            // create new TodoItem object and assign it to todo variable (leave parameters empty)
            let todoItem = new TodoItem();
            // set todo.data to the parsed json
            todoItem.data = jsonTodo._data;
            // replace todo element at current index with todo variable
            projectItems[i] = todoItem;
        } 
            
    }
        
})();

