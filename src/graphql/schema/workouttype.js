exports.WorkoutType = `
    type WorkoutType {
        _id: ID!
        type: String!
        createdDate: String!
        updatedDate: String!
    }
`;

exports.WorkoutTypeInput = `
    input WorkoutTypeInputData {
        type: String!
    }
`;

exports.WorkoutTypeQueries = `
    workoutTypes: [WorkoutType!]!,
    workoutType(_id: ID): WorkoutType!
`;

exports.WorkoutTypeMutations = `
    createWorkoutType (input: WorkoutTypeInputData!): WorkoutType!
`;