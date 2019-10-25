const { makeExecutableSchema } = require('graphql-tools')

const userTypeSchema = require('./schemas/type/User')
const sendMessageTypeSchema = require('./schemas/type/Message')
const chatTypeSchema = require('./schemas/type/Chat')

const wrapper = require('./resolvers')

//Queries
const getAllUsers = wrapper.getAllusers.getAllUsers

//Mutations 
const sendMessage = wrapper.sendMessage.sendMessage
const createUser = wrapper.createUser.createUser

//Subscriptions 
const chat = wrapper.chat.chat

const schemaDefinition = `
  type Query {
    # this use to get all user datas 
    getAllUsers: users
  }

  type Mutation {
    sendMessage(input: String): message
    createUser(name: String, email: String, password: String): user
  }

  type Subscription {
    chat: chatDetail
  }

  schema {
    query: Query 
    mutation: Mutation
    subscription: Subscription 
  }
`

const schema = makeExecutableSchema({
  typeDefs: [
    schemaDefinition,
    userTypeSchema,
    sendMessageTypeSchema,
    chatTypeSchema,
  ],
  resolvers: {
    Query: {
      getAllUsers
    },
    Mutation: {
      sendMessage,
      createUser
    },
    Subscription: {
      chat
    }
  }
})

module.exports = schema


