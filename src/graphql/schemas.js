const {
    gql
} = require('apollo-server-express');
const workoutTypeSchema = require('./schema/workouttype');

const schema = `
    ${workoutTypeSchema.WorkoutType}
    ${workoutTypeSchema.WorkoutTypeInput}

    type Query {
        ${workoutTypeSchema.WorkoutTypeQueries}
    }

    type Mutation {
        ${workoutTypeSchema.WorkoutTypeMutations}
    }
`;

module.exports = gql `${schema}`;