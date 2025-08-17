require("./main.css");
const Todos = require("./Modules/todos.js");
const Storage = require("./Modules/storage.js");
const ProjectManager = require("./Modules/projects.js");
const Render = require("./Modules/render.js");

const projectManager = new ProjectManager();
const form = document.getElementById("todo-form");

const savedData = Storage.load();
if (savedData) {
    projectManager.projects = savedData;
}

Render.DOM(projectManager.projects, projectManager, "projects");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const todo = new Todos(
        document.getElementById("title").value,
        document.getElementById("description").value,
        document.getElementById("priority").value,
        document.getElementById("dueDate").value,
        document.getElementById("notes").value,
        document.getElementById("project").value
    );
    projectManager.addTodoToProject(todo, todo.project);
    Storage.save(projectManager.projects);
    Render.todosItems(todo.project, projectManager, "todos");
    Render.DOM(projectManager.projects, projectManager, "projects");
});

Render.todosItems("Default", projectManager, "todos");