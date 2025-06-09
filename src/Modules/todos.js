class Todos {
    constructor(title, description, priority, dueDate, notes, checkList) {
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.dueDate = dueDate;
        this.notes = notes;
        this.complete = false;
    }

    ifCompleted() {
        this.complete = !this.complete;
    }
}

module.exports = Todos;