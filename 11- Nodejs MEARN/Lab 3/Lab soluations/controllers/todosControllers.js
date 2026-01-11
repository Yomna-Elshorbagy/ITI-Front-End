import todoModel from "../models/todosModel.js";
const statusList = ['to-do', 'in-progress', 'done'];



/* --- --- --- --- -CREATE- --- --- --- --- */
export async function createTodo(req, res) {
    const todo = req.body;

    try {
        const newTodo = await todoModel.create(todo);

        res.status(201).json({ data: newTodo, status: 'success' });

    } catch (err) {
        res.status(400).json({ error: err.message })
    }

}

/* --- --- --- --- --READ ALL-- --- --- --- --- */
export async function readAllTodos(req, res) {
    try {
        const todos = await todoModel.find();

        res.status(200).json({ data: todos, status: 'success' });

    } catch (err) {

        res.status(404).json({ message: err.message });
    }
}

/* --- --- --- --- --READ ONE-- --- --- --- --- */
export async function readTodo(req, res) {
    const { id } = req.params;

    try {

        const todo = await todoModel.findById(id)

        if (!todo) return res.status(404).json({ message: "todo doesn't exist" });

        res.status(200).json({ data: todo, status: 'success' });

    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}



/* --- --- --- --- -UPDATE- --- --- --- --- */
export async function updateTodo(req, res) {
    try {
        const { id } = req.params;
        const { title, status } = req.body;

        if (!title && !status) {
            return res.status(400).json({ error: "⚠️ You must provide title or status to update" });
        }

        const updateFields = {};
        if (title) updateFields.title = title;
        if (status) {
            const statusList = ["to-do", "in progress", "done"];
            if (!statusList.includes(status.toLowerCase())) {
                return res.status(400).json({ error: `❌ Status must be one of [${statusList}]` });
            }
            updateFields.status = status.toLowerCase();
        }

        const updated = await todoModel.findByIdAndUpdate(id, updateFields, {
            new: true,
            runValidators: true,
        });

        if (!updated) {
            return res.status(404).json({ error: "❌ Todo not found" });
        }

        res.status(200).json(updated);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

/* --- --- --- --- -DELETE- --- --- --- --- */
export async function deleteTodo(req, res) {
    try {
        const { id } = req.params;

        const deleted = await todoModel.findByIdAndDelete(id);
        if (!deleted) {
            return res.status(404).json({ error: "❌ Todo not found" });
        }

        res.status(200).json(deleted);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
