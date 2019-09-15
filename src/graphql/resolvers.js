const wokoutTypeResolver = require('./resolver/workouttype');

module.exports = {
    Query: {
        ...wokoutTypeResolver.Query
    },
    Mutation: {
        ...wokoutTypeResolver.Mutation
    }
};