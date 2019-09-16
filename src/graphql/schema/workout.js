exports.Workout = `
    type Workout {
        _id: ID!
        name: String!
        description: String
        workoutType: WorkoutType!
        createdDate: String!
        updatedDate: String!
    }
`;

exports.WorkoutInput = `
    input WorkoutInputData {
        name: String!
        description: String
        workoutType: String!
    }
`;

exports.WorkoutQueries = `
    workouts: [Workout!]!
    workout (_id: ID): Workout!
`;

exports.WorkoutMutations = `
    createWorkout(input: WorkoutInputData!): Workout!
`;