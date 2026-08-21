// todo items will have title, description, dueDate, priority
// functions:
// getters and setters
// set todo as complete
// change todo priority


export function createTodoItem(){
    let title, description, dueDate, priority;

    const getTitle = () => title;
    const setTitle = (value) =>{
        title = value;
    }

    const getDesc = () => description;
    const setDesc = (value) =>{
        description = value;
    }

    const getDueDate = () => dueDate;
    const setDueDate = (value) =>{
        dueDate = value;
    }

    const getPriority = () => priority;
    const setPriority = (value) =>{
        priority = value;
    }

    return {getTitle, setTitle, getDesc, setDesc, getDueDate, setDueDate, getPriority, setPriority};
}