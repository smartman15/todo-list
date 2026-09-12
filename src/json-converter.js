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


// function to stringify projectList array and store into localStorage
    // json stringify projectList array
    // store into localStorage by using localStorage setItem() function


// function to turn parsed json into project Object
    // loop through projectList array
    // for every project element in projectList array
        // create jsonProject variable
        // json.parse() the project and assign it to jsonProject variable
        // create new Project object and assign it to project variable (leave parameters empty)
        // set project.data to the parsed json
        // replace element at current index with project variable