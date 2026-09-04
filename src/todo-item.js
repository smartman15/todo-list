// todo items will have title, description, dueDate, priority
// functions:
// getters and setters
// set todo as complete
// change todo priority


export class TodoItem{
    constructor(title, description, dueDate, priority){
        this.data = {
            id: self.crypto.randomUUID(),
            title: title,
            description: description,
            dueDate: dueDate,
            priority: priority,
            complete: false
        }
        // this.id = self.crypto.randomUUID();
        // this.title = title;
        // this.description = description;
        // this.dueDate = dueDate;
        // this.priority = priority;
        // this.complete = false; // todos are false by default
    }

    get id(){
        return this.data.id;
    }

    get title(){
        return this.data.title;
    }
    set title(value){
        this.data.title = value;
    }

    get description(){
        return this.data.description;
    }
    set description(value){
        this.data.description = value;
    }

    get dueDate(){
        return this.data.dueDate;
    }
    set dueDate(value){
        this.data.dueDate = value;
    }

    get priority(){
        return this.data.priority;
    }
    set priority(value){
        this.data.priority = value;
    }

    get complete(){
        return this.data.complete;
    }
    set complete(value){
        this.data.complete = value;
    }

    // toggle complete status
}