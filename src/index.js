import { consoleInterface } from "./console-interface.js";
import { jsonConverter } from "./json-converter.js";
import { projectContainer } from "./dom/project-container.js";

// localStorage.setItem("test", JSON.stringify(["what"]));

// load localStorage
// if localStorage of projectList exists
// if(localStorage.getItem("array")){
//     // load localStorag
//     jsonConverter.loadLocalStorage();
//     // execute consoleInterface()
//     consoleInterface.startInterface();
// }
// else{
//     // execute consoleInterface()
//     consoleInterface.startInterface();
// }
    
jsonConverter.loadLocalStorage();
projectContainer();
    

