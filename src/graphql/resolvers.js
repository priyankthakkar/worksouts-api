const wokoutTypeResolver = require('./resolver/workouttype');
const workoutResolver = require('./resolver/workout');

module.exports = {
    Query: {
        ...wokoutTypeResolver.Query,
        ...workoutResolver.Query
    },
    Mutation: {
        ...wokoutTypeResolver.Mutation,
        ...workoutResolver.Mutation
    }
};