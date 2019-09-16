const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectID = require('mongodb').ObjectID;

const workoutSchema = Schema({
    _id: {
        type: Schema.Types.ObjectID,
        default: () => new ObjectID()
    },
    name: {
        type: String,
        required: true,
        index: {
            unique: true,
            dropDups: true
        }
    },
    description: {
        type: String,
        required: false
    },
    workoutType: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "WorkoutTypeModel"
    },
    createdDate: {
        type: Date,
        required: true,
        default: () => new Date()
    },
    updatedDate: {
        type: Date,
        required: true,
        default: () => new Date()
    }
});

module.exports = mongoose.model('WorkoutModel', workoutSchema, 'workout');