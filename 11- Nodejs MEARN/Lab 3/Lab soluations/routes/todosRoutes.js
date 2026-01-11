import express from 'express';

import {
    createTodo,
    updateTodo,
    deleteTodo,
    readAllTodos,
    readTodo
} from '../controllers/todosControllers.js';

const router = express.Router()

/* --- --- --- --- ENDPOINTS --- --- --- --- */
router.post('/', createTodo);       // CREATE
router.get('/', readAllTodos);         // READ ALL
router.get('/:id', readTodo);      // READ ONE
router.patch('/:id', updateTodo);   // UPDATE
router.delete('/:id', deleteTodo);  // DELETE
/* --- --- --- --- --------- --- --- --- --- */

export default router;