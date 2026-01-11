import express from 'express';
import {
    createTodo,
    readTodos,
    updateTodo,
    deleteTodo
} from './js/controllers.js';

const app = express();

/* --- --- --- --- MIDDLEWARES --- --- --- --- */
app.use(express.json()); // bodyParser
/* --- --- --- --- ----------- --- --- --- --- */


/* --- --- --- --- ENDPOINTS --- --- --- --- */
app.post('/todos', createTodo);       // CREATE
app.get('/todos', readTodos);         // READ
app.get('/todos/:id', readTodos);     // READ
app.patch('/todos/:id', updateTodo);  // UPDATE
app.delete('/todos/:id', deleteTodo); // DELETE
/* --- --- --- --- --------- --- --- --- --- */


/* --- --- --- --- SERVER-SETUP --- --- --- --- */
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`✅ Server Started Successfully at Port ${PORT}`);
});
/* --- --- --- --- ------------ --- --- --- --- */