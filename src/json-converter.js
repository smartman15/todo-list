// this module converts values to json and json back to their original values
// the purpose of this is to be able to use localStorage API

// STORE IN LOCALSTORAGE
    // jsonConverter takes in projectList array
    // converts to json
    // store into localStorage


// LOAD FROM LOCALSTORAGE
    // take projectList array from localStorage
    // convert projectList array back to array of objects (use json parse())
    // store into projectList array in code
    // execute convertToProject() function
    // loop through projectList array
        // execute convertToTodo() and pass projectList array[i] as parameter value


// function to stringify projectList array and store into localStorage
    // json stringify projectList array
    // store into localStorage by using localStorage setItem() function


// function convertToProject() to turn parsed json into Project Object
    // loop through projectList array
    // for every project element in projectList array
        // create jsonProject variable
        // json.parse() the project element and assign it to jsonProject variable
        // create new Project object and assign it to project variable (leave parameters empty)
        // set project.data to the parsed json
        // replace element at current index with project variable


// function convertToTodo() to turn parsed json into TodoItem Object
// parameter takes in Project object
    // for every todo element in Project item array
        // create jsonTodo variable
        // json.parse() the todo element and store it in jsonTodo variable
        // create new TodoItem object and assign it to todo variable (leave parameters empty)
        // set todo.data to the parsed json
        // replace todo element at current index with todo variable