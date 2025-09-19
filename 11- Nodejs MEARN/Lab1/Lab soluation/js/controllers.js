const {
  getNewId,
  saveData,
  readData,
  hasFlags,
  handleFlag,
} = require("./utils.js");

let data = readData();

const statusList = ["to-do", "in-progress", "done"];
const priorityList = ["low", "medium", "high"];

/* =============== CREATE ===================== */
function addTodo(_args) {
  if (_args.length === 0) {
    console.log("❌ You must enter the todo title to add");
    return;
  }

  const newId = getNewId(data);
  const status = "to-do";

  // Handle extra flags
  const priority = handleFlag(_args, ["--priority", "-p"]) || "medium";
  if (!priorityList.includes(priority.toLowerCase())) {
    console.log(`❌ Priority {${priority}} must be one of [${priorityList}]`);
    return;
  }

  const dueDate = handleFlag(_args, ["--due", "-d"]) || null;
  const assignedTo = handleFlag(_args, ["--assign", "-a"]) || "Unassigned";

  data.push({
    id: newId,
    title: _args[0],
    status,
    priority: priority.toLowerCase(),
    dueDate,
    assignedTo,
  });

  console.log("✅ Added a new todo!");
  saveData(data);
}

/* =============== READ ===================== */
function listTodos(_args) {
  if (data.length === 0) {
    console.log("No todos found.");
    return;
  }

  let toView = data;

  if (hasFlags(_args)) {
    // Handle Status
    const status = handleFlag(_args, ["--status", "-s"]);
    if (status && !statusList.includes(status.toLowerCase())) {
      console.log(
        `❌ Format: status {${status}} must be a value of [${statusList}]`
      );
      return;
    }
    if (status)
      toView = toView.filter((todo) => todo.status === status.toLowerCase());

    // Handle Priority
    const priority = handleFlag(_args, ["--priority", "-p"]);
    if (priority && !priorityList.includes(priority.toLowerCase())) {
      console.log(
        `❌ Format: priority {${priority}} must be a value of [${priorityList}]`
      );
      return;
    }
    if (priority)
      toView = toView.filter(
        (todo) => todo.priority === priority.toLowerCase()
      );

    // Handle Title
    const title = handleFlag(_args, ["--title", "-t"]);
    if (title && (title.startsWith("-") || title.startsWith("'"))) {
      console.log(
        `❌ Format: title {${title}} must be followed with a string value in double quotes..`
      );
      return;
    }
    if (title)
      toView = toView.filter(
        (todo) => todo.title.toLowerCase() === title.toLowerCase()
      );

    // Handle Assigned
    const assigned = handleFlag(_args, ["--assign", "-a"]);
    if (assigned)
      toView = toView.filter(
        (todo) => todo.assignedTo.toLowerCase() === assigned.toLowerCase()
      );

    // Handle Id
    const id = handleFlag(_args, ["-i", "-id"]);
    if (id && !+id) {
      console.log(`❌ Format: id {${id}} must be a number..`);
      return;
    }
    if (id) toView = toView.filter((todo) => todo.id == id);
  }

  if (toView.length === 0) {
    console.log("No todos found.");
    return;
  }

  console.log("*** Your Todos:");
  console.table(toView);
}

/* =============== UPDATE ===================== */
function updateTodo(_args) {
  if (_args.length < 2 && !hasFlags(_args)) {
    console.log(
      "❌ Format: `node index update [id] [new title]` OR with flags"
    );
    return;
  }

  let id = 0;
  let newTitle = "";
  let newStatus = "";
  let newPriority = "";
  let newDueDate = "";
  let newAssigned = "";

  if (hasFlags(_args)) {
    id = handleFlag(_args, ["-i", "-id"]);
    if (!+id) {
      console.log(`❌ Format: id {${id}} must be a number..`);
      return;
    }

    newTitle = handleFlag(_args, ["--title", "-t"]);
    if (newTitle && (newTitle.startsWith("-") || newTitle.startsWith("'"))) {
      console.log(
        `❌ Format: title {${newTitle}} must be followed with a string value in double quotes..`
      );
      return;
    }

    newStatus = handleFlag(_args, ["--status", "-s"]);
    if (newStatus && !statusList.includes(newStatus.toLowerCase())) {
      console.log(
        `❌ Format: status {${newStatus}} must be a value of [${statusList}]`
      );
      return;
    }

    newPriority = handleFlag(_args, ["--priority", "-p"]);
    if (newPriority && !priorityList.includes(newPriority.toLowerCase())) {
      console.log(
        `❌ Priority {${newPriority}} must be one of [${priorityList}]`
      );
      return;
    }

    newDueDate = handleFlag(_args, ["--due", "-d"]);
    newAssigned = handleFlag(_args, ["--assign", "-a"]);
  } else {
    id = _args[0];
    newTitle = _args[1];
  }

  if (!newTitle && !newStatus && !newPriority && !newDueDate && !newAssigned) {
    console.log("⚠️ You didn’t enter any data to change");
    return;
  }

  const index = data.findIndex((todo) => todo.id == id);
  if (index === -1) {
    console.log("❌ Enter a valid id to update!");
    return;
  }

  if (newTitle) data[index].title = newTitle;
  if (newStatus) data[index].status = newStatus.toLowerCase();
  if (newPriority) data[index].priority = newPriority.toLowerCase();
  if (newDueDate) data[index].dueDate = newDueDate;
  if (newAssigned) data[index].assignedTo = newAssigned;

  console.log("✅ The todo has been updated successfully!");
  saveData(data);
}

/* =============== DELETE ===================== */
function deleteTodo(_args) {
  if (_args.length === 0) {
    console.log("❌ Format: `node index delete [id]`");
    return;
  }

  const index = data.findIndex((todo) => todo.id == _args[0]);
  if (index === -1) {
    console.log("❌ Enter a valid id to delete!");
    return;
  }

  console.log(`"${data[index].title}" has been deleted successfully!`);
  data.splice(index, 1);
  saveData(data);
}

module.exports = { addTodo, listTodos, updateTodo, deleteTodo };
