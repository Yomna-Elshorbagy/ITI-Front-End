const fs = require("fs");
const path = "./data/todos.json";

const flags = [
  "-s",
  "--status",
  "-t",
  "--title",
  "-i",
  "--id",
  "-p",
  "--priority",
  "-d",
  "--due",
  "-a",
  "--assign",
];

function hasFlags(_args) {
  return _args.some((arg) => flags.includes(arg));
}

function handleFlag(_args, _flags) {
  const indexOfFlag = _args.findIndex((arg) =>
    _flags.includes(arg.toLowerCase())
  );
  if (indexOfFlag === -1) return "";
  return _args[indexOfFlag + 1];
}

function getNewId(_data) {
  return _data.length > 0 ? _data[_data.length - 1].id + 1 : 1;
}

/* ======== READ DATA ======== */
function readData() {
  if (!fs.existsSync(path)) {
    return [];
  }

  const content = fs.readFileSync(path, "utf-8");
  const parsed = JSON.parse(content);

  if (Array.isArray(parsed)) {
    return parsed;
  }

  return [];
}

/* ======== SAVE DATA ======== */
function saveData(_data) {
  fs.writeFileSync(path, JSON.stringify(_data, null, 2));
}

module.exports = { hasFlags, handleFlag, getNewId, readData, saveData };
