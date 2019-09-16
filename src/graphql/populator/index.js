const WorkoutTypeModel = require('src/model/workouttype');

const transformDate = dateString => new Date(dateString).toISOString();

const transformWorkoutType = async workoutTypeId => {
    try {
        if (!workoutTypeId)
            throw new Error('Missing argument workoutTypeId');

        const workoutType = await WorkoutTypeModel.findOne({
            _id: workoutTypeId
        });

        if (!workoutType)
            throw new Error(`No workout found for ${workoutTypeId}`);

        return {
            ...workoutType._doc,
            createdDate: transformDate.bind(this, workoutType._doc.createdDate),
            updatedDate: transformDate.bind(this, workoutType._doc.updatedDate)
        };
    } catch (err) {
        console.log(err);
        throw new Error('Unable to transform WorkoutType.');
    }
}

module.exports = {
    transformDate,
    transformWorkoutType
};