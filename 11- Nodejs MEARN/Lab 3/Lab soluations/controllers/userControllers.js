import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'

import userModel from "../models/userModel.js";



/* --- --- --- --- -CREATE- --- --- --- --- */
export async function createUser(req, res) {
    const user = req.body;

    try {
        const newUser = await userModel.create(user);

        res.status(201).json({ data: newUser, status: 'success' });

    } catch (err) {
        res.status(400).json({ error: err.message })
    }

}

/* --- --- --- --- --READ ALL-- --- --- --- --- */
export async function getAllUsers(req, res) {
    try {
        const users = await userModel.find({}).select({ firstName: 1, _id: 0 });

        res.status(200).json({ data: users, status: 'success' });

    } catch (err) {

        res.status(404).json({ message: err.message });
    }
}

/* --- --- --- --- --READ ONE-- --- --- --- --- */
export async function getUser(req, res) {
    const { id } = req.params;

    try {

        const user = await userModel.findById(id)

        if (!user) return res.status(404).json({ message: "user doesn't exist" });

        res.status(200).json({ data: user, status: 'success' });

    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}



/* --- --- --- --- -UPDATE- --- --- --- --- */
export async function updateUser(req, res) {
    try {
        const { id } = req.params;
        const updateFields = req.body;

        const updated = await userModel.findByIdAndUpdate(id, updateFields);

        if (!updated) {
            return res.status(404).json({ error: "❌ User not found" });
        }

        res.status(200).json({ message: "User has been updated successfully!", user: updated });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

/* --- --- --- --- -DELETE- --- --- --- --- */
export async function deleteUser(req, res) {
    try {
        const { id } = req.params;

        const deleted = await userModel.findByIdAndDelete(id);
        if (!deleted) {
            return res.status(404).json({ error: "❌ User not found" });
        }

        res.status(200).json(deleted);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


/* --- --- --- --- -LOGIN- --- --- --- --- */
export async function loginUser(req, res) {
    try {
        const { username, password } = req.body

        if (!username || !password) {
            return res.status(400).json({ message: "you must provide username and password" })
        }

        let user = await userModel.findOne({ username })
        if (!user) {
            return res.status(401).json({ message: "invalid username or password" })
        }


        const isValid = await bcryptjs.compare(password, user.password)

        if (!isValid) {
            return res.status(401).json({ message: "invalid email or password" })
        }

        //generate token 

        const token = jwt.sign({ id: user._id, name: user.name }, process.env.SECRET, {
            expiresIn: '1h'
        })
        res.status(200).json({ token })
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}