// projects are where todo items are contained
// projects can have multiple todo items
// ex: college project can have "finish calculus homework" item, "study for programming exam" item, etc
// has priority property
// has an array to contain todo items
// show todo items on the surface (title, duedate, priority. color of project changes on priority)
// show all todo items details (title, duedate, etc)

import isValidIndex from "./index-validator";
import logMessage from "./logger";
import { TodoItem } from "./todo-item";
import { storageAvailable } from "./web-storage-api";

export class Project{
    constructor(name, priority){
        this.data = {
            id: self.crypto.randomUUID(),
            name: name,
            priority: priority,
            items: []
        }
        // this.id = self.crypto.randomUUID();
        // this.name = name;
        // this.priority = priority;
        // this.items = [];
    }

    // getters and setters
    get id(){
        return this.data.id;
    }

    get name(){
        return this.data.name;
    }

    set name(value){
        this.data.name = value;
    }

    get priority(){
        return this.data.priority;
    }

    set priority(value){
        this.data.priority = value;
    }

    get items(){
        return this.data.items;
    }

    set items(value){
        this.data.items = value;
    }


    // function to show all properties of all todo items
    ShowAllTodoDetail(){
        // if there are no todo items
        if(this.data.items.length == 0){
            // print no todo items
            logMessage("no todo items in this project");
            // return
            return;
        }
            
        

        const todos = this.data.items
        // loop through array of todo items
        for(let i = 0; i < todos.length; i++){

            // print title
            logMessage(todos[i].title);
            // print description
            logMessage(todos[i].description);
            // print duedate
            logMessage(todos[i].dueDate);
            // print priority
            logMessage(todos[i].priority);
            // print completion status
            logMessage(todos[i].complete);
            // print empty space (to differentiate between todo items)
            logMessage(' ');
        }

            
    }
        
    
        

    // function to show basic details of all todo items
    ShowBasicTodoDetail(){
        if(this.data.items.length == 0){
            logMessage("no todo items in this project");
            return;
        }

        // loop through array of todo items
        let todos = this.data.items;
        for(let i = 0; i < todos.length; i++){
            // print title, duedate, priority
            // print title
            logMessage(todos[i].title);
            // print duedate
            logMessage(todos[i].dueDate);
            // print priority
            logMessage(todos[i].priority);
            logMessage(' ');
        }
            
    }
        
    
    
    // function to add todo items
    // parameters take in title, description, dueDate, priority
    addTodo(title, description, dueDate, priority){
        // if storage is available
        if(storageAvailable("localStorage")){
            // create TodoItem class using parameter values
            let todo = new TodoItem(title, description, dueDate, priority);
            // insert into items array of Project
            this.data.items.push(todo);
        }
            

        // else
        else logMessage('uh oh no local storage :(');
            // print no storage
    }
        

    // function to remove todo items
    // parameter takes in index of todo item
    removeTodo(index){
        // if index is valid and storage is available
        if(isValidIndex(this.data.items, index) && storageAvailable("localStorage")){
            // remove TodoItem at index from array of Project
            this.data.items.splice(index, 1);
        }
            

        // else 
        else logMessage('no local storage available :(');
            // print index invalid
    }
        
        

    // function to switch priority (urgent/not urgent)
    switchPriority(){
        let priority = this.data.priority;
        // if priority is urgent
        if(priority === 'urgent') priority = 'not urgent';
            // set priority to not urgent

        // else if priority is not urgent
        else priority = 'urgent';
            //set priority to urgent

        // print priority changed to this.priority
        logMessage(`priority is now ${priority}`);
    }
        
}

