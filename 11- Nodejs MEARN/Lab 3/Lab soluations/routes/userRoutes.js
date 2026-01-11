import express from 'express';

import {
    createUser,
    deleteUser,
    getAllUsers,
    getUser,
    updateUser,
    loginUser
} from '../controllers/userControllers.js';



const router = express.Router()

/* --- --- --- --- ENDPOINTS --- --- --- --- */
router.route('/')
    .post(createUser)               // CREATE
    .get(getAllUsers);              // READ ALL

router.route('/:id')
    .get(getUser)                   // READ ONE
    .patch(updateUser)              // UPDATE
    .delete(deleteUser);            // DELETE

router.post('/login', loginUser)
/* --- --- --- --- --------- --- --- --- --- */

export default router;