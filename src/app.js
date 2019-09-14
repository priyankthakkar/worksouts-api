require('rootpath')();
const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const {
    ApolloServer,
    gql
} = require('apollo-server-express');
const {
    connectionString,
    connectionOptions
} = require('src/utils/database')

const app = express();

const port = process.env.PORT || 8080

// Some fake data
const books = [{
        title: "Harry Potter and the Sorcerer's stone",
        author: 'J.K. Rowling',
    },
    {
        title: 'Jurassic Park',
        author: 'Michael Crichton',
    },
];

// The GraphQL schema in string form
const typeDefs = `
    type Query { books: [Book] }
    type Book { title: String, author: String }
  `;

// The resolvers
const resolvers = {
    Query: {
        books: () => books
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    engine: false,
    playground: true
});

server.applyMiddleware({
    app
});

mongoose.connect(connectionString, connectionOptions).then(() => {
    app.listen(port, () => {
        console.log(`The server is listening at http://localhost:${port}`)
    });
}).catch(error => {
    console.error("Error starting the server : ", error)
});