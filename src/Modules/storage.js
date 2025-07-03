const Storage = {
    save(data) {
        localStorage.setItem("TodoApp", JSON.stringify(data));
    },

    load() {
        const data = localStorage.getItem("TodoApp");
        return data ? JSON.parse(data): null;
    }, 

    clear() {
        localStorage.removeItem("TodoApp");
    }
}

module.exports = Storage;