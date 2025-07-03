require("./main.css");
const todos = require("./Modules/todos.js");
const storage = require("./Modules/storage.js");

task = new todos("buy milk", "Make sure to buy milk", 1, Date.now, "non", 0)
task.ifCompleted(true);

console.log(task);