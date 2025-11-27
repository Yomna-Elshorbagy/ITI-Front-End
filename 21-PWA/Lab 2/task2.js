const DB_NAME = "newDatabase";
const VERSION = "1";
const STORE_NAME = "FrontendTask";

function openDb() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, VERSION);

    request.onupgradeneeded = (event) => {
      let db = event.target.result;

      if (!db.objectStoreNames.contains(STORE_NAME)) {
        let objectStore = db.createObjectStore(STORE_NAME, {
          keyPath: "id",
          autoIncrement: true,
        });
      }
    };
    request.onsuccess = (event) => resolve(event.target.result); //resolve this promise
    request.onerror = () => reject("error opening db"); // when error in creation or any other error
  });
}

//crud
//Note ==> must do transaction in indexeddb ==> ensure db integrity

async function addEmp(data) {
  const db = await openDb();
  const transaction = db.transaction(STORE_NAME, "readwrite");
  const store = transaction.objectStore(STORE_NAME);
  store.add(data);
  return transaction.result;
}

// addEmp({ name: "yusra", age: 25, salary: 25000 })
//   .then((data) => {
//     console.log("employee added");
//   })
//   .catch((err) => console.log("errorrrrrrr adding emp"));

//////////////////////////////////////////////////////////////////
async function getData() {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, "readonly");
    const store = transaction.objectStore(STORE_NAME);
    const request = store.getAll();
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => resolve("error");
  });
}

// getData().then(console.log);

////////////////////////////////////////////////////////////////
async function updateData(empID, updateData) {
  const db = await openDb();
  const transaction = db.transaction(STORE_NAME, "readwrite");
  const store = transaction.objectStore(STORE_NAME);
  const request = store.get(empID);
  request.onsuccess = () => {
    // if browser request to search
    const emp = request.result;
    if (!emp) {
      console.log(`No emp: ${empID}`);
      return;
    }
    // to ensure that emp not edited as it and the updated to append
    let newEmp = { ...emp, ...updateData };
    store.put(newEmp);
  };
}

updateData(1, { salary: 30000 }).then(console.log);

/////////////////////////////////////////////////////////////////
async function deleteData(empID) {
  const db = await openDb();

  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, "readwrite");
    const store = transaction.objectStore(STORE_NAME);

    const request = store.delete(empID);

    request.onsuccess = () => resolve(`record ${empID} deleted`);
    request.onerror = () => reject("error deleting record");
  });
}

// deleteData(4.).then(console.log);
