const Storage = {
    save: function (data) {
        localStorage.setItem("TodoApp", JSON.stringify(data));
    },

    load: function () {
        const data = localStorage.getItem("TodoApp");
        return data ? JSON.parse(data) : null;
    },

    clear: function () {
        localStorage.removeItem("TodoApp");
    }
};

module.exports = Storage;