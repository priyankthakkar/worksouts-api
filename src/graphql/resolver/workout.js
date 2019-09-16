const WorkoutModel = require('src/model/workout');
const {
    transformDate,
    transformWorkoutType
} = require('src/graphql/populator');

const WorkoutResolver = {
    Query: {
        workouts: async () => {
            try {
                const workouts = await WorkoutModel.find({});

                if (!workouts)
                    throw new Error('No workouts are available currently.');

                return workouts
                    .map(w => {
                        return {
                            ...w._doc,
                            workoutType: transformWorkoutType.bind(this, w._doc.workoutType),
                            createdDate: transformDate.bind(this, w._doc.createdDate),
                            updatedDate: transformDate.bind(this, w._doc.updatedDate)
                        }
                    })

            } catch (err) {
                console.log(err);
                throw new Error('Unable to retrieve workouts.')
            }
        },
        workout: async (parent, args, context) => {
            try {
                if (!args || !args._id)
                    throw new Error('_id missing from argument to retrieve the workout')

                const workout = await WorkoutModel.findOne({
                    _id: args._id
                });

                if (!workout)
                    throw new Error(`Unable to retrieve workout for id: ${args._id}`);

                return {
                    ...workout._doc,
                    workoutType: transformWorkoutType.bind(this, workout._doc.workoutType),
                    createdDate: transformDate.bind(this, workout._doc.createdDate),
                    updatedDate: transformDate.bind(this, workout._doc.updatedDate)
                };
            } catch (err) {
                console.log(err);
                throw new Error('Unable to retrive the given workout.');
            }
        }
    },
    Mutation: {
        createWorkout: async (parent, args, context) => {
            try {
                const input = {
                    ...args.input
                };

                if (!input || !input.name)
                    throw Error('Required arguments are missing to create a workout.');

                const result = await WorkoutModel(input)
                    .save()

                if (!result)
                    throw new Error(`Unable to save the workout for ${input.name}`);

                return {
                    ...result._doc,
                    workoutType: transformWorkoutType.bind(this, result._doc.workoutType),
                    createdDate: transformDate.bind(this, result._doc.createdDate),
                    updatedDate: transformDate.bind(this, result._doc.updatedDate)
                };
            } catch (err) {
                console.log(err);
                throw new Error('Unable to save workout.');
            }
        }
    }
}

module.exports = WorkoutResolver;