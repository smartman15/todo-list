// projects are where todo items are contained
// projects can have multiple todo items
// ex: college project can have "finish calculus homework" item, "study for programming exam" item, etc
// has priority property
// has an array to contain todo items
// show todo items on the surface (title, duedate, priority. color of project changes on priority)
// show all todo items details (title, duedate, etc)

export class Project{
    constructor(name, priority){
        this.name = name;
        this.priority = priority;
        this.items = [];
    }

    // getters and setters

    // function to show all properties of all todo items
        // loop through array of todo items

            // print title
            // print description
            // print duedate
            // print priority
            // print completion status
            // print empty space (to differentiate between todo items)
    
        

    // function to show basic details of all todo items
        // loop through array of todo items
            // print title, duedate, priority
    
    
    // function to add todo items
    // parameters take in title, description, dueDate, priority
        // create TodoItem class using parameter values
        // insert into items array of Project

    // function to remove todo items
    // parameter takes in index of todo item
        // if index is valid
            // remove TodoItem at index from array of Project

        // else 
            // print index invalid


    // function to edit project name
    // takes in string as parameter
        // change name according to value of string
        // print name changed

    // function to switch priority (urgent/not urgent)
        // if priority is urgent
            // set priority to not urgent

        // else if priority is not urgent
            //set priority to urgent

        // print priority changed to this.priority
}