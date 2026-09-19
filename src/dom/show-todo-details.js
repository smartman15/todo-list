export function showTodoDetails(todo){
    // let todo = document.querySelector('.todo-details');

    // if todo details are hidden
    if(todo.style.visibility == 'hidden'){
        // show todo details
        todo.style.visibility = 'visible';
    }
        
    // else if todo details are visible
    else{
    // set todo details to hidden
        todo.style.visibility = 'hidden'
    }
}
    
        
