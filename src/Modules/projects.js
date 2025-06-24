class ProjectManager {
    constructor() {
        this.projects = [{ name: "Default", todos: [] }];
    }

    addProject(name) {
        this.projects.push({name, todos: []});
    }

    todoToProject(todo, projectName) {
        const project = this.projects.find(p => p.name === projectName);
        if(project) {
            project.todos.push(todo);
        }
    }

    getTodos(projectName) {
        const project = this.projects.find(p => p.name === projectName)
        return project ? project.todos : [] ;
    }

    deleteTodo(projectName, todo) {
        const project = this.projects.find(p => p.name === projectName);
        if(project) {
            project.todos = project.todos.filter(todo => todo.title !== todo);
        }
    }
}

module.exports = ProjectManager;