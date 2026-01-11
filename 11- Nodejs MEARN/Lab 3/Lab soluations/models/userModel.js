import mongoose from "mongoose";
import bcryptjs from 'bcryptjs'

export const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'username is required'],
        unique: true,
        minlength: [8, 'username must be at least 8 characters']
    },
    password: {
        type: String,
        required: [true, 'password is required']
    },
    firstName: {
        type: String,
        required: [true, 'firstName is required'],
        minlength: [3, 'firstName min length is 3'],
        maxlength: [15, 'firstName max length is 15']
    },
    lastName: {
        type: String,
        required: [true, 'lastName is required'],
        minlength: [3, 'lastName min length is 3'],
        maxlength: [15, 'lastName max length is 15']
    },
    dob: {
        type: Date
    }
}, { timestamps: true });

userSchema.pre('save', async function (next) {
    const salt = await bcryptjs.genSalt(10)
    const hashedPassword = await bcryptjs.hash(this.password, salt)
    this.password = hashedPassword
    next()
})


const userModel = mongoose.model('user', userSchema);
export default userModel;