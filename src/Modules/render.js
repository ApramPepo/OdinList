const render = {
    DOM(projects, containerId) {
        const container = document.getElementById(containerId);
        container.innerHTML = "";
        projects.forEach(project => {
            const projectDiv = document.createElement("div");
            projectDiv.addEventListener("click", () => this.todosItems)
            container.appendChild(projectDiv);
        });
    },

    todosItems(projectName, projectManager, containerId) {
        const container = document.getElementById(containerId);
        container.innerHTML = `<h2>${projectName}</h2>`
        const todos = projectManager.getTodos(projectName);
        todos.forEach(todo => {
            const todoDiv = document.createElement("div");
            todoDiv.classList.add(`priority ${todo.priority}`);
            todoDiv.innerHTML = `
            <h3>${todo.title}</h3>
            <p>Due: ${todo.dueDate}</p>
            `
        })
    }
}

module.exports = render;