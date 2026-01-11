import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import userRouter from './routes/userRoutes.js ';
import todosRouter from './routes/todosRoutes.js';

dotenv.config(); // .env configuration

const app = express();

/* --- --- --- --- MIDDLEWARES --- --- --- --- */
app.use(express.json());            // bodyParser
app.use(express.static('./static')) // Static files handler
app.use(cors());                    // cross origin resource sharing
app.use('/todos', todosRouter);     // todos router
app.use('/users', userRouter);      // user router
/* --- --- --- --- ----------- --- --- --- --- */

mongoose.connect('mongodb://127.0.0.1:27017/TodosAppITI')
    .then(() => console.log('DataBase Connected!'))
    .catch(err => {
        console.log(err);
    });



/* --- --- --- --- SERVER-SETUP --- --- --- --- */
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`✅ Server Started Successfully at Port ${PORT}`);
});
/* --- --- --- --- ------------ --- --- --- --- */