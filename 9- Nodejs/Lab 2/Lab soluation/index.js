import express from "express";
import { dbConnection } from "./database/dbconnection.js";
import todo from "./database/models/todo.js";
dbConnection();

const app = express();
app.use(express.json());

//======> to add todos
app.post("/todos", async (req, res) => {
  try {
    let addTodo = await todo.create(req.body);
    res.status(201).json(addTodo);
  } catch (err) {
    console.log(err);

    res.json({ messageError: err.message });
  }
});
// ======> get all todos
app.get("/todos", async (req, res) => {
  try {
    let todos = await todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});
// ======> get by id
app.get("/todo/:id", async (req, res) => {
  try {
    let { todoID } = req.params;
    let oneTodo = await todo.findById(todoID);
    res.json(oneTodo);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});
// ======> delete
app.delete("/todos/:id", async (req, res) => {
  let { id } = req.params;
  try {
    let result = await todo.deleteOne({ id: id });
    // let result = await todo.deleteOne({ _id: id });
    res.status(200).json(result);
  } catch (err) {
    res.json({ error: err.message });
  }
});

//======> update
app.patch("/todos/:id", async (req, res) => {
  const { id } = req.params;
  try {
    let updateTodo = await todo.updateOne(
      { id: id },
      { $set: { title: req.body.title } }
    );
    // let updateTodo = await todo.findByIdAndUpdate(
    //   id,
    //   { $set: { title: req.body.title } },
    //   { new: true }
    // );
    res.status(200).json(updateTodo);
  } catch (err) {
    res.json({ error: err.message, data: updateTodo });
  }
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
