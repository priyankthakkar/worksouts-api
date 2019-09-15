const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectID = require('mongodb').ObjectID;

const workoutTypeSchema = Schema({
    _id: {
        type: Schema.Types.ObjectID,
        default: () => new ObjectID()
    },
    type: {
        type: String,
        required: true,
        index: {
            unique: true,
            dropDups: true
        }
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

module.exports = mongoose.model('WorkoutTypeModel', workoutTypeSchema, 'workout_type');