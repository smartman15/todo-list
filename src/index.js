import "./styles.css"
import { jsonConverter } from "./json-converter.js";
import { loadProjects } from "./dom/project-container.js";
import { createProject } from "./dom/create-project-btn.js";
import { createTodoBtn } from "./dom/create-todo-btn.js";
import { deleteProject } from "./dom/delete-project-btn.js";
import { editTodo } from "./dom/edit-todo-btn.js";

// localStorage.setItem("test", JSON.stringify(["what"]));

// load localStorage
// if localStorage of projectList exists
if(localStorage.getItem("array")){
    // // load localStorage
    // jsonConverter.loadLocalStorage();
    // // execute consoleInterface()
    // consoleInterface.startInterface();

    jsonConverter.loadLocalStorage();
    loadProjects();
}
else{
    // execute consoleInterface()
    loadProjects();
}
    


createProject();
deleteProject();
createTodoBtn();
editTodo();
