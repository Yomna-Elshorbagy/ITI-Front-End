import mongoose from "mongoose";

const allowedStatuses = ['to-do', 'in progress', 'done'];

const todoSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'user',
        required: true
    },
    title: {
        type: String,
        required: [true, 'title is required'],
        minlength: [5, 'title min is 5'],
        maxlength: [20, 'title max is 20']
    },
    status: {
        type: String,
        enum: {
            values: allowedStatuses,
            message: 'status must be one of ' + allowedStatuses.join(', ')
        },
        default: 'to-do'
    },
}, { timestamps: true });

const todoModel = mongoose.model('Todo', todoSchema);
export default todoModel;
