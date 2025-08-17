require("./main.css");
const todos = require("./Modules/todos.js");
const storage = require("./Modules/storage.js");
const projects = require("./Modules/projects.js");
const render = require("./Modules/render.js");

const Project = new projects();
const form = document.getElementById("todo-form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const todo = createTodos(
        document.getElementById("title").value,
        document.getElementById("description").value,
        document.getElementById("priority").value,
        document.getElementById("dueDate").value,
        document.getElementById("notes").value,
    )
})

const savedData = storage.load();
if (savedData) {
    Project.projects = savedData;
}

function saveChanges() {
    storage.save(Project.projects)
}