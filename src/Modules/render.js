const Render = {
    DOM: function (projects, projectManager, containerId) {
        const container = document.getElementById(containerId);
        container.innerHTML = "";
        projects.forEach(project => {
            const projectDiv = document.createElement("div");
            projectDiv.textContent = project.name;
            projectDiv.className = "project";
            projectDiv.addEventListener("click", () => Render.todosItems(project.name, projectManager, "todos"));
            container.appendChild(projectDiv);
        });

        const projectSelect = document.getElementById("project");
        projectSelect.innerHTML = projects.map(project => `<option value="${project.name}">${project.name}</option>`).join("");
    },

    todosItems: function (projectName, projectManager, containerId) {
        const container = document.getElementById(containerId);
        container.innerHTML = `<h2>${projectName}</h2>`;
        const todos = projectManager.getTodos(projectName);
        todos.forEach(todo => {
            const todoDiv = document.createElement("div");
            todoDiv.className = `priority-${todo.priority}`;
            todoDiv.innerHTML = `
                <h3>${todo.title}</h3>
                <p>Due: ${todo.dueDate}</p>
                <p>${todo.description}</p>
                <p>Notes: ${todo.notes}</p>
                <button class="delete-btn" data-title="${todo.title}">Delete</button>
            `;
            container.appendChild(todoDiv);
        });

        document.querySelectorAll(".delete-btn").forEach(button => {
            button.addEventListener("click", () => {
                projectManager.deleteTodo(projectName, button.dataset.title);
                Render.todosItems(projectName, projectManager, containerId);
            });
        });
    }
};

module.exports = Render;