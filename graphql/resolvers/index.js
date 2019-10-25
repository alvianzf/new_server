// Queries 
const getAllusers = require('./queries/getAllUsers')

// Mutations 
const sendMessage = require('./mutations/sendMessage')
const createUser = require('./mutations/createUser')

// Subscription 
const chat = require('./subscriptions/chat')
module.exports = {
  getAllusers,
  sendMessage,
  createUser,
  chat
}