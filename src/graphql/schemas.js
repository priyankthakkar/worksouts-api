const {
    gql
} = require('apollo-server-express');
const workoutTypeSchema = require('./schema/workouttype');
const workoutSchema = require('./schema/workout');

const schema = `
    ${workoutTypeSchema.WorkoutType}
    ${workoutTypeSchema.WorkoutTypeInput}
    ${workoutSchema.Workout}
    ${workoutSchema.WorkoutInput}

    type Query {
        ${workoutTypeSchema.WorkoutTypeQueries}
        ${workoutSchema.WorkoutQueries}
    }

    type Mutation {
        ${workoutTypeSchema.WorkoutTypeMutations}
        ${workoutSchema.WorkoutMutations}
    }
`;

module.exports = gql `${schema}`;