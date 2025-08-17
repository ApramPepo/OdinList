function Todos(title, description, priority, dueDate, notes, project) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.dueDate = dueDate;
    this.notes = notes;
    this.project = project || "Default";
    this.complete = false;
}

Todos.prototype.toggleComplete = function () {
    this.complete = !this.complete;
};

module.exports = Todos;