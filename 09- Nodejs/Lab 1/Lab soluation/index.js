const fs = require("fs");
let [, , command] = process.argv;
if (command === "add") {
  let [, , , tittle] = process.argv;
  let todoList = JSON.parse(
    fs.readFileSync("data.json", { encoding: "utf-8" })
  );
  let id = todoList.length > 0 ? todoList[todoList.length - 1].id + 1 : 1;
  // let id = todoList.length > 0 ? Math.max(...todoList.map((todo) => todo.id)) + 1 : 1;

  todoList.push({ id, tittle });
  fs.writeFileSync("data.json", JSON.stringify(todoList));
  console.log(todoList);
} else if (command == "list") {
  let todoList = JSON.parse(
    fs.readFileSync("data.json", { encoding: "utf-8" })
  );
  console.log(todoList);


} else if (command == "update") {
  let [, , , id, newTittle] = process.argv;
  let todoList = JSON.parse(
    fs.readFileSync("data.json", { encoding: "utf-8" })
  );
  let todo = todoList.find((todo) => todo.id == id);
  if (!todo) {
    console.log("There is no todo list found ");
  } else {
    todo.tittle = newTittle;
    fs.writeFileSync("data.json", JSON.stringify(todoList));
  }


} else if (command == "delete") {
  let [, , , id] = process.argv;
  let todoList = JSON.parse(
    fs.readFileSync("data.json", { encoding: "utf-8" })
  );
  let todoToDelete = todoList.find((todo) => todo.id == id);

  if (!todoToDelete) {
    console.log("this todo not found");
  } else {
    let updatedTodos = todoList.filter((todo) => todo.id != id);

    fs.writeFileSync("data.json", JSON.stringify(updatedTodos));
    console.log("todo deleted successfully");
  }
}