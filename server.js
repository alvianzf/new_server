require('dotenv').config()

const express = require('express');
const { createServer } = require('http');
const { ApolloServer, gql } = require('apollo-server-express');

const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const PORT = process.env.PORT || 3000 // env goes here

//graphql schema 
var schema = require('./graphql')

const app = express()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));

app.use('*', cors());

const server = new ApolloServer({
  schema,
  context: async ({ req, res, next }) => {
    return {
      req
    }
  },
  introspection: true, // enables introspection of the schema
  playground: true, // enables the actual playground
  subscriptions: {
    onConnect: (connectionParams, webSocket) => {
      // console.log('connectionParams: ', connectionParams)
      // console.log('webSocket: ', webSocket)
    },
  },
})

server.applyMiddleware({
  app,
  path: '/'
})

const websocketServer = createServer(app)

server.installSubscriptionHandlers(websocketServer)

// Start the server
websocketServer.listen(PORT, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}`)
  console.log(`🚀 Server Subscription ready at ws://localhost:${PORT}`)
});