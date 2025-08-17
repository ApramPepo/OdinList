function ProjectManager() {
    this.projects = [{ name: "Default", todos: [] }];
}

ProjectManager.prototype.addProject = function (name) {
    this.projects.push({ name, todos: [] });
};

ProjectManager.prototype.addTodoToProject = function (todo, projectName) {
    const project = this.projects.find(p => p.name === projectName);
    if (project) {
        project.todos.push(todo);
    }
};

ProjectManager.prototype.getTodos = function (projectName) {
    const project = this.projects.find(p => p.name === projectName);
    return project ? project.todos : [];
};

ProjectManager.prototype.deleteTodo = function (projectName, todoTitle) {
    const project = this.projects.find(p => p.name === projectName);
    if (project) {
        project.todos = project.todos.filter(todo => todo.title !== todoTitle);
    }
};

module.exports = ProjectManager;