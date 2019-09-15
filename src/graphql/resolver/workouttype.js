const WorkoutTypeModel = require('src/model/workouttype');
const { transformDate } = require('src/graphql/populator');

const WorkoutTypeResolver = {
    Query: {
        workoutTypes: async () => {
            try {
                const workoutTypes = await WorkoutTypeModel.find({});

                if (!workoutTypes)
                    throw Error('No workouts are available');

                return workoutTypes
                    .map(wt => {
                        return {
                            ...wt._doc,
                            createdDate: transformDate.bind(this, wt.createdDate),
                            updatedDate: transformDate.bind(this, wt.updatedDate)
                        }
                    });
            } catch (err) {
                console.log(err);
                throw Error('An error occured while retrieving workout types');
            }
        },
        workoutType: async (parent, args, context) => {
            try {
                if (!args._id)
                    throw new Error('Argument missing, workout type id is required.');

                const workoutType = await WorkoutTypeModel.findOne({
                    _id: args._id
                });

                if (!workoutType)
                    throw new Error(`An error occurred while retrieving workout type`);
                return {
                    ...workoutType._doc,
                    createdDate: transformDate.bind(this, workoutType.createdDate),
                    updatedDate: transformDate.bind(this, workoutType.updatedDate)
                }
            } catch (err) {
                console.log(err);
                console.log(`An error occurred while retrieving a workout type: ${args._id ? args._id : ''}`)
                throw new Error(`An error occurred while retrieving a workout type`);
            }
        }
    },
    Mutation: {
        createWorkoutType: async (parent, args, context) => {
            try {
                console.log(args.input);
                const input = {
                    ...args.input
                };

                const result = await WorkoutTypeModel(input)
                    .save();

                if (!result)
                    throw new Error(`An error occured while saving workout. ${input}`);

                return {
                    ...result._doc,
                    createdDate: transformDate.bind(this, result.createdDate),
                    updatedDate: transformDate.bind(this, result.updatedDate)
                };
            } catch (err) {
                console.log(err);
                throw new Error('An error occured while creating workout type.');
            }
        }
    }
};

module.exports = WorkoutTypeResolver;