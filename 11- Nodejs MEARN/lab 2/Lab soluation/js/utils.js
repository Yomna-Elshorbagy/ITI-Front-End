import fs from "fs";
const path = "./data/todos.json"

/* ======== GENERATE ID ======== */
export function getNewId(_data) {
    return _data.length > 0 ? _data[_data.length - 1].id + 1 : 1;
}

/* ======== READ DATA ======== */
export function readData() {
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
export function saveData(_data) {
    fs.writeFileSync(path, JSON.stringify(_data, null, 2));
}
