import { getNewId, saveData, readData } from "./utils.js";

const data = readData();
const statusList = ['to-do', 'in-progress', 'done'];

/* --- --- --- --- -CREATE- --- --- --- --- */
export function createTodo(req, res) {
    const { title, status = "to-do" } = req.body;

    if (!title) return res.status(400).json({ error: "❌ You must enter the todo title to add" });

    if (status && !statusList.includes(status.toLowerCase())) {
        return res.status(400).json({ error: `❌ Status must be one of [${statusList}]` });
    }

    const newId = getNewId(data);
    const newTodo = { id: newId, title, status: status.toLowerCase() };

    data.push(newTodo);
    saveData(data);

    res.status(201).json(newTodo);
}

/* --- --- --- --- --READ-- --- --- --- --- */
export function readTodos(req, res) {
    if (data.length === 0) return res.status(404).json({ message: "No todos found." });

    let { limit = 0, skip = 0 } = req.query;
    const { id } = req.params;
    limit = parseInt(limit);
    skip = parseInt(skip);

    let toView = data;

    if (id && ! +id) {
        return `❌ Format: id {${id}} must be a number..`;
    }

    if (id) toView = toView.filter(todo => todo.id == id);

    if (skip || limit) {
        toView = toView.slice(skip, limit ? skip + limit : toView.length);
    }

    if (toView.length == 0) {
        return res.status(404).json({ message: "No todos found." });
    }

    res.status(200).json(toView);
}

/* --- --- --- --- -UPDATE- --- --- --- --- */
export function updateTodo(req, res) {
    const { id } = req.params;
    const { title, status } = req.body;

    if (!+id) return res.status(400).json({ error: `❌ Format: id {${id}} must be a number..` });
    if (!title && !status) {
        return res.status(400).json({ error: "⚠️ You must provide title or status to update" });
    }

    const index = data.findIndex(todo => todo.id == id);
    if (index === -1) return res.status(404).json({ error: "❌ Enter a valid id to update!" });

    if (title) data[index].title = title;
    if (status) {
        if (!statusList.includes(status.toLowerCase())) {
            return res.status(400).json({ error: `❌ Status must be one of [${statusList}]` });
        }
        data[index].status = status.toLowerCase();
    }

    saveData(data);
    res.status(200).json(data[index]);
}

/* --- --- --- --- -DELETE- --- --- --- --- */
export function deleteTodo(req, res) {
    const { id } = req.params;

    if (!+id) return res.status(400).json({ error: `❌ Format: id {${id}} must be a number..` });

    const index = data.findIndex(todo => todo.id == id);
    if (index === -1) return res.status(404).json({ error: "❌ Enter a valid id to delete!" });

    const deleted = data[index];
    data.splice(index, 1);
    saveData(data);

    res.status(200).json(deleted);
}
