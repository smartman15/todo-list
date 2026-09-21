import { consoleInterface } from "./console-interface.js";
import "./styles.css"
import { jsonConverter } from "./json-converter.js";
import { loadProjects } from "./dom/project-container.js";
import { createProject } from "./dom/create-project-btn.js";

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
    createProject();
}
else{
    // execute consoleInterface()
    loadProjects();
    createProject();
}
    

    

